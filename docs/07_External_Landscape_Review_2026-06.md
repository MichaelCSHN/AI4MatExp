# 外部环境调研与课程方案升级评估

状态：active
日期：2026-06-10
角色：课程设计方案 v3.1 与课程建设方案的升级依据文档
方法：5 路并行检索（课程格局 / SDL 研究 / LLM 智能体 / 科学教育 / 标准化）+ 对承重论断的对抗性核验。约 95 条经核验发现，关键单源论断另行核查（结果见文末置信度说明）。

---

## 一、总体结论

**课程定位不需要推翻，但设计方案需要从 v3.1 升级到 v3.2。**

1. **差异化空白被再次确认且扩大**。截至 2026 年 6 月，全球范围内没有任何课程或培训项目教授"自动化发现的认识论、自动化下的研究者判断力、案例辩论式教学"——所有已验证的外部供给（AC 证书、UChicago、MIT PE、Liverpool CDT、ETH/EPFL、KAIST MOOC 等）全部是工具中心（Python、优化、机器人、数据基础设施）。"判断力优先于执行力"的生态位**真实无人占据**。
2. **但课程的多个核心素材已经发生事实性更新**：A-Lab 论文已被 Nature 正式更正（2026-01）、GNoME 出现公开撤稿呼声、agentic AI 浪潮重塑了"SDL 大脑"的技术叙事、SDL 性能指标和自治等级已有标准化文献。继续按 v3.1 的素材授课，会在第 7、8、9、11 周出现内容过时。
3. **课程的教学论命题获得了此前没有的学术锚点**：教育学界（Bearman 等的 evaluative judgement）与 SDL 领域（Snapp & Brown 驾校论文、Abolhasani 组人机协作论文）在两个独立学科得出同一结论。课程应显式引用这一汇聚，并且课程本身处于**可发表的教育研究空白区**。

---

## 二、外部格局相对 09 号竞品分析的新变化

09 号文档（2026-06-04）的结论基本仍然成立，但有以下增量：

### 2.1 课程/培训格局

| 变化 | 事实 | 对本课程的含义 |
|------|------|---------------|
| AC Microcourses 已固化为正式证书 | "Autonomous Systems for Discovery" 证书，4 门异步远程微课 + 1 门多伦多线下 capstone，经 U of T 继续教育学院交付（约 $150/门）；仓库 2026-04 仍在活跃更新备课 | "AC 外援"模式依然成立且更可靠；本课程应链接到证书页而不只是 readthedocs |
| UChicago MENG 35640 隔年开课，2026/27 学年**不开** | 已核验目录 | 北美最接近的正式课程存在供给空窗，本课程上线时机有利 |
| MIT PE 2026 版已转向 agentic AI | 2026-07 班次课程大纲更新为大规模并行 AI agents / swarm / "AI Scientist" | 前沿叙事的标杆在快速漂移；本课程第 8 周必须覆盖 agentic 范式，否则显得落后于行业培训 |
| 新增重量级长周期项目 | Liverpool EPSRC CDT "Digital and Automated Materials Chemistry"（80+ 博士生，2024 起）；U of T NSERC CREATE AccelD；U of T 研究生课（Hattrick-Simpers，<$500 开源 SDL 套件） | 长周期科研训练在增多，但短周期"判断力课程"仍然空白 |
| 中国大陆动向 | 上交大"材料智能设计与制造试点班"+ 材料学科大模型；USTC 机器化学家 + 联合博士培养；**未发现任何以"自驱动实验室"命名的公开课程**（中文目录索引不足，按"欠采样"处理） | 国内同类课程空白的判断暂时成立；课程对国内的差异化表述可以更自信，但应注明检索局限 |
| 会议/训练融合 | Accelerate Conference 2026 并入新加坡 AI4X（2026-06-15）；NeurIPS AI4Mat、LLM Hackathon 持续活跃 | 资源页可补充这些社区入口 |

