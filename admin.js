// admin.js - 管理员后台功能

const ADMIN_PASSWORD = 'admin123';
let assessmentsData = [];
let currentSelectedFiles = null; // 保存当前选择的文件

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeLogin();
    initializeFileUpload();
});

// 初始化登录表单
function initializeLogin() {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const passwordInput = document.getElementById('admin-password');
        const password = passwordInput.value.trim();
        
        if (!password) {
            showMessage('请输入管理员密码', 'error');
            return;
        }
        
        if (password !== ADMIN_PASSWORD) {
            showMessage('密码错误，请重试', 'error');
            passwordInput.value = '';
            return;
        }
        
        // 登录成功
        showMessage('登录成功', 'success');
        
        // 隐藏登录界面，显示管理界面
        document.getElementById('login-container').classList.add('hidden');
        document.getElementById('admin-container').classList.remove('hidden');
    });
}

// 初始化文件上传
function initializeFileUpload() {
    const fileInput = document.getElementById('file-input');
    const uploadArea = document.getElementById('upload-area');
    const fileList = document.getElementById('file-list');
    const filesContainer = document.getElementById('files');
    const uploadBtn = document.getElementById('upload-btn');

    // 点击上传区域
    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    // 文件选择变化
    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });

    // 拖拽上传
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('border-blue-400', 'bg-blue-50');
    });

    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('border-blue-400', 'bg-blue-50');
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('border-blue-400', 'bg-blue-50');
        const droppedFiles = e.dataTransfer.files;
        console.log('=== 拖拽文件事件 ===');
        console.log('拖拽的文件数量:', droppedFiles.length);
        
        // 同步更新file input的files属性
        try {
            // 尝试将拖拽的文件设置到file input中
            fileInput.files = droppedFiles;
            console.log('✅ 成功同步file input的files属性');
        } catch (error) {
            console.warn('⚠️ 无法直接设置file input的files属性:', error.message);
            // 这是正常的，因为files属性是只读的
        }
        
        handleFiles(droppedFiles);
    });

    // 开始分析
    uploadBtn.addEventListener('click', () => {
        console.log('=== 分析按钮被点击 ===');
        
        // 优先使用保存的文件，如果没有则使用fileInput.files
        const filesToAnalyze = currentSelectedFiles || fileInput.files;
        
        console.log('当前文件输入状态:', {
            currentSelectedFiles: currentSelectedFiles ? currentSelectedFiles.length : 'null',
            fileInputFiles: fileInput.files ? fileInput.files.length : 'null',
            filesToAnalyze: filesToAnalyze ? filesToAnalyze.length : 'null'
        });
        
        if (!filesToAnalyze || filesToAnalyze.length === 0) {
            console.error('❌ 没有选择文件或文件列表为空');
            showMessage('请先选择要分析的文件', 'error');
            return;
        }
        
        analyzeFiles(filesToAnalyze);
    });
}

// 处理文件
function handleFiles(files) {
    console.log('=== handleFiles 被调用 ===');
    console.log('接收到的files参数:', files);
    console.log('files类型:', Object.prototype.toString.call(files));
    console.log('files.length:', files.length);
    
    // 保存当前选择的文件
    currentSelectedFiles = files;
    
    if (files.length === 0) {
        console.log('文件数量为0，返回');
        return;
    }

    const filesContainer = document.getElementById('files');
    const fileList = document.getElementById('file-list');
    
    filesContainer.innerHTML = '';
    
    console.log('开始处理文件列表，文件数量:', files.length);
    
    let validFileCount = 0;
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log(`文件 ${i + 1}:`, {
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: new Date(file.lastModified).toLocaleString()
        });
        
        // 检查文件扩展名（主要判断依据）
        const hasValidExtension = file.name.toLowerCase().endsWith('.txt');
        const hasValidMimeType = file.type === 'text/plain' || file.type === '' || file.type.startsWith('text/') || file.type === 'application/octet-stream';
        
        console.log(`文件 ${file.name} 验证:`, {
            fileName: file.name,
            fileType: file.type,
            fileSize: file.size,
            hasValidExtension,
            hasValidMimeType,
            decision: hasValidExtension ? '有效' : '无效'
        });
        
        const li = document.createElement('li');
        
        if (hasValidExtension) {
            li.textContent = `${file.name} (${file.size} 字节)`;
            li.className = 'text-green-600';
            validFileCount++;
            console.log(`✅ 文件 ${file.name} 被认为是有效的`);
        } else {
            li.textContent = `${file.name} (不支持的格式，仅支持.txt文件)`;
            li.className = 'text-red-600';
            console.log(`❌ 文件 ${file.name} 被认为是无效的`);
        }
        
        filesContainer.appendChild(li);
    }
    
    console.log(`有效文件数量: ${validFileCount}`);
    
    fileList.classList.remove('hidden');
    
    // 如果有有效文件，显示分析按钮
    const uploadBtn = document.getElementById('upload-btn');
    if (validFileCount > 0) {
        uploadBtn.style.display = 'block';
        uploadBtn.textContent = `开始分析 (${validFileCount} 个文件)`;
    } else {
        uploadBtn.style.display = 'none';
    }
}

