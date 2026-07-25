const STORAGE_KEY = "shanghai-grade11-study-dashboard";
const SHANGHAI_PAPERS_URL = "https://gaokao.eol.cn/e_html/gk/gkst/";
const HIGH_SCHOOL_PAPERS_URL = "https://www.gaokao.com/zyk/gzsj/";

const progressLabels = {
  high2_fall: "高二上同步",
  high2_spring: "高二下同步",
  accelerated: "略快一档"
};

const modeLabels = {
  sync: "校内同步",
  advance: "超前半步",
  sprint: "阶段冲刺"
};

const subjectResourceHubs = {
  chinese: "https://www.gaokao.com/zyk/gzsj/geywsj/",
  math: "https://www.gaokao.com/zyk/gzsj/gesxsj/",
  english: "https://www.gaokao.com/zyk/gzsj/geyysj/",
  physics: "https://www.gaokao.com/zyk/gzsj/gewlsj/",
  chemistry: HIGH_SCHOOL_PAPERS_URL
};

const curriculumLibrary = {
  chinese: {
    high2_fall: [
      {
        module: "议论文审题与论证",
        focus: "把中心论点、分论点和论据绑定起来",
        drillType: "议论文素材迁移题",
        questionCount: 2,
        output: "写出 1 段论证严密的主体段"
      },
      {
        module: "文言实词虚词与翻译",
        focus: "先抓关键词，再做句意还原",
        drillType: "文言翻译与选择题",
        questionCount: 6,
        output: "整理 8 个高频实词义项"
      },
      {
        module: "古诗鉴赏手法与情感",
        focus: "看意象、手法、情感三件套",
        drillType: "古诗鉴赏小题",
        questionCount: 4,
        output: "写 1 份诗歌答题模板卡片"
      }
    ],
    high2_spring: [
      {
        module: "小说散文阅读",
        focus: "人物、线索、主旨三个层次一起看",
        drillType: "现代文阅读题",
        questionCount: 4,
        output: "整理 3 个文本题通用答题句式"
      },
      {
        module: "材料作文升格",
        focus: "先立意再搭结构，避免空话",
        drillType: "材料作文审题训练",
        questionCount: 2,
        output: "写 1 个清晰提纲 + 1 段开头"
      },
      {
        module: "文言断句与概括",
        focus: "断句靠语法，概括靠对象与动作",
        drillType: "文言综合题",
        questionCount: 5,
        output: "错题旁批 5 条"
      }
    ],
    accelerated: [
      {
        module: "综合卷阅读+作文联练",
        focus: "做卷感和表达质量一起抓",
        drillType: "上海卷风格综合题",
        questionCount: 1,
        output: "完成 1 套缩时训练并复盘"
      },
      {
        module: "文言与古诗综合提速",
        focus: "把会做题变成稳拿分",
        drillType: "综合赏析题",
        questionCount: 6,
        output: "记录 3 个失分触发点"
      }
    ]
  },
  math: {
    high2_fall: [
      {
        module: "数列与递推",
        focus: "看清通项、求和和递推转化",
        drillType: "中档大题",
        questionCount: 4,
        output: "总结 3 种常见拆解路径"
      },
      {
        module: "立体几何与空间关系",
        focus: "先画图标关系，再上性质",
        drillType: "证明与计算题",
        questionCount: 3,
        output: "整理 1 张常用结论卡"
      },
      {
        module: "圆锥曲线基础",
        focus: "抓定义、方程和几何意义",
        drillType: "解析几何小综合",
        questionCount: 4,
        output: "写出 2 道题的标准步骤"
      }
    ],
    high2_spring: [
      {
        module: "概率统计与分布",
        focus: "把审题条件翻成概率语言",
        drillType: "统计概率综合题",
        questionCount: 5,
        output: "整理 4 个易错条件"
      },
      {
        module: "圆锥曲线综合",
        focus: "坐标法和性质法切换要快",
        drillType: "压轴前半段",
        questionCount: 3,
        output: "复盘 2 道卡壳题"
      },
      {
        module: "函数与导数衔接",
        focus: "单调性、零点和参数意识",
        drillType: "函数综合题",
        questionCount: 4,
        output: "写 1 页方法对照表"
      }
    ],
    accelerated: [
      {
        module: "压轴题拆解训练",
        focus: "先拿前两问，再啃关键转折",
        drillType: "上海风格压轴题",
        questionCount: 2,
        output: "拆出完整得分步骤"
      },
      {
        module: "综合卷限时提速",
        focus: "选择填空稳住，大题按性价比分配",
        drillType: "套卷缩时训练",
        questionCount: 1,
        output: "记录整卷时间分配"
      }
    ]
  },
  english: {
    high2_fall: [
      {
        module: "阅读理解与词块积累",
        focus: "先定位逻辑关系，再处理长句",
        drillType: "阅读理解",
        questionCount: 2,
        output: "积累 12 个高频词块"
      },
      {
        module: "翻译与语法表达",
        focus: "句型转换比单词堆砌更重要",
        drillType: "翻译题",
        questionCount: 5,
        output: "整理 6 个高频句型"
      },
      {
        module: "概要写作",
        focus: "压缩信息时保留逻辑骨架",
        drillType: "概要写作题",
        questionCount: 1,
        output: "完成 1 篇 60 词左右概要"
      }
    ],
    high2_spring: [
      {
        module: "读后续写/应用写作衔接",
        focus: "先搭情节线，再补高级表达",
        drillType: "短文写作题",
        questionCount: 1,
        output: "写 1 篇完整作文并改 3 处表达"
      },
      {
        module: "完形与语篇逻辑",
        focus: "看上下文语义链，不只看单词",
        drillType: "完形填空",
        questionCount: 2,
        output: "标记 5 个逻辑连接点"
      },
      {
        module: "听力与信息转写",
        focus: "先抓关键词，再做细节定位",
        drillType: "听力专项",
        questionCount: 2,
        output: "复盘 8 处易丢信息点"
      }
    ],
    accelerated: [
      {
        module: "上海卷综合语言运用",
        focus: "阅读、翻译、写作三块连起来练",
        drillType: "综合卷",
        questionCount: 1,
        output: "完成 1 套综合练并改错"
      },
      {
        module: "高阶表达冲刺",
        focus: "提升句式变化和输出自然度",
        drillType: "翻译+写作组合",
        questionCount: 4,
        output: "积累 8 个可复用表达"
      }
    ]
  },
  physics: {
    high2_fall: [
      {
        module: "力学综合与能量",
        focus: "先受力和过程，再列守恒",
        drillType: "计算题",
        questionCount: 4,
        output: "整理 3 个典型模型"
      },
      {
        module: "电场与电路",
        focus: "图像、等效和过程分析一起抓",
        drillType: "中档综合题",
        questionCount: 4,
        output: "画 1 张电学思维导图"
      },
      {
        module: "动量与碰撞",
        focus: "抓相互作用前后状态变化",
        drillType: "守恒题",
        questionCount: 3,
        output: "写清 2 道题的状态转移"
      }
    ],
    high2_spring: [
      {
        module: "电磁感应",
        focus: "分清切割、变化和方向判断",
        drillType: "综合计算题",
        questionCount: 3,
        output: "归纳 4 个常见误判点"
      },
      {
        module: "图像题与实验题",
        focus: "读图速度决定拿分效率",
        drillType: "图像+实验综合",
        questionCount: 5,
        output: "完成 1 张实验结论模板"
      },
      {
        module: "多过程综合",
        focus: "每一步都先定对象和条件",
        drillType: "压轴前半段",
        questionCount: 2,
        output: "拆出题目的过程链"
      }
    ],
    accelerated: [
      {
        module: "上海卷风格综合压缩训练",
        focus: "信息提取速度和表达规范同时练",
        drillType: "整题训练",
        questionCount: 2,
        output: "复盘完整得分点"
      },
      {
        module: "模型串联提速",
        focus: "把多个模型一眼认出来",
        drillType: "组合计算题",
        questionCount: 3,
        output: "做 1 张模型识别表"
      }
    ]
  },
  chemistry: {
    high2_fall: [
      {
        module: "化学反应原理",
        focus: "平衡、速率和条件变化是核心",
        drillType: "原理综合题",
        questionCount: 4,
        output: "整理 5 个条件变化结论"
      },
      {
        module: "离子反应与氧化还原",
        focus: "电子转移和离子共存要稳",
        drillType: "选择+填空题",
        questionCount: 8,
        output: "整理 1 张方程式速查卡"
      },
      {
        module: "实验探究与定量分析",
        focus: "步骤、现象、结论必须对应",
        drillType: "实验题",
        questionCount: 3,
        output: "写 1 份实验逻辑链"
      }
    ],
    high2_spring: [
      {
        module: "有机基础与推断",
        focus: "官能团、反应条件和性质对应",
        drillType: "推断题",
        questionCount: 4,
        output: "画 1 张反应转化图"
      },
      {
        module: "综合实验设计",
        focus: "变量控制和误差分析别漏",
        drillType: "实验设计题",
        questionCount: 3,
        output: "总结 3 种常见表述模板"
      },
      {
        module: "原理+实验混合题",
        focus: "题目信息要分层处理",
        drillType: "混合综合题",
        questionCount: 3,
        output: "复盘 2 个易错推断点"
      }
    ],
    accelerated: [
      {
        module: "上海卷化学综合冲刺",
        focus: "原理、实验、推断一体化训练",
        drillType: "综合卷",
        questionCount: 1,
        output: "完成 1 套并复盘失分"
      },
      {
        module: "高频方程式与实验快刷",
        focus: "先保住能秒出的基础分",
        drillType: "基础+中档混合题",
        questionCount: 10,
        output: "自测方程式默写"
      }
    ]
  }
};

