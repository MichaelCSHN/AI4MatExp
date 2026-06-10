import type { CaseStudy } from './types'

export const cases: CaseStudy[] = [
  {
    id: 'a-lab',
    title: 'A-Lab：71% 成功率，你信吗？',
    kind: 'controversy',
    week: 7,
    summary:
      '伯克利 A-Lab 宣称 17 天自主合成 41 种新材料。这是整门课最重要的案例——它有罕见的完整弧线：大胆主张 → 即时质疑 → 正式批判 → Nature 更正 → 余留分歧。',
    controversy:
      '自动化系统对 XRD 的结构判读是否可靠？被宣称为"新"的材料，有多少其实是已知化合物的成分无序版本？"成功率"的分母由谁定义？',
    timeline: [
      { date: '2023-11', event: 'Szymanski et al. 在 Nature 发表 A-Lab，宣称自主合成 41/58 种"新材料"。' },
      { date: '2023-12', event: 'Robert Palgrave（UCL）公开质疑自动 XRD/Rietveld 解析存在"严重问题"。' },
      { date: '2024', event: 'Leeman、Schoop、Palgrave 等在 PRX Energy 发表正式再分析：约三分之二"新材料"疑为已知无序相。' },
      { date: '2026-01-19', event: 'Nature 发布 Author Correction：标题由 "novel materials" 改为 "inorganic materials"，承认新颖性表述易被误读。' },
      { date: '2026-01', event: 'C&EN 报道：Palgrave 接受更正但坚持"对无序结构的预测失败未被回应"。' },
    ],
    roles: [
      { id: 'szymanski', name: 'A 组：Szymanski 团队', task: '为 71% 成功率辩护，说明 A-Lab 的科学与工程价值。' },
      { id: 'leeman', name: 'B 组：Leeman 团队', task: '指出再分析发现的问题，评估其严重程度。' },
      { id: 'editor', name: 'C 组：Nature 编辑', task: '你会如何处理：不行动、更正还是撤稿？发现了什么制度性问题？' },
      { id: 'citer', name: 'D 组：下一个引用者', task: '你会引用 A-Lab 的哪些结论？不引用哪些？为什么？' },
    ],
    evidence: [
      {
        id: 'e1',
        stage: 'debate',
        title: '原论文核心宣称',
        content: '17 天内对 58 个计算预测的目标尝试自主合成，报告实现 41 种"新"化合物，整体成功率约 71%。',
        source: 'Szymanski et al., Nature 624 (2023)',
      },
      {
        id: 'e2',
        stage: 'debate',
        title: 'Palgrave 即时质疑',
        content: '自动化的 XRD 物相识别与 Rietveld 精修在多个样品上把已知相误判为新相；结构归属缺少人类专家复核。',
        source: 'Nature news, 2023-12',
      },
      {
        id: 'e3',
        stage: 'debate',
        title: 'Leeman 等再分析',
        content: '系统性复核显示约三分之二被宣称的"新材料"很可能是已知有序化合物的成分无序版本，而非真正新物质。',
        source: 'Leeman et al., PRX Energy 3, 011002 (2024)',
      },
      {
        id: 'e4',
        stage: 'debate',
        title: '"成功"的操作化定义',
        content: 'A-Lab 的"成功"以自动 XRD 匹配为准——代理指标。机制层面（目标相是否真正生成、是否为目标功能相）需要独立表征。',
        source: '课程整理',
      },
      {
        id: 'e5',
        stage: 'reveal',
        title: '揭晓卡：Nature 更正（2026-01）',
        content:
          '更正把标题中的 "novel" 改为 "inorganic"，承认这些材料是"对预测平台而言新"，未必对科学界为新；并就衍射对结构的明确识别作出说明。Palgrave 认为更正澄清了新颖性表述，但其对无序结构预测失败的核心关切未被实质回应。同期 GNoME 面对类似质疑，Nature 编辑部表示"未收到正式质疑、未在调查"。',
        source: 'Author Correction, Nature (2026-01-19); C&EN (2026-01)',
      },
    ],
    votes: [
      {
        id: 'v1',
        question: '你是 Nature 编辑，你会怎么处理？',
        options: ['不行动（学术讨论自然推进）', '发更正（澄清新颖性表述）', '撤稿（结论根基受损）'],
      },
      {
        id: 'v2',
        question: '你信 A-Lab 的 71% 成功率吗？（先凭直觉，再看证据）',
        options: ['信：工程成就扎实', '部分信：工程真实但"新"被夸大', '不信：成功的定义有系统偏差'],
      },
    ],
    verdict: {
      status: 'corrected',
      text:
        '真实裁决是"更正"而非撤稿。这教我们区分两件常被混为一谈的事：A-Lab 作为自动化合成工程是成功的；它作为"新材料发现"的声明被修正了。批评者也没有全胜——更正回应了新颖性表述，但无序问题的分歧仍在。',
      source: 'Author Correction, Nature (2026-01-19)',
      compareQuestions: [
        'C 组当初的裁决和 Nature 的真实裁决差在哪？谁更有道理？',
        '更正解决了 Leeman 团队的哪些质疑，没解决哪些？',
        '为什么同期 GNoME 面对类似质疑却没有更正？两者差在哪里？',
      ],
    },
    discussionQuestions: [
      '如果你是 2024 年初的博士生，要做 A-Lab 某个"新材料"的后续研究，你的第一个验证实验怎么设计？',
      '"成功率 71%"的分母是什么？换一种分母定义会变成多少？谁有权选择分母？',
      '把"工程成就"与"科学发现声明"分开——A-Lab 在这两个维度上各得几分？',
    ],
    transferPrinciples: [
      'A-Lab 与 GNoME 栽在同一个盲区——成分无序——识别它的是经典固态化学知识。AI 的盲区往往不在算法里，而在没被编码进去的领域知识里。',
      '代理指标（自动 XRD 匹配）说"成功"，机制（无序相、副相）说"没有"时，人的 L5 结果判读不可被替代。',
      '一篇论文可以同时是"重要工程成果"和"被夸大的发现声明"——评估时要分维度，不要一票否决或一票通过。',
    ],
    lastVerified: '2026-06-10',
  },
  {
    id: 'gnome',
    title: 'GNoME：38 万种新材料？',
    kind: 'controversy',
    week: 7,
    summary:
      'DeepMind 的 GNoME 宣称用深度学习发现 38 万种稳定新材料。这个案例与 A-Lab 配对使用——同样的盲区，不同的结局（争议仍在进行，无编辑行动）。',
    controversy:
      '大规模生成的"稳定新结构"里，有多少满足"新颖性 + 可信性 + 实用性"三元判据？多少是已知材料的无序版本或重复结构？',
    timeline: [
      { date: '2023-11', event: 'Merchant et al. 在 Nature 发表 GNoME，宣称 2.2M 稳定结构、38.1 万种"新稳定材料"。' },
      { date: '2024', event: 'Cheetham & Seshadri 在 Chem. Mater. 提出：抽查样品中"几乎找不到"同时满足新颖性、可信性、实用性的例子。' },
      { date: '2025', event: 'Margraf 团队用 ML 量化 Materials Project 与 GNoME 中疑似无序结构的比例，把质疑变成可预测工具。' },
      { date: '2025-12', event: 'C&EN 报道：部分研究者公开呼吁撤稿；Nature 编辑部称未收到正式质疑、未在调查。' },
    ],
    roles: [
      { id: 'deepmind', name: 'A 组：GNoME 团队', task: '为"38 万种新材料"的规模化发现价值辩护。' },
      { id: 'critic', name: 'B 组：Cheetham/Seshadri 立场', task: '用三元判据检验：这些"新材料"经得起新颖性、可信性、实用性三关吗？' },
      { id: 'experimentalist', name: 'C 组：实验材料学家', task: '这些预测里，哪些你愿意花半年去合成验证？依据是什么？' },
      { id: 'editor', name: 'D 组：期刊编辑', task: '撤稿呼声 vs 无编辑行动——你怎么权衡数据库类论文的"新"与"用"？' },
    ],
    evidence: [
      {
        id: 'g1',
        stage: 'debate',
        title: 'GNoME 规模宣称',
        content: '通过图网络主动学习预测 2.2M 稳定结构，其中 38.1 万种被列为新的稳定材料，远超此前已知。',
        source: 'Merchant et al., Nature 624 (2023)',
      },
      {
        id: 'g2',
        stage: 'debate',
        title: '三元判据',
        content: '一个有价值的"发现"应同时满足：新颖性（确实未知）、可信性（结构物理合理）、实用性（有可用性质）。三者缺一，"新材料"的意义存疑。',
        source: 'Cheetham & Seshadri, Chem. Mater. 36 (2024)',
      },
      {
        id: 'g3',
        stage: 'debate',
        title: '无序的伪装',
        content: '许多被标为"有序新相"的预测，实际对应已知材料的成分无序形式——在真实晶体中原子是随机占位的。',
        source: 'Cheetham & Seshadri (2024); Margraf 等 (2025)',
      },
    ],
    votes: [
      {
        id: 'gv1',
        question: '38 万这个数字，作为科学成果你怎么看？',
        options: ['重大突破：扩展了已知材料空间', '需打折：稳定 ≠ 新 ≠ 有用', '基本无效：未过三元判据'],
      },
    ],
    verdict: {
      status: 'contested',
      text:
        '与 A-Lab 不同，GNoME 至今没有更正或撤稿——争议仍在进行。这本身是教学点：同类问题（成分无序）在不同论文、不同期刊处理流程下，可以有完全不同的结局。"无编辑行动"不等于"没有问题"。',
      source: 'C&EN (2025-12)',
      compareQuestions: [
        '为什么 A-Lab 更正了而 GNoME 没有？是问题性质不同，还是处理流程不同？',
        '数据库类论文（预测一堆结构）和实验类论文（合成具体材料），"新"的举证责任一样吗？',
      ],
    },
    discussionQuestions: [
      '用三元判据评估你自己领域最近一篇"AI 发现新材料"的论文——它过几关？',
      '如果 38 万里有 1% 真正有用，是 3810 种——这个数字还算失败吗？"成功"该怎么定义？',
    ],
    transferPrinciples: [
      '"稳定"不等于"新"，"新"不等于"有用"——评估 AI 发现声明时，把这三件事拆开问。',
      '规模化的数字（百万、几十万）会制造说服力，但分母和判据决定了它的科学含金量。',
    ],
    lastVerified: '2026-06-10',
  },
  {
    id: 'laser-emitters',
    title: '跨洲闭环：一个"做对了"的 SDL',
    kind: 'positive',
    week: 8,
    summary:
      '正面对照案例。判断力训练需要"何时该信"与"何时不该信"成对出现——前两个案例教你怀疑，这个案例教你识别什么样的 SDL 工作经得起怀疑。',
    controversy:
      '（无争议）核心问题反过来问：为什么这项工作没有栽进 A-Lab/GNoME 的坑？它在设计上做对了什么？',
    timeline: [
      { date: '2024-05', event: 'Strieth-Kalthoff 等在 Science 发表：5 个实验室、3 大洲、云端编排的异步闭环，发现 21 种最先进有机固态激光增益材料。' },
    ],
    roles: [
      { id: 'analyst', name: '分析者', task: '逐条对比：这项工作在目标定义、验证、可复现上和 A-Lab 有何不同？' },
    ],
    evidence: [
      {
        id: 'l1',
        stage: 'debate',
        title: '性质导向的目标',
        content: '优化目标是明确的器件相关物理性质（激光增益），而非"结构是否匹配某个预测"。目标函数直接对应科学价值。',
        source: 'Strieth-Kalthoff et al., Science 384 (2024)',
      },
      {
        id: 'l2',
        stage: 'debate',
        title: '器件级验证',
        content: '发现的材料在真实器件中被验证，而不是停留在表征匹配。L5 结果判读有独立的功能性证据。',
        source: '同上',
      },
      {
        id: 'l3',
        stage: 'debate',
        title: '分布式可复现',
        content: '跨 5 个实验室异步运行同一闭环，结果在不同地点、不同设备上成立——这是对可复现性的强检验。',
        source: '同上',
      },
    ],
    votes: [
      {
        id: 'lv1',
        question: '这项工作最关键的"做对了"是哪一点？',
        options: ['性质导向的目标函数', '器件级独立验证', '跨实验室可复现'],
      },
    ],
    discussionQuestions: [
      '把这个案例的目标函数和 A-Lab 的"XRD 匹配"对照——为什么前者不容易被 Goodhart 击中？',
      '如果你的研究要设计一个"经得起怀疑"的闭环，从这个案例里抄哪三条？',
    ],
    transferPrinciples: [
      '目标函数直接对应科学价值（而非易测代理指标）时，Goodhart 困境的风险大幅降低。',
      '独立的功能性验证（器件、机制）是 L5 判读不被代理指标绑架的保险。',
      '可复现性不是发表要求，是发现可信度的来源——跨实验室成立的结果，比单实验室漂亮的结果更值得相信。',
    ],
    lastVerified: '2026-06-10',
  },
  {
    id: 'failed-bo',
    title: '失败的 BO：它为什么没收敛？',
    kind: 'exercise',
    week: 6,
    summary:
      '内部演练案例（非真实论文争议）。给定一组真实风格的数据和一次"失败"的 BO 运行，训练学生诊断失败而不是回避失败。',
    controversy: '（演练）BO 没有收敛 / GP 拟合崩溃，到底是数据问题、核函数问题、目标函数问题，还是它本就不该收敛？',
    timeline: [],
    roles: [{ id: 'diagnostician', name: '诊断者', task: '定位失败的真正原因，区分"模型失配"与"问题本身病态"。' }],
    evidence: [
      {
        id: 'f1',
        stage: 'debate',
        title: '症状',
        content: 'BO 跑了 30 轮，最优值在前 5 轮后几乎不动；GP 后验在大部分区域 σ 极大；推荐点反复在边界跳。',
        source: '课程构造数据',
      },
      {
        id: 'f2',
        stage: 'debate',
        title: '可能病因清单',
        content: '长度尺度先验不当 / 噪声被低估 / 参数空间含不可行区 / 目标函数有多个等价最优 / 数据量不足以拟合维度 / 目标其实不可优化。',
        source: '课程整理',
      },
    ],
    votes: [
      {
        id: 'fv1',
        question: '最可能的首要病因是？',
        options: ['核/长度尺度设置', '参数空间或目标函数定义', '数据量与维度不匹配'],
      },
    ],
    discussionQuestions: [
      '"BO 失败"和"这个问题不该用 BO"是两回事——你怎么区分？',
      '如果这是你 B 轨道项目的结果，你的报告会怎么写这次失败？（提示：失败的真实分析得分可能高于成功但浅薄的实现）',
    ],
    transferPrinciples: [
      '不收敛首先是诊断对象，不是羞耻——多数"失败"携带的信息比一次顺利收敛更多。',
      '在怪算法之前，先检查目标函数和参数空间：很多"模型问题"其实是问题定义问题。',
    ],
    lastVerified: '2026-06-10',
  },
  {
    id: 'false-success',
    title: '错误的成功：性能上去了，机制错了',
    kind: 'exercise',
    week: 10,
    summary:
      '内部演练案例。性能指标改善，但改善来自一个你不想要的机制（副相、污染、测量假象）。这是 L5 结果判读最危险的失败模式。',
    controversy: '（演练）当代理指标说"成功"、机制说"不对"时，闭环应该接受还是拒绝这次结果？',
    timeline: [],
    roles: [{ id: 'judge', name: '判读者', task: '决定这次"成功"是否进入数据集、是否触发停机。' }],
    evidence: [
      {
        id: 's1',
        stage: 'debate',
        title: '表面成功',
        content: '目标性能（如电导率）较上一轮提升 30%，BO 把这个点标为新最优并据此推荐下一批。',
        source: '课程构造',
      },
      {
        id: 's2',
        stage: 'debate',
        title: '机制疑点',
        content: 'XRD 出现未预期的副相峰；提升可能来自杂质相而非目标相；重复制备无法复现该提升。',
        source: '课程构造',
      },
    ],
    votes: [
      {
        id: 'sv1',
        question: '这次结果该怎么处理？',
        options: ['接受：数据就是数据', '打标保留但不用于推荐', '拒绝并触发停机重审成功标准'],
      },
    ],
    discussionQuestions: [
      '如果不停机，这个"错误成功"会怎样污染后续整条 BO 轨迹？',
      '你的 Risk Register 里，"错误成功判定"这一行的检测信号和介入策略，能抓住这个案例吗？',
    ],
    transferPrinciples: [
      '代理指标改善但机制不成立时，把它当作停机信号而不是新最优——错误成功一旦进入闭环会自我放大。',
      '"成功"的操作化定义必须包含机制约束，而不只是性能阈值（呼应第 2 周与 Goodhart）。',
    ],
    lastVerified: '2026-06-10',
  },
]

export function getCase(id: string): CaseStudy | undefined {
  return cases.find((c) => c.id === id)
}