// 分析文件
async function analyzeFiles(files) {
    console.log('=== analyzeFiles 函数被调用 ===');
    console.log('接收到的files参数:', files);
    console.log('files类型:', Object.prototype.toString.call(files));
    console.log('files是否为null/undefined:', files == null);
    
    if (!files) {
        const errorMsg = '没有接收到文件参数（files为null或undefined）';
        console.error('❌', errorMsg);
        showMessage(errorMsg, 'error');
        return;
    }
    
    console.log('开始分析文件:', files.length);
    console.log('FileList类型:', Object.prototype.toString.call(files));
    
    // 将FileList转为数组并检查每个文件
    let fileArray;
    try {
        fileArray = Array.from(files);
        console.log('转换后的文件数组:', fileArray.length);
    } catch (error) {
        console.error('❌ 文件数组转换失败:', error);
        showMessage('文件处理失败：无法转换文件列表', 'error');
        return;
    }
    
    if (fileArray.length === 0) {
        const errorMsg = '文件数组为空，没有可分析的文件';
        console.error('❌', errorMsg);
        showMessage(errorMsg, 'error');
        return;
    }
    
    fileArray.forEach((file, index) => {
        console.log(`文件 ${index + 1}:`, {
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: new Date(file.lastModified).toLocaleString()
        });
    });
    
    // 更宽松的文件类型检测 - 主要依据文件扩展名
    const validFiles = fileArray.filter(file => {
        const hasValidExtension = file.name.toLowerCase().endsWith('.txt');
        // 放宽MIME类型检测，Windows系统可能有不同的MIME类型
        const hasValidMimeType = file.type === 'text/plain' || file.type === '' || file.type.startsWith('text/') || file.type === 'application/octet-stream';
        const isValid = hasValidExtension; // 主要依据扩展名判断
        
        console.log(`文件 ${file.name} 验证结果:`, {
            fileName: file.name,
            fileType: file.type,
            fileSize: file.size,
            hasValidExtension,
            hasValidMimeType,
            isValid,
            finalDecision: '主要基于扩展名判断'
        });
        
        return isValid;
    });

    console.log('有效文件数量:', validFiles.length);

    if (validFiles.length === 0) {
        const errorMsg = `没有找到有效的txt文件。
请确保：
1. 文件扩展名为.txt
2. 文件包含有效的JSON数据

调试信息：
- 总文件数：${fileArray.length}
- 有效文件数：${validFiles.length}`;
        console.error('没有有效文件:', errorMsg);
        showMessage(errorMsg, 'error');
        return;
    }

    showMessage('正在分析文件...', 'info');
    
    try {
        const assessments = [];
        
        for (let i = 0; i < validFiles.length; i++) {
            const file = validFiles[i];
            console.log(`\n=== 开始处理第 ${i + 1} 个文件: ${file.name} ===`);
            
            try {
                const content = await readFileContent(file);
                console.log(`文件内容读取成功，长度: ${content.length} 字符`);
                console.log(`文件内容开头50字符: "${content.substring(0, 50)}"`);
                console.log(`文件内容结尾50字符: "${content.substring(content.length - 50)}"`);
                
                // 清理内容（移除BOM、多余空白字符）
                const cleanContent = content.replace(/^\uFEFF/, '').trim();
                console.log(`清理后内容长度: ${cleanContent.length}`);
                console.log(`清理后开头: "${cleanContent.substring(0, 50)}"`);
                
                // 检查内容是否为空
                if (!cleanContent) {
                    console.error(`❌ 文件 ${file.name} 内容为空`);
                    showMessage(`文件 ${file.name} 内容为空`, 'error');
                    continue;
                }
                
                // 检查是否看起来像JSON
                if (!cleanContent.startsWith('{') || !cleanContent.endsWith('}')) {
                    console.error(`❌ 文件 ${file.name} 不是有效的JSON格式（不以{}包围）`);
                    console.error(`文件开头10字符: "${cleanContent.substring(0, 10)}"`);
                    console.error(`文件结尾10字符: "${cleanContent.substring(cleanContent.length - 10)}"`);
                    showMessage(`文件 ${file.name} 不是有效的JSON格式`, 'error');
                    continue;
                }
                
                // 尝试解析JSON
                console.log('开始JSON解析...');
                const data = JSON.parse(cleanContent);
                console.log('JSON解析成功!');
                console.log('数据结构检查:', {
                    hasEmployeeName: !!data.employeeName,
                    employeeName: data.employeeName,
                    hasReport: !!data.report,
                    hasTimestamp: !!data.timestamp
                });
                
                if (data.employeeName && data.report) {
                    assessments.push(data);
                    console.log(`✅ 文件 ${file.name} 成功添加到分析列表`);
                } else {
                    console.warn(`❌ 文件 ${file.name} 缺少必要字段:`);
                    console.warn('缺少字段详情:', {
                        employeeName: data.employeeName || '缺少',
                        report: data.report ? '存在' : '缺少'
                    });
                    showMessage(`文件 ${file.name} 数据格式不完整`, 'error');
                }
                } catch (parseError) {
                console.error(`❌ 解析文件 ${file.name} 失败:`);
                console.error('错误类型:', parseError.name);
                console.error('错误信息:', parseError.message);
                console.error('错误发生位置:', parseError.stack);
                
                if (parseError instanceof SyntaxError) {
                    console.error('这是JSON语法错误，可能的原因:');
                    console.error('1. 文件不是有效的JSON格式');
                    console.error('2. 文件包含特殊字符或编码问题');
                    console.error('3. JSON格式不正确（缺少括号、逗号等）');
                    
                    // 输出错误附近的内容帮助调试
                    const errorMatch = parseError.message.match(/position (\d+)/);
                    if (errorMatch) {
                        const pos = parseInt(errorMatch[1]);
                        const start = Math.max(0, pos - 50);
                        const end = Math.min(cleanContent.length, pos + 50);
                        console.error(`错误位置附近的内容: "${cleanContent.substring(start, end)}"`);
                    }
                }
                
                showMessage(`解析文件 ${file.name} 失败: ${parseError.message}`, 'error');
            }
        }

        console.log(`\n=== 分析完成 ===`);
        console.log(`最终有效数据数量: ${assessments.length}`);
        
        if (assessments.length === 0) {
            showMessage(`无法从上传的文件中提取有效数据。\n请检查文件是否为有效的JSON格式，且包含 employeeName 和 report 字段。`, 'error');
            return;
        }

        assessmentsData = assessments;
        showMessage(`✅ 成功分析 ${assessments.length} 个测评报告`, 'success');
        
        // 显示分析结果
        displayAnalysisResults();
        
    } catch (error) {
        console.error('分析过程中发生未知错误:', error);
        showMessage('分析文件时出错: ' + error.message, 'error');
    }
}

