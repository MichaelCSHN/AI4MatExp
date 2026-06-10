import type { Reading } from './types'

export const lastVerified = '2026-06-10'

export const readings: Reading[] = [
  {
    id: 'alab-2023',
    citation: 'Szymanski et al., "An autonomous laboratory for the accelerated synthesis of inorganic materials", Nature 624, 86–91 (2023)',
    status: 'corrected',
    note: '2026-01-19 发布 Author Correction：标题由 novel 改为 inorganic，承认新颖性表述易被误读。读原文时必须同时读更正。',
    url: 'https://www.nature.com/articles/s41586-023-06734-w',
  },
  {
    id: 'alab-correction',
    citation: 'Author Correction to Szymanski et al., Nature (2026-01-19)',
    status: 'active',
    note: '第 7 周辩论"揭晓卡"素材。',
    url: 'https://www.nature.com/articles/s41586-025-09992-y',
  },
  {
    id: 'leeman-2024',
    citation: 'Leeman et al., "Challenges in High-Throughput Inorganic Materials Prediction and Autonomous Synthesis", PRX Energy 3, 011002 (2024)',
    status: 'active',
    note: '对 A-Lab 的正式再分析：约三分之二"新材料"疑为已知无序相。',
    url: 'https://journals.aps.org/prxenergy/abstract/10.1103/PRXEnergy.3.011002',
  },
  {
    id: 'gnome-2023',
    citation: 'Merchant et al., "Scaling deep learning for materials discovery", Nature 624, 80–85 (2023)',
    status: 'contested',
    note: '2025-12 出现公开撤稿呼声（C&EN 报道），Nature 编辑部表示未在调查。开课前复核状态。',
    url: 'https://www.nature.com/articles/s41586-023-06735-9',
  },
  {
    id: 'cheetham-2024',
    citation: 'Cheetham & Seshadri, "Artificial Intelligence Driving Materials Discovery?", Chem. Mater. 36, 3490–3495 (2024)',
    status: 'active',
    note: '提出"新颖性-可信性-实用性"三元判据——评估任何 AI 发现声明的现成尺子。',
    url: 'https://pubs.acs.org/doi/10.1021/acs.chemmater.4c00643',
  },
  {
    id: 'laser-2024',
    citation: 'Strieth-Kalthoff et al., "Delocalized, asynchronous, closed-loop discovery of organic laser emitters", Science 384, eadk9227 (2024)',
    status: 'active',
    note: '正面对照案例：跨三大洲异步闭环，21 种新材料，含器件验证。',
    url: 'https://www.science.org/doi/10.1126/science.adk9227',
  },
  {
    id: 'snapp-brown-2023',
    citation: 'Snapp & Brown, "Driving school for self-driving labs", Digital Discovery 2, 1620–1629 (2023)',
    status: 'active',
    note: '"旋钮与仪表盘"框架——SDL 操作者需要监督训练，本课判断力主线的领域内锚点。',
    url: 'https://pubs.rsc.org/en/content/articlelanding/2023/dd/d3dd00150d',
  },
  {
    id: 'chemrev-2024',
    citation: 'Tom et al., "Self-Driving Laboratories for Chemistry and Materials Science", Chem. Rev. 124, 9633–9732 (2024)',
    status: 'active',
    note: '领域教科书级综述（约百页），按需查阅，不要求通读。',
    url: 'https://pubs.acs.org/doi/10.1021/acs.chemrev.4c00055',
  },
  {
    id: 'volk-2024',
    citation: 'Volk & Abolhasani, "Performance metrics to unleash the power of self-driving labs", Nat. Commun. 15, 1378 (2024)',
    status: 'active',
    note: 'SDL 性能指标标准套件——第 9 周指标表的术语来源。',
    url: 'https://www.nature.com/articles/s41467-024-45569-5',
  },
  {
    id: 'adesiji-2026',
    citation: 'Adesiji, Wang, Kuo & Brown, "Benchmarking self-driving labs", Digital Discovery (2026)',
    status: 'active',
    note: 'AF/EF 可计算定义；文献荟萃中位加速因子约 6——审计加速宣称的现实基准。',
    url: 'https://pubs.rsc.org/en/content/articlelanding/2026/dd/d5dd00337g',
  },
  {
    id: 'orouji-2025',
    citation: 'Orouji et al., "Autonomous catalysis research with human–AI–robot collaboration", Nat. Catal. 8, 1135–1145 (2025)',
    status: 'active',
    note: 'SDL 价值释放依赖持续人类监督——第 10 周"你的席位"的领域内论证。',
    url: 'https://www.nature.com/articles/s41929-025-01430-6',
  },
  {
    id: 'leong-2025',
    citation: 'Leong et al., "Steering towards safe self-driving laboratories", Nat. Rev. Chem. 9, 707–722 (2025)',
    status: 'active',
    note: 'SDL 安全风险随自治程度演化的系统分析——Risk Register 作业锚点。',
    url: 'https://www.nature.com/articles/s41570-025-00747-x',
  },
  {
    id: 'macleod-2022',
    citation: 'MacLeod et al., Sci. Adv. (2022)',
    status: 'active',
    note: 'L0–L5 自主等级框架。',
    url: 'https://www.science.org/doi/10.1126/sciadv.abo7593',
  },
  {
    id: 'cooper-2024',
    citation: 'Cooper group, "Autonomous mobile robots for exploratory synthetic chemistry", Nature 635, 890–897 (2024)',
    status: 'active',
    note: '移动机器人做探索性（非优化型）化学决策——"像化学家一样决策"意味着什么？',
    url: 'https://www.nature.com/articles/s41586-024-08173-7',
  },
  {
    id: 'bearman-2024',
    citation: 'Bearman et al., "Developing evaluative judgement for a time of generative artificial intelligence", Assess. Eval. High. Educ. 49, 893–905 (2024)',
    status: 'active',
    note: '课程教学论根基：评价性判断是 AI 时代核心可评估学习产出。教师必读，学生选读。',
    url: 'https://www.tandfonline.com/doi/full/10.1080/02602938.2024.2335321',
  },
  {
    id: 'maffettone-2023',
    citation: 'Maffettone et al., Digital Discovery (2023)',
    status: 'active',
    note: 'SDL 社区对人才培养的共识（批判地读）。',
  },
  {
    id: 'kennedy-ohagan-2000',
    citation: "Kennedy & O'Hagan, Biometrika 87, 1–13 (2000)",
    status: 'active',
    note: '物理信息 GP——知识嵌入的数学基础（选读）。',
  },
  {
    id: 'frugal-twin-2024',
    citation: 'Lo, Baird, Schrier et al., "Review of low-cost self-driving laboratories: the frugal twin concept", Digital Discovery 3, 842–868 (2024)',
    status: 'active',
    note: '低成本 SDL 教学路线的文献依据；想动手搭硬件的小组从这里开始。',
    url: 'https://pubs.rsc.org/en/content/articlelanding/2024/dd/d3dd00223c',
  },
]

export function getReading(id: string): Reading | undefined {
  return readings.find((r) => r.id === id)
}