const WIKI_API = "https://zh.wikipedia.org/api/rest_v1/page/summary/";
const wikiFetchCache = new Map();

const subjectWikiFallback = {
  chinese: "语文",
  math: "数学",
  english: "英语",
  physics: "物理学",
  chemistry: "化学"
};

const moduleWikiTitles = {
  "议论文审题与论证": "议论文",
  "文言实词虚词与翻译": "文言文",
  "古诗鉴赏手法与情感": "古诗词",
  "小说散文阅读": "散文",
  "材料作文升格": "议论文",
  "文言断句与概括": "文言文",
  "综合卷阅读+作文联练": "语文",
  "文言与古诗综合提速": "古诗词",
  "数列与递推": "数列",
  "立体几何与空间关系": "立体几何",
  "圆锥曲线基础": "圆锥曲线",
  "概率统计与分布": "概率分布",
  "圆锥曲线综合": "圆锥曲线",
  "函数与导数衔接": "导数",
  "压轴题拆解训练": "数学",
  "综合卷限时提速": "数学",
  "阅读理解与词块积累": "英语",
  "翻译与语法表达": "语法",
  "概要写作": "写作",
  "读后续写/应用写作衔接": "写作",
  "完形与语篇逻辑": "英语",
  "听力与信息转写": "听力",
  "上海卷综合语言运用": "英语",
  "高阶表达冲刺": "英语",
  "力学综合与能量": "力学",
  "电场与电路": "电场",
  "动量与碰撞": "动量",
  "电磁感应": "电磁感应",
  "图像题与实验题": "物理学",
  "多过程综合": "物理学",
  "上海卷风格综合压缩训练": "物理学",
  "模型串联提速": "物理学",
  "化学反应原理": "化学反应",
  "离子反应与氧化还原": "氧化还原反应",
  "实验探究与定量分析": "定量分析",
  "有机基础与推断": "有机化学",
  "综合实验设计": "化学实验",
  "原理+实验混合题": "化学反应",
  "上海卷化学综合冲刺": "化学",
  "高频方程式与实验快刷": "化学方程式"
};

