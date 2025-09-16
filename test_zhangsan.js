// 张三测评数据生成脚本
// 这个脚本将自动生成张三的测评数据并保存到localStorage

// 模拟张三的测评数据
function generateZhangsanAssessment() {
    // 张三的基本信息
    const employeeName = '张三';
    const timestamp = new Date().toISOString();
    const testId = 'zhangsan_' + Date.now();
    
    // 模拟200道题的答案（使用相对真实的分布）
    const userAnswers = [];
    const questionCount = 200;
    
    // 为每个维度设定不同的能力水平，让张三有明显的优势和劣势
    const dimensionScores = {
        '敢为性': 4.2,        // 优势
        '培养下属': 2.8,      // 劣势
        '识人用人': 3.5,      // 中等偏上
        '客户导向': 4.0,      // 优势
        '信息搜集': 2.5,      // 劣势
        '结果导向': 3.8,      // 中等偏上
        '团队合作': 4.1,      // 优势
        '说服能力': 3.2,      // 中等
        '系统思维': 2.3,      // 劣势
        '压力管理': 3.6       // 中等偏上
    };
    
    // 生成每道题的答案
    for (let i = 0; i < questionCount; i++) {
        // 随机分配到某个维度
        const dimensions = Object.keys(dimensionScores);
        const dimension = dimensions[i % dimensions.length];
        const targetScore = dimensionScores[dimension];
        
        // 根据目标分数生成答案，添加一些随机性
        const randomFactor = (Math.random() - 0.5) * 1.0; // ±0.5的随机波动
        let score = targetScore + randomFactor;
        score = Math.max(1, Math.min(5, score)); // 限制在1-5范围内
        
        userAnswers.push({
            questionId: `q_${i + 1}`,
            selectedValue: Math.round(score)
        });
    }
    
    // 生成模拟的题目数据（简化版）
    const currentQuestions = [];
    for (let i = 0; i < questionCount; i++) {
        const dimensions = Object.keys(dimensionScores);
        const dimension = dimensions[i % dimensions.length];
        
        currentQuestions.push({
            id: `q_${i + 1}`,
            dimension: dimension,
            text: `测试题目 ${i + 1}`,
            options: [
                { text: '完全不同意', value: 1 },
                { text: '不同意', value: 2 },
                { text: '中立', value: 3 },
                { text: '同意', value: 4 },
                { text: '完全同意', value: 5 }
            ]
        });
    }
    
    // 手动计算报告（简化版逻辑）
    const report = calculateSimpleReport(userAnswers, currentQuestions, dimensionScores);
    
    // 构建完整的测评数据
    const assessmentData = {
        employeeName: employeeName,
        report: report,
        userAnswers: userAnswers,
        timestamp: timestamp,
        testId: testId
    };
    
    return assessmentData;
}

// 简化的报告计算逻辑
function calculateSimpleReport(userAnswers, currentQuestions, dimensionScores) {
    const dimensionReports = {};
    let totalScore = 0;
    
    // 计算各维度得分
    Object.entries(dimensionScores).forEach(([dimension, avgScore]) => {
        const score = parseFloat(avgScore.toFixed(2));
        totalScore += score * 20; // 假设每个维度20道题
        
        let level = '中等';
        if (score >= 4.0) level = '优秀';
        else if (score >= 3.5) level = '良好';
        else if (score >= 2.5) level = '中等';
        else level = '待提升';
        
        dimensionReports[dimension] = {
            score: score.toFixed(2),
            level: level,
            evaluation: `${dimension}能力${level}`,
            suggestions: `建议继续${score >= 3.5 ? '发挥' : '提升'}${dimension}方面的能力`
        };
    });
    
    const overallAverage = (totalScore / 200).toFixed(2);
    let overallLevel = '中等';
    if (overallAverage >= 4.0) overallLevel = '优秀';
    else if (overallAverage >= 3.5) overallLevel = '良好';
    else if (overallAverage >= 2.5) overallLevel = '中等';
    else overallLevel = '待提升';
    
    // 计算优势和劣势
    const sortedDimensions = Object.entries(dimensionScores)
        .sort((a, b) => b[1] - a[1]);
    
    const strengths = sortedDimensions.slice(0, 3).map(([dimension, score]) => ({
        dimension: dimension,
        score: score.toFixed(2),
        description: `${dimension}是您的优势能力，得分${score.toFixed(2)}`
    }));
    
    const weaknesses = sortedDimensions.slice(-3).reverse().map(([dimension, score]) => ({
        dimension: dimension,
        score: score.toFixed(2),
        description: `${dimension}有待提升，得分${score.toFixed(2)}`
    }));
    
    return {
        totalScore: Math.round(totalScore),
        overallAverage: overallAverage,
        overallLevel: overallLevel,
        dimensionReports: dimensionReports,
        strengths: strengths,
        weaknesses: weaknesses,
        overallSuggestions: [
            '继续发挥优势能力，在团队中承担更多责任',
            '针对待提升领域制定具体的改进计划',
            '寻求导师指导和专业培训机会',
            '定期进行自我评估和反思'
        ]
    };
}

// 保存数据到localStorage
function saveAssessmentData(assessmentData) {
    try {
        // 获取现有数据
        let assessments = [];
        const existingData = localStorage.getItem('assessments');
        if (existingData) {
            assessments = JSON.parse(existingData);
        }
        
        // 检查是否已存在张三的数据，如果存在则替换
        const existingIndex = assessments.findIndex(item => 
            item.employeeName === '张三'
        );
        
        if (existingIndex >= 0) {
            assessments[existingIndex] = assessmentData;
            console.log('更新了张三的测评数据');
        } else {
            assessments.push(assessmentData);
            console.log('添加了张三的测评数据');
        }
        
        // 保存数据
        localStorage.setItem('assessments', JSON.stringify(assessments));
        
        return true;
    } catch (error) {
        console.error('保存数据失败:', error);
        return false;
    }
}

// 执行测试
function runTest() {
    console.log('开始生成张三的测评数据...');
    
    const assessmentData = generateZhangsanAssessment();
    console.log('生成的测评数据:', assessmentData);
    
    const saved = saveAssessmentData(assessmentData);
    if (saved) {
        console.log('✅ 张三的测评数据已成功保存到localStorage');
        console.log('📊 测评结果摘要:');
        console.log(`   总分: ${assessmentData.report.totalScore}`);
        console.log(`   平均分: ${assessmentData.report.overallAverage}`);
        console.log(`   综合等级: ${assessmentData.report.overallLevel}`);
        console.log('🎯 优势能力:', assessmentData.report.strengths.map(s => s.dimension).join(', '));
        console.log('📈 待提升领域:', assessmentData.report.weaknesses.map(w => w.dimension).join(', '));
        
        return assessmentData;
    } else {
        console.log('❌ 保存失败');
        return null;
    }
}

// 如果在浏览器环境中，自动执行
if (typeof window !== 'undefined') {
    // 等待页面加载完成
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runTest);
    } else {
        runTest();
    }
}

// 导出函数供其他脚本使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateZhangsanAssessment, saveAssessmentData, runTest };
}