### 2.2 研究文献格局（影响案例与必读清单）

1. **A-Lab 案例完成完整弧线（最重要更新）**：原论文（Nature 2023）→ Palgrave 即时质疑 → Leeman 等 *PRX Energy* 2024 正式批判 → **Nature 2026-01-19 发布 Author Correction**（DOI: 10.1038/s41586-025-09992-y），标题由 "novel materials" 改为 "inorganic materials"，承认新颖性表述易被误读；更正后 Palgrave 从主张撤稿软化为接受更正，但坚持"对无序结构的预测失败未被回应"。这是教学价值极高的"主张 → 批判 → 编辑裁决 → 余留分歧"完整案例。
2. **GNoME 批判升级**：Cheetham & Seshadri 2024 的"新颖性-可信性-实用性三元判据"之外，2025-12 C&EN 报道 Kurlin/Widdowson 公开呼吁撤稿、Palgrave 主张更正，而 Nature 编辑部表示"未收到正式质疑、未在调查"——撤稿呼声是新闻事实而非编辑行动。同时出现建设性后续：Margraf 团队（*Adv. Mater.* 2025/2026）用 ML 把"无序质疑"变成可预测工具。
3. **两大旗舰论文栽在同一个盲区**：成分无序（compositional disorder）——由经典固态化学家识别。这是贯穿 A-Lab 与 GNoME 两个案例的"可迁移判断准则"，v3.1 尚未显式提炼。
4. **新的权威综述**：Tom 等（Aspuru-Guzik 组）*Chem. Rev.* 2024 百页 SDL 综述（领域教科书级）；Abolhasani 组 "SDL 2.0"（*Mater. Horiz.* 2026，对 SDL 1.0 的自我批判）；Canty 等 *Nat. Commun.* 2025（可及性与民主化视角）。
5. **正面案例缺位被填补**：*Science* 2024 跨三大洲异步闭环发现 21 种有机激光增益材料（含器件验证）——回应"SDL 只会复活死化合物"的最强反证；Cooper 组 *Nature* 2024 移动机器人做探索性（非优化型）化学决策。v3.1 案例库全部是负面/争议案例，缺一个高质量正面案例作对照。
6. **人机协作命题获得领域内直接支持**：Orouji 等 *Nat. Catal.* 2025 明确论证 SDL 价值释放依赖持续的人类监督（数据策展、假设验证、对 AI 误差的基准对照）。
7. **量化现实检验**：Adesiji 等（Brown 组）*Digital Discovery* 2026 荟萃分析——**文献中位加速因子 AF≈6**（随维度上升），与宣传话语的 1000× 形成教学对照；USTC"3.76 百万配方/2000 人年"式叙事可用此框架审计。
8. **生成模型进入对照组**：MatterGen（*Nature* 2025）带实验验证的性质导向生成——学生可讨论其验证是否回应了 Cheetham/Seshadri 判据。

### 2.3 LLM 智能体格局（影响第 8 周与课程叙事）

1. **"agentic science"成为 2025-2026 主导叙事**：Google AI co-scientist（2025-02）、FutureHouse Robin（号称 870-940 人时压缩到 2 小时）、Sakana AI Scientist v2、微软 Discovery、Periodic Labs（$300M 种子轮，GNoME 一作创办）。
2. **但诚实的技术判断是"混合而非替代"**：*APL Mach. Learn.* 2025 等证据表明 BO 仍是选点引擎，LLM 承担协议翻译、编排、先验推理（ChemBOMAS 用 LLM 增强 BO）。这正是本课程应教的判断：何时用哪个。
3. **智能体幻觉变成物理风险**：智能体一旦能行动（跑代码、动机器人），幻觉从错误文本变成浪费试剂或安全事故（arXiv 2509.18970 系统综述);双重用途与提示注入风险（SafeScientist 等评测）——人对安全/双重用途的审查不可委托。
4. 材料专用 LLM 生态成形：HoneyComb（EMNLP 2024）、LLaMat/ChemDFM、开源与闭源对照（*Digital Discovery* 2026 论证开源模型可在材料基准上持平且更可审计）。