// 读取文件内容
function readFileContent(file) {
    return new Promise((resolve, reject) => {
        console.log(`开始读取文件: ${file.name}`);
        const reader = new FileReader();
        
        reader.onload = (e) => {
            console.log(`文件读取成功: ${file.name}`);
            resolve(e.target.result);
        };
        
        reader.onerror = (e) => {
            console.error(`文件读取失败: ${file.name}`, e);
            reject(new Error(`无法读取文件 ${file.name}: ${e.target.error}`));
        };
        
        reader.onabort = (e) => {
            console.error(`文件读取被中断: ${file.name}`);
            reject(new Error(`文件读取被中断: ${file.name}`));
        };
        
        // 尝试以UTF-8编码读取
        try {
            reader.readAsText(file, 'utf-8');
        } catch (error) {
            console.error(`启动文件读取失败: ${file.name}`, error);
            reject(error);
        }
    });
}

// 显示分析结果
function displayAnalysisResults() {
    // 显示分析容器
    document.getElementById('analysis-container').classList.remove('hidden');
    
    // 更新统计信息
    updateStatistics();
    
    // 生成综合分析报告
    generateComprehensiveAnalysis();
    
    // 创建维度对比图表
    createDimensionChart();
    
    // 渲染测评者列表
    renderAssessmentsList();
}

