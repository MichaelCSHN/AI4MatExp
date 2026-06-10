/**
 * 教学用一维高斯过程（RBF 核 + 噪声），用于 GP/BO 实验台。
 * 目的不是生产级实现，而是让学生亲眼看到 σ 如何在数据之间隆起、
 * 采集函数如何据此推荐下一点。数学透明优先于性能。
 */

export interface GPConfig {
  lengthScale: number
  signalVar: number
  noiseVar: number
}

export interface Point {
  x: number
  y: number
}

function rbf(a: number, b: number, cfg: GPConfig): number {
  const d = a - b
  return cfg.signalVar * Math.exp(-(d * d) / (2 * cfg.lengthScale * cfg.lengthScale))
}

// 简单 Cholesky 分解（对称正定）
function cholesky(A: number[][]): number[][] {
  const n = A.length
  const L = Array.from({ length: n }, () => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let sum = A[i][j]
      for (let k = 0; k < j; k++) sum -= L[i][k] * L[j][k]
      if (i === j) L[i][j] = Math.sqrt(Math.max(sum, 1e-9))
      else L[i][j] = sum / L[j][j]
    }
  }
  return L
}

function forwardSub(L: number[][], b: number[]): number[] {
  const n = L.length
  const y = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    let sum = b[i]
    for (let k = 0; k < i; k++) sum -= L[i][k] * y[k]
    y[i] = sum / L[i][i]
  }
  return y
}

function backSub(Lt: number[][], b: number[]): number[] {
  const n = Lt.length
  const x = new Array(n).fill(0)
  for (let i = n - 1; i >= 0; i--) {
    let sum = b[i]
    for (let k = i + 1; k < n; k++) sum -= Lt[k][i] * x[k]
    x[i] = sum / Lt[i][i]
  }
  return x
}

export interface Posterior {
  xs: number[]
  mean: number[]
  std: number[]
}

export function gpPosterior(
  data: Point[],
  cfg: GPConfig,
  domain: [number, number] = [0, 1],
  grid = 120,
): Posterior {
  const xs: number[] = []
  for (let i = 0; i < grid; i++) xs.push(domain[0] + ((domain[1] - domain[0]) * i) / (grid - 1))

  if (data.length === 0) {
    return {
      xs,
      mean: xs.map(() => 0),
      std: xs.map(() => Math.sqrt(cfg.signalVar)),
    }
  }

  const n = data.length
  const K = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => rbf(data[i].x, data[j].x, cfg) + (i === j ? cfg.noiseVar : 0)),
  )
  const L = cholesky(K)
  const yv = data.map((d) => d.y)
  const alpha = backSub(L, forwardSub(L, yv))

  const mean: number[] = []
  const std: number[] = []
  for (const x of xs) {
    const kStar = data.map((d) => rbf(x, d.x, cfg))
    let m = 0
    for (let i = 0; i < n; i++) m += kStar[i] * alpha[i]
    const v = forwardSub(L, kStar)
    let varStar = rbf(x, x, cfg)
    for (let i = 0; i < n; i++) varStar -= v[i] * v[i]
    mean.push(m)
    std.push(Math.sqrt(Math.max(varStar, 1e-9)))
  }
  return { xs, mean, std }
}

export type Acquisition = 'ucb' | 'ei'

/** 返回采集函数曲线与推荐点（最大化）。EI 针对当前最优 yBest。 */
export function acquisition(
  post: Posterior,
  kind: Acquisition,
  beta: number,
  yBest: number,
): { values: number[]; argmaxX: number } {
  const values = post.xs.map((_, i) => {
    const mu = post.mean[i]
    const sigma = post.std[i]
    if (kind === 'ucb') return mu + beta * sigma
    // EI
    if (sigma < 1e-6) return 0
    const z = (mu - yBest) / sigma
    const cdf = 0.5 * (1 + erf(z / Math.SQRT2))
    const pdf = Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI)
    return (mu - yBest) * cdf + sigma * pdf
  })
  let argmax = 0
  for (let i = 1; i < values.length; i++) if (values[i] > values[argmax]) argmax = i
  return { values, argmaxX: post.xs[argmax] }
}

function erf(x: number): number {
  const t = 1 / (1 + 0.3275911 * Math.abs(x))
  const y =
    1 -
    ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) *
      t *
      Math.exp(-x * x)
  return x >= 0 ? y : -y
}

/** 教学用真实函数（学生看不到），用于"加一个点"时生成 y。多峰，便于演示探索/利用。 */
export function hiddenTruth(x: number): number {
  return (
    Math.sin(3 * Math.PI * x) * 0.5 +
    Math.exp(-((x - 0.75) * (x - 0.75)) / 0.02) * 0.8 -
    0.3 * x
  )
}