### 2.4 教育文献格局（影响课程理论根基与评估设计）

1. **理论锚点**：Bearman 等 2024（*AEHE*）——GenAI 输出无论对错都"看起来可信"，因此 evaluative judgement（评价自己与他人/机器工作质量的能力）成为核心可评估学习产出。与 Snapp & Brown "SDL 驾校"跨域汇聚。
2. **可直接采用的工具**：AI Assessment Scale（AIAS，五级 AI 使用标尺，数百所院校采用、TEQSA 引用）——可为 13 周每项交付物标注允许的 AI 级别；TEQSA 2023/2025 "程序级保障"——少量"安全评估点"（口头答辩、现场走读）验证判断力主张。
3. **实证风险证据**：ICER 2025 Copilot 研究（执行提速 34.9% 但理解成为瓶颈，高分者是"选择性采纳者"）；2025 vibe coding 行为研究（学生极少检查生成代码,靠表面行为验证）——后者正是 PAVE-R 的 V 步骤要对抗的失败模式，可作第 1 周课堂证据。
4. **诚信规范基线**：Nature 2025 对约 5000 名研究者的调查——可接受边界取决于"披露 + 问责"；各大期刊 LLM 政策（不接受 AI 作者、要求声明）。课程"AI 使用声明"应显式对齐期刊规范。
5. **可发表空白**：没有任何同行评审论文描述"SDL + AI 判断力教学"的研究生课程。AC 微课程本身也没有教育学论文。本课程的设计与实施本身是一个可投 *Digital Discovery* / *J. Chem. Ed.* 的研究对象。

### 2.5 标准化格局（影响指标表、数据周、风险周）

1. **SDL 性能指标已有权威套件**：Volk & Abolhasani *Nat. Commun.* 2024（自治程度、运行寿命、吞吐、实验精度、物料消耗、可及参数空间、优化效率）——与 v3.1 第 9 周指标表几乎逐项对应，应引用并对齐术语。
2. **自治等级体系多样化**：MacLeod L0-L5 之外，新增 Chem. Rev. 2024 分类、Royal Society Open Science 2025 阶梯、BASE Scale（2026，SAE J3016 风格,提出 Level 3 "Inference Barrier"）。
3. **SDL 安全有了锚点综述**：Leong 等（Aspuru-Guzik 组）"Steering towards safe self-driving laboratories"，*Nat. Rev. Chem.* 2025——第 11 周 Risk Register 的直接支撑文献。
4. **报告标准缺口仍在**：领域内尚无被采纳的 SDL 论文最低报告信息清单（多篇论文明确指出）——可设计为 D 轨道高价值选题（"起草 MIASDLE 式清单"）。
5. **可挂载的工具与设施**：NOMAD CAMELS（FAIR 数据在仪器源头产生）、OPTIMADE v1.2、IUPAC WorldFAIR Cookbook、Olympus/Atlas/BayBE、IvoryOS（*Nat. Commun.* 2025）、UniLabOS（DP Technology 开源实验室操作系统，2025-12）、NIST 自治实验室标准计划。

---

## 三、逐项评估：v3.1 哪些内容过时、缺失、需升级

### 必须修改（P0：素材已发生事实性变化）

