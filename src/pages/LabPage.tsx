import { GpBoLab } from '../components/GpBoLab'
import { PageHeader } from '../components/PageHeader'

export function LabPage() {
  return (
    <>
      <PageHeader
        kicker="Judgment studio · 第 6 周旗舰工具"
        title="GP/BO 实验台"
        lead="先玩，后讲数学——这是教学法，不是流程。加点、观察 σ、拖动探索强度，建立对高斯过程与贝叶斯优化的真实直觉，然后再去看公式。"
      />
      <section className="content-section lab-section">
        <GpBoLab />
      </section>
      <section className="content-section">
        <h2 className="block-h">图例</h2>
        <ul className="legend-list">
          <li><span className="lg-mean" /> 绿线：GP 后验均值 μ（模型当前的最佳猜测）</li>
          <li><span className="lg-band" /> 绿带：±2σ 不确定区间（模型"知道自己不知道"的地方）</li>
          <li><span className="lg-acq" /> 蓝线：采集函数（UCB/EI）；竖虚线 = 下一点推荐</li>
          <li><span className="lg-truth" /> 橙虚线：隐藏的真实函数（默认不显示——先预测，再验证）</li>
        </ul>
      </section>
      <section className="content-section closing-section">
        <p className="section-kicker">判断，不是执行</p>
        <h2>"系统推荐你去那里。你信吗？为什么？"</h2>
        <p>
          这个实验台不教你写 BO 代码——那是 vibe coding 五分钟的事。它训练的是：当 GP 给出一个推荐，
          你能不能用领域知识判断这个推荐是否物理可行、是否值得相信。这是 AI 时代唯一不可外包的能力。
        </p>
      </section>
    </>
  )
}