function resolveWikiTitle(subject, topic) {
  return moduleWikiTitles[topic.module] ?? subjectWikiFallback[subject.id] ?? subject.name;
}

async function fetchWikiSummary(title) {
  const cacheKey = title;
  if (wikiFetchCache.has(cacheKey)) {
    return wikiFetchCache.get(cacheKey);
  }

  const promise = fetch(`${WIKI_API}${encodeURIComponent(title)}`, { headers: { Accept: "application/json" } })
    .then((response) => (response.ok ? response.json() : Promise.reject(new Error(`HTTP ${response.status}`))))
    .then((data) => {
      if (!data || data.type === "disambiguation" || !data.extract) {
        return null;
      }
      return {
        title: data.title,
        description: data.description ?? "",
        extract: data.extract,
        thumbnail: data.thumbnail?.source ?? null,
        pageUrl: data.content_urls?.desktop?.page ?? `https://zh.wikipedia.org/wiki/${encodeURIComponent(title)}`
      };
    })
    .catch(() => null);

  wikiFetchCache.set(cacheKey, promise);
  return promise;
}

const defaultState = {
  examDays: 28,
  availableMinutes: 120,
  energy: 7,
  homeworkLoad: 6,
  progressStage: "high2_fall",
  generationMode: "sync",
  planSeed: 0,
  subjects: [
    {
      id: "chinese",
      name: "语文",
      tagline: "作文素材和古诗文稳住基本盘",
      currentScore: 112,
      targetScore: 124,
      weight: 1.05
    },
    {
      id: "math",
      name: "数学",
      tagline: "压轴题拆步骤，错题回炉最值钱",
      currentScore: 101,
      targetScore: 128,
      weight: 1.32
    },
    {
      id: "english",
      name: "英语",
      tagline: "阅读保持手感，作文模板持续迭代",
      currentScore: 126,
      targetScore: 136,
      weight: 1.08
    },
    {
      id: "physics",
      name: "物理",
      tagline: "模型题和计算细节最容易拉开差距",
      currentScore: 82,
      targetScore: 94,
      weight: 1.25
    },
    {
      id: "chemistry",
      name: "化学",
      tagline: "方程式、实验题和综合推断要同时抓",
      currentScore: 79,
      targetScore: 92,
      weight: 1.2
    }
  ]
};