| 位置 | 问题 | 修改 |
|------|------|------|
| 第 7 周 A-Lab 辩论 | 辩论素材停在 Leeman 2024，缺 2026-01 Nature 更正这一关键阶段 | 增加第五张证据卡（Author Correction + C&EN 报道 + Palgrave 立场软化但保留异议）；角色卡 C 组"Nature 编辑"从假想变成可对照真实裁决的复盘——先辩论后揭晓真实结局，教学价值倍增 |
| 第 5/7 周引用 | 必读清单中 A-Lab 条目未注明已更正 | 标注"已于 2026-01 更正,标题已改",并把"两大旗舰论文均栽在成分无序"提炼为显式的可迁移判断准则 |
| 第 8 周 SDL 的大脑 | "三类技术范式（统计推断/深度学习/LLM）"的讲法落后于 2025-2026 agentic 浪潮 | 升级为"BO 引擎 + LLM 编排的混合架构"主线：BO 仍是选点引擎,LLM 承担协议翻译/编排/先验推理;补充 agentic science 案例(co-scientist、Robin、Coscientist、ORGANA)及其判断问题:"这个系统真的闭环到物理世界了吗?" |
| 第 9 周性能指标表 | 指标表自创术语,未对齐已有标准 | 对齐 Volk & Abolhasani 2024 指标套件;加入 AF/EF 可计算定义与"中位 AF≈6"现实基准;自治程度引用多个等级体系并让学生比较 |
| 附录必读清单 | 缺 2024-2026 关键文献 | 新增:Tom 等 Chem. Rev. 2024(参考书)、Volk & Abolhasani 2024(第 9 周)、Adesiji 2026(第 9 周)、Orouji Nat. Catal. 2025(第 10 周)、Leong Nat. Rev. Chem. 2025(第 11 周)、A-Lab Correction 2026(第 7 周)、Bearman 2024(课程总论/教师材料包) |

### 应该修改（P1：显著增强课程,工作量中等）

| 位置 | 问题 | 修改 |
|------|------|------|
| 案例库结构 | 全部为负面/争议案例,缺正面对照 | 新增正面案例:Science 2024 跨洲异步闭环发现激光材料(带器件验证)。判断力训练需要"何时该信"与"何时不该信"成对出现 |
| 第 11 周风险与责任 | Risk Register 缺锚点文献;未覆盖智能体特有风险 | 挂 Leong 2025 安全综述;Risk Register 增加两行:智能体幻觉导致物理失败、双重用途/提示注入;伦理讨论补"智能体写的实验方案,签字的是谁" |
| PAVE-R 与学术诚信 | 协议是自创的,未与外部规范对齐,削弱可辩护性 | 三处对齐:① 每项交付物标注 AIAS 级别;② AI 使用声明模板对齐 Nature/Science/Elsevier 期刊政策;③ E 步骤引用 Bearman evaluative judgement 作为理论依据。在关键节点(第 9、13 周)设置"安全评估点"(口头答辩),对齐 TEQSA 程序级保障思路 |
| 第 1 周镜子 | 课堂证据可更新 | 引入 2025 vibe coding 行为研究("学生极少检查生成代码")与 ICER 2025("提速但理解瓶颈")作为"为什么这门课教判断"的实证开场 |
| AC 外援页 | 链接停留在 readthedocs 总入口 | 更新为:证书页(learn.utoronto.ca)+ 微课仓库 + frugal twin 综述 + awesome-self-driving-labs + <$100 SDL demo;注明 2026 年仍活跃 |
| D 轨道选题库 | 选题空泛 | 增加两个高价值选题:"起草 SDL 论文最低报告清单(领域公认缺口)"、"用 AF/EF 框架审计一篇明星 SDL 论文的加速宣称" |
| 课程定位叙事 | 国内语境与全球空白可更自信 | 差异化声明引用本调研:全球无判断力中心课程;国内无公开 SDL 命名课程(注明检索局限);UChicago 2026/27 停开形成供给空窗 |

### 可选修改（P2：锦上添花）

