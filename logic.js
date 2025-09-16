// logic.js - 核心测评与评分逻辑

/**
 * 计算并生成测评报告
 * @param {Array} userAnswers - 用户答案数组，格式：[{questionId: 1, selectedValue: 3}, ...]
 * @param {Array} questions - 题目数组
 * @returns {Object} 完整的测评报告对象
 */
function calculateAndGenerateReport(userAnswers, questions) {
    // 1. 初始化各维度得分
    const dimensionScores = {
        '敢为性': 0,
        '培养下属': 0,
        '识人用人': 0,
        '客户导向': 0,
        '信息搜集': 0,
        '结果导向': 0,
        '团队合作': 0,
        '说服能力': 0,
        '系统思维': 0,
        '压力管理': 0
    };
    
    const dimensionCounts = {
        '敢为性': 0,
        '培养下属': 0,
        '识人用人': 0,
        '客户导向': 0,
        '信息搜集': 0,
        '结果导向': 0,
        '团队合作': 0,
        '说服能力': 0,
        '系统思维': 0,
        '压力管理': 0
    };

    // 2. 计算各维度得分
    userAnswers.forEach(answer => {
        const question = questions.find(q => q.id === answer.questionId);
        if (question && dimensionScores.hasOwnProperty(question.dimension)) {
            dimensionScores[question.dimension] += answer.selectedValue;
            dimensionCounts[question.dimension]++;
        }
    });

    // 3. 计算各维度平均分
    const dimensionAverages = {};
    let totalScore = 0;
    let totalQuestions = 0;

    Object.keys(dimensionScores).forEach(dimension => {
        if (dimensionCounts[dimension] > 0) {
            dimensionAverages[dimension] = dimensionScores[dimension] / dimensionCounts[dimension];
            totalScore += dimensionScores[dimension];
            totalQuestions += dimensionCounts[dimension];
        } else {
            dimensionAverages[dimension] = 0;
        }
    });

    // 4. 计算总平均分
    const overallAverage = totalQuestions > 0 ? totalScore / totalQuestions : 0;

    // 5. 确定优势和劣势维度
    const sortedDimensions = Object.entries(dimensionAverages)
        .sort(([,a], [,b]) => b - a);
    
    const strengths = sortedDimensions.slice(0, 3).map(([dimension, score]) => ({
        dimension,
        score: score.toFixed(2),
        description: getDimensionDescription(dimension, score)
    }));

    const weaknesses = sortedDimensions.slice(-3).reverse().map(([dimension, score]) => ({
        dimension,
        score: score.toFixed(2),
        description: getDimensionDescription(dimension, score)
    }));

    // 6. 生成各维度详细评语
    const dimensionReports = {};
    Object.entries(dimensionAverages).forEach(([dimension, score]) => {
        dimensionReports[dimension] = {
            score: score.toFixed(2),
            level: getScoreLevel(score),
            evaluation: getDimensionEvaluation(dimension, score),
            suggestions: getDimensionSuggestions(dimension, score)
        };
    });

    // 7. 生成综合建议
    const overallSuggestions = generateOverallSuggestions(dimensionAverages, strengths, weaknesses);

    // 8. 返回完整报告
    return {
        timestamp: new Date().toISOString(),
        totalScore: totalScore,
        totalQuestions: totalQuestions,
        overallAverage: overallAverage.toFixed(2),
        overallLevel: getScoreLevel(overallAverage),
        dimensionScores: dimensionAverages,
        dimensionReports: dimensionReports,
        strengths: strengths,
        weaknesses: weaknesses,
        overallSuggestions: overallSuggestions
    };
}

/**
 * 从完整题库中随机抽取指定数量的题目
 * @param {Array} allQuestions - 完整题库
 * @param {number} count - 需要抽取的题目数量
 * @returns {Array} 随机抽取的题目数组
 */