const subjectCardsEl = document.querySelector("#subjectCards");
const weeklyFocusEl = document.querySelector("#weeklyFocus");
const scheduleSummaryEl = document.querySelector("#scheduleSummary");
const scheduleTimelineEl = document.querySelector("#scheduleTimeline");
const contentSummaryEl = document.querySelector("#contentSummary");
const contentCardsEl = document.querySelector("#contentCards");
const subjectTemplate = document.querySelector("#subjectCardTemplate");

const controls = {
  examDaysInput: document.querySelector("#examDaysInput"),
  examDaysValue: document.querySelector("#examDaysValue"),
  availableMinutesInput: document.querySelector("#availableMinutesInput"),
  availableMinutesValue: document.querySelector("#availableMinutesValue"),
  energyInput: document.querySelector("#energyInput"),
  energyValue: document.querySelector("#energyValue"),
  homeworkLoadInput: document.querySelector("#homeworkLoadInput"),
  homeworkLoadValue: document.querySelector("#homeworkLoadValue"),
  progressStageSelect: document.querySelector("#progressStageSelect"),
  progressStageValue: document.querySelector("#progressStageValue"),
  generationModeSelect: document.querySelector("#generationModeSelect"),
  generationModeValue: document.querySelector("#generationModeValue"),
  daysToExam: document.querySelector("#daysToExam"),
  availableHours: document.querySelector("#availableHours"),
  bestSubject: document.querySelector("#bestSubject"),
  generatePlanBtn: document.querySelector("#generatePlanBtn"),
  resetDataBtn: document.querySelector("#resetDataBtn")
};

let state = loadState();

bindTopLevelControls();
render();

function loadState() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return structuredClone(defaultState);
  }

  try {
    const parsed = JSON.parse(stored);
    return sanitizeState({
      ...structuredClone(defaultState),
      ...parsed,
      subjects: Array.isArray(parsed.subjects) ? parsed.subjects : structuredClone(defaultState.subjects)
    });
  } catch (error) {
    return structuredClone(defaultState);
  }
}

function persistState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function bindTopLevelControls() {
  controls.examDaysInput.addEventListener("input", (event) => {
    state.examDays = Number(event.target.value);
    render();
  });

  controls.availableMinutesInput.addEventListener("input", (event) => {
    state.availableMinutes = Number(event.target.value);
    render();
  });

  controls.energyInput.addEventListener("input", (event) => {
    state.energy = Number(event.target.value);
    render();
  });

  controls.homeworkLoadInput.addEventListener("input", (event) => {
    state.homeworkLoad = Number(event.target.value);
    render();
  });

  controls.progressStageSelect.addEventListener("change", (event) => {
    state.progressStage = event.target.value;
    state.planSeed = 0;
    render();
  });

  controls.generationModeSelect.addEventListener("change", (event) => {
    state.generationMode = event.target.value;
    state.planSeed = 0;
    render();
  });

  controls.generatePlanBtn.addEventListener("click", () => {
    state.planSeed += 1;
    render();
  });

  controls.resetDataBtn.addEventListener("click", () => {
    state = structuredClone(defaultState);
    render();
  });
}

