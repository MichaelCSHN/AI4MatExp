import { GpBoLab } from '../components/GpBoLab'
import { PageHeader } from '../components/PageHeader'

export function LabPage() {
  return (
    <>
      <PageHeader
        kicker="GP/BO lab"
        title="GP/BO 实验台"
        lead="先加点，再看推荐。你可以接受系统建议，也可以点别处否决它。"
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
        <h2>系统推荐你去那里。你信吗？为什么？</h2>
        <p>
          先说出你接受或否决的理由，再显示真实函数。错了也没关系，关键是知道自己为什么错。
        </p>
      </section>
    </>
  )
}