1. 第 8 周工具页补充:UniLabOS、IvoryOS、NOMAD CAMELS、OPTIMADE、Olympus/Atlas/BayBE。
2. 第 5 周 FAIR 模块挂 IUPAC WorldFAIR Cookbook 作为动手配方;数据包 README 模板对照 MaRDA/Datatractor schema 思路("README 如何长成社区 schema")。
3. 资源页补充社区入口:AI4Mat(NeurIPS/ICLR)、LLM Hackathon、AI4X/Accelerate、MADICES。
4. 把"课程本身作为教育研究对象"写入课程进化机制:收集匿名化学习数据,目标投稿 Digital Discovery 或 J. Chem. Ed.(填补已确认的发表空白)。
5. 行业语境卡片:Periodic Labs($300M 种子轮)等商业化信号,用于第 10 周"你的席位"讨论就业语境。

### 不需要修改的（经调研确认仍然站得住）

1. **五条设计原则与"判断力优先"主线**——获得教育学(Bearman)与 SDL 领域(Snapp & Brown、Orouji)双重独立支撑,是课程最大资产。
2. **13 周五阶段结构与情感弧线**——无外部证据要求改变;外部课程没有任何一个做情感设计,这是独有优势。
3. **AC 外援模式**(不复制、只外链、做转换)——AC 证书固化后此模式更稳固。
4. **四条项目轨道与评分体系**——结构无需变,只需按上文充实选题与对齐术语。
5. **L1-L6 人类知识接入口框架**——仍然独创;Orouji 2025 与 Nat. Catal. 的人机协作叙事可作为其文献支撑而非替代。
6. **最小 SDL 闭环体验(不依赖硬件)**——frugal twin 文献证明低成本路线是学界认可的严肃教学路线;可选配 <$100 套件但非必需。

---

## 四、对《课程建设方案》(网站)的修改建议

1. **内容模型(02 号文档)增加字段**:
   - `Case.timeline`:案例的时间线事件(A-Lab 案例需要呈现 2023→2026 完整弧线);
   - `Case.verdict`:真实世界裁决(更正/未更正/争议中),支持"先辩论后揭晓"的交互;
   - `Artifact.aiasLevel`:每个交付物的 AIAS AI 使用级别;
   - `Week.readings`:每周文献(带"已更正/有争议"状态标记)。
2. **案例工作台(04 号文档)**:首批案例从 4 个调整为 5 个——A-Lab(争议+裁决)、GNoME(争议进行中)、失败 BO、错误成功判定、**分布式闭环激光材料(正面对照)**。
3. **资源页/AC 外援页**:按 P1/P2 清单更新链接与状态标注;增加"工具与标准"分区(CAMELS、OPTIMADE、Olympus/Atlas/BayBE、UniLabOS、IvoryOS)。
4. **教师材料包(06 号文档)**:每周增加"素材时效性检查"条目——本次调研证明核心案例素材会在学期尺度上发生变化(A-Lab 更正发生在 v3.1 定稿后);教师包需登记每个案例的"最后核验日期"。
5. **建设路线优先级不变**,但 Phase 3 案例工作台的数据结构应先按上述新字段设计,避免返工。

---

## 五、关键参考文献(按课程使用位置)

**案例(第 5/7 周)**
- Szymanski et al., *Nature* 624, 86-91 (2023); **Author Correction: *Nature* (2026-01-19), DOI: 10.1038/s41586-025-09992-y**
- Leeman et al., *PRX Energy* 3, 011002 (2024)
- C&EN, "Nature robot chemist paper corrected…" (2026-01); "Duplicate structures haunt crystallography databases" (2025-12)
- Merchant et al., *Nature* 624, 80-85 (2023); Cheetham & Seshadri, *Chem. Mater.* 36, 3490 (2024); Jakob et al., *Adv. Mater.* e14226 (2025/2026)
- Strieth-Kalthoff et al., *Science* 384, eadk9227 (2024)(正面案例); Cooper 组, *Nature* 635, 890 (2024)