function render() {
  const contentPlans = buildContentPlans();
  syncSummaryCards(contentPlans);
  syncControlValues();
  renderSubjects();
  renderWeeklyFocus(contentPlans);
  renderSchedule(contentPlans);
  renderContentPlan(contentPlans);
  persistState();
}

function syncSummaryCards(contentPlans) {
  const rankedSubjects = getRankedSubjects();
  const best = [...state.subjects].sort((left, right) => right.currentScore - left.currentScore)[0];

  controls.daysToExam.textContent = `${state.examDays} 天`;
  controls.availableHours.textContent = `${(state.availableMinutes / 60).toFixed(1)} h`;
  controls.bestSubject.textContent = best.name;
  controls.generatePlanBtn.textContent = `刷新 ${progressLabels[state.progressStage]} 内容`;

  if (contentPlans[0]) {
    controls.bestSubject.textContent = best.name;
  }
}

function syncControlValues() {
  controls.examDaysInput.value = String(state.examDays);
  controls.availableMinutesInput.value = String(state.availableMinutes);
  controls.energyInput.value = String(state.energy);
  controls.homeworkLoadInput.value = String(state.homeworkLoad);
  controls.progressStageSelect.value = state.progressStage;
  controls.generationModeSelect.value = state.generationMode;

  controls.examDaysValue.textContent = `${state.examDays} 天`;
  controls.availableMinutesValue.textContent = `${state.availableMinutes} 分钟`;
  controls.energyValue.textContent = `${state.energy} / 10`;
  controls.homeworkLoadValue.textContent = `${state.homeworkLoad} / 10`;
  controls.progressStageValue.textContent = progressLabels[state.progressStage];
  controls.generationModeValue.textContent = modeLabels[state.generationMode];
}

function renderSubjects() {
  subjectCardsEl.innerHTML = "";

  state.subjects.forEach((subject, index) => {
    const fragment = subjectTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".subject-card");
    const priority = computePriority(subject);
    const currentInput = fragment.querySelector(".current-score");
    const targetInput = fragment.querySelector(".target-score");

    fragment.querySelector(".subject-name").textContent = subject.name;
    fragment.querySelector(".subject-tagline").textContent = subject.tagline;
    fragment.querySelector(".subject-priority").textContent = getPriorityLabel(priority, index);
    fragment.querySelector(".current-score-value").textContent = `${subject.currentScore} 分`;
    fragment.querySelector(".target-score-value").textContent = `${subject.targetScore} 分`;
    fragment.querySelector(".score-gap").textContent = `+${Math.max(subject.targetScore - subject.currentScore, 0)} 分`;
    fragment.querySelector(".priority-score").textContent = `${priority.toFixed(1)} / 10`;

    currentInput.value = String(subject.currentScore);
    targetInput.value = String(subject.targetScore);

    currentInput.addEventListener("input", (event) => {
      subject.currentScore = Number(event.target.value);
      if (subject.currentScore > subject.targetScore) {
        subject.targetScore = subject.currentScore;
      }
      render();
    });

    targetInput.addEventListener("input", (event) => {
      subject.targetScore = Number(event.target.value);
      if (subject.targetScore < subject.currentScore) {
        subject.currentScore = subject.targetScore;
      }
      render();
    });

    card.style.boxShadow = `inset 0 0 0 1px ${priorityToColor(priority)}22`;
    subjectCardsEl.appendChild(fragment);
  });
}

function renderWeeklyFocus(contentPlans) {
  const focusBlocks = buildWeeklyFocus(contentPlans);
  weeklyFocusEl.innerHTML = "";

  focusBlocks.forEach((item) => {
    const article = document.createElement("article");
    article.className = "strategy-item";
    article.innerHTML = `<strong>${item.title}</strong><p>${item.description}</p>`;
    weeklyFocusEl.appendChild(article);
  });
}

function renderSchedule(contentPlans) {
  const schedule = buildStudyPlan(contentPlans);
  scheduleSummaryEl.innerHTML = `
    <div>
      <small>今晚总目标</small>
      <strong>${schedule.goal}</strong>
    </div>
    <div>
      <small>学习块数</small>
      <strong>${schedule.blocks.filter((item) => !item.isBreak).length} 段</strong>
    </div>
  `;

  scheduleTimelineEl.innerHTML = "";
  schedule.blocks.forEach((block) => {
    const article = document.createElement("article");
    article.className = `timeline-item${block.isBreak ? " break" : ""}`;
    article.innerHTML = `
      <div class="timeline-item__time">${block.time}</div>
      <div class="timeline-item__content">
        <strong>${block.title}</strong>
        <p>${block.description}</p>
      </div>
    `;
    scheduleTimelineEl.appendChild(article);
  });
}