// 更新统计信息
function updateStatistics() {
    if (!assessmentsData || assessmentsData.length === 0) {
        document.getElementById('total-count').textContent = '0';
        document.getElementById('average-score').textContent = '0.0';
        document.getElementById('max-score').textContent = '0';
        document.getElementById('min-score').textContent = '0';
        return;
    }
    
    const totalCount = assessmentsData.length;
    const scores = assessmentsData.map(a => parseFloat(a.report?.overallAverage || 0));
    const averageScore = scores.reduce((sum, score) => sum + score, 0) / totalCount;
    const maxScore = Math.max(...scores);
    const minScore = Math.min(...scores);
    
    document.getElementById('total-count').textContent = totalCount;
    document.getElementById('average-score').textContent = averageScore.toFixed(1);
    document.getElementById('max-score').textContent = maxScore.toFixed(1);
    document.getElementById('min-score').textContent = minScore.toFixed(1);
}

// 生成综合分析报告
function generateComprehensiveAnalysis() {
    const container = document.getElementById('comprehensive-analysis');
    
    if (!assessmentsData || assessmentsData.length === 0) {
        container.innerHTML = '<p class="text-gray-500">暂无数据进行分析</p>';
        return;
    }
    
    const analysis = performComprehensiveAnalysis(assessmentsData);
    
    container.innerHTML = `
        <div class="space-y-4">
            <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-800 mb-2">📊 整体情况概览</h4>
                <p class="text-blue-700">${analysis.overall}</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-semibold text-green-800 mb-2">✅ 团队优势分析</h4>
                <p class="text-green-700">${analysis.strengths}</p>
            </div>
            
            <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-semibold text-orange-800 mb-2">⚠️ 需要关注的领域</h4>
                <p class="text-orange-700">${analysis.concerns}</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-semibold text-purple-800 mb-2">💡 改进建议</h4>
                <ul class="text-purple-700 list-disc list-inside space-y-1">
                    ${analysis.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// 执行综合分析
function performComprehensiveAnalysis(data) {
    const totalCount = data.length;
    const avgScores = data.map(d => parseFloat(d.report?.overallAverage || 0));
    const overallAvg = avgScores.reduce((sum, score) => sum + score, 0) / totalCount;
    
    // 计算各维度平均分
    const dimensionAvgs = {};
    const dimensions = ['敢为性', '培养下属', '识人用人', '客户导向', '信息搜集', '结果导向', '团队合作', '说服能力', '系统思维', '压力管理'];
    
    dimensions.forEach(dim => {
        const scores = data.map(d => {
            const dimReport = d.report?.dimensionReports?.[dim];
            return dimReport ? parseFloat(dimReport.score || 0) : 0;
        }).filter(score => score > 0);
        
        if (scores.length > 0) {
            dimensionAvgs[dim] = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        }
    });
    
    // 找出优势和待改进维度
    const sortedDimensions = Object.entries(dimensionAvgs).sort(([,a], [,b]) => b - a);
    const topDimensions = sortedDimensions.slice(0, 3);
    const bottomDimensions = sortedDimensions.slice(-3);
    
    // 生成分析文本
    const analysis = {
        overall: `本次共分析了${totalCount}份测评报告，团队整体平均分为${overallAvg.toFixed(1)}分。${
            overallAvg >= 4.0 ? '团队整体表现优秀，具备良好的综合能力。' :
            overallAvg >= 3.5 ? '团队整体表现良好，在多数能力维度上达到了预期水平。' :
            overallAvg >= 3.0 ? '团队整体表现中等，有进一步提升的空间。' :
            '团队整体能力有待提升，建议加强针对性培训。'
        }`,
        
        strengths: `团队在${topDimensions.map(([dim, score]) => `${dim}(${score.toFixed(1)}分)`).join('、')}等方面表现突出，这些是团队的核心优势，应当继续保持并发挥。`,
        
        concerns: `${bottomDimensions.map(([dim, score]) => `${dim}(${score.toFixed(1)}分)`).join('、')}等维度相对较弱，需要重点关注和改进。`,
        
        recommendations: [
            `重点提升${bottomDimensions[0][0]}能力，可通过专项培训和实践来改善`,
            `发挥${topDimensions[0][0]}优势，将优秀经验在团队内推广`,
            `建立能力发展跟踪机制，定期评估改进效果`,
            `针对不同能力水平的员工制定个性化发展计划`
        ]
    };
    
    return analysis;
}

// 创建维度对比图表
function createDimensionChart() {
    const ctx = document.getElementById('dimensionChart').getContext('2d');
    
    // 销毁已存在的图表
    if (window.dimensionChartInstance) {
        window.dimensionChartInstance.destroy();
    }
    
    // 计算各维度平均分
    const dimensions = ['敢为性', '培养下属', '识人用人', '客户导向', '信息搜集', '结果导向', '团队合作', '说服能力', '系统思维', '压力管理'];
    const averages = dimensions.map(dim => {
        const scores = assessmentsData.map(d => {
            const dimReport = d.report?.dimensionReports?.[dim];
            return dimReport ? parseFloat(dimReport.score || 0) : 0;
        }).filter(score => score > 0);
        
        return scores.length > 0 ? scores.reduce((sum, score) => sum + score, 0) / scores.length : 0;
    });
    
    // 创建柱状图
    window.dimensionChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dimensions,
            datasets: [{
                label: '平均分',
                data: averages,
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5,
                    ticks: {
                        stepSize: 0.5
                    }
                },
                x: {
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

// 渲染测评者列表
function renderAssessmentsList() {
    const tableBody = document.getElementById('assessments-table');
    const noDataDiv = document.getElementById('no-data');
    
    if (!assessmentsData || assessmentsData.length === 0) {
        tableBody.innerHTML = '';
        noDataDiv.classList.remove('hidden');
        return;
    }
    
    noDataDiv.classList.add('hidden');
    
    tableBody.innerHTML = assessmentsData.map((assessment, index) => {
        const date = new Date(assessment.timestamp).toLocaleString('zh-CN');
        const totalScore = assessment.report?.totalScore || 0;
        const averageScore = parseFloat(assessment.report?.overallAverage || 0);
        const level = assessment.report?.overallLevel || '-';
        
        return `
            <tr class="hover:bg-gray-50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">${assessment.employeeName || '未知'}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">${date}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-semibold text-blue-600">${totalScore}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">${averageScore.toFixed(1)}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        level === '优秀' ? 'bg-green-100 text-green-800' :
                        level === '良好' ? 'bg-blue-100 text-blue-800' :
                        level === '一般' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                    }">
                        ${level}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button onclick="viewDetails(${index})" class="text-indigo-600 hover:text-indigo-900 mr-3">查看详情</button>
                </td>
            </tr>
        `;
    }).join('');
}

// 查看详情（简化版）
function viewDetails(index) {
    const assessment = assessmentsData[index];
    if (!assessment) return;
    
    const report = assessment.report;
    
    alert(`员工：${assessment.employeeName}\n总分：${report.totalScore}\n平均分：${report.overallAverage}\n等级：${report.overallLevel}`);
}

// 退出登录
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logout-btn').addEventListener('click', function() {
        if (confirm('确定要退出登录吗？')) {
            document.getElementById('admin-container').classList.add('hidden');
            document.getElementById('login-container').classList.remove('hidden');
            document.getElementById('admin-password').value = '';
            assessmentsData = [];
            document.getElementById('analysis-container').classList.add('hidden');
            showMessage('已退出登录', 'info');
        }
    });
});

// 显示消息
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        type === 'info' ? 'bg-blue-500 text-white' :
        'bg-gray-500 text-white'
    }`;
    messageDiv.style.display = 'block';
    messageDiv.style.opacity = '1';
    messageDiv.style.transform = 'translateY(0)';
    
    // 3秒后自动隐藏
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 300);
    }, 3000);
}