function drawRandomQuestions(allQuestions, count) {
    if (!Array.isArray(allQuestions) || allQuestions.length === 0) {
        return [];
    }
    
    if (count >= allQuestions.length) {
        return [...allQuestions];
    }
    
    const shuffled = [...allQuestions];
    
    // Fisher-Yates 洗牌算法
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled.slice(0, count);
}

// ===== 辅助函数 =====

/**
 * 根据分数获取等级
 * @param {number} score - 分数
 * @returns {string} 等级
 */
function getScoreLevel(score) {
    if (score >= 4.5) return '优秀';
    if (score >= 4.0) return '良好';
    if (score >= 3.5) return '中等';
    if (score >= 3.0) return '一般';
    return '待提升';
}

/**
 * 获取维度描述
 * @param {string} dimension - 维度名称
 * @param {number} score - 分数
 * @returns {string} 描述
 */
function getDimensionDescription(dimension, score) {
    const descriptions = {
        '敢为性': {
            high: '具备强烈的创新精神和冒险意识，敢于挑战现状，主动承担风险',
            medium: '在熟悉领域表现出一定的主动性，但在面对未知挑战时较为谨慎',
            low: '倾向于保守稳妥的做法，较少主动承担风险或尝试创新'
        },
        '培养下属': {
            high: '善于识别下属潜力，能够制定个性化发展计划，有效激励团队成长',
            medium: '能够关注下属发展，提供基本指导，但在个性化培养方面有待加强',
            low: '对下属培养关注不足，缺乏系统性的人才发展规划'
        },
        '识人用人': {
            high: '具备敏锐的人才识别能力，能够准确判断人员特质并合理配置',
            medium: '能够识别明显的人员特征，在人员配置上有一定经验',
            low: '在人才识别和配置方面经验不足，容易出现人岗不匹配'
        },
        '客户导向': {
            high: '始终以客户需求为中心，能够深度理解并超越客户期望',
            medium: '关注客户需求，能够提供满意的服务，但在深度挖掘需求方面有待提升',
            low: '客户意识较弱，更多关注内部流程而非客户体验'
        },
        '信息搜集': {
            high: '具备敏锐的信息嗅觉，能够快速获取、分析并应用关键信息',
            medium: '能够收集基本信息，但在信息分析和应用方面有待加强',
            low: '信息收集能力不足，缺乏主动获取和分析信息的意识'
        },
        '结果导向': {
            high: '目标明确，执行力强，能够持续关注结果并推动目标达成',
            medium: '有一定的目标意识，但在执行过程中容易受到干扰',
            low: '缺乏明确的结果导向，执行力有待提升'
        },
        '团队合作': {
            high: '善于协调各方资源，能够营造良好的团队氛围，促进协作效率',
            medium: '具备基本的团队协作能力，但在复杂情况下的协调能力有待提升',
            low: '团队协作意识不强，更倾向于独立工作'
        },
        '说服能力': {
            high: '具备强大的影响力和说服力，能够有效推动他人接受观点或建议',
            medium: '在熟悉的领域具备一定说服力，但面对不同观点时缺乏技巧',
            low: '说服能力较弱，难以有效影响他人的想法或行为'
        },
        '系统思维': {
            high: '具备全局视野，能够系统性分析问题并制定综合解决方案',
            medium: '能够从多个角度思考问题，但在系统性整合方面有待加强',
            low: '思维较为局限，缺乏系统性和全局性的思考能力'
        },
        '压力管理': {
            high: '在高压环境下能够保持冷静，将压力转化为动力，持续高效工作',
            medium: '能够应对一般压力，但在极端情况下可能影响工作效率',
            low: '抗压能力较弱，容易在压力下出现情绪波动或效率下降'
        }
    };

    const dimDesc = descriptions[dimension];
    if (!dimDesc) return '暂无描述';

    if (score >= 4.0) return dimDesc.high;
    if (score >= 3.0) return dimDesc.medium;
    return dimDesc.low;
}

/**
 * 获取维度评语
 * @param {string} dimension - 维度名称
 * @param {number} score - 分数
 * @returns {string} 评语
 */