function renderContentPlan(contentPlans) {
  const totalDrills = contentPlans.reduce((sum, plan) => sum + plan.topic.questionCount, 0);
  contentSummaryEl.innerHTML = `
    <div>
      <small>内容生成模式</small>
      <strong>${progressLabels[state.progressStage]} · ${modeLabels[state.generationMode]}</strong>
    </div>
    <div>
      <small>今晚推荐题量</small>
      <strong>${totalDrills} 题左右</strong>
    </div>
    <div>
      <small>信源</small>
      <strong>实时抓取自 维基百科</strong>
    </div>
  `;

  contentCardsEl.innerHTML = "";
  contentPlans.forEach((plan) => {
    const article = document.createElement("article");
    article.className = "content-card";
    article.dataset.planId = plan.planId;
    article.innerHTML = `
      <div class="content-card__header">
        <div>
          <p class="content-card__eyebrow">${plan.subject.name} · ${plan.priorityLabel}</p>
          <h3>${plan.topic.module}</h3>
        </div>
        <span class="content-chip">${plan.estimatedMinutes} 分钟</span>
      </div>
      <p class="content-card__desc">${plan.reason}</p>
      <div class="chip-row">
        <span class="chip">核心点：${plan.topic.focus}</span>
        <span class="chip">建议题量：${plan.topic.questionCount} 题</span>
        <span class="chip">题型：${plan.topic.drillType}</span>
      </div>
      <div class="content-block">
        <strong>今晚怎么学</strong>
        <ul class="content-list">
          ${plan.tasks.map((task) => `<li>${task}</li>`).join("")}
        </ul>
      </div>
      <div class="content-block">
        <strong>必须产出</strong>
        <p>${plan.topic.output}</p>
      </div>
      <div class="content-block content-source" data-source-slot>
        <strong>信源内容（实时抓取）</strong>
        <div class="source-loading">正在从维基百科抓取「${plan.wikiTitle}」…</div>
      </div>
      <div class="content-block">
        <strong>更多题源</strong>
        <div class="link-list">
          ${plan.sourceLinks
            .map(
              (link) =>
                `<a href="${link.url}" target="_blank" rel="noreferrer noopener">${link.label}</a>`
            )
            .join("")}
        </div>
      </div>
    `;
    contentCardsEl.appendChild(article);
    populateSourceContent(article, plan);
  });
}

function populateSourceContent(article, plan) {
  const slot = article.querySelector("[data-source-slot]");
  if (!slot) {
    return;
  }

  fetchWikiSummary(plan.wikiTitle).then((summary) => {
    if (!summary) {
      slot.innerHTML = `
        <strong>信源内容（实时抓取）</strong>
        <p class="source-fallback">未能抓取到「${plan.wikiTitle}」的信源摘要，可点下方链接直接查看原文或检索同类题。</p>
      `;
      return;
    }

    const thumbnailHtml = summary.thumbnail
      ? `<img class="source-thumb" src="${summary.thumbnail}" alt="${summary.title} 配图" loading="lazy" />`
      : "";

    slot.innerHTML = `
      <strong>信源内容（实时抓取自 维基百科）</strong>
      <div class="source-body">
        ${thumbnailHtml}
        <div class="source-text">
          <p class="source-title">${summary.title}${summary.description ? `<span class="source-desc">${summary.description}</span>` : ""}</p>
          <p class="source-extract">${summary.extract}</p>
          <a class="source-link" href="${summary.pageUrl}" target="_blank" rel="noreferrer noopener">阅读维基百科原文 →</a>
        </div>
      </div>
    `;
  });
}