**SDL 综述与指标(第 8/9 周)**
- Tom et al., *Chem. Rev.* 124, 9633 (2024)
- Volk & Abolhasani, *Nat. Commun.* 15, 1378 (2024)
- Adesiji, Wang, Kuo & Brown, *Digital Discovery* (2026), DOI: 10.1039/D5DD00337G(中位 AF≈6)
- Abolhasani 组, "Toward SDL 2.0", *Mater. Horiz.* (2026), DOI: 10.1039/D5MH01984B
- Canty et al., *Nat. Commun.* 16, 3856 (2025)
- Lo et al.(frugal twin), *Digital Discovery* 3, 842 (2024)
- MacLeod et al., *Sci. Adv.* (2022); BASE Scale, arXiv:2601.06978 (2026)

**人机协作与安全(第 10/11 周)**
- Orouji et al., *Nat. Catal.* 8, 1135 (2025)
- Leong et al., *Nat. Rev. Chem.* 9, 707 (2025)
- LLM 智能体幻觉综述, arXiv:2509.18970 (2025)

**智能体范式(第 8 周)**
- Boiko et al.(Coscientist), *Nature* 624 (2023); Bran et al.(ChemCrow), *Nat. Mach. Intell.* (2024)
- Darvish et al.(ORGANA), *Matter* (2024); Zou et al.(El Agente), *Matter* 8, 102263 (2025)
- Google AI co-scientist (2025); FutureHouse Robin, arXiv:2505.13400 (2025)
- "Towards agentic science", *Nat. Mach. Intell.* (2025), DOI: 10.1038/s42256-025-01110-x
- 混合架构视角, *APL Mach. Learn.* 3, 026111 (2025)
- MatterGen, *Nature* 639 (2025)

**教育与评估(课程总论/教师材料包)**
- Bearman et al., *Assess. Eval. High. Educ.* 49, 893 (2024)(evaluative judgement)
- Perkins et al.(AIAS), *JUTLP* 21(6) (2024); aiassessmentscale.com
- TEQSA, "Assessment Reform for the Age of AI" (2023; 2025 续篇)
- Snapp & Brown, *Digital Discovery* 2, 1620 (2023)
- Nature 调查(约 5000 名研究者对 AI 写作态度), *Nature* 641, 574 (2025)
- ICER 2025 Copilot 研究, DOI: 10.1145/3702652.3744219; vibe coding 行为研究, arXiv:2507.22614 (2025)
- UNESCO AI Competency Frameworks (2024)

**标准与基础设施(第 5 周/工具页)**
- NOMAD CAMELS, arXiv:2402.07548; OPTIMADE v1.2, *Digital Discovery* (2024)
- IUPAC WorldFAIR Chemistry Cookbook; MaRDA 工作组, *MRS Bull.* (2024)
- IvoryOS, *Nat. Commun.* 16 (2025); UniLabOS, arXiv:2512.21766 (2025)
- AC 证书: learn.utoronto.ca/programs-courses/certificates/autonomous-systems-discovery

---

## 六、置信度说明

- **高置信(对抗性核验确认)**:A-Lab 更正(日期、标题变化、Palgrave 立场)、GNoME 撤稿呼声为新闻事实而非编辑行动(Nature 编辑部明确"未在调查")、AIAS 五级与 TEQSA 引用、UChicago 2026/27 停开、中位 AF≈6、MIT PE 2026 agentic 更新、AC 证书名称与结构。
- **中置信**:AC 证书 2026 春夏班次"正在运行"(GitHub 备课提交佐证,SCS 官网未公布日期);Robin/Google co-scientist 的期刊发表状态(机构宣称,未独立核验全文);MatterGen 实验验证细节。
- **已知检索局限**:中国大陆课程目录中文索引不足,"国内无 SDL 命名课程"按欠采样处理;多数出版商页面对抓取返回 403,核验依赖多源交叉印证;2026 年初 arXiv 预印本(BASE Scale、UniLabOS 等)未经同行评审。
- 建议:第 7 周开课前对 A-Lab/GNoME 案例状态做一次复核(撤稿呼声仍在演化)。