function getDimensionEvaluation(dimension, score) {
    const evaluations = {
        '敢为性': {
            excellent: '您展现出卓越的创新精神和领导魄力，敢于在不确定中寻找机遇，是推动组织变革的重要力量。',
            good: '您具备良好的主动性和创新意识，在大多数情况下能够勇于承担责任和挑战。',
            average: '您在熟悉的环境中表现稳定，建议在安全范围内尝试更多创新和挑战。',
            poor: '建议培养更积极主动的工作态度，逐步提升面对挑战和变化的勇气。'
        },
        '培养下属': {
            excellent: '您是优秀的人才培养者，能够因材施教，激发下属潜能，为组织培养了大量人才。',
            good: '您关注下属成长，具备良好的指导能力，在人才培养方面表现出色。',
            average: '您对下属培养有一定关注，建议更系统地制定培养计划和跟踪机制。',
            poor: '建议加强对下属发展的关注，学习更多人才培养的方法和技巧。'
        },
        '识人用人': {
            excellent: '您具备敏锐的人才洞察力，能够准确识别人员特质并实现最优配置，是优秀的人力资源管理者。',
            good: '您在人才识别和使用方面有良好的判断力，能够较好地进行人员配置。',
            average: '您具备基本的识人能力，建议通过更多实践和学习提升人才判断的准确性。',
            poor: '建议加强对人员特质的观察和分析，学习更多识人用人的方法。'
        },
        '客户导向': {
            excellent: '您始终将客户放在首位，能够深度理解客户需求并创造超值体验，是客户关系的优秀管理者。',
            good: '您具备良好的客户服务意识，能够有效满足客户需求。',
            average: '您关注客户需求，建议更深入地了解客户期望，提升服务质量。',
            poor: '建议加强客户导向思维，更多从客户角度思考和行动。'
        },
        '信息搜集': {
            excellent: '您具备卓越的信息敏感度和分析能力，能够快速获取关键信息并转化为决策优势。',
            good: '您善于收集和分析信息，为决策提供了有力支持。',
            average: '您具备基本的信息收集能力，建议提升信息分析和应用的深度。',
            poor: '建议培养主动收集信息的习惯，提升信息分析和判断能力。'
        },
        '结果导向': {
            excellent: '您具备强烈的目标意识和卓越的执行力，能够持续推动目标达成，是结果的有力保障者。',
            good: '您目标明确，执行力强，能够有效推动工作目标的实现。',
            average: '您有一定的目标意识，建议加强执行过程的管控和结果跟踪。',
            poor: '建议树立更明确的目标导向，提升执行力和结果意识。'
        },
        '团队合作': {
            excellent: '您是优秀的团队协作者和组织者，能够有效整合资源，营造高效的协作环境。',
            good: '您具备良好的团队合作精神，能够与他人有效协作。',
            average: '您具备基本的团队协作能力，建议在复杂协作中提升协调技巧。',
            poor: '建议加强团队协作意识，学习更多协作沟通的方法。'
        },
        '说服能力': {
            excellent: '您具备卓越的影响力和说服力，能够有效推动他人接受观点，是优秀的沟通者和影响者。',
            good: '您具备良好的说服能力，能够在多数情况下有效影响他人。',
            average: '您具备一定的说服技巧，建议在面对不同观点时提升沟通策略。',
            poor: '建议加强沟通技巧的学习，提升说服和影响他人的能力。'
        },
        '系统思维': {
            excellent: '您具备卓越的系统思维能力，能够统筹全局，系统性地分析和解决复杂问题。',
            good: '您具备良好的系统思维，能够从多角度分析问题。',
            average: '您具备一定的系统思维，建议在复杂问题分析中提升整体性思考。',
            poor: '建议培养系统性思维，学习从全局角度分析和解决问题。'
        },
        '压力管理': {
            excellent: '您具备卓越的抗压能力，能够在高压环境下保持最佳状态，将压力转化为成长动力。',
            good: '您具备良好的压力管理能力，能够在多数情况下保持稳定表现。',
            average: '您具备基本的抗压能力，建议学习更多压力管理的方法和技巧。',
            poor: '建议加强压力管理能力，学习在压力下保持冷静和效率的方法。'
        }
    };

    const dimEval = evaluations[dimension];
    if (!dimEval) return '暂无评语';

    if (score >= 4.5) return dimEval.excellent;
    if (score >= 3.5) return dimEval.good;
    if (score >= 2.5) return dimEval.average;
    return dimEval.poor;
}