function buildWeeklyFocus(contentPlans) {
  const ranked = getRankedSubjects();
  const topOne = ranked[0];
  const topTwo = ranked[1];
  const examPressure = state.examDays <= 21 ? "高" : state.examDays <= 40 ? "中" : "可控";
  const modeDescription =
    state.generationMode === "sync"
      ? "今晚以校内同步为主，先把课堂内容吃透。"
      : state.generationMode === "advance"
        ? "今晚会在校内同步基础上略快半步，适合提前占坑。"
        : "今晚按阶段冲刺模式走，优先练卷面得分项。";

  return [
    {
      title: `${topOne.name} 仍然是第一主攻科目`,
      description: `${topOne.name} 优先级最高，先把 ${contentPlans[0].topic.module} 啃透，再做对应题型。`
    },
    {
      title: `${topTwo.name} 负责补齐第二短板`,
      description: `${topTwo.name} 今晚建议切到 ${contentPlans[1] ? contentPlans[1].topic.module : "针对性复盘"}，避免只盯一科。`
    },
    {
      title: `进度模板：${progressLabels[state.progressStage]} · 压力等级：${examPressure}`,
      description: modeDescription
    },
    {
      title: "使用题源的方法",
      description: "先做页面给出的模块化任务，再点题源链接找同类题，不要一上来就刷整套卷。"
    }
  ];
}

function buildContentPlans() {
  const ranked = getRankedSubjects();
  const subjectCount = state.availableMinutes <= 90 ? 1 : state.availableMinutes <= 135 ? 2 : 3;
  const selectedSubjects = ranked.slice(0, subjectCount);
  const modeOffset = state.generationMode === "sync" ? 0 : state.generationMode === "advance" ? 1 : 2;

  return selectedSubjects.map((subject, index) => {
    const topicBank = curriculumLibrary[subject.id][state.progressStage];
    const topic = topicBank[(state.planSeed + index + modeOffset) % topicBank.length];
    const estimatedMinutes = computePlanMinutes(index, selectedSubjects.length);
    const scoreGap = Math.max(subject.targetScore - subject.currentScore, 0);
    const reason =
      `${subject.name} 当前距离目标还有 ${scoreGap} 分左右，今晚先抓 ${topic.module}。` +
      ` 这块更容易通过 ${topic.drillType} 快速拉回有效分。`;
    const wikiTitle = resolveWikiTitle(subject, topic);
    const planId = `${subject.id}-${topic.module}-${state.progressStage}-${state.generationMode}-${state.planSeed}`;

    return {
      planId,
      subject,
      topic,
      estimatedMinutes,
      reason,
      wikiTitle,
      priorityLabel: getPriorityLabel(computePriority(subject), index),
      tasks: buildTasks(subject, topic),
      sourceLinks: buildSourceLinks(subject, topic)
    };
  });
}

function buildTasks(subject, topic) {
  const introTask =
    state.generationMode === "sprint"
      ? `先用 3 分钟回顾 ${topic.module} 的高频坑点，再直接上题。`
      : `先用 5 分钟梳理 ${topic.module} 的核心框架：${topic.focus}。`;
  const practiceTask = `做 ${topic.questionCount} 道 ${topic.drillType}，错题旁边写出“卡在哪一步”。`;
  const outputTask = `收尾时完成输出：${topic.output}。`;

  if (subject.id === "math" || subject.id === "physics" || subject.id === "chemistry") {
    return [introTask, practiceTask, "至少重做 1 道错题，改成规范步骤。", outputTask];
  }

  return [introTask, practiceTask, "把高频表达或答题句式单独摘出来。", outputTask];
}

function buildStudyPlan(contentPlans) {
  const shortNight = state.availableMinutes <= 120;
  const studyBlockDuration = shortNight ? (state.energy >= 8 ? 40 : 35) : (state.energy >= 8 ? 50 : 45);
  const breakDuration = shortNight ? 5 : 10;
  const homeworkPenaltyPerLevel = shortNight ? 5 : 8;
  const effectiveMinutes = Math.max(studyBlockDuration, state.availableMinutes - state.homeworkLoad * homeworkPenaltyPerLevel);
  const blockLimit = shortNight ? 3 : 5;
  const blockCount = Math.max(1, Math.min(blockLimit, Math.floor((effectiveMinutes + breakDuration) / (studyBlockDuration + breakDuration))));
  const startMinutes = 21 * 60;
  const blocks = [];
  let cursor = startMinutes;

  for (let index = 0; index < blockCount; index += 1) {
    const contentPlan = contentPlans[index % contentPlans.length];
    const task = contentPlan.tasks[Math.min(index, contentPlan.tasks.length - 1)];
    const start = formatTime(cursor);
    cursor += studyBlockDuration;
    const end = formatTime(cursor);

    blocks.push({
      time: `${start} - ${end}`,
      title: `${contentPlan.subject.name} · ${contentPlan.topic.module}`,
      description: task,
      isBreak: false
    });

    if (index !== blockCount - 1) {
      const breakStart = formatTime(cursor);
      cursor += breakDuration;
      const breakEnd = formatTime(cursor);
      blocks.push({
        time: `${breakStart} - ${breakEnd}`,
        title: "恢复休息",
        description: "喝水、站起来走两分钟，眼睛离开屏幕，下一段直接接任务。",
        isBreak: true
      });
    }
  }

  return {
    goal:
      contentPlans.length > 1
        ? `${contentPlans[0].subject.name} 主攻，${contentPlans[1].subject.name} 跟进，并完成具体输出物`
        : `${contentPlans[0].subject.name} 主攻，并完成具体输出物`,
    blocks
  };
}

