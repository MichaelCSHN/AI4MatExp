import { useMemo, useState } from 'react'
import { acquisition, gpPosterior, hiddenTruth, type Acquisition, type Point } from '../lib/gp'

const W = 720
const H = 320
const PAD = 36
const DOMAIN: [number, number] = [0, 1]
const Y_RANGE: [number, number] = [-1.6, 1.6]

function sx(x: number) {
  return PAD + ((x - DOMAIN[0]) / (DOMAIN[1] - DOMAIN[0])) * (W - 2 * PAD)
}
function sy(y: number) {
  return H - PAD - ((y - Y_RANGE[0]) / (Y_RANGE[1] - Y_RANGE[0])) * (H - 2 * PAD)
}

export function GpBoLab() {
  const [data, setData] = useState<Point[]>([
    { x: 0.15, y: hiddenTruth(0.15) },
    { x: 0.45, y: hiddenTruth(0.45) },
    { x: 0.85, y: hiddenTruth(0.85) },
  ])
  const [lengthScale, setLengthScale] = useState(0.12)
  const [beta, setBeta] = useState(2)
  const [acq, setAcq] = useState<Acquisition>('ucb')
  const [showTruth, setShowTruth] = useState(false)

  const post = useMemo(
    () => gpPosterior(data, { lengthScale, signalVar: 0.7, noiseVar: 0.001 }, DOMAIN),
    [data, lengthScale],
  )
  const yBest = data.length ? Math.max(...data.map((d) => d.y)) : 0
  const acqResult = useMemo(() => acquisition(post, acq, beta, yBest), [post, acq, beta, yBest])

  const meanPath = post.xs.map((x, i) => `${i === 0 ? 'M' : 'L'} ${sx(x)} ${sy(post.mean[i])}`).join(' ')
  const bandPath =
    post.xs.map((x, i) => `${i === 0 ? 'M' : 'L'} ${sx(x)} ${sy(post.mean[i] + 2 * post.std[i])}`).join(' ') +
    ' ' +
    [...post.xs].reverse().map((x, i) => {
      const idx = post.xs.length - 1 - i
      return `L ${sx(x)} ${sy(post.mean[idx] - 2 * post.std[idx])}`
    }).join(' ') +
    ' Z'
  const truthPath = post.xs.map((x, i) => `${i === 0 ? 'M' : 'L'} ${sx(x)} ${sy(hiddenTruth(x))}`).join(' ')

  const acqMax = Math.max(...acqResult.values, 1e-6)
  const acqMin = Math.min(...acqResult.values, 0)
  const acqPath = post.xs
    .map((x, i) => {
      const norm = (acqResult.values[i] - acqMin) / (acqMax - acqMin || 1)
      const yPix = H - PAD - norm * 26
      return `${i === 0 ? 'M' : 'L'} ${sx(x)} ${yPix}`
    })
    .join(' ')

  function addPointAt(clientX: number, target: SVGSVGElement) {
    const rect = target.getBoundingClientRect()
    const px = ((clientX - rect.left) / rect.width) * W
    const x = DOMAIN[0] + ((px - PAD) / (W - 2 * PAD)) * (DOMAIN[1] - DOMAIN[0])
    if (x < DOMAIN[0] || x > DOMAIN[1]) return
    setData((d) => [...d, { x, y: hiddenTruth(x) }].sort((a, b) => a.x - b.x))
  }

  return (
    <div className="lab">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="lab-svg"
        role="img"
        aria-label="GP 后验与采集函数交互图"
        onClick={(e) => addPointAt(e.clientX, e.currentTarget)}
      >
        <rect x={0} y={0} width={W} height={H} fill="#fffef9" />
        <line x1={PAD} y1={sy(0)} x2={W - PAD} y2={sy(0)} stroke="#dce4d6" />
        <path d={bandPath} fill="rgba(47,114,84,0.14)" stroke="none" />
        {showTruth && <path d={truthPath} fill="none" stroke="#c2703d" strokeDasharray="5 4" strokeWidth={1.6} />}
        <path d={meanPath} fill="none" stroke="#2f7254" strokeWidth={2.2} />
        <path d={acqPath} fill="none" stroke="#5b6cb8" strokeWidth={1.6} />
        <line x1={sx(acqResult.argmaxX)} y1={PAD} x2={sx(acqResult.argmaxX)} y2={H - PAD} stroke="#5b6cb8" strokeDasharray="3 3" opacity={0.7} />
        {data.map((d, i) => (
          <circle key={i} cx={sx(d.x)} cy={sy(d.y)} r={4.5} fill="#17251d" />
        ))}
        <text x={sx(acqResult.argmaxX)} y={PAD - 8} fill="#5b6cb8" fontSize={11} textAnchor="middle" fontFamily="monospace">
          下一点推荐 x={acqResult.argmaxX.toFixed(2)}
        </text>
      </svg>

      <div className="lab-controls">
        <div className="lab-hint">点击图上任意位置 = 加一个实验数据点，观察后验如何变化。</div>
        <label>
          长度尺度 ℓ = {lengthScale.toFixed(2)}
          <input type="range" min={0.03} max={0.4} step={0.01} value={lengthScale} onChange={(e) => setLengthScale(+e.target.value)} />
        </label>
        <label>
          探索强度 β = {beta.toFixed(1)}（UCB）
          <input type="range" min={0} max={6} step={0.1} value={beta} onChange={(e) => setBeta(+e.target.value)} />
        </label>
        <div className="lab-row">
          <div className="seg">
            <button className={acq === 'ucb' ? 'on' : ''} onClick={() => setAcq('ucb')}>UCB</button>
            <button className={acq === 'ei' ? 'on' : ''} onClick={() => setAcq('ei')}>EI</button>
          </div>
          <button
            className="lab-btn lab-btn-accept"
            onClick={() =>
              setData((d) =>
                [...d, { x: acqResult.argmaxX, y: hiddenTruth(acqResult.argmaxX) }].sort((a, b) => a.x - b.x),
              )
            }
          >
            接受推荐，做这次实验
          </button>
          <button className="lab-btn" onClick={() => setShowTruth((s) => !s)}>{showTruth ? '隐藏' : '显示'}真实函数</button>
          <button className="lab-btn" onClick={() => setData([])}>清空</button>
        </div>
        <p className="lab-loop-note">
          这就是最小 SDL 闭环：模型拟合 → 采集函数推荐 → <b>你决定接受（按钮）或否决（点别处/不点）</b> → 测量入库 → 后验更新。
          人的否决权就在这一步。
        </p>
        <ul className="lab-questions">
          <li>σ（绿色带宽）什么时候最大？什么时候最小？为什么？</li>
          <li>把 β 拖到极大，推荐点跳到哪里？这代表什么实验策略？</li>
          <li>切到 EI，推荐点变了吗？EI 和 UCB 编码了哪两种"科学性格"？</li>
          <li>显示真实函数前，先预测推荐点对不对——你信这个推荐吗？</li>
        </ul>
      </div>
    </div>
  )
}