/**
 * 获取维度建议
 * @param {string} dimension - 维度名称
 * @param {number} score - 分数
 * @returns {Array} 建议数组
 */
function getDimensionSuggestions(dimension, score) {
    const suggestions = {
        '敢为性': {
            high: [
                '继续保持创新精神，可以考虑在更大范围内推广您的创新理念',
                '分享您的成功经验，帮助团队成员提升创新能力',
                '在重大决策中发挥更大的影响力，推动组织变革'
            ],
            medium: [
                '尝试在小范围内进行创新实验，积累成功经验',
                '主动承担一些具有挑战性的项目，提升风险承担能力',
                '学习成功创新者的经验，拓展创新思维'
            ],
            low: [
                '从小的改进开始，逐步培养创新意识',
                '参与创新培训或工作坊，学习创新方法',
                '寻找创新导师，获得指导和支持'
            ]
        },
        '培养下属': {
            high: [
                '建立更系统的人才培养体系，扩大培养影响力',
                '总结培养经验，形成可复制的培养模式',
                '考虑成为组织的人才发展专家或导师'
            ],
            medium: [
                '制定更个性化的下属发展计划',
                '增加与下属的一对一沟通频次',
                '学习更多人才培养的方法和工具'
            ],
            low: [
                '开始关注下属的职业发展需求',
                '学习基本的辅导和反馈技巧',
                '参加人才管理相关的培训课程'
            ]
        },
        '识人用人': {
            high: [
                '建立人才评估和配置的标准化流程',
                '分享识人用人的经验和方法',
                '参与组织的人才战略制定'
            ],
            medium: [
                '学习更多人才评估的工具和方法',
                '增加对不同类型人才的了解',
                '在人员配置决策中承担更多责任'
            ],
            low: [
                '学习基本的人才识别方法',
                '观察和分析团队成员的特质',
                '参加人力资源管理相关培训'
            ]
        },
        '客户导向': {
            high: [
                '建立客户体验管理体系',
                '分享客户服务的最佳实践',
                '推动组织的客户导向文化建设'
            ],
            medium: [
                '深入了解客户的潜在需求',
                '建立更完善的客户反馈机制',
                '提升客户关系管理技能'
            ],
            low: [
                '增加与客户的直接接触机会',
                '学习客户服务的基本技能',
                '培养从客户角度思考问题的习惯'
            ]
        },
        '信息搜集': {
            high: [
                '建立信息收集和分析的标准化流程',
                '分享信息分析的方法和经验',
                '成为组织的信息分析专家'
            ],
            medium: [
                '扩大信息来源的多样性',
                '提升信息分析和判断的准确性',
                '学习更多数据分析工具'
            ],
            low: [
                '培养主动收集信息的习惯',
                '学习基本的信息分析方法',
                '建立个人的信息收集渠道'
            ]
        },
        '结果导向': {
            high: [
                '建立更完善的目标管理体系',
                '分享目标达成的经验和方法',
                '推动组织的结果导向文化'
            ],
            medium: [
                '加强目标执行过程的监控',
                '提升应对执行障碍的能力',
                '学习更多项目管理技能'
            ],
            low: [
                '设定更明确和具体的目标',
                '建立目标跟踪和反馈机制',
                '学习基本的执行力提升方法'
            ]
        },
        '团队合作': {
            high: [
                '建立高效团队协作的标准和流程',
                '分享团队建设的经验',
                '推动跨部门协作机制的建立'
            ],
            medium: [
                '提升在复杂协作中的协调能力',
                '学习更多团队沟通技巧',
                '增加跨团队合作的经验'
            ],
            low: [
                '积极参与团队活动和协作',
                '学习基本的团队沟通技能',
                '培养团队合作的意识'
            ]
        },
        '说服能力': {
            high: [
                '建立影响力发挥的平台和机制',
                '分享沟通说服的技巧和经验',
                '成为组织的沟通和影响力专家'
            ],
            medium: [
                '学习面对不同观点时的沟通策略',
                '提升在正式场合的表达能力',
                '增加说服不同类型人群的经验'
            ],
            low: [
                '学习基本的沟通和表达技巧',
                '练习在小组中表达观点',
                '观察和学习优秀沟通者的方法'
            ]
        },
        '系统思维': {
            high: [
                '建立系统性问题分析的方法论',
                '分享系统思维的应用经验',
                '推动组织的系统性思考文化'
            ],
            medium: [
                '在复杂问题中练习系统性分析',
                '学习更多系统思维的工具和方法',
                '增加跨领域思考的经验'
            ],
            low: [
                '学习基本的系统思维方法',
                '练习从多角度分析问题',
                '培养全局性思考的习惯'
            ]
        },
        '压力管理': {
            high: [
                '建立压力管理的方法体系',
                '分享抗压经验，帮助他人',
                '在高压项目中发挥更大作用'
            ],
            medium: [
                '学习更多压力管理技巧',
                '在挑战性任务中锻炼抗压能力',
                '建立个人的压力缓解机制'
            ],
            low: [
                '学习基本的压力管理方法',
                '建立健康的工作生活平衡',
                '寻求压力管理的专业指导'
            ]
        }
    };

    const dimSugg = suggestions[dimension];
    if (!dimSugg) return ['暂无建议'];

    if (score >= 4.0) return dimSugg.high;
    if (score >= 3.0) return dimSugg.medium;
    return dimSugg.low;
}