function buildSourceLinks(subject, topic) {
  const query = encodeURIComponent(`上海 高二 ${subject.name} ${topic.module} ${topic.drillType}`);
  return [
    {
      label: "高考网高中试卷库",
      url: subjectResourceHubs[subject.id] ?? HIGH_SCHOOL_PAPERS_URL
    },
    {
      label: "中国教育在线上海卷入口",
      url: SHANGHAI_PAPERS_URL
    },
    {
      label: "检索同类题",
      url: `https://www.bing.com/search?q=${query}`
    }
  ];
}

function computePlanMinutes(index, totalSubjects) {
  const effective = Math.max(45, state.availableMinutes - state.homeworkLoad * 4);
  const base = Math.floor(effective / totalSubjects);
  const bonus = index === 0 ? 10 : 0;
  return Math.min(base + bonus, 60);
}

function getRankedSubjects() {
  return [...state.subjects].sort((left, right) => computePriority(right) - computePriority(left));
}

function computePriority(subject) {
  const scoreGap = Math.max(subject.targetScore - subject.currentScore, 0);
  const weakness = Math.max(0, 150 - subject.currentScore) / 15;
  const examBoost = Math.max(0.8, 2.6 - state.examDays / 45);
  const energyBoost = state.energy >= 7 ? 1.1 : 0.92;
  const homeworkPenalty = 1 - state.homeworkLoad * 0.03;
  const modeBoost = state.generationMode === "sprint" ? 1.15 : state.generationMode === "advance" ? 1.08 : 1;
  return Number((((scoreGap / 8 + weakness) * subject.weight * examBoost * energyBoost * homeworkPenalty * modeBoost)).toFixed(1));
}

function getPriorityLabel(priority, index) {
  if (priority >= 8.6) {
    return "今晚上强度";
  }
  if (priority >= 6.8 || index < 2) {
    return "本周主攻";
  }
  return "保持手感";
}

function priorityToColor(priority) {
  if (priority >= 8.6) {
    return "#ff7cc7";
  }
  if (priority >= 6.8) {
    return "#67c6ff";
  }
  return "#63f0da";
}

function formatTime(totalMinutes) {
  const hour = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
  const minute = String(totalMinutes % 60).padStart(2, "0");
  return `${hour}:${minute}`;
}

function sanitizeState(rawState) {
  const normalizedAvailableMinutes =
    Number(rawState.availableMinutes) > 180 ? defaultState.availableMinutes : clamp(rawState.availableMinutes, 60, 180);
  const subjects = Array.isArray(rawState.subjects) ? rawState.subjects : defaultState.subjects;

  return {
    examDays: clamp(rawState.examDays, 7, 90),
    availableMinutes: normalizedAvailableMinutes,
    energy: clamp(rawState.energy, 1, 10),
    homeworkLoad: clamp(rawState.homeworkLoad, 1, 10),
    progressStage: progressLabels[rawState.progressStage] ? rawState.progressStage : defaultState.progressStage,
    generationMode: modeLabels[rawState.generationMode] ? rawState.generationMode : defaultState.generationMode,
    planSeed: Number(rawState.planSeed) || 0,
    subjects: defaultState.subjects.map((fallback, index) => {
      const subject = subjects[index] ?? fallback;
      const currentScore = clamp(subject.currentScore, 60, 150);
      const targetScore = clamp(Math.max(subject.targetScore, currentScore), 70, 150);
      return {
        ...fallback,
        ...subject,
        currentScore,
        targetScore
      };
    })
  };
}

function clamp(value, min, max) {
  return Math.min(Math.max(Number(value), min), max);
}
