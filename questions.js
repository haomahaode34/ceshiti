// 综合能力评估题库 - 10个专业维度，每维度30题，共300题
// 数据结构：id, dimension, text, options (5个选项，分值1-5)

const allQuestions = [
    // ①敢为性 (30题)
    {
        id: 1,
        dimension: "敢为性",
        text: "面对一个全新的项目挑战时，您通常会：",
        options: [
            { text: "等待上级明确指示后再行动", value: 1 },
            { text: "先观察同事的做法再决定", value: 2 },
            { text: "制定基本计划后谨慎开始", value: 3 },
            { text: "主动承担并积极推进", value: 4 },
            { text: "第一时间主动请缨，全力以赴", value: 5 }
        ]
    },
    {
        id: 2,
        dimension: "敢为性",
        text: "当需要在会议上提出不同意见时，您会：",
        options: [
            { text: "保持沉默，会后私下沟通", value: 1 },
            { text: "等别人先发言再考虑", value: 2 },
            { text: "委婉地表达部分观点", value: 3 },
            { text: "直接表达自己的不同看法", value: 4 },
            { text: "坚定地阐述观点并提供解决方案", value: 5 }
        ]
    },
    {
        id: 3,
        dimension: "敢为性",
        text: "面对可能失败的创新机会，您的态度是：",
        options: [
            { text: "避免参与，风险太大", value: 1 },
            { text: "观望态度，看别人先试", value: 2 },
            { text: "谨慎评估后小范围尝试", value: 3 },
            { text: "积极参与，做好风险准备", value: 4 },
            { text: "主动领导创新，承担全部责任", value: 5 }
        ]
    },
    {
        id: 4,
        dimension: "敢为性",
        text: "当发现工作流程存在问题时，您会：",
        options: [
            { text: "按现有流程继续工作", value: 1 },
            { text: "私下抱怨但不采取行动", value: 2 },
            { text: "向直接上级反映问题", value: 3 },
            { text: "主动提出改进建议", value: 4 },
            { text: "直接推动流程优化并承担责任", value: 5 }
        ]
    },
    {
        id: 5,
        dimension: "敢为性",
        text: "在资源有限的情况下推进重要项目，您会：",
        options: [
            { text: "等待资源充足后再开始", value: 1 },
            { text: "降低项目目标和要求", value: 2 },
            { text: "寻求上级支持和帮助", value: 3 },
            { text: "创造性地整合现有资源", value: 4 },
            { text: "主动承担风险，多方争取资源", value: 5 }
        ]
    },
    {
        id: 6,
        dimension: "敢为性",
        text: "当团队陷入困境需要有人站出来时，您会：",
        options: [
            { text: "等待领导安排", value: 1 },
            { text: "观察形势再决定", value: 2 },
            { text: "在被要求时才行动", value: 3 },
            { text: "主动承担部分责任", value: 4 },
            { text: "第一时间站出来承担全部责任", value: 5 }
        ]
    },
    {
        id: 7,
        dimension: "敢为性",
        text: "面对上级的错误决策，您会：",
        options: [
            { text: "无条件执行", value: 1 },
            { text: "私下表达不满", value: 2 },
            { text: "寻找合适时机提醒", value: 3 },
            { text: "直接但礼貌地指出问题", value: 4 },
            { text: "勇敢地提出质疑并提供替代方案", value: 5 }
        ]
    },
    {
        id: 8,
        dimension: "敢为性",
        text: "当需要做出重要决策但信息不完整时，您会：",
        options: [
            { text: "推迟决策直到信息完整", value: 1 },
            { text: "寻求他人意见后决定", value: 2 },
            { text: "基于现有信息谨慎决策", value: 3 },
            { text: "果断决策并承担后果", value: 4 },
            { text: "快速决策并主动承担全部风险", value: 5 }
        ]
    },
    {
        id: 9,
        dimension: "敢为性",
        text: "在跨部门合作中遇到阻力时，您会：",
        options: [
            { text: "回避冲突，寻求其他方式", value: 1 },
            { text: "向上级汇报寻求支持", value: 2 },
            { text: "通过协商寻求妥协", value: 3 },
            { text: "坚持立场并积极沟通", value: 4 },
            { text: "主动承担协调责任，推动合作", value: 5 }
        ]
    },
    {
        id: 10,
        dimension: "敢为性",
        text: "当机会与个人舒适区冲突时，您会：",
        options: [
            { text: "选择留在舒适区", value: 1 },
            { text: "犹豫不决，最终放弃", value: 2 },
            { text: "经过深思熟虑后尝试", value: 3 },
            { text: "积极拥抱挑战", value: 4 },
            { text: "毫不犹豫地跳出舒适区", value: 5 }
        ]
    },
    {
        id: 11,
        dimension: "敢为性",
        text: "当公司面临重大变革时，您会：",
        options: [
            { text: "担心变化带来的不确定性", value: 1 },
            { text: "被动接受变革安排", value: 2 },
            { text: "积极了解变革内容", value: 3 },
            { text: "主动参与变革推进", value: 4 },
            { text: "成为变革的积极倡导者和推动者", value: 5 }
        ]
    },
    {
        id: 12,
        dimension: "敢为性",
        text: "面对行业新技术或新趋势时，您会：",
        options: [
            { text: "等待技术成熟后再学习", value: 1 },
            { text: "观察市场反应后跟进", value: 2 },
            { text: "适度关注并学习", value: 3 },
            { text: "积极学习并尝试应用", value: 4 },
            { text: "率先掌握并引领团队应用", value: 5 }
        ]
    },
    {
        id: 13,
        dimension: "敢为性",
        text: "当需要承担额外责任时，您会：",
        options: [
            { text: "担心能力不足而拒绝", value: 1 },
            { text: "犹豫后勉强接受", value: 2 },
            { text: "评估后谨慎接受", value: 3 },
            { text: "积极接受挑战", value: 4 },
            { text: "主动寻求更多责任和挑战", value: 5 }
        ]
    },
    {
        id: 14,
        dimension: "敢为性",
        text: "在团队讨论中，当您有独特见解时会：",
        options: [
            { text: "保留意见，避免争议", value: 1 },
            { text: "私下与少数人分享", value: 2 },
            { text: "在合适时机表达", value: 3 },
            { text: "坚持表达自己的观点", value: 4 },
            { text: "积极推广自己的创新想法", value: 5 }
        ]
    },
    {
        id: 15,
        dimension: "敢为性",
        text: "面对可能影响职业发展的重要选择时，您会：",
        options: [
            { text: "选择最安全的路径", value: 1 },
            { text: "征求多方意见后决定", value: 2 },
            { text: "权衡利弊后选择", value: 3 },
            { text: "勇敢选择有挑战的机会", value: 4 },
            { text: "毫不犹豫选择最具挑战性的道路", value: 5 }
        ]
    },
    {
        id: 16,
        dimension: "敢为性",
        text: "当发现市场机会时，您会：",
        options: [
            { text: "观望等待他人验证", value: 1 },
            { text: "小心谨慎地评估", value: 2 },
            { text: "制定计划后行动", value: 3 },
            { text: "快速抓住机会", value: 4 },
            { text: "第一时间全力投入抢占先机", value: 5 }
        ]
    },
    {
        id: 17,
        dimension: "敢为性",
        text: "在处理复杂问题时，您倾向于：",
        options: [
            { text: "寻求现成的解决方案", value: 1 },
            { text: "参考他人的处理方式", value: 2 },
            { text: "结合经验制定方案", value: 3 },
            { text: "创新性地解决问题", value: 4 },
            { text: "开创全新的解决路径", value: 5 }
        ]
    },
    {
        id: 18,
        dimension: "敢为性",
        text: "当项目遇到重大挫折时，您会：",
        options: [
            { text: "考虑放弃或转向", value: 1 },
            { text: "寻求外部帮助", value: 2 },
            { text: "调整策略继续推进", value: 3 },
            { text: "坚持并寻找突破口", value: 4 },
            { text: "将挫折转化为更大的动力", value: 5 }
        ]
    },
    {
        id: 19,
        dimension: "敢为性",
        text: "面对权威人士的质疑时，您会：",
        options: [
            { text: "立即改变自己的观点", value: 1 },
            { text: "内心动摇但表面接受", value: 2 },
            { text: "礼貌地解释自己的想法", value: 3 },
            { text: "坚持自己的正确观点", value: 4 },
            { text: "用事实和逻辑捍卫自己的立场", value: 5 }
        ]
    },
    {
        id: 20,
        dimension: "敢为性",
        text: "在资源竞争激烈的环境中，您会：",
        options: [
            { text: "接受现有资源配置", value: 1 },
            { text: "通过正常渠道申请", value: 2 },
            { text: "积极争取必要资源", value: 3 },
            { text: "主动寻找多种资源渠道", value: 4 },
            { text: "创造性地获取和整合资源", value: 5 }
        ]
    },
    {
        id: 21,
        dimension: "敢为性",
        text: "当需要打破常规做法时，您会：",
        options: [
            { text: "严格遵循既定规则", value: 1 },
            { text: "小幅度调整做法", value: 2 },
            { text: "在允许范围内创新", value: 3 },
            { text: "勇敢突破传统束缚", value: 4 },
            { text: "彻底颠覆传统做法", value: 5 }
        ]
    },
    {
        id: 22,
        dimension: "敢为性",
        text: "面对职场政治复杂环境时，您会：",
        options: [
            { text: "尽量避免卷入其中", value: 1 },
            { text: "保持中立观望", value: 2 },
            { text: "谨慎处理各种关系", value: 3 },
            { text: "坚持原则不妥协", value: 4 },
            { text: "勇敢地推动正向改变", value: 5 }
        ]
    },
    {
        id: 23,
        dimension: "敢为性",
        text: "当团队士气低落时，您会：",
        options: [
            { text: "等待领导采取措施", value: 1 },
            { text: "私下安慰个别同事", value: 2 },
            { text: "提出改善建议", value: 3 },
            { text: "主动鼓舞团队士气", value: 4 },
            { text: "成为团队的精神领袖", value: 5 }
        ]
    },
    {
        id: 24,
        dimension: "敢为性",
        text: "在面临道德和利益冲突时，您会：",
        options: [
            { text: "选择对自己有利的方案", value: 1 },
            { text: "寻求折中的解决方案", value: 2 },
            { text: "经过深思后做出选择", value: 3 },
            { text: "坚持道德原则", value: 4 },
            { text: "不惜代价维护道德底线", value: 5 }
        ]
    },
    {
        id: 25,
        dimension: "敢为性",
        text: "当需要学习全新技能时，您会：",
        options: [
            { text: "担心学不会而犹豫", value: 1 },
            { text: "等有时间再慢慢学", value: 2 },
            { text: "制定学习计划逐步推进", value: 3 },
            { text: "积极投入快速学习", value: 4 },
            { text: "全身心投入，力求精通", value: 5 }
        ]
    },
    {
        id: 26,
        dimension: "敢为性",
        text: "面对客户的无理要求时，您会：",
        options: [
            { text: "无条件满足客户要求", value: 1 },
            { text: "尽量协调满足", value: 2 },
            { text: "解释并寻求理解", value: 3 },
            { text: "坚持合理的底线", value: 4 },
            { text: "勇敢地拒绝并提供替代方案", value: 5 }
        ]
    },
    {
        id: 27,
        dimension: "敢为性",
        text: "当发现同事工作中的严重错误时，您会：",
        options: [
            { text: "假装没有看见", value: 1 },
            { text: "私下提醒同事", value: 2 },
            { text: "建议同事主动汇报", value: 3 },
            { text: "直接向上级汇报", value: 4 },
            { text: "承担责任帮助同事纠正错误", value: 5 }
        ]
    },
    {
        id: 28,
        dimension: "敢为性",
        text: "在竞争激烈的项目投标中，您会：",
        options: [
            { text: "采用保守的投标策略", value: 1 },
            { text: "跟随市场主流做法", value: 2 },
            { text: "制定有竞争力的方案", value: 3 },
            { text: "提出创新的解决方案", value: 4 },
            { text: "以颠覆性方案赢得竞争", value: 5 }
        ]
    },
    {
        id: 29,
        dimension: "敢为性",
        text: "当个人观点与团队共识不一致时，您会：",
        options: [
            { text: "放弃个人观点服从团队", value: 1 },
            { text: "保留意见但不表达", value: 2 },
            { text: "适度表达不同意见", value: 3 },
            { text: "坚持表达自己的观点", value: 4 },
            { text: "努力说服团队接受更好的方案", value: 5 }
        ]
    },
    {
        id: 30,
        dimension: "敢为性",
        text: "面对行业颠覆性变化时，您会：",
        options: [
            { text: "希望变化不要太快", value: 1 },
            { text: "被动适应变化", value: 2 },
            { text: "积极学习新知识", value: 3 },
            { text: "主动拥抱变化", value: 4 },
            { text: "成为变化的引领者", value: 5 }
        ]
    },

    // ②培养下属 (30题)
    {
        id: 31,
        dimension: "培养下属",
        text: "当下属犯错时，您的第一反应是：",
        options: [
            { text: "严厉批评，避免再犯", value: 1 },
            { text: "指出错误，要求改正", value: 2 },
            { text: "分析原因，给出建议", value: 3 },
            { text: "引导反思，共同改进", value: 4 },
            { text: "将错误转化为学习机会", value: 5 }
        ]
    },
    {
        id: 32,
        dimension: "培养下属",
        text: "对于下属的职业发展，您会：",
        options: [
            { text: "让他们自己规划", value: 1 },
            { text: "偶尔给予建议", value: 2 },
            { text: "定期讨论发展方向", value: 3 },
            { text: "主动制定培养计划", value: 4 },
            { text: "全程指导并创造发展机会", value: 5 }
        ]
    },
    {
        id: 33,
        dimension: "培养下属",
        text: "当下属能力不足以胜任工作时，您会：",
        options: [
            { text: "重新分配给其他人", value: 1 },
            { text: "降低工作难度", value: 2 },
            { text: "提供必要的培训", value: 3 },
            { text: "制定详细的能力提升计划", value: 4 },
            { text: "亲自指导并持续跟进", value: 5 }
        ]
    },
    {
        id: 34,
        dimension: "培养下属",
        text: "在分配工作任务时，您会：",
        options: [
            { text: "按能力分配，确保完成", value: 1 },
            { text: "平均分配，避免偏向", value: 2 },
            { text: "考虑个人发展需求", value: 3 },
            { text: "有意识地安排挑战性任务", value: 4 },
            { text: "精心设计任务以促进成长", value: 5 }
        ]
    },
    {
        id: 35,
        dimension: "培养下属",
        text: "当下属提出不同观点时，您会：",
        options: [
            { text: "坚持自己的判断", value: 1 },
            { text: "简单听取但不采纳", value: 2 },
            { text: "认真考虑其合理性", value: 3 },
            { text: "鼓励深入阐述观点", value: 4 },
            { text: "引导其完善想法并给予实践机会", value: 5 }
        ]
    },
    {
        id: 36,
        dimension: "培养下属",
        text: "对于表现优秀的下属，您会：",
        options: [
            { text: "继续保持现状", value: 1 },
            { text: "给予口头表扬", value: 2 },
            { text: "提供更多责任", value: 3 },
            { text: "推荐晋升机会", value: 4 },
            { text: "全方位支持其职业发展", value: 5 }
        ]
    },
    {
        id: 37,
        dimension: "培养下属",
        text: "在团队会议中，您会：",
        options: [
            { text: "主要由自己发言", value: 1 },
            { text: "偶尔询问下属意见", value: 2 },
            { text: "鼓励大家参与讨论", value: 3 },
            { text: "主动创造发言机会", value: 4 },
            { text: "引导下属主导部分议题", value: 5 }
        ]
    },
    {
        id: 38,
        dimension: "培养下属",
        text: "当下属遇到挫折时，您会：",
        options: [
            { text: "让其自己调整", value: 1 },
            { text: "简单安慰几句", value: 2 },
            { text: "分析问题并给予建议", value: 3 },
            { text: "提供情感支持和实际帮助", value: 4 },
            { text: "深度辅导并帮助重建信心", value: 5 }
        ]
    },
    {
        id: 39,
        dimension: "培养下属",
        text: "对于下属的学习需求，您会：",
        options: [
            { text: "认为工作经验就够了", value: 1 },
            { text: "支持但不主动安排", value: 2 },
            { text: "提供学习资源", value: 3 },
            { text: "制定学习计划", value: 4 },
            { text: "亲自指导并创造学习机会", value: 5 }
        ]
    },
    {
        id: 40,
        dimension: "培养下属",
        text: "在授权工作时，您会：",
        options: [
            { text: "详细指导每个步骤", value: 1 },
            { text: "给出明确的执行标准", value: 2 },
            { text: "提供框架让其发挥", value: 3 },
            { text: "给予充分自主权", value: 4 },
            { text: "授权的同时提供成长指导", value: 5 }
        ]
    },
    {
        id: 41,
        dimension: "培养下属",
        text: "当下属工作积极性不高时，您会：",
        options: [
            { text: "批评其工作态度", value: 1 },
            { text: "了解基本原因", value: 2 },
            { text: "深入沟通找出问题", value: 3 },
            { text: "制定激励措施", value: 4 },
            { text: "从根本上重新激发其工作热情", value: 5 }
        ]
    },
    {
        id: 42,
        dimension: "培养下属",
        text: "对于新入职的下属，您会：",
        options: [
            { text: "让其自己熟悉环境", value: 1 },
            { text: "安排基本的工作介绍", value: 2 },
            { text: "制定详细的入职计划", value: 3 },
            { text: "亲自指导并定期跟进", value: 4 },
            { text: "全方位帮助其快速融入和成长", value: 5 }
        ]
    },
    {
        id: 43,
        dimension: "培养下属",
        text: "当下属提出改进建议时，您会：",
        options: [
            { text: "认为现有做法更好", value: 1 },
            { text: "简单听取但不实施", value: 2 },
            { text: "评估建议的可行性", value: 3 },
            { text: "鼓励并支持其实施", value: 4 },
            { text: "将其培养成改进项目的负责人", value: 5 }
        ]
    },
    {
        id: 44,
        dimension: "培养下属",
        text: "在绩效评估时，您会：",
        options: [
            { text: "主要关注工作结果", value: 1 },
            { text: "简单评价优缺点", value: 2 },
            { text: "全面分析各项表现", value: 3 },
            { text: "制定具体改进计划", value: 4 },
            { text: "将评估转化为发展指导", value: 5 }
        ]
    },
    {
        id: 45,
        dimension: "培养下属",
        text: "当下属之间出现冲突时，您会：",
        options: [
            { text: "让他们自己解决", value: 1 },
            { text: "简单调解一下", value: 2 },
            { text: "深入了解冲突原因", value: 3 },
            { text: "引导双方理性沟通", value: 4 },
            { text: "将冲突转化为团队成长机会", value: 5 }
        ]
    },
    {
        id: 46,
        dimension: "培养下属",
        text: "对于下属的创新想法，您会：",
        options: [
            { text: "认为风险太大不支持", value: 1 },
            { text: "表示理解但不行动", value: 2 },
            { text: "评估后给予适当支持", value: 3 },
            { text: "积极支持并提供资源", value: 4 },
            { text: "全力支持并共同完善创新方案", value: 5 }
        ]
    },
    {
        id: 47,
        dimension: "培养下属",
        text: "当下属面临职业选择困惑时，您会：",
        options: [
            { text: "让其自己决定", value: 1 },
            { text: "给出简单建议", value: 2 },
            { text: "分析各种选择的利弊", value: 3 },
            { text: "深入指导职业规划", value: 4 },
            { text: "成为其职业发展的导师", value: 5 }
        ]
    },
    {
        id: 48,
        dimension: "培养下属",
        text: "在项目复盘时，您会：",
        options: [
            { text: "主要总结项目结果", value: 1 },
            { text: "简单分析成败原因", value: 2 },
            { text: "全面回顾项目过程", value: 3 },
            { text: "引导团队深度反思", value: 4 },
            { text: "将复盘转化为团队能力提升", value: 5 }
        ]
    },
    {
        id: 49,
        dimension: "培养下属",
        text: "对于下属的工作方法，您会：",
        options: [
            { text: "要求按照标准方法执行", value: 1 },
            { text: "允许小幅度调整", value: 2 },
            { text: "鼓励寻找更好的方法", value: 3 },
            { text: "支持其创新工作方法", value: 4 },
            { text: "引导其成为方法创新的专家", value: 5 }
        ]
    },
    {
        id: 50,
        dimension: "培养下属",
        text: "当下属取得成绩时，您会：",
        options: [
            { text: "认为这是应该的", value: 1 },
            { text: "简单表扬几句", value: 2 },
            { text: "公开表彰其成绩", value: 3 },
            { text: "深入分析成功经验", value: 4 },
            { text: "将成功经验转化为团队财富", value: 5 }
        ]
    },
    {
        id: 51,
        dimension: "培养下属",
        text: "在培养下属领导力时，您会：",
        options: [
            { text: "认为领导力是天生的", value: 1 },
            { text: "偶尔给予指导", value: 2 },
            { text: "提供领导力培训机会", value: 3 },
            { text: "创造实践领导力的机会", value: 4 },
            { text: "系统性培养其领导能力", value: 5 }
        ]
    },
    {
        id: 52,
        dimension: "培养下属",
        text: "对于下属的个人发展规划，您会：",
        options: [
            { text: "认为工作表现最重要", value: 1 },
            { text: "了解其基本想法", value: 2 },
            { text: "帮助制定发展计划", value: 3 },
            { text: "积极支持其发展目标", value: 4 },
            { text: "成为其发展路径的设计师", value: 5 }
        ]
    },
    {
        id: 53,
        dimension: "培养下属",
        text: "当下属需要跨部门协作时，您会：",
        options: [
            { text: "让其自己处理", value: 1 },
            { text: "提供基本指导", value: 2 },
            { text: "协助建立协作关系", value: 3 },
            { text: "教授协作技巧和方法", value: 4 },
            { text: "培养其成为协作专家", value: 5 }
        ]
    },
    {
        id: 54,
        dimension: "培养下属",
        text: "在下属承担重要任务时，您会：",
        options: [
            { text: "密切监控每个环节", value: 1 },
            { text: "定期检查进展", value: 2 },
            { text: "提供必要支持", value: 3 },
            { text: "给予充分信任和指导", value: 4 },
            { text: "将其培养成独当一面的人才", value: 5 }
        ]
    },
    {
        id: 55,
        dimension: "培养下属",
        text: "对于下属的长期发展，您会：",
        options: [
            { text: "主要关注当前工作", value: 1 },
            { text: "偶尔考虑未来发展", value: 2 },
            { text: "制定中长期培养计划", value: 3 },
            { text: "全面规划其职业路径", value: 4 },
            { text: "成为其终身职业导师", value: 5 }
        ]
    },
    {
        id: 56,
        dimension: "培养下属",
        text: "当下属表现超出预期时，您会：",
        options: [
            { text: "认为这是偶然的", value: 1 },
            { text: "给予适当表扬", value: 2 },
            { text: "分析成功的原因", value: 3 },
            { text: "提供更大的发展平台", value: 4 },
            { text: "将其打造成团队标杆", value: 5 }
        ]
    },
    {
        id: 57,
        dimension: "培养下属",
        text: "在下属遇到技能瓶颈时，您会：",
        options: [
            { text: "认为能力有限很正常", value: 1 },
            { text: "建议其多加练习", value: 2 },
            { text: "提供针对性培训", value: 3 },
            { text: "制定突破计划", value: 4 },
            { text: "帮助其实现能力跃升", value: 5 }
        ]
    },
    {
        id: 58,
        dimension: "培养下属",
        text: "对于下属的反馈意见，您会：",
        options: [
            { text: "认为下属不应该质疑", value: 1 },
            { text: "简单听取但不改变", value: 2 },
            { text: "认真考虑合理建议", value: 3 },
            { text: "鼓励其提出更多想法", value: 4 },
            { text: "将其培养成改进推动者", value: 5 }
        ]
    },
    {
        id: 59,
        dimension: "培养下属",
        text: "在团队知识分享时，您会：",
        options: [
            { text: "主要由自己分享经验", value: 1 },
            { text: "偶尔让下属分享", value: 2 },
            { text: "鼓励大家互相学习", value: 3 },
            { text: "引导下属成为分享者", value: 4 },
            { text: "培养下属成为知识传播者", value: 5 }
        ]
    },
    {
        id: 60,
        dimension: "培养下属",
        text: "当下属准备离职发展时，您会：",
        options: [
            { text: "感到被背叛和失望", value: 1 },
            { text: "理解但感到遗憾", value: 2 },
            { text: "给予祝福和支持", value: 3 },
            { text: "帮助其做好职业规划", value: 4 },
            { text: "为其成长感到骄傲并持续支持", value: 5 }
        ]
    },

    // ③识人用人 (30题)
    {
        id: 61,
        dimension: "识人用人",
        text: "在选择团队成员时，您最看重：",
        options: [
            { text: "学历和资历", value: 1 },
            { text: "专业技能水平", value: 2 },
            { text: "工作经验丰富程度", value: 3 },
            { text: "综合能力和潜力", value: 4 },
            { text: "个人品格和团队适配度", value: 5 }
        ]
    },
    {
        id: 62,
        dimension: "识人用人",
        text: "当发现员工的能力与岗位不匹配时，您会：",
        options: [
            { text: "要求其努力适应", value: 1 },
            { text: "降低工作要求", value: 2 },
            { text: "提供针对性培训", value: 3 },
            { text: "调整到更合适的岗位", value: 4 },
            { text: "重新评估并优化人岗匹配", value: 5 }
        ]
    },
    {
        id: 63,
        dimension: "识人用人",
        text: "在评价员工表现时，您会：",
        options: [
            { text: "主要看工作结果", value: 1 },
            { text: "关注工作态度", value: 2 },
            { text: "综合考虑多个维度", value: 3 },
            { text: "深入了解工作过程", value: 4 },
            { text: "全面评估并挖掘潜在优势", value: 5 }
        ]
    },
    {
        id: 64,
        dimension: "识人用人",
        text: "对于有潜力但经验不足的员工，您会：",
        options: [
            { text: "等其积累经验后再重用", value: 1 },
            { text: "安排简单工作锻炼", value: 2 },
            { text: "提供学习机会", value: 3 },
            { text: "给予挑战性任务", value: 4 },
            { text: "制定专门的培养计划", value: 5 }
        ]
    },
    {
        id: 65,
        dimension: "识人用人",
        text: "在组建项目团队时，您会：",
        options: [
            { text: "选择最熟悉的人", value: 1 },
            { text: "按专业技能配置", value: 2 },
            { text: "考虑人员互补性", value: 3 },
            { text: "平衡能力和性格特点", value: 4 },
            { text: "精心设计最优组合", value: 5 }
        ]
    },
    {
        id: 66,
        dimension: "识人用人",
        text: "当员工出现问题时，您会：",
        options: [
            { text: "直接批评指正", value: 1 },
            { text: "了解基本情况", value: 2 },
            { text: "深入分析原因", value: 3 },
            { text: "从多角度了解情况", value: 4 },
            { text: "全面诊断并制定改进方案", value: 5 }
        ]
    },
    {
        id: 67,
        dimension: "识人用人",
        text: "对于团队中的不同性格类型，您会：",
        options: [
            { text: "用统一的管理方式", value: 1 },
            { text: "稍作区别对待", value: 2 },
            { text: "根据性格调整沟通方式", value: 3 },
            { text: "因人而异制定管理策略", value: 4 },
            { text: "深度了解并发挥各自优势", value: 5 }
        ]
    },
    {
        id: 68,
        dimension: "识人用人",
        text: "在发现员工隐藏才能时，您会：",
        options: [
            { text: "继续现有工作安排", value: 1 },
            { text: "偶尔让其展示才能", value: 2 },
            { text: "调整工作内容发挥才能", value: 3 },
            { text: "重新规划其发展方向", value: 4 },
            { text: "全面开发其潜在能力", value: 5 }
        ]
    },
    {
        id: 69,
        dimension: "识人用人",
        text: "在招聘面试时，您最关注：",
        options: [
            { text: "简历上的硬性条件", value: 1 },
            { text: "专业知识和技能", value: 2 },
            { text: "工作经验和案例", value: 3 },
            { text: "综合素质和潜力", value: 4 },
            { text: "价值观和文化匹配度", value: 5 }
        ]
    },
    {
        id: 70,
        dimension: "识人用人",
        text: "对于表现平平的员工，您会：",
        options: [
            { text: "维持现状不做改变", value: 1 },
            { text: "适当调整工作内容", value: 2 },
            { text: "深入了解其真实能力", value: 3 },
            { text: "寻找其擅长的领域", value: 4 },
            { text: "重新发现并激发其潜能", value: 5 }
        ]
    },
    {
        id: 71,
        dimension: "识人用人",
        text: "在处理员工冲突时，您会：",
        options: [
            { text: "简单制止冲突行为", value: 1 },
            { text: "了解冲突的表面原因", value: 2 },
            { text: "深入分析冲突根源", value: 3 },
            { text: "从性格差异角度理解", value: 4 },
            { text: "将差异转化为互补优势", value: 5 }
        ]
    },
    {
        id: 72,
        dimension: "识人用人",
        text: "对于新员工的适应期，您会：",
        options: [
            { text: "让其自然适应", value: 1 },
            { text: "提供基本指导", value: 2 },
            { text: "制定适应计划", value: 3 },
            { text: "根据个人特点调整", value: 4 },
            { text: "个性化设计融入方案", value: 5 }
        ]
    },
    {
        id: 73,
        dimension: "识人用人",
        text: "在员工晋升决策时，您会：",
        options: [
            { text: "主要看工作年限", value: 1 },
            { text: "关注业绩表现", value: 2 },
            { text: "综合评估各项能力", value: 3 },
            { text: "考虑发展潜力", value: 4 },
            { text: "全面评估并预测未来表现", value: 5 }
        ]
    },
    {
        id: 74,
        dimension: "识人用人",
        text: "对于跨文化背景的员工，您会：",
        options: [
            { text: "要求适应本地文化", value: 1 },
            { text: "了解基本文化差异", value: 2 },
            { text: "尊重并包容差异", value: 3 },
            { text: "发挥文化多样性优势", value: 4 },
            { text: "打造多元文化团队优势", value: 5 }
        ]
    },
    {
        id: 75,
        dimension: "识人用人",
        text: "在分配关键任务时，您会：",
        options: [
            { text: "选择最有经验的人", value: 1 },
            { text: "考虑任务匹配度", value: 2 },
            { text: "评估综合能力", value: 3 },
            { text: "考虑发展机会", value: 4 },
            { text: "精准匹配人员特质与任务需求", value: 5 }
        ]
    },
    {
        id: 76,
        dimension: "识人用人",
        text: "对于员工的职业规划，您会：",
        options: [
            { text: "让员工自己规划", value: 1 },
            { text: "提供一般性建议", value: 2 },
            { text: "结合岗位需求指导", value: 3 },
            { text: "基于个人特质规划", value: 4 },
            { text: "量身定制最优发展路径", value: 5 }
        ]
    },
    {
        id: 77,
        dimension: "识人用人",
        text: "在团队角色分配时，您会：",
        options: [
            { text: "按职位等级分配", value: 1 },
            { text: "根据专业能力分配", value: 2 },
            { text: "考虑个人意愿", value: 3 },
            { text: "匹配个人特长", value: 4 },
            { text: "优化整体团队效能", value: 5 }
        ]
    },
    {
        id: 78,
        dimension: "识人用人",
        text: "对于员工的创新能力，您会：",
        options: [
            { text: "认为创新不是必需的", value: 1 },
            { text: "鼓励在工作中创新", value: 2 },
            { text: "识别有创新潜力的员工", value: 3 },
            { text: "为创新者提供平台", value: 4 },
            { text: "系统性培养和发挥创新能力", value: 5 }
        ]
    },
    {
        id: 79,
        dimension: "识人用人",
        text: "在处理员工个人问题时，您会：",
        options: [
            { text: "认为个人问题不应影响工作", value: 1 },
            { text: "简单了解并表示关心", value: 2 },
            { text: "提供必要的帮助", value: 3 },
            { text: "深入理解并给予支持", value: 4 },
            { text: "全面关怀并帮助解决问题", value: 5 }
        ]
    },
    {
        id: 80,
        dimension: "识人用人",
        text: "对于团队中的内向员工，您会：",
        options: [
            { text: "要求其更加外向", value: 1 },
            { text: "接受其性格特点", value: 2 },
            { text: "为其创造适合的环境", value: 3 },
            { text: "发挥其内向优势", value: 4 },
            { text: "将内向特质转化为团队资产", value: 5 }
        ]
    },
    {
        id: 81,
        dimension: "识人用人",
        text: "在员工能力评估时，您会：",
        options: [
            { text: "主要看当前表现", value: 1 },
            { text: "参考历史记录", value: 2 },
            { text: "综合多方面信息", value: 3 },
            { text: "深入挖掘潜在能力", value: 4 },
            { text: "全方位评估并预测发展潜力", value: 5 }
        ]
    },
    {
        id: 82,
        dimension: "识人用人",
        text: "对于高绩效员工，您会：",
        options: [
            { text: "继续安排相同工作", value: 1 },
            { text: "给予更多工作量", value: 2 },
            { text: "提供更大挑战", value: 3 },
            { text: "规划更高发展平台", value: 4 },
            { text: "将其打造成团队核心和标杆", value: 5 }
        ]
    },
    {
        id: 83,
        dimension: "识人用人",
        text: "在处理员工离职时，您会：",
        options: [
            { text: "简单办理离职手续", value: 1 },
            { text: "了解离职原因", value: 2 },
            { text: "深入分析离职动机", value: 3 },
            { text: "反思管理方式", value: 4 },
            { text: "将离职转化为管理改进机会", value: 5 }
        ]
    },
    {
        id: 84,
        dimension: "识人用人",
        text: "对于员工的学习能力，您会：",
        options: [
            { text: "认为学历代表学习能力", value: 1 },
            { text: "观察工作中的学习表现", value: 2 },
            { text: "评估学习速度和效果", value: 3 },
            { text: "深入了解学习方式和习惯", value: 4 },
            { text: "全面评估并培养学习能力", value: 5 }
        ]
    },
    {
        id: 85,
        dimension: "识人用人",
        text: "在团队多样性管理中，您会：",
        options: [
            { text: "追求团队一致性", value: 1 },
            { text: "接受基本差异", value: 2 },
            { text: "管理不同类型员工", value: 3 },
            { text: "发挥多样性优势", value: 4 },
            { text: "将多样性转化为竞争优势", value: 5 }
        ]
    },
    {
        id: 86,
        dimension: "识人用人",
        text: "对于员工的沟通能力，您会：",
        options: [
            { text: "认为沟通能力不重要", value: 1 },
            { text: "关注基本表达能力", value: 2 },
            { text: "评估沟通效果", value: 3 },
            { text: "深入了解沟通风格", value: 4 },
            { text: "全面开发沟通潜力", value: 5 }
        ]
    },
    {
        id: 87,
        dimension: "识人用人",
        text: "在员工激励方面，您会：",
        options: [
            { text: "采用统一的激励方式", value: 1 },
             { text: "根据职位调整激励", value: 2 },
             { text: "考虑个人需求差异", value: 3 },
             { text: "个性化激励方案", value: 4 },
             { text: "创造最适合的激励生态", value: 5 }
         ]
     },
     {
         id: 88,
         dimension: "识人用人",
         text: "对于员工的抗压能力，您会：",
         options: [
             { text: "认为抗压能力天生决定", value: 1 },
             { text: "观察其在压力下的表现", value: 2 },
             { text: "评估并提供支持", value: 3 },
             { text: "系统性培养抗压能力", value: 4 },
             { text: "将压力转化为成长动力", value: 5 }
         ]
     },
     {
         id: 89,
         dimension: "识人用人",
         text: "在员工职业转型时，您会：",
         options: [
             { text: "认为转型风险太大", value: 1 },
             { text: "提供基本建议", value: 2 },
             { text: "评估转型可行性", value: 3 },
             { text: "全程指导转型过程", value: 4 },
             { text: "成为转型成功的推动者", value: 5 }
         ]
     },
     {
         id: 90,
         dimension: "识人用人",
         text: "对于团队人才梯队建设，您会：",
         options: [
             { text: "关注当前人员配置", value: 1 },
             { text: "适当考虑人才储备", value: 2 },
             { text: "制定人才发展计划", value: 3 },
             { text: "构建完整人才梯队", value: 4 },
             { text: "打造可持续的人才生态系统", value: 5 }
         ]
     },

     // ④客户导向 (30题)
     {
         id: 91,
         dimension: "客户导向",
         text: "当客户提出超出服务范围的要求时，您会：",
         options: [
             { text: "直接拒绝，说明规定", value: 1 },
             { text: "解释政策，表示理解", value: 2 },
             { text: "寻找替代解决方案", value: 3 },
             { text: "尽力满足合理部分", value: 4 },
             { text: "创造性地超越客户期望", value: 5 }
         ]
     },
     {
         id: 92,
         dimension: "客户导向",
         text: "面对客户投诉时，您的第一反应是：",
         options: [
             { text: "解释公司政策和流程", value: 1 },
             { text: "了解投诉的具体内容", value: 2 },
             { text: "表达歉意并承诺处理", value: 3 },
             { text: "深入理解客户感受", value: 4 },
             { text: "主动承担责任并立即行动", value: 5 }
         ]
     },
     {
         id: 93,
         dimension: "客户导向",
         text: "在了解客户需求时，您会：",
         options: [
             { text: "询问基本需求信息", value: 1 },
             { text: "了解具体要求", value: 2 },
             { text: "深入了解使用场景", value: 3 },
             { text: "挖掘潜在需求", value: 4 },
             { text: "全面理解并预测未来需求", value: 5 }
         ]
     },
     {
         id: 94,
         dimension: "客户导向",
         text: "当产品无法完全满足客户需求时，您会：",
         options: [
             { text: "说明产品现有功能", value: 1 },
             { text: "推荐最接近的方案", value: 2 },
             { text: "提供多种选择", value: 3 },
             { text: "定制化解决方案", value: 4 },
             { text: "重新设计以完美匹配需求", value: 5 }
         ]
     },
     {
         id: 95,
         dimension: "客户导向",
         text: "在客户服务过程中，您会：",
         options: [
             { text: "按标准流程执行", value: 1 },
             { text: "根据情况灵活调整", value: 2 },
             { text: "主动关注客户体验", value: 3 },
             { text: "持续优化服务质量", value: 4 },
             { text: "创造超预期的服务体验", value: 5 }
         ]
     },
     {
         id: 96,
         dimension: "客户导向",
         text: "对于客户的反馈意见，您会：",
         options: [
             { text: "记录并转交相关部门", value: 1 },
             { text: "分析反馈的合理性", value: 2 },
             { text: "积极回应并跟进", value: 3 },
             { text: "将反馈转化为改进行动", value: 4 },
             { text: "建立系统的反馈改进机制", value: 5 }
         ]
     },
     {
         id: 97,
         dimension: "客户导向",
         text: "在处理客户紧急需求时，您会：",
         options: [
             { text: "按正常流程处理", value: 1 },
             { text: "适当加快处理速度", value: 2 },
             { text: "优先处理紧急事项", value: 3 },
             { text: "调动资源快速响应", value: 4 },
             { text: "全力以赴超速解决", value: 5 }
         ]
     },
     {
         id: 98,
         dimension: "客户导向",
         text: "当客户对价格敏感时，您会：",
         options: [
             { text: "坚持既定价格", value: 1 },
             { text: "解释价格构成", value: 2 },
             { text: "提供性价比分析", value: 3 },
             { text: "寻找降低成本的方法", value: 4 },
             { text: "创造更大价值证明价格合理性", value: 5 }
         ]
     },
     {
         id: 99,
         dimension: "客户导向",
         text: "在维护老客户关系时，您会：",
         options: [
             { text: "保持基本联系", value: 1 },
             { text: "定期回访了解情况", value: 2 },
             { text: "主动提供增值服务", value: 3 },
             { text: "深度参与客户业务", value: 4 },
             { text: "成为客户的战略伙伴", value: 5 }
         ]
     },
     {
         id: 100,
         dimension: "客户导向",
         text: "面对难以满足的客户时，您会：",
         options: [
             { text: "按规定执行，不做妥协", value: 1 },
             { text: "耐心解释并寻求理解", value: 2 },
             { text: "寻找双方都能接受的方案", value: 3 },
             { text: "创新方法满足核心需求", value: 4 },
             { text: "转换思路，化挑战为机遇", value: 5 }
         ]
     },
     {
         id: 101,
         dimension: "客户导向",
         text: "在客户关系管理中，您会：",
         options: [
             { text: "维持基本的业务关系", value: 1 },
             { text: "定期联系重要客户", value: 2 },
             { text: "建立客户档案管理", value: 3 },
             { text: "深度经营客户关系", value: 4 },
             { text: "构建客户生态系统", value: 5 }
         ]
     },
     {
         id: 102,
         dimension: "客户导向",
         text: "当客户需求发生变化时，您会：",
         options: [
             { text: "按原计划继续执行", value: 1 },
             { text: "了解变化的原因", value: 2 },
             { text: "调整方案适应变化", value: 3 },
             { text: "主动预测并引导需求", value: 4 },
             { text: "与客户共同创造新价值", value: 5 }
         ]
     },
     {
         id: 103,
         dimension: "客户导向",
         text: "在处理客户数据时，您会：",
         options: [
             { text: "按需使用客户信息", value: 1 },
             { text: "妥善保管客户数据", value: 2 },
             { text: "分析客户行为模式", value: 3 },
             { text: "深度挖掘客户价值", value: 4 },
             { text: "构建客户洞察体系", value: 5 }
         ]
     },
     {
         id: 104,
         dimension: "客户导向",
         text: "对于客户的长期发展，您会：",
         options: [
             { text: "关注当前合作项目", value: 1 },
             { text: "了解客户发展规划", value: 2 },
             { text: "提供发展建议", value: 3 },
             { text: "参与客户战略规划", value: 4 },
             { text: "成为客户发展的推动者", value: 5 }
         ]
     },
     {
         id: 105,
         dimension: "客户导向",
         text: "在客户满意度管理中，您会：",
         options: [
             { text: "完成基本服务要求", value: 1 },
             { text: "定期询问客户意见", value: 2 },
             { text: "主动改进服务质量", value: 3 },
             { text: "建立满意度监测体系", value: 4 },
             { text: "创造客户惊喜体验", value: 5 }
         ]
     },
     {
         id: 106,
         dimension: "客户导向",
         text: "当面临内部利益与客户利益冲突时，您会：",
         options: [
             { text: "优先考虑内部利益", value: 1 },
             { text: "寻求平衡点", value: 2 },
             { text: "倾向于客户利益", value: 3 },
             { text: "创造双赢方案", value: 4 },
             { text: "以客户价值为最高准则", value: 5 }
         ]
     },
     {
         id: 107,
         dimension: "客户导向",
         text: "在客户教育方面，您会：",
         options: [
             { text: "提供基本产品说明", value: 1 },
             { text: "解答客户疑问", value: 2 },
             { text: "主动分享最佳实践", value: 3 },
             { text: "系统性培训客户", value: 4 },
             { text: "成为客户的专业顾问", value: 5 }
         ]
     },
     {
         id: 108,
         dimension: "客户导向",
         text: "对于客户的创新需求，您会：",
         options: [
             { text: "建议使用现有方案", value: 1 },
             { text: "了解创新需求背景", value: 2 },
             { text: "评估创新可行性", value: 3 },
             { text: "积极支持客户创新", value: 4 },
             { text: "与客户共同创新", value: 5 }
         ]
     },
     {
         id: 109,
         dimension: "客户导向",
         text: "在客户成功管理中，您会：",
         options: [
             { text: "关注产品交付", value: 1 },
             { text: "跟进使用效果", value: 2 },
             { text: "确保客户获得价值", value: 3 },
             { text: "推动客户业务成功", value: 4 },
             { text: "成为客户成功的合伙人", value: 5 }
         ]
     },
     {
         id: 110,
         dimension: "客户导向",
         text: "对于客户流失风险，您会：",
         options: [
             { text: "等客户主动反馈", value: 1 },
             { text: "定期检查客户状态", value: 2 },
             { text: "主动识别风险信号", value: 3 },
             { text: "建立预警机制", value: 4 },
             { text: "将风险转化为深度合作机会", value: 5 }
         ]
     },
     {
         id: 111,
         dimension: "客户导向",
         text: "在客户体验设计中，您会：",
         options: [
             { text: "按标准流程设计", value: 1 },
             { text: "考虑客户便利性", value: 2 },
             { text: "优化关键接触点", value: 3 },
             { text: "设计端到端体验", value: 4 },
             { text: "创造情感共鸣的体验", value: 5 }
         ]
     },
     {
         id: 112,
         dimension: "客户导向",
         text: "对于客户的个性化需求，您会：",
         options: [
             { text: "提供标准化服务", value: 1 },
             { text: "在标准基础上微调", value: 2 },
             { text: "提供个性化选择", value: 3 },
             { text: "深度定制解决方案", value: 4 },
             { text: "为每个客户创造独特价值", value: 5 }
         ]
     },
     {
         id: 113,
         dimension: "客户导向",
         text: "在客户沟通中，您会：",
         options: [
             { text: "传达必要信息", value: 1 },
             { text: "保持定期沟通", value: 2 },
             { text: "主动分享有价值信息", value: 3 },
             { text: "建立深度对话机制", value: 4 },
             { text: "成为客户的思想伙伴", value: 5 }
         ]
     },
     {
         id: 114,
         dimension: "客户导向",
         text: "对于客户的未来规划，您会：",
         options: [
             { text: "关注当前合作", value: 1 },
             { text: "了解客户计划", value: 2 },
             { text: "参与规划讨论", value: 3 },
             { text: "提供战略建议", value: 4 },
             { text: "成为客户未来的设计师", value: 5 }
         ]
     },
     {
         id: 115,
         dimension: "客户导向",
         text: "在处理客户危机时，您会：",
         options: [
             { text: "按程序处理问题", value: 1 },
             { text: "快速响应客户", value: 2 },
             { text: "全力解决危机", value: 3 },
             { text: "将危机转化为信任", value: 4 },
             { text: "让客户在危机中感受到价值", value: 5 }
         ]
     },
     {
         id: 116,
         dimension: "客户导向",
         text: "对于客户的竞争对手，您会：",
         options: [
             { text: "避免涉及竞争话题", value: 1 },
             { text: "客观分析市场情况", value: 2 },
             { text: "帮助客户分析竞争优势", value: 3 },
             { text: "协助制定竞争策略", value: 4 },
             { text: "成为客户竞争优势的创造者", value: 5 }
         ]
     },
     {
         id: 117,
         dimension: "客户导向",
         text: "在客户价值创造中，您会：",
         options: [
             { text: "提供基本产品服务", value: 1 },
             { text: "确保客户获得预期价值", value: 2 },
             { text: "主动创造额外价值", value: 3 },
             { text: "持续放大客户价值", value: 4 },
             { text: "成为客户价值的倍增器", value: 5 }
         ]
     },
     {
         id: 118,
         dimension: "客户导向",
         text: "对于客户的行业趋势，您会：",
         options: [
             { text: "关注自己的专业领域", value: 1 },
             { text: "了解客户行业基本情况", value: 2 },
             { text: "深入研究行业趋势", value: 3 },
             { text: "成为行业专家", value: 4 },
             { text: "引领客户把握行业机遇", value: 5 }
         ]
     },
     {
         id: 119,
         dimension: "客户导向",
         text: "在客户团队协作中，您会：",
         options: [
             { text: "与主要联系人合作", value: 1 },
             { text: "了解客户团队结构", value: 2 },
             { text: "与多个层级建立关系", value: 3 },
             { text: "深度融入客户团队", value: 4 },
             { text: "成为客户团队的核心成员", value: 5 }
         ]
     },
     {
         id: 120,
         dimension: "客户导向",
         text: "对于客户的长期价值，您会：",
         options: [
             { text: "关注单次交易价值", value: 1 },
             { text: "考虑重复合作机会", value: 2 },
             { text: "规划长期合作关系", value: 3 },
             { text: "构建战略合作伙伴关系", value: 4 },
             { text: "创造可持续的共同价值", value: 5 }
         ]
     },

     // ⑥结果导向 (30题)
     {
         id: 151,
         dimension: "结果导向",
         text: "在制定目标时，您会：",
         options: [
             { text: "设定基本可达成的目标", value: 1 },
             { text: "制定明确具体的目标", value: 2 },
             { text: "设定有挑战性的目标", value: 3 },
             { text: "制定可量化的高标准目标", value: 4 },
             { text: "设定突破性的卓越目标", value: 5 }
         ]
     },
     {
         id: 152,
         dimension: "结果导向",
         text: "在项目执行过程中，您会：",
         options: [
             { text: "按计划推进工作", value: 1 },
             { text: "关注执行进度", value: 2 },
             { text: "持续监控关键指标", value: 3 },
             { text: "动态调整确保目标达成", value: 4 },
             { text: "全力以赴超越预期目标", value: 5 }
         ]
     },
     {
         id: 153,
         dimension: "结果导向",
         text: "面对困难和挫折时，您会：",
         options: [
             { text: "接受现实，降低期望", value: 1 },
             { text: "寻找解决问题的方法", value: 2 },
             { text: "坚持不懈直到解决", value: 3 },
             { text: "创新方法突破困难", value: 4 },
             { text: "将困难转化为超越机会", value: 5 }
         ]
     },
     {
         id: 154,
         dimension: "结果导向",
         text: "在资源有限的情况下，您会：",
         options: [
             { text: "调整目标适应资源", value: 1 },
             { text: "优化资源配置", value: 2 },
             { text: "寻找额外资源支持", value: 3 },
             { text: "创造性地利用现有资源", value: 4 },
             { text: "以最少资源创造最大价值", value: 5 }
         ]
     },
     {
         id: 155,
         dimension: "结果导向",
         text: "对于工作质量，您会：",
         options: [
             { text: "达到基本要求", value: 1 },
             { text: "确保质量合格", value: 2 },
             { text: "追求高质量标准", value: 3 },
             { text: "持续改进质量", value: 4 },
             { text: "创造卓越品质", value: 5 }
         ]
     },
     {
         id: 156,
         dimension: "结果导向",
         text: "在时间管理方面，您会：",
         options: [
             { text: "按时完成任务", value: 1 },
             { text: "合理安排时间", value: 2 },
             { text: "高效利用时间", value: 3 },
             { text: "优化时间效率", value: 4 },
             { text: "创造时间价值最大化", value: 5 }
         ]
     },
     {
         id: 157,
         dimension: "结果导向",
         text: "在团队协作中，您会：",
         options: [
             { text: "完成自己的部分", value: 1 },
             { text: "配合团队工作", value: 2 },
             { text: "推动团队目标达成", value: 3 },
             { text: "激发团队最佳表现", value: 4 },
             { text: "引领团队创造卓越成果", value: 5 }
         ]
     },
     {
         id: 158,
         dimension: "结果导向",
         text: "对于绩效评估，您会：",
         options: [
             { text: "关注完成情况", value: 1 },
             { text: "分析绩效数据", value: 2 },
             { text: "深度分析绩效差距", value: 3 },
             { text: "制定绩效改进计划", value: 4 },
             { text: "建立绩效卓越体系", value: 5 }
         ]
     },
     {
         id: 159,
         dimension: "结果导向",
         text: "在处理紧急任务时，您会：",
         options: [
             { text: "尽力完成任务", value: 1 },
             { text: "快速响应处理", value: 2 },
             { text: "高效解决问题", value: 3 },
             { text: "超预期完成任务", value: 4 },
             { text: "将紧急转化为机遇", value: 5 }
         ]
     },
     {
         id: 160,
         dimension: "结果导向",
         text: "对于长期目标，您会：",
         options: [
             { text: "制定基本规划", value: 1 },
             { text: "分阶段推进", value: 2 },
             { text: "持续跟踪进展", value: 3 },
             { text: "动态优化策略", value: 4 },
             { text: "创造突破性成果", value: 5 }
         ]
     },
     {
         id: 161,
         dimension: "结果导向",
         text: "在成本控制方面，您会：",
         options: [
             { text: "控制在预算内", value: 1 },
             { text: "优化成本结构", value: 2 },
             { text: "持续降低成本", value: 3 },
             { text: "创新成本管理模式", value: 4 },
             { text: "实现成本效益最大化", value: 5 }
         ]
     },
     {
         id: 162,
         dimension: "结果导向",
         text: "对于客户满意度，您会：",
         options: [
             { text: "满足基本需求", value: 1 },
             { text: "确保客户满意", value: 2 },
             { text: "追求客户高度满意", value: 3 },
             { text: "创造客户惊喜", value: 4 },
             { text: "成为客户最佳伙伴", value: 5 }
         ]
     },
     {
         id: 163,
         dimension: "结果导向",
         text: "在创新成果方面，您会：",
         options: [
             { text: "完成基本创新任务", value: 1 },
             { text: "产生有价值的创新", value: 2 },
             { text: "持续推出创新成果", value: 3 },
             { text: "引领行业创新", value: 4 },
             { text: "创造颠覆性创新", value: 5 }
         ]
     },
     {
         id: 164,
         dimension: "结果导向",
         text: "在风险管理中，您会：",
         options: [
             { text: "避免主要风险", value: 1 },
             { text: "控制风险在可接受范围", value: 2 },
             { text: "主动管理风险", value: 3 },
             { text: "将风险转化为机会", value: 4 },
             { text: "在风险中创造价值", value: 5 }
         ]
     },
     {
         id: 165,
         dimension: "结果导向",
         text: "对于市场表现，您会：",
         options: [
             { text: "达到市场基本要求", value: 1 },
             { text: "保持竞争优势", value: 2 },
             { text: "追求市场领先", value: 3 },
             { text: "创造市场标杆", value: 4 },
             { text: "重新定义市场标准", value: 5 }
         ]
     },
     {
         id: 166,
         dimension: "结果导向",
         text: "在学习成果方面，您会：",
         options: [
             { text: "掌握基本知识技能", value: 1 },
             { text: "持续学习提升", value: 2 },
             { text: "将学习转化为能力", value: 3 },
             { text: "创造学习价值", value: 4 },
             { text: "成为学习型标杆", value: 5 }
         ]
     },
     {
         id: 167,
         dimension: "结果导向",
         text: "在问题解决中，您会：",
         options: [
             { text: "解决当前问题", value: 1 },
             { text: "彻底解决问题", value: 2 },
             { text: "预防类似问题", value: 3 },
             { text: "优化解决机制", value: 4 },
             { text: "将问题转化为系统优势", value: 5 }
         ]
     },
     {
         id: 168,
         dimension: "结果导向",
         text: "对于效率提升，您会：",
         options: [
             { text: "保持基本效率", value: 1 },
             { text: "逐步提升效率", value: 2 },
             { text: "持续优化流程", value: 3 },
             { text: "创新效率模式", value: 4 },
             { text: "实现效率革命性突破", value: 5 }
         ]
     },
     {
         id: 169,
         dimension: "结果导向",
         text: "在竞争中，您会：",
         options: [
             { text: "保持竞争地位", value: 1 },
             { text: "努力超越对手", value: 2 },
             { text: "建立竞争优势", value: 3 },
             { text: "创造独特价值", value: 4 },
             { text: "重新定义竞争规则", value: 5 }
         ]
     },
     {
         id: 170,
         dimension: "结果导向",
         text: "对于标准制定，您会：",
         options: [
             { text: "遵循现有标准", value: 1 },
             { text: "优化现有标准", value: 2 },
             { text: "制定更高标准", value: 3 },
             { text: "创立行业标准", value: 4 },
             { text: "引领标准革新", value: 5 }
         ]
     },
     {
         id: 171,
         dimension: "结果导向",
         text: "在价值创造中，您会：",
         options: [
             { text: "创造基本价值", value: 1 },
             { text: "持续创造价值", value: 2 },
             { text: "最大化价值创造", value: 3 },
             { text: "创新价值模式", value: 4 },
             { text: "重新定义价值标准", value: 5 }
         ]
     },
     {
         id: 172,
         dimension: "结果导向",
         text: "对于影响力，您会：",
         options: [
             { text: "在职责范围内发挥作用", value: 1 },
             { text: "扩大工作影响力", value: 2 },
             { text: "建立专业影响力", value: 3 },
             { text: "创造行业影响力", value: 4 },
             { text: "成为变革引领者", value: 5 }
         ]
     },
     {
         id: 173,
         dimension: "结果导向",
         text: "在可持续发展方面，您会：",
         options: [
             { text: "关注短期结果", value: 1 },
             { text: "平衡短期和长期", value: 2 },
             { text: "构建可持续模式", value: 3 },
             { text: "创造长期价值", value: 4 },
             { text: "建立永续发展体系", value: 5 }
         ]
     },
     {
         id: 174,
         dimension: "结果导向",
         text: "对于成功定义，您会：",
         options: [
             { text: "完成既定任务", value: 1 },
             { text: "达成预期目标", value: 2 },
             { text: "超越预期表现", value: 3 },
             { text: "创造卓越成果", value: 4 },
             { text: "重新定义成功标准", value: 5 }
         ]
     },
     {
         id: 175,
         dimension: "结果导向",
         text: "在执行力方面，您会：",
         options: [
             { text: "按要求执行", value: 1 },
             { text: "高效执行任务", value: 2 },
             { text: "卓越执行计划", value: 3 },
             { text: "创新执行方式", value: 4 },
             { text: "成为执行力标杆", value: 5 }
         ]
     },
     {
         id: 176,
         dimension: "结果导向",
         text: "对于责任承担，您会：",
         options: [
             { text: "承担基本责任", value: 1 },
             { text: "主动承担责任", value: 2 },
             { text: "承担更大责任", value: 3 },
             { text: "创造责任价值", value: 4 },
             { text: "成为责任典范", value: 5 }
         ]
     },
     {
         id: 177,
         dimension: "结果导向",
         text: "在目标达成后，您会：",
         options: [
             { text: "完成任务即可", value: 1 },
             { text: "总结经验教训", value: 2 },
             { text: "分析成功因素", value: 3 },
             { text: "优化成功模式", value: 4 },
             { text: "创造可复制的成功体系", value: 5 }
         ]
     },
     {
         id: 178,
         dimension: "结果导向",
         text: "对于挑战性任务，您会：",
         options: [
             { text: "尽力而为", value: 1 },
             { text: "制定应对策略", value: 2 },
             { text: "全力以赴攻克", value: 3 },
             { text: "创新突破方法", value: 4 },
             { text: "将挑战转化为机遇", value: 5 }
         ]
     },
     {
         id: 179,
         dimension: "结果导向",
         text: "在资源整合方面，您会：",
         options: [
             { text: "使用现有资源", value: 1 },
             { text: "优化资源配置", value: 2 },
             { text: "整合多方资源", value: 3 },
             { text: "创新资源利用", value: 4 },
             { text: "构建资源生态系统", value: 5 }
         ]
     },
     {
         id: 180,
         dimension: "结果导向",
         text: "对于成果展示，您会：",
         options: [
             { text: "简单汇报结果", value: 1 },
             { text: "清晰展示成果", value: 2 },
             { text: "全面展现价值", value: 3 },
             { text: "创新展示方式", value: 4 },
             { text: "让成果产生最大影响", value: 5 }
         ]
     },

     // ⑦团队合作 (30题)
     {
         id: 181,
         dimension: "团队合作",
         text: "在团队中，您会：",
         options: [
             { text: "完成自己的工作", value: 1 },
             { text: "配合团队需要", value: 2 },
             { text: "主动协助他人", value: 3 },
             { text: "推动团队协作", value: 4 },
             { text: "成为团队协作的催化剂", value: 5 }
         ]
     },
     {
         id: 182,
         dimension: "团队合作",
         text: "面对团队冲突时，您会：",
         options: [
             { text: "避免卷入冲突", value: 1 },
             { text: "保持中立态度", value: 2 },
             { text: "积极调解冲突", value: 3 },
             { text: "化解冲突并促进理解", value: 4 },
             { text: "将冲突转化为团队成长机会", value: 5 }
         ]
     },
     {
         id: 183,
         dimension: "团队合作",
         text: "在信息共享方面，您会：",
         options: [
             { text: "分享必要信息", value: 1 },
             { text: "主动分享相关信息", value: 2 },
             { text: "及时分享重要信息", value: 3 },
             { text: "建立信息共享机制", value: 4 },
             { text: "创造知识共享文化", value: 5 }
         ]
     },
     {
         id: 184,
         dimension: "团队合作",
         text: "对于团队决策，您会：",
         options: [
             { text: "服从团队决定", value: 1 },
             { text: "积极参与讨论", value: 2 },
             { text: "贡献专业意见", value: 3 },
             { text: "推动形成最佳决策", value: 4 },
             { text: "引领团队做出卓越决策", value: 5 }
         ]
     },
     {
         id: 185,
         dimension: "团队合作",
         text: "在团队目标设定中，您会：",
         options: [
             { text: "接受既定目标", value: 1 },
             { text: "参与目标讨论", value: 2 },
             { text: "积极贡献目标建议", value: 3 },
             { text: "推动制定挑战性目标", value: 4 },
             { text: "引领团队设定突破性目标", value: 5 }
         ]
     },
     {
         id: 186,
         dimension: "团队合作",
         text: "对于新成员融入，您会：",
         options: [
             { text: "正常工作交接", value: 1 },
             { text: "提供必要帮助", value: 2 },
             { text: "主动协助融入", value: 3 },
             { text: "全面支持新成员成长", value: 4 },
             { text: "成为新成员的成长导师", value: 5 }
         ]
     },
     {
         id: 187,
         dimension: "团队合作",
         text: "在跨部门协作中，您会：",
         options: [
             { text: "完成基本协作", value: 1 },
             { text: "积极配合其他部门", value: 2 },
             { text: "主动推进跨部门合作", value: 3 },
             { text: "优化跨部门协作机制", value: 4 },
             { text: "构建跨部门协作生态", value: 5 }
         ]
     },
     {
         id: 188,
         dimension: "团队合作",
         text: "对于团队文化建设，您会：",
         options: [
             { text: "遵守团队规范", value: 1 },
             { text: "积极参与团队活动", value: 2 },
             { text: "主动营造良好氛围", value: 3 },
             { text: "推动团队文化建设", value: 4 },
             { text: "成为团队文化的塑造者", value: 5 }
         ]
     },
     {
         id: 189,
         dimension: "团队合作",
         text: "在团队学习中，您会：",
         options: [
             { text: "参与团队培训", value: 1 },
             { text: "分享学习心得", value: 2 },
             { text: "推动团队共同学习", value: 3 },
             { text: "建立团队学习机制", value: 4 },
             { text: "创造学习型团队", value: 5 }
         ]
     },
     {
         id: 190,
         dimension: "团队合作",
         text: "对于团队创新，您会：",
         options: [
             { text: "支持团队创新活动", value: 1 },
             { text: "积极贡献创新想法", value: 2 },
             { text: "推动创新项目实施", value: 3 },
             { text: "建立团队创新机制", value: 4 },
             { text: "引领团队创新突破", value: 5 }
         ]
     },
     {
         id: 191,
         dimension: "团队合作",
         text: "在资源共享方面，您会：",
         options: [
             { text: "合理使用团队资源", value: 1 },
             { text: "主动分享个人资源", value: 2 },
             { text: "优化团队资源配置", value: 3 },
             { text: "整合内外部资源", value: 4 },
             { text: "构建资源共享生态", value: 5 }
         ]
     },
     {
         id: 192,
         dimension: "团队合作",
         text: "对于团队绩效，您会：",
         options: [
             { text: "关注个人绩效", value: 1 },
             { text: "兼顾团队整体表现", value: 2 },
             { text: "优先考虑团队成功", value: 3 },
             { text: "推动团队绩效提升", value: 4 },
             { text: "引领团队创造卓越绩效", value: 5 }
         ]
     },
     {
         id: 193,
         dimension: "团队合作",
         text: "在团队沟通中，您会：",
         options: [
             { text: "参与必要沟通", value: 1 },
             { text: "积极参与团队讨论", value: 2 },
             { text: "促进有效沟通", value: 3 },
             { text: "建立良好沟通机制", value: 4 },
             { text: "创造开放透明的沟通文化", value: 5 }
         ]
     },
     {
         id: 194,
         dimension: "团队合作",
         text: "对于团队多样性，您会：",
         options: [
             { text: "接受团队差异", value: 1 },
             { text: "尊重不同观点", value: 2 },
             { text: "利用多样性优势", value: 3 },
             { text: "整合多元化价值", value: 4 },
             { text: "将多样性转化为创新力", value: 5 }
         ]
     },
     {
         id: 195,
         dimension: "团队合作",
         text: "在团队危机时，您会：",
         options: [
             { text: "等待领导指示", value: 1 },
             { text: "积极配合应对", value: 2 },
             { text: "主动承担责任", value: 3 },
             { text: "引领团队渡过危机", value: 4 },
             { text: "将危机转化为团队成长机会", value: 5 }
         ]
     },
     {
         id: 196,
         dimension: "团队合作",
         text: "对于团队反馈，您会：",
         options: [
             { text: "接受团队反馈", value: 1 },
             { text: "积极回应反馈", value: 2 },
             { text: "主动寻求反馈", value: 3 },
             { text: "建立反馈改进机制", value: 4 },
             { text: "创造持续改进的反馈文化", value: 5 }
         ]
     },
     {
         id: 197,
         dimension: "团队合作",
         text: "在团队激励方面，您会：",
         options: [
             { text: "保持个人积极性", value: 1 },
             { text: "鼓励团队成员", value: 2 },
             { text: "主动激励他人", value: 3 },
             { text: "建立团队激励机制", value: 4 },
             { text: "成为团队正能量的源泉", value: 5 }
         ]
     },
     {
         id: 198,
         dimension: "团队合作",
         text: "对于团队变革，您会：",
         options: [
             { text: "适应团队变化", value: 1 },
             { text: "支持变革举措", value: 2 },
             { text: "积极推动变革", value: 3 },
             { text: "引领变革方向", value: 4 },
             { text: "成为变革的催化剂", value: 5 }
         ]
     },
     {
         id: 199,
         dimension: "团队合作",
         text: "在团队知识管理中，您会：",
         options: [
             { text: "管理个人知识", value: 1 },
             { text: "分享专业知识", value: 2 },
             { text: "推动知识共享", value: 3 },
             { text: "建立知识管理体系", value: 4 },
             { text: "创造团队智慧生态", value: 5 }
         ]
     },
     {
         id: 200,
         dimension: "团队合作",
         text: "对于团队成长，您会：",
         options: [
             { text: "关注个人发展", value: 1 },
             { text: "支持他人成长", value: 2 },
             { text: "推动团队整体提升", value: 3 },
             { text: "建立成长支持体系", value: 4 },
             { text: "成为团队成长的引领者", value: 5 }
         ]
     },
     {
         id: 201,
         dimension: "团队合作",
         text: "在团队责任分担中，您会：",
         options: [
             { text: "承担分配的责任", value: 1 },
             { text: "主动承担更多责任", value: 2 },
             { text: "帮助他人分担责任", value: 3 },
             { text: "优化责任分配机制", value: 4 },
             { text: "创造共同责任文化", value: 5 }
         ]
     },
     {
         id: 202,
         dimension: "团队合作",
         text: "对于团队效率，您会：",
         options: [
             { text: "保持个人效率", value: 1 },
             { text: "配合提升团队效率", value: 2 },
             { text: "主动优化团队流程", value: 3 },
             { text: "建立高效协作机制", value: 4 },
             { text: "创造团队效率突破", value: 5 }
         ]
     },
     {
         id: 203,
         dimension: "团队合作",
         text: "在团队价值观塑造中，您会：",
         options: [
             { text: "遵循团队价值观", value: 1 },
             { text: "践行团队价值观", value: 2 },
             { text: "传播团队价值观", value: 3 },
             { text: "完善团队价值体系", value: 4 },
             { text: "成为价值观的典范", value: 5 }
         ]
     },
     {
         id: 204,
         dimension: "团队合作",
         text: "对于团队愿景，您会：",
         options: [
             { text: "了解团队愿景", value: 1 },
             { text: "认同团队愿景", value: 2 },
             { text: "积极实现团队愿景", value: 3 },
             { text: "参与愿景规划", value: 4 },
             { text: "成为愿景的共创者", value: 5 }
         ]
     },
     {
         id: 205,
         dimension: "团队合作",
         text: "在团队传承方面，您会：",
         options: [
             { text: "学习团队经验", value: 1 },
             { text: "传承团队文化", value: 2 },
             { text: "发展团队传统", value: 3 },
             { text: "创新传承方式", value: 4 },
             { text: "成为团队精神的传承者", value: 5 }
         ]
     },
     {
         id: 206,
         dimension: "团队合作",
         text: "对于团队影响力，您会：",
         options: [
             { text: "在团队内发挥作用", value: 1 },
             { text: "扩大个人影响力", value: 2 },
             { text: "提升团队影响力", value: 3 },
             { text: "建立团队品牌", value: 4 },
             { text: "让团队成为行业标杆", value: 5 }
         ]
     },
     {
         id: 207,
         dimension: "团队合作",
         text: "在团队可持续发展中，您会：",
         options: [
             { text: "关注当前团队表现", value: 1 },
             { text: "考虑团队长远发展", value: 2 },
             { text: "规划团队未来", value: 3 },
             { text: "建立可持续发展机制", value: 4 },
             { text: "创造团队永续发展模式", value: 5 }
         ]
     },
     {
         id: 208,
         dimension: "团队合作",
         text: "对于团队领导力，您会：",
         options: [
             { text: "服从团队领导", value: 1 },
             { text: "支持领导决策", value: 2 },
             { text: "在专业领域发挥领导作用", value: 3 },
             { text: "培养团队领导力", value: 4 },
             { text: "成为团队领导力的典范", value: 5 }
         ]
     },
     {
         id: 209,
         dimension: "团队合作",
         text: "在团队成功庆祝中，您会：",
         options: [
             { text: "参与庆祝活动", value: 1 },
             { text: "分享成功喜悦", value: 2 },
             { text: "总结成功经验", value: 3 },
             { text: "将成功转化为动力", value: 4 },
             { text: "让成功成为团队文化", value: 5 }
         ]
     },
     {
         id: 210,
         dimension: "团队合作",
         text: "对于团队未来，您会：",
         options: [
             { text: "适应团队发展", value: 1 },
             { text: "参与未来规划", value: 2 },
             { text: "推动团队进步", value: 3 },
             { text: "引领团队创新", value: 4 },
             { text: "成为团队未来的设计师", value: 5 }
         ]
     },

     // ⑤信息搜集 (30题)
     {
         id: 121,
         dimension: "信息搜集",
         text: "在开始新项目前，您会：",
         options: [
             { text: "直接开始执行", value: 1 },
             { text: "了解基本要求", value: 2 },
             { text: "收集相关背景信息", value: 3 },
             { text: "全面调研项目环境", value: 4 },
             { text: "建立完整的信息体系", value: 5 }
         ]
     },
     {
         id: 122,
         dimension: "信息搜集",
         text: "当需要做决策时，您会：",
         options: [
             { text: "凭经验快速决定", value: 1 },
             { text: "收集基本信息", value: 2 },
             { text: "多方面了解情况", value: 3 },
             { text: "系统性收集分析数据", value: 4 },
             { text: "建立决策信息支撑体系", value: 5 }
         ]
     },
     {
         id: 123,
         dimension: "信息搜集",
         text: "在解决问题时，您会：",
         options: [
             { text: "直接应用已知方法", value: 1 },
             { text: "了解问题基本情况", value: 2 },
             { text: "深入分析问题根源", value: 3 },
             { text: "多角度收集相关信息", value: 4 },
             { text: "构建完整的问题信息图谱", value: 5 }
         ]
     },
     {
         id: 124,
         dimension: "信息搜集",
         text: "对于行业动态，您会：",
         options: [
             { text: "偶尔关注", value: 1 },
             { text: "定期浏览相关资讯", value: 2 },
             { text: "主动收集行业信息", value: 3 },
             { text: "建立信息收集渠道", value: 4 },
             { text: "构建行业信息监测体系", value: 5 }
         ]
     },
     {
         id: 125,
         dimension: "信息搜集",
         text: "在评估竞争对手时，您会：",
         options: [
             { text: "了解基本情况", value: 1 },
             { text: "收集公开信息", value: 2 },
             { text: "多渠道了解对手动态", value: 3 },
             { text: "深度分析竞争格局", value: 4 },
             { text: "建立竞争情报体系", value: 5 }
         ]
     },
     {
         id: 126,
         dimension: "信息搜集",
         text: "在制定计划时，您会：",
         options: [
             { text: "基于现有认知制定", value: 1 },
             { text: "参考历史数据", value: 2 },
             { text: "收集相关参考信息", value: 3 },
             { text: "全面调研制定依据", value: 4 },
             { text: "建立数据驱动的规划体系", value: 5 }
         ]
     },
     {
         id: 127,
         dimension: "信息搜集",
         text: "对于客户需求，您会：",
         options: [
             { text: "听取直接表达的需求", value: 1 },
             { text: "询问详细要求", value: 2 },
             { text: "深入了解使用场景", value: 3 },
             { text: "挖掘潜在和未来需求", value: 4 },
             { text: "建立客户需求洞察体系", value: 5 }
         ]
     },
     {
         id: 128,
         dimension: "信息搜集",
         text: "在团队管理中，您会：",
         options: [
             { text: "关注工作结果", value: 1 },
             { text: "了解工作进展", value: 2 },
             { text: "深入了解团队状态", value: 3 },
             { text: "全面掌握团队动态", value: 4 },
             { text: "建立团队信息管理体系", value: 5 }
         ]
     },
     {
         id: 129,
         dimension: "信息搜集",
         text: "对于新技术趋势，您会：",
         options: [
             { text: "等待成熟后再关注", value: 1 },
             { text: "偶尔了解新动向", value: 2 },
             { text: "主动学习新技术", value: 3 },
             { text: "系统跟踪技术发展", value: 4 },
             { text: "建立技术趋势预测体系", value: 5 }
         ]
     },
     {
         id: 130,
         dimension: "信息搜集",
         text: "在处理复杂问题时，您会：",
         options: [
             { text: "凭直觉判断", value: 1 },
             { text: "收集基础信息", value: 2 },
             { text: "多维度收集信息", value: 3 },
             { text: "建立信息分析框架", value: 4 },
             { text: "构建完整的信息决策体系", value: 5 }
         ]
     },
     {
         id: 131,
         dimension: "信息搜集",
         text: "对于市场变化，您会：",
         options: [
             { text: "被动接受变化", value: 1 },
             { text: "关注主要变化", value: 2 },
             { text: "主动收集市场信息", value: 3 },
             { text: "深度分析变化趋势", value: 4 },
             { text: "建立市场变化预警系统", value: 5 }
         ]
     },
     {
         id: 132,
         dimension: "信息搜集",
         text: "在风险评估时，您会：",
         options: [
             { text: "关注明显风险", value: 1 },
             { text: "收集风险相关信息", value: 2 },
             { text: "全面识别潜在风险", value: 3 },
             { text: "建立风险信息数据库", value: 4 },
             { text: "构建动态风险监测体系", value: 5 }
         ]
     },
     {
         id: 133,
         dimension: "信息搜集",
         text: "对于用户反馈，您会：",
         options: [
             { text: "收集直接反馈", value: 1 },
             { text: "定期收集用户意见", value: 2 },
             { text: "多渠道收集反馈", value: 3 },
             { text: "深度挖掘用户洞察", value: 4 },
             { text: "建立用户声音管理体系", value: 5 }
         ]
     },
     {
         id: 134,
         dimension: "信息搜集",
         text: "在项目执行中，您会：",
         options: [
             { text: "关注执行进度", value: 1 },
             { text: "收集执行过程信息", value: 2 },
             { text: "全面监控项目状态", value: 3 },
             { text: "建立项目信息仪表板", value: 4 },
             { text: "构建智能项目管理系统", value: 5 }
         ]
     },
     {
         id: 135,
         dimension: "信息搜集",
         text: "对于政策法规变化，您会：",
         options: [
             { text: "等通知后了解", value: 1 },
             { text: "关注相关政策", value: 2 },
             { text: "主动跟踪政策动态", value: 3 },
             { text: "深度研究政策影响", value: 4 },
             { text: "建立政策变化预警机制", value: 5 }
         ]
     },
     {
         id: 136,
         dimension: "信息搜集",
         text: "在数据分析时，您会：",
         options: [
             { text: "查看基本数据", value: 1 },
             { text: "分析关键指标", value: 2 },
             { text: "多维度数据分析", value: 3 },
             { text: "建立数据分析模型", value: 4 },
             { text: "构建智能数据洞察系统", value: 5 }
         ]
     },
     {
         id: 137,
         dimension: "信息搜集",
         text: "对于专业知识更新，您会：",
         options: [
             { text: "依靠现有知识", value: 1 },
             { text: "偶尔学习新知识", value: 2 },
             { text: "定期更新专业知识", value: 3 },
             { text: "系统性学习前沿知识", value: 4 },
             { text: "建立个人知识管理体系", value: 5 }
         ]
     },
     {
         id: 138,
         dimension: "信息搜集",
         text: "在网络信息获取中，您会：",
         options: [
             { text: "浏览常用网站", value: 1 },
             { text: "搜索相关信息", value: 2 },
             { text: "使用多种信息源", value: 3 },
             { text: "建立信息获取网络", value: 4 },
             { text: "构建智能信息聚合系统", value: 5 }
         ]
     },
     {
         id: 139,
         dimension: "信息搜集",
         text: "对于内部信息共享，您会：",
         options: [
             { text: "获取必要信息", value: 1 },
             { text: "参与信息交流", value: 2 },
             { text: "主动分享有价值信息", value: 3 },
             { text: "建立信息共享机制", value: 4 },
             { text: "构建组织知识网络", value: 5 }
         ]
     },
     {
         id: 140,
         dimension: "信息搜集",
         text: "在信息验证方面，您会：",
         options: [
             { text: "接受获得的信息", value: 1 },
             { text: "简单核实信息", value: 2 },
             { text: "多渠道验证信息", value: 3 },
             { text: "建立信息验证机制", value: 4 },
             { text: "构建信息可信度评估体系", value: 5 }
         ]
     },
     {
         id: 141,
         dimension: "信息搜集",
         text: "对于历史数据，您会：",
         options: [
             { text: "偶尔参考历史数据", value: 1 },
             { text: "查阅相关历史记录", value: 2 },
             { text: "系统分析历史趋势", value: 3 },
             { text: "建立历史数据库", value: 4 },
             { text: "构建历史数据智能分析系统", value: 5 }
         ]
     },
     {
         id: 142,
         dimension: "信息搜集",
         text: "在跨部门信息获取中，您会：",
         options: [
             { text: "获取本部门信息", value: 1 },
             { text: "了解相关部门情况", value: 2 },
             { text: "主动收集跨部门信息", value: 3 },
             { text: "建立跨部门信息网络", value: 4 },
             { text: "构建全组织信息生态", value: 5 }
         ]
     },
     {
         id: 143,
         dimension: "信息搜集",
         text: "对于外部专家意见，您会：",
         options: [
             { text: "偶尔咨询专家", value: 1 },
             { text: "寻求专业建议", value: 2 },
             { text: "定期咨询外部专家", value: 3 },
             { text: "建立专家咨询网络", value: 4 },
             { text: "构建智囊团支撑体系", value: 5 }
         ]
     },
     {
         id: 144,
         dimension: "信息搜集",
         text: "在信息整理方面，您会：",
         options: [
             { text: "简单记录信息", value: 1 },
             { text: "分类整理信息", value: 2 },
             { text: "系统化整理信息", value: 3 },
             { text: "建立信息管理体系", value: 4 },
             { text: "构建智能信息处理平台", value: 5 }
         ]
     },
     {
         id: 145,
         dimension: "信息搜集",
         text: "对于信息时效性，您会：",
         options: [
             { text: "使用现有信息", value: 1 },
             { text: "关注信息更新", value: 2 },
             { text: "主动获取最新信息", value: 3 },
             { text: "建立信息更新机制", value: 4 },
             { text: "构建实时信息监控系统", value: 5 }
         ]
     },
     {
         id: 146,
         dimension: "信息搜集",
         text: "在信息质量控制中，您会：",
         options: [
             { text: "使用获得的信息", value: 1 },
             { text: "检查信息准确性", value: 2 },
             { text: "评估信息质量", value: 3 },
             { text: "建立质量控制标准", value: 4 },
             { text: "构建信息质量保障体系", value: 5 }
         ]
     },
     {
         id: 147,
         dimension: "信息搜集",
         text: "对于信息安全，您会：",
         options: [
             { text: "按规定使用信息", value: 1 },
             { text: "注意信息保密", value: 2 },
             { text: "建立信息安全意识", value: 3 },
             { text: "制定信息安全措施", value: 4 },
             { text: "构建信息安全防护体系", value: 5 }
         ]
     },
     {
         id: 148,
         dimension: "信息搜集",
         text: "在信息应用方面，您会：",
         options: [
             { text: "直接使用收集的信息", value: 1 },
             { text: "分析信息后应用", value: 2 },
             { text: "深度挖掘信息价值", value: 3 },
             { text: "建立信息应用模型", value: 4 },
             { text: "构建信息价值创造体系", value: 5 }
         ]
     },
     {
         id: 149,
         dimension: "信息搜集",
         text: "对于信息反馈，您会：",
         options: [
             { text: "接受信息反馈", value: 1 },
             { text: "分析反馈内容", value: 2 },
             { text: "主动寻求反馈", value: 3 },
             { text: "建立反馈收集机制", value: 4 },
             { text: "构建信息反馈优化循环", value: 5 }
         ]
     },
     {
         id: 150,
         dimension: "信息搜集",
         text: "在信息创新方面，您会：",
         options: [
             { text: "使用传统信息渠道", value: 1 },
             { text: "尝试新的信息来源", value: 2 },
             { text: "创新信息收集方法", value: 3 },
             { text: "开发信息收集工具", value: 4 },
             { text: "构建颠覆性信息获取模式", value: 5 }
         ]
     },

     // ⑧说服能力 (30题)
     {
         id: 151,
         dimension: "说服能力",
         text: "在说服他人时，您会：",
         options: [
             { text: "直接表达自己的观点", value: 1 },
             { text: "提供相关事实和数据", value: 2 },
             { text: "运用逻辑推理和论证", value: 3 },
             { text: "结合情感和理性双重说服", value: 4 },
             { text: "创造共赢的说服策略", value: 5 }
         ]
     },
     {
         id: 152,
         dimension: "说服能力",
         text: "面对不同意见时，您会：",
         options: [
             { text: "坚持自己的立场", value: 1 },
             { text: "倾听对方观点", value: 2 },
             { text: "寻找共同点", value: 3 },
             { text: "整合双方观点形成新方案", value: 4 },
             { text: "引导达成更高层次的共识", value: 5 }
         ]
     },
     {
         id: 153,
         dimension: "说服能力",
         text: "在演讲或汇报中，您会：",
         options: [
             { text: "按准备的内容进行", value: 1 },
             { text: "根据听众反应调整", value: 2 },
             { text: "运用多种表达技巧", value: 3 },
             { text: "创造互动和参与感", value: 4 },
             { text: "让听众产生行动的冲动", value: 5 }
         ]
     },
     {
         id: 154,
         dimension: "说服能力",
         text: "对于复杂问题的解释，您会：",
         options: [
             { text: "按原样解释", value: 1 },
             { text: "简化表达方式", value: 2 },
             { text: "运用类比和比喻", value: 3 },
             { text: "分层次递进式解释", value: 4 },
             { text: "让复杂问题变得生动易懂", value: 5 }
         ]
     },
     {
         id: 155,
         dimension: "说服能力",
         text: "在谈判中，您会：",
         options: [
             { text: "明确表达底线", value: 1 },
             { text: "寻找双方利益点", value: 2 },
             { text: "运用多种谈判策略", value: 3 },
             { text: "创造价值最大化方案", value: 4 },
             { text: "达成超越预期的共赢结果", value: 5 }
         ]
     },
     {
         id: 156,
         dimension: "说服能力",
         text: "面对抗拒情绪时，您会：",
         options: [
             { text: "继续坚持说服", value: 1 },
             { text: "了解抗拒原因", value: 2 },
             { text: "调整说服策略", value: 3 },
             { text: "化解抗拒情绪", value: 4 },
             { text: "将抗拒转化为合作动力", value: 5 }
         ]
     },
     {
         id: 157,
         dimension: "说服能力",
         text: "在建立信任方面，您会：",
         options: [
             { text: "保持诚实可靠", value: 1 },
             { text: "展示专业能力", value: 2 },
             { text: "主动建立关系", value: 3 },
             { text: "创造信任体验", value: 4 },
             { text: "成为值得信赖的伙伴", value: 5 }
         ]
     },
     {
         id: 158,
         dimension: "说服能力",
         text: "对于不同性格的人，您会：",
         options: [
             { text: "用同样的方式沟通", value: 1 },
             { text: "观察对方特点", value: 2 },
             { text: "调整沟通风格", value: 3 },
             { text: "运用个性化说服策略", value: 4 },
             { text: "让每个人都感到被理解", value: 5 }
         ]
     },
     {
         id: 159,
         dimension: "说服能力",
         text: "在处理异议时，您会：",
         options: [
             { text: "直接反驳异议", value: 1 },
             { text: "认真听取异议", value: 2 },
             { text: "分析异议背后的原因", value: 3 },
             { text: "将异议转化为讨论点", value: 4 },
             { text: "让异议成为达成共识的桥梁", value: 5 }
         ]
     },
     {
         id: 160,
         dimension: "说服能力",
         text: "在时间有限的情况下，您会：",
         options: [
             { text: "快速表达要点", value: 1 },
             { text: "突出核心信息", value: 2 },
             { text: "运用高效说服技巧", value: 3 },
             { text: "在短时间内建立连接", value: 4 },
             { text: "让简短交流产生深远影响", value: 5 }
         ]
     },
     {
         id: 161,
         dimension: "说服能力",
         text: "对于群体说服，您会：",
         options: [
             { text: "对所有人说同样的话", value: 1 },
             { text: "关注群体整体反应", value: 2 },
             { text: "识别关键影响者", value: 3 },
             { text: "运用群体动力学", value: 4 },
             { text: "让群体形成一致行动", value: 5 }
         ]
     },
     {
         id: 162,
         dimension: "说服能力",
         text: "在跨文化沟通中，您会：",
         options: [
             { text: "用自己熟悉的方式", value: 1 },
             { text: "了解文化差异", value: 2 },
             { text: "尊重文化背景", value: 3 },
             { text: "运用文化智慧", value: 4 },
             { text: "创造跨文化共鸣", value: 5 }
         ]
     },
     {
         id: 163,
         dimension: "说服能力",
         text: "在使用数据支持时，您会：",
         options: [
             { text: "提供基本数据", value: 1 },
             { text: "选择有力数据", value: 2 },
             { text: "让数据说话", value: 3 },
             { text: "将数据转化为故事", value: 4 },
             { text: "让数据产生情感共鸣", value: 5 }
         ]
     },
     {
         id: 164,
         dimension: "说服能力",
         text: "对于情感诉求，您会：",
         options: [
             { text: "主要依靠理性论证", value: 1 },
             { text: "适当运用情感元素", value: 2 },
             { text: "平衡理性和感性", value: 3 },
             { text: "创造情感体验", value: 4 },
             { text: "让情感成为行动的驱动力", value: 5 }
         ]
     },
     {
         id: 165,
         dimension: "说服能力",
         text: "在处理复杂利益关系时，您会：",
         options: [
             { text: "关注自己的利益", value: 1 },
             { text: "考虑各方利益", value: 2 },
             { text: "寻找利益平衡点", value: 3 },
             { text: "创造共同利益", value: 4 },
             { text: "让所有人都成为赢家", value: 5 }
         ]
     },
     {
         id: 166,
         dimension: "说服能力",
         text: "在面对权威人士时，您会：",
         options: [
             { text: "保持谦逊态度", value: 1 },
             { text: "展示专业素养", value: 2 },
             { text: "建立平等对话", value: 3 },
             { text: "赢得专业认可", value: 4 },
             { text: "成为被尊重的对话者", value: 5 }
         ]
     },
     {
         id: 167,
         dimension: "说服能力",
         text: "对于长期说服过程，您会：",
         options: [
             { text: "保持一致信息", value: 1 },
             { text: "分阶段推进", value: 2 },
             { text: "建立持续影响", value: 3 },
             { text: "培养深度认同", value: 4 },
             { text: "让对方成为主动倡导者", value: 5 }
         ]
     },
     {
         id: 168,
         dimension: "说服能力",
         text: "在使用案例时，您会：",
         options: [
             { text: "提供相关案例", value: 1 },
             { text: "选择典型案例", value: 2 },
             { text: "让案例生动具体", value: 3 },
             { text: "创造案例共鸣", value: 4 },
             { text: "让案例成为行动指南", value: 5 }
         ]
     },
     {
         id: 169,
         dimension: "说服能力",
         text: "对于反馈和调整，您会：",
         options: [
             { text: "按原计划进行", value: 1 },
             { text: "根据反馈调整", value: 2 },
             { text: "主动寻求反馈", value: 3 },
             { text: "持续优化策略", value: 4 },
             { text: "让说服过程成为共创过程", value: 5 }
         ]
     },
     {
         id: 170,
         dimension: "说服能力",
         text: "在建立共同愿景时，您会：",
         options: [
             { text: "描述自己的愿景", value: 1 },
             { text: "了解对方期望", value: 2 },
             { text: "整合共同目标", value: 3 },
             { text: "创造激励人心的愿景", value: 4 },
             { text: "让愿景成为共同的使命", value: 5 }
         ]
     },
     {
         id: 171,
         dimension: "说服能力",
         text: "对于说服效果评估，您会：",
         options: [
             { text: "看对方是否同意", value: 1 },
             { text: "观察行为变化", value: 2 },
             { text: "跟踪长期效果", value: 3 },
             { text: "评估深层影响", value: 4 },
             { text: "让说服成为持续的正向循环", value: 5 }
         ]
     },
     {
         id: 172,
         dimension: "说服能力",
         text: "在处理紧急说服任务时，您会：",
         options: [
             { text: "快速表达关键点", value: 1 },
             { text: "抓住核心需求", value: 2 },
             { text: "运用高效技巧", value: 3 },
             { text: "在压力下保持影响力", value: 4 },
             { text: "让紧急情况成为突破机会", value: 5 }
         ]
     },
     {
         id: 173,
         dimension: "说服能力",
         text: "对于说服技能提升，您会：",
         options: [
             { text: "依靠经验积累", value: 1 },
             { text: "学习说服技巧", value: 2 },
             { text: "练习和反思", value: 3 },
             { text: "持续创新方法", value: 4 },
             { text: "成为说服艺术的大师", value: 5 }
         ]
     },
     {
         id: 174,
         dimension: "说服能力",
         text: "在团队说服中，您会：",
         options: [
             { text: "发表个人观点", value: 1 },
             { text: "协调团队立场", value: 2 },
             { text: "发挥集体智慧", value: 3 },
             { text: "创造团队说服力", value: 4 },
             { text: "让团队成为说服的强大力量", value: 5 }
         ]
     },
     {
         id: 175,
         dimension: "说服能力",
         text: "对于说服伦理，您会：",
         options: [
             { text: "关注说服效果", value: 1 },
             { text: "坚持诚实原则", value: 2 },
             { text: "考虑各方利益", value: 3 },
             { text: "追求正向影响", value: 4 },
             { text: "让说服成为创造价值的工具", value: 5 }
         ]
     },
     {
         id: 176,
         dimension: "说服能力",
         text: "在说服创新方面，您会：",
         options: [
             { text: "使用传统方法", value: 1 },
             { text: "尝试新的方式", value: 2 },
             { text: "创新说服策略", value: 3 },
             { text: "引领说服趋势", value: 4 },
             { text: "重新定义说服的可能性", value: 5 }
         ]
     },
     {
         id: 177,
         dimension: "说服能力",
         text: "对于说服影响力，您会：",
         options: [
             { text: "在当前场景发挥作用", value: 1 },
             { text: "扩大影响范围", value: 2 },
             { text: "建立持续影响", value: 3 },
             { text: "创造深远影响", value: 4 },
             { text: "让说服力成为改变世界的力量", value: 5 }
         ]
     },
     {
         id: 178,
         dimension: "说服能力",
         text: "在说服传承方面，您会：",
         options: [
             { text: "保持个人技能", value: 1 },
             { text: "分享说服经验", value: 2 },
             { text: "培养他人能力", value: 3 },
             { text: "建立说服文化", value: 4 },
             { text: "让说服智慧代代相传", value: 5 }
         ]
     },
     {
         id: 179,
         dimension: "说服能力",
         text: "对于说服的未来发展，您会：",
         options: [
             { text: "维持现有水平", value: 1 },
             { text: "持续学习提升", value: 2 },
             { text: "探索新的可能", value: 3 },
             { text: "引领发展方向", value: 4 },
             { text: "开创说服的新时代", value: 5 }
         ]
     },
     {
         id: 180,
         dimension: "说服能力",
         text: "在说服成果应用中，您会：",
         options: [
             { text: "实现当前目标", value: 1 },
             { text: "扩大应用范围", value: 2 },
             { text: "创造更大价值", value: 3 },
             { text: "产生系统性影响", value: 4 },
             { text: "让说服成果造福更多人", value: 5 }
         ]
     },

     // ⑨系统思维 (30题)
     {
         id: 181,
         dimension: "系统思维",
         text: "面对复杂问题时，您会：",
         options: [
             { text: "关注问题本身", value: 1 },
             { text: "分析问题背景", value: 2 },
             { text: "考虑相关因素", value: 3 },
             { text: "从系统角度分析", value: 4 },
             { text: "构建全局解决方案", value: 5 }
         ]
     },
     {
         id: 182,
         dimension: "系统思维",
         text: "在制定计划时，您会：",
         options: [
             { text: "制定基本计划", value: 1 },
             { text: "考虑执行步骤", value: 2 },
             { text: "预见可能问题", value: 3 },
             { text: "设计系统性方案", value: 4 },
             { text: "创建自适应计划体系", value: 5 }
         ]
     },
     {
         id: 183,
         dimension: "系统思维",
         text: "对于变化管理，您会：",
         options: [
             { text: "应对当前变化", value: 1 },
             { text: "分析变化影响", value: 2 },
             { text: "制定应对策略", value: 3 },
             { text: "建立变化管理体系", value: 4 },
             { text: "创造变化驱动的发展模式", value: 5 }
         ]
     },
     {
         id: 184,
         dimension: "系统思维",
         text: "在资源配置方面，您会：",
         options: [
             { text: "按需分配资源", value: 1 },
             { text: "优化资源使用", value: 2 },
             { text: "统筹资源配置", value: 3 },
             { text: "建立资源协同体系", value: 4 },
             { text: "创造资源增值循环", value: 5 }
         ]
     },
     {
         id: 185,
         dimension: "系统思维",
         text: "对于风险管理，您会：",
         options: [
             { text: "识别明显风险", value: 1 },
             { text: "评估风险影响", value: 2 },
             { text: "制定风险预案", value: 3 },
             { text: "建立风险防控体系", value: 4 },
             { text: "将风险转化为机遇", value: 5 }
         ]
     },
     {
         id: 186,
         dimension: "系统思维",
         text: "在流程优化中，您会：",
         options: [
             { text: "改进单个环节", value: 1 },
             { text: "优化关键流程", value: 2 },
             { text: "整合相关流程", value: 3 },
             { text: "重构流程体系", value: 4 },
             { text: "创造智能化流程生态", value: 5 }
         ]
     },
     {
         id: 187,
         dimension: "系统思维",
         text: "对于信息整合，您会：",
         options: [
             { text: "收集相关信息", value: 1 },
             { text: "分类整理信息", value: 2 },
             { text: "分析信息关联", value: 3 },
             { text: "构建信息网络", value: 4 },
             { text: "创造信息智慧体系", value: 5 }
         ]
     },
     {
         id: 188,
         dimension: "系统思维",
         text: "在决策制定时，您会：",
         options: [
             { text: "基于现有信息决策", value: 1 },
             { text: "收集更多信息", value: 2 },
             { text: "综合多方面因素", value: 3 },
             { text: "运用系统决策模型", value: 4 },
             { text: "创建动态决策体系", value: 5 }
         ]
     },
     {
         id: 189,
         dimension: "系统思维",
         text: "对于团队协作，您会：",
         options: [
             { text: "完成个人任务", value: 1 },
             { text: "配合团队工作", value: 2 },
             { text: "促进团队协同", value: 3 },
             { text: "构建协作体系", value: 4 },
             { text: "创造集体智慧网络", value: 5 }
         ]
     },
     {
         id: 190,
         dimension: "系统思维",
         text: "在创新管理中，您会：",
         options: [
             { text: "提出创新想法", value: 1 },
             { text: "推动创新实施", value: 2 },
             { text: "建立创新机制", value: 3 },
             { text: "构建创新生态", value: 4 },
             { text: "引领创新范式变革", value: 5 }
         ]
     },
     {
         id: 191,
         dimension: "系统思维",
         text: "对于质量管理，您会：",
         options: [
             { text: "确保基本质量", value: 1 },
             { text: "持续改进质量", value: 2 },
             { text: "建立质量标准", value: 3 },
             { text: "构建质量体系", value: 4 },
             { text: "创造卓越质量文化", value: 5 }
         ]
     },
     {
         id: 192,
         dimension: "系统思维",
         text: "在时间管理方面，您会：",
         options: [
             { text: "按时完成任务", value: 1 },
             { text: "优化时间安排", value: 2 },
             { text: "统筹时间资源", value: 3 },
             { text: "建立时间管理体系", value: 4 },
             { text: "创造时间价值最大化模式", value: 5 }
         ]
     },
     {
         id: 193,
         dimension: "系统思维",
         text: "对于学习发展，您会：",
         options: [
             { text: "学习必要知识", value: 1 },
             { text: "持续学习提升", value: 2 },
             { text: "构建知识体系", value: 3 },
             { text: "建立学习生态", value: 4 },
             { text: "创造智慧传承体系", value: 5 }
         ]
     },
     {
         id: 194,
         dimension: "系统思维",
         text: "在绩效管理中，您会：",
         options: [
             { text: "关注个人绩效", value: 1 },
             { text: "提升团队绩效", value: 2 },
             { text: "优化绩效体系", value: 3 },
             { text: "构建绩效生态", value: 4 },
             { text: "创造价值创造体系", value: 5 }
         ]
     },
     {
         id: 195,
         dimension: "系统思维",
         text: "对于沟通协调，您会：",
         options: [
             { text: "进行必要沟通", value: 1 },
             { text: "加强沟通效果", value: 2 },
             { text: "建立沟通机制", value: 3 },
             { text: "构建沟通网络", value: 4 },
             { text: "创造协同共振效应", value: 5 }
         ]
     },
     {
         id: 196,
         dimension: "系统思维",
         text: "在文化建设方面，您会：",
         options: [
             { text: "遵循现有文化", value: 1 },
             { text: "推动文化改进", value: 2 },
             { text: "塑造文化氛围", value: 3 },
             { text: "构建文化体系", value: 4 },
             { text: "创造文化创新生态", value: 5 }
         ]
     },
     {
         id: 197,
         dimension: "系统思维",
         text: "对于技术应用，您会：",
         options: [
             { text: "使用现有技术", value: 1 },
             { text: "学习新技术", value: 2 },
             { text: "整合技术资源", value: 3 },
             { text: "构建技术平台", value: 4 },
             { text: "引领技术变革", value: 5 }
         ]
     },
     {
         id: 198,
         dimension: "系统思维",
         text: "在战略规划中，您会：",
         options: [
             { text: "制定基本规划", value: 1 },
             { text: "考虑多种因素", value: 2 },
             { text: "构建战略框架", value: 3 },
             { text: "建立战略体系", value: 4 },
             { text: "创造战略生态优势", value: 5 }
         ]
     },
     {
         id: 199,
         dimension: "系统思维",
         text: "对于客户关系，您会：",
         options: [
             { text: "维护客户关系", value: 1 },
             { text: "提升客户满意度", value: 2 },
             { text: "建立客户体系", value: 3 },
             { text: "构建客户生态", value: 4 },
             { text: "创造客户价值共创模式", value: 5 }
         ]
     },
     {
         id: 200,
         dimension: "系统思维",
         text: "在供应链管理中，您会：",
         options: [
             { text: "管理直接供应商", value: 1 },
             { text: "优化供应链环节", value: 2 },
             { text: "整合供应链资源", value: 3 },
             { text: "构建供应链网络", value: 4 },
             { text: "创造供应链生态价值", value: 5 }
         ]
     },
     {
         id: 201,
         dimension: "系统思维",
         text: "对于数据分析，您会：",
         options: [
             { text: "分析基础数据", value: 1 },
             { text: "深入数据挖掘", value: 2 },
             { text: "建立分析模型", value: 3 },
             { text: "构建数据体系", value: 4 },
             { text: "创造数据驱动的智慧系统", value: 5 }
         ]
     },
     {
         id: 202,
         dimension: "系统思维",
         text: "在项目管理中，您会：",
         options: [
             { text: "完成项目任务", value: 1 },
             { text: "优化项目执行", value: 2 },
             { text: "统筹项目资源", value: 3 },
             { text: "构建项目体系", value: 4 },
             { text: "创造项目价值生态", value: 5 }
         ]
     },
     {
         id: 203,
         dimension: "系统思维",
         text: "对于组织发展，您会：",
         options: [
             { text: "适应组织要求", value: 1 },
             { text: "推动组织改进", value: 2 },
             { text: "优化组织结构", value: 3 },
             { text: "构建组织能力", value: 4 },
             { text: "引领组织进化", value: 5 }
         ]
     },
     {
         id: 204,
         dimension: "系统思维",
         text: "在市场分析方面，您会：",
         options: [
             { text: "了解基本市场信息", value: 1 },
             { text: "深入分析市场趋势", value: 2 },
             { text: "构建市场模型", value: 3 },
             { text: "建立市场洞察体系", value: 4 },
             { text: "创造市场预见能力", value: 5 }
         ]
     },
     {
         id: 205,
         dimension: "系统思维",
         text: "对于竞争策略，您会：",
         options: [
             { text: "应对竞争挑战", value: 1 },
             { text: "制定竞争策略", value: 2 },
             { text: "构建竞争优势", value: 3 },
             { text: "建立竞争生态", value: 4 },
             { text: "超越竞争创造新格局", value: 5 }
         ]
     },
     {
         id: 206,
         dimension: "系统思维",
         text: "在成本控制方面，您会：",
         options: [
             { text: "控制直接成本", value: 1 },
             { text: "优化成本结构", value: 2 },
             { text: "建立成本管理体系", value: 3 },
             { text: "构建价值成本模型", value: 4 },
             { text: "创造成本价值转化机制", value: 5 }
         ]
     },
     {
         id: 207,
         dimension: "系统思维",
         text: "对于可持续发展，您会：",
         options: [
             { text: "关注当前发展", value: 1 },
             { text: "考虑长远影响", value: 2 },
             { text: "平衡多重目标", value: 3 },
             { text: "构建可持续体系", value: 4 },
             { text: "创造再生发展模式", value: 5 }
         ]
     },
     {
         id: 208,
         dimension: "系统思维",
         text: "在危机管理中，您会：",
         options: [
             { text: "应对当前危机", value: 1 },
             { text: "制定应急预案", value: 2 },
             { text: "建立危机管理机制", value: 3 },
             { text: "构建韧性体系", value: 4 },
             { text: "将危机转化为发展机遇", value: 5 }
         ]
     },
     {
         id: 209,
         dimension: "系统思维",
         text: "对于系统优化，您会：",
         options: [
             { text: "改进局部问题", value: 1 },
             { text: "优化关键环节", value: 2 },
             { text: "整体系统改进", value: 3 },
             { text: "重构系统架构", value: 4 },
             { text: "创造自进化系统", value: 5 }
         ]
     },
     {
         id: 210,
         dimension: "系统思维",
         text: "在系统思维应用中，您会：",
         options: [
             { text: "运用基本方法", value: 1 },
             { text: "掌握系统工具", value: 2 },
             { text: "建立思维模式", value: 3 },
             { text: "构建思维体系", value: 4 },
             { text: "成为系统思维的引领者", value: 5 }
         ]
     },

     // ⑩压力管理 (30题)
     {
         id: 211,
         dimension: "压力管理",
         text: "面对工作压力时，您会：",
         options: [
             { text: "承受压力继续工作", value: 1 },
             { text: "寻找缓解方法", value: 2 },
             { text: "调整工作方式", value: 3 },
             { text: "将压力转化为动力", value: 4 },
             { text: "在压力中实现突破", value: 5 }
         ]
     },
     {
         id: 212,
         dimension: "压力管理",
         text: "在时间紧迫的情况下，您会：",
         options: [
             { text: "加快工作节奏", value: 1 },
             { text: "优化工作流程", value: 2 },
             { text: "合理分配时间", value: 3 },
             { text: "保持冷静高效", value: 4 },
             { text: "在紧迫中创造奇迹", value: 5 }
         ]
     },
     {
         id: 213,
         dimension: "压力管理",
         text: "对于多任务处理，您会：",
         options: [
             { text: "逐一完成任务", value: 1 },
             { text: "分清任务优先级", value: 2 },
             { text: "统筹安排任务", value: 3 },
             { text: "高效并行处理", value: 4 },
             { text: "在复杂中游刃有余", value: 5 }
         ]
     },
     {
         id: 214,
         dimension: "压力管理",
         text: "面对挫折时，您会：",
         options: [
             { text: "接受挫折结果", value: 1 },
             { text: "分析挫折原因", value: 2 },
             { text: "调整应对策略", value: 3 },
             { text: "从挫折中成长", value: 4 },
             { text: "让挫折成为成功的垫脚石", value: 5 }
         ]
     },
     {
         id: 215,
         dimension: "压力管理",
         text: "在高强度工作中，您会：",
         options: [
             { text: "坚持完成工作", value: 1 },
             { text: "注意劳逸结合", value: 2 },
             { text: "保持工作质量", value: 3 },
             { text: "维持最佳状态", value: 4 },
             { text: "在高强度中超越自我", value: 5 }
         ]
     },
     {
         id: 216,
         dimension: "压力管理",
         text: "对于情绪管理，您会：",
         options: [
             { text: "控制负面情绪", value: 1 },
             { text: "调节情绪状态", value: 2 },
             { text: "保持情绪平衡", value: 3 },
             { text: "运用情绪智慧", value: 4 },
             { text: "让情绪成为成功的助力", value: 5 }
         ]
     },
     {
         id: 217,
         dimension: "压力管理",
         text: "在冲突处理中，您会：",
         options: [
             { text: "避免直接冲突", value: 1 },
             { text: "理性处理冲突", value: 2 },
             { text: "化解冲突矛盾", value: 3 },
             { text: "将冲突转化为合作", value: 4 },
             { text: "在冲突中创造共赢", value: 5 }
         ]
     },
     {
         id: 218,
         dimension: "压力管理",
         text: "对于工作生活平衡，您会：",
         options: [
             { text: "专注工作任务", value: 1 },
             { text: "兼顾工作生活", value: 2 },
             { text: "合理安排时间", value: 3 },
             { text: "实现动态平衡", value: 4 },
             { text: "让工作生活相互促进", value: 5 }
         ]
     },
     {
         id: 219,
         dimension: "压力管理",
         text: "在面对批评时，您会：",
         options: [
             { text: "接受批评意见", value: 1 },
             { text: "反思自身问题", value: 2 },
             { text: "积极改进提升", value: 3 },
             { text: "将批评转化为动力", value: 4 },
             { text: "在批评中实现蜕变", value: 5 }
         ]
     },
     {
         id: 220,
         dimension: "压力管理",
         text: "对于不确定性，您会：",
         options: [
             { text: "等待明确信息", value: 1 },
             { text: "收集更多信息", value: 2 },
             { text: "制定应对预案", value: 3 },
             { text: "在不确定中保持稳定", value: 4 },
             { text: "将不确定转化为机遇", value: 5 }
         ]
     },
     {
         id: 221,
         dimension: "压力管理",
         text: "在团队压力中，您会：",
         options: [
             { text: "承担个人责任", value: 1 },
             { text: "与团队共同承担", value: 2 },
             { text: "协调团队资源", value: 3 },
             { text: "提升团队抗压能力", value: 4 },
             { text: "让团队在压力中凝聚", value: 5 }
         ]
     },
     {
         id: 222,
         dimension: "压力管理",
         text: "对于身体健康，您会：",
         options: [
             { text: "关注基本健康", value: 1 },
             { text: "保持健康习惯", value: 2 },
             { text: "积极锻炼身体", value: 3 },
             { text: "维持最佳体能", value: 4 },
             { text: "让健康成为成功的基石", value: 5 }
         ]
     },
     {
         id: 223,
         dimension: "压力管理",
         text: "在心理调适方面，您会：",
         options: [
             { text: "保持基本心态", value: 1 },
             { text: "调整心理状态", value: 2 },
             { text: "培养积极心态", value: 3 },
             { text: "建立心理韧性", value: 4 },
             { text: "拥有强大的内心力量", value: 5 }
         ]
     },
     {
         id: 224,
         dimension: "压力管理",
         text: "对于支持系统，您会：",
         options: [
             { text: "依靠个人能力", value: 1 },
             { text: "寻求必要帮助", value: 2 },
             { text: "建立支持网络", value: 3 },
             { text: "创造互助体系", value: 4 },
             { text: "成为他人的支持力量", value: 5 }
         ]
     },
     {
         id: 225,
         dimension: "压力管理",
         text: "在压力预防方面，您会：",
         options: [
             { text: "应对现有压力", value: 1 },
             { text: "识别压力源头", value: 2 },
             { text: "建立预防机制", value: 3 },
             { text: "构建抗压体系", value: 4 },
             { text: "创造无压力的工作环境", value: 5 }
         ]
     },
     {
         id: 226,
         dimension: "压力管理",
         text: "对于压力释放，您会：",
         options: [
             { text: "忍受压力积累", value: 1 },
             { text: "寻找释放方式", value: 2 },
             { text: "定期释放压力", value: 3 },
             { text: "建立释放机制", value: 4 },
             { text: "让压力成为成长的催化剂", value: 5 }
         ]
     },
     {
         id: 227,
         dimension: "压力管理",
         text: "在逆境应对中，您会：",
         options: [
             { text: "坚持度过逆境", value: 1 },
             { text: "寻找应对方法", value: 2 },
             { text: "在逆境中寻找机会", value: 3 },
             { text: "将逆境转化为优势", value: 4 },
             { text: "在逆境中实现逆袭", value: 5 }
         ]
     },
     {
         id: 228,
         dimension: "压力管理",
         text: "对于焦虑管理，您会：",
         options: [
             { text: "忍受焦虑情绪", value: 1 },
             { text: "缓解焦虑感受", value: 2 },
             { text: "管理焦虑情绪", value: 3 },
             { text: "将焦虑转化为专注", value: 4 },
             { text: "在焦虑中保持内心平静", value: 5 }
         ]
     },
     {
         id: 229,
         dimension: "压力管理",
         text: "在压力沟通中，您会：",
         options: [
             { text: "避免谈论压力", value: 1 },
             { text: "适当表达压力", value: 2 },
             { text: "有效沟通压力", value: 3 },
             { text: "通过沟通化解压力", value: 4 },
             { text: "让沟通成为减压的工具", value: 5 }
         ]
     },
     {
         id: 230,
         dimension: "压力管理",
         text: "对于压力学习，您会：",
         options: [
             { text: "从经验中学习", value: 1 },
             { text: "学习压力管理方法", value: 2 },
             { text: "不断提升抗压能力", value: 3 },
             { text: "建立压力管理体系", value: 4 },
             { text: "成为压力管理的专家", value: 5 }
         ]
     },
     {
         id: 231,
         dimension: "压力管理",
         text: "在压力创新方面，您会：",
         options: [
             { text: "使用传统方法", value: 1 },
             { text: "尝试新的方式", value: 2 },
             { text: "创新管理方法", value: 3 },
             { text: "引领管理趋势", value: 4 },
             { text: "重新定义压力管理", value: 5 }
         ]
     },
     {
         id: 232,
         dimension: "压力管理",
         text: "对于压力影响，您会：",
         options: [
             { text: "控制压力影响", value: 1 },
             { text: "减少负面影响", value: 2 },
             { text: "转化压力影响", value: 3 },
             { text: "创造正面影响", value: 4 },
             { text: "让压力成为成功的推动力", value: 5 }
         ]
     },
     {
         id: 233,
         dimension: "压力管理",
         text: "在压力传承方面，您会：",
         options: [
             { text: "保持个人经验", value: 1 },
             { text: "分享管理经验", value: 2 },
             { text: "培养他人能力", value: 3 },
             { text: "建立管理文化", value: 4 },
             { text: "让管理智慧代代相传", value: 5 }
         ]
     },
     {
         id: 234,
         dimension: "压力管理",
         text: "对于压力的未来发展，您会：",
         options: [
             { text: "维持现有水平", value: 1 },
             { text: "持续学习提升", value: 2 },
             { text: "探索新的可能", value: 3 },
             { text: "引领发展方向", value: 4 },
             { text: "开创压力管理的新时代", value: 5 }
         ]
     },
     {
         id: 235,
         dimension: "压力管理",
         text: "在压力成果应用中，您会：",
         options: [
             { text: "应用于个人发展", value: 1 },
             { text: "扩大应用范围", value: 2 },
             { text: "创造更大价值", value: 3 },
             { text: "产生系统性影响", value: 4 },
             { text: "让管理成果造福更多人", value: 5 }
         ]
     },
     {
         id: 236,
         dimension: "压力管理",
         text: "对于压力哲学，您会：",
         options: [
             { text: "接受压力存在", value: 1 },
             { text: "理解压力本质", value: 2 },
             { text: "建立压力观念", value: 3 },
             { text: "形成压力智慧", value: 4 },
             { text: "达到压力管理的最高境界", value: 5 }
         ]
     },
     {
         id: 237,
         dimension: "压力管理",
         text: "在压力艺术方面，您会：",
         options: [
             { text: "掌握基本技能", value: 1 },
             { text: "提升管理技巧", value: 2 },
             { text: "形成管理风格", value: 3 },
             { text: "达到艺术境界", value: 4 },
             { text: "成为压力管理的艺术大师", value: 5 }
         ]
     },
     {
         id: 238,
         dimension: "压力管理",
         text: "对于压力领导，您会：",
         options: [
             { text: "管理个人压力", value: 1 },
             { text: "帮助他人管理", value: 2 },
             { text: "引导团队管理", value: 3 },
             { text: "建立管理体系", value: 4 },
             { text: "成为压力管理的领导者", value: 5 }
         ]
     },
     {
         id: 239,
         dimension: "压力管理",
         text: "在压力变革中，您会：",
         options: [
             { text: "适应压力变化", value: 1 },
             { text: "推动管理改进", value: 2 },
             { text: "引领管理变革", value: 3 },
             { text: "创造变革模式", value: 4 },
             { text: "成为压力管理变革的先驱", value: 5 }
         ]
     },
     {
         id: 240,
         dimension: "压力管理",
         text: "对于压力管理的终极目标，您会：",
         options: [
             { text: "减少工作压力", value: 1 },
             { text: "提升抗压能力", value: 2 },
             { text: "实现压力平衡", value: 3 },
             { text: "达到压力自由", value: 4 },
             { text: "让压力成为生命的礼物", value: 5 }
         ]
     }

 ];

 // 导出题目数组
 if (typeof module !== 'undefined' && module.exports) {
     module.exports = allQuestions;
 } else if (typeof window !== 'undefined') {
     window.allQuestions = allQuestions;
 }