/**
 * 生成综合建议
 * @param {Object} dimensionAverages - 各维度平均分
 * @param {Array} strengths - 优势维度
 * @param {Array} weaknesses - 劣势维度
 * @returns {Array} 综合建议数组
 */
function generateOverallSuggestions(dimensionAverages, strengths, weaknesses) {
    const suggestions = [];
    
    // 基于整体表现的建议
    const overallAvg = Object.values(dimensionAverages).reduce((sum, score) => sum + score, 0) / Object.keys(dimensionAverages).length;
    
    if (overallAvg >= 4.0) {
        suggestions.push('您在各个维度都表现优秀，建议继续保持并在组织中发挥更大的影响力。');
        suggestions.push('考虑承担更多领导责任，成为团队和组织的标杆。');
    } else if (overallAvg >= 3.0) {
        suggestions.push('您具备良好的综合能力，建议重点提升薄弱环节，实现全面发展。');
        suggestions.push('可以考虑在优势领域深入发展，同时补强短板。');
    } else {
        suggestions.push('建议制定系统的能力提升计划，重点关注核心能力的培养。');
        suggestions.push('寻求导师指导或参加相关培训，加速能力发展。');
    }
    
    // 基于优势的建议
    if (strengths.length > 0) {
        const topStrength = strengths[0].dimension;
        suggestions.push(`您在${topStrength}方面表现突出，建议将此作为核心竞争力进一步发展。`);
    }
    
    // 基于劣势的建议
    if (weaknesses.length > 0) {
        const topWeakness = weaknesses[0].dimension;
        suggestions.push(`${topWeakness}是您需要重点关注的发展领域，建议制定针对性的提升计划。`);
    }
    
    return suggestions;
}

// 将函数暴露到全局作用域
window.calculateAndGenerateReport = calculateAndGenerateReport;
window.drawRandomQuestions = drawRandomQuestions;