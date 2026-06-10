import type { ContributionType } from './types'

export const contributionTypes: ContributionType[] = [
  {
    id: 'tool',
    title: '工具分享',
    prompt: '一个你真的用过、能帮同学完成判断或验证的工具、脚本、提示词或数据处理方法。',
    review: '必须说明使用场景、输入输出、适用边界和一个失败例子。',
  },
  {
    id: 'failure',
    title: '踩坑记录',
    prompt: '一个你在本课里犯过、发现过、修正过的真实错误。',
    review: '必须说清楚错误如何暴露，以及下一届学生怎样更早发现它。',
  },
  {
    id: 'principle',
    title: '判断准则',
    prompt: '一条你准备带到真实科研中的判断标准。',
    review: '必须能落到一个具体场景，不能只是口号。',
  },
]
