const repos = [
  {
    rank: 1,
    name: "build-your-own-x",
    owner: "codecrafters-io",
    stars: "约 51万+",
    category: "从零实现经典系统",
    language: "Markdown",
    audience: "想理解底层原理的工程师",
    url: "https://github.com/codecrafters-io/build-your-own-x",
    description: "build-your-own-x 汇总了亲手实现数据库、操作系统、编译器、Git、Docker 等经典系统的教程。它受欢迎的关键在于把抽象概念变成可实践项目，让开发者通过复刻真实系统来理解工程设计。",
    tags: ["底层原理", "动手项目", "系统学习"]
  },
  {
    rank: 2,
    name: "awesome",
    owner: "sindresorhus",
    stars: "约 47万+",
    category: "精选清单标准",
    language: "Markdown",
    audience: "寻找高质量资源的人",
    url: "https://github.com/sindresorhus/awesome",
    description: "awesome 项目定义并汇总了大量 Awesome List，是开源社区精选资源清单文化的中心节点。它帮助开发者快速进入一个新领域，也为很多主题清单提供了质量规范。",
    tags: ["资源导航", "Awesome List", "社区精选"]
  },
  {
    rank: 3,
    name: "freeCodeCamp",
    owner: "freeCodeCamp",
    stars: "约 45万+",
    category: "互动式编程教育",
    language: "TypeScript / JavaScript",
    audience: "零基础到进阶学习者",
    url: "https://github.com/freeCodeCamp/freeCodeCamp",
    description: "freeCodeCamp 是全球影响力极高的免费编程学习平台，仓库包含课程、挑战题、认证体系和学习社区相关代码。它受欢迎的关键不只是免费，而是把学习路径、练习反馈和项目实践放在同一套体系里。",
    tags: ["Web 开发", "课程平台", "公益教育"]
  },
  {
    rank: 4,
    name: "public-apis",
    owner: "public-apis",
    stars: "约 44万+",
    category: "公共 API 目录",
    language: "Python / Markdown",
    audience: "应用开发者和原型设计者",
    url: "https://github.com/public-apis/public-apis",
    description: "public-apis 收集了大量可公开访问的 API，覆盖天气、金融、音乐、地图、机器学习等方向。对做 demo、课程作业、产品原型和数据驱动应用的人来说，它像一本 API 黄页。",
    tags: ["API", "原型开发", "数据服务"]
  },
  {
    rank: 5,
    name: "free-programming-books",
    owner: "EbookFoundation",
    stars: "约 39万+",
    category: "免费编程书籍索引",
    language: "Markdown",
    audience: "需要系统资料的学习者",
    url: "https://github.com/EbookFoundation/free-programming-books",
    description: "这个项目维护多语言免费编程书籍、课程和资料链接，是开发者自学时代的经典入口。它的价值在于长期整理和社区校验，让分散在互联网上的知识资源更容易被发现。",
    tags: ["书单", "多语言", "自学资源"]
  },
  {
    rank: 6,
    name: "OpenClaw",
    owner: "openclaw",
    stars: "约 38万+",
    category: "个人 AI 助手",
    language: "Python / TypeScript",
    audience: "关注自托管 AI 工具的人",
    url: "https://github.com/openclaw/openclaw",
    description: "OpenClaw 是一个开源 AI 助手项目，强调在 WhatsApp、Telegram、Email 等日常渠道里连接日历、邮件和文件等个人数据源。它进入头部榜单，反映了开发者对可自托管个人 AI 工作流的兴趣。",
    tags: ["AI 助手", "自动化", "自托管"]
  },
  {
    rank: 7,
    name: "developer-roadmap",
    owner: "nilbuild",
    stars: "约 35万+",
    category: "开发者成长路线图",
    language: "TypeScript",
    audience: "规划学习路径的开发者",
    url: "https://github.com/nilbuild/developer-roadmap",
    description: "developer-roadmap 用可视化路线图解释前端、后端、DevOps、AI、数据等方向该学什么、先学什么。当前公开排序里出现的是 nilbuild 账号下的同名仓库，它延续了路线图项目最受欢迎的价值：帮开发者在海量技术信息里做取舍。",
    tags: ["路线图", "职业成长", "技术栈"]
  },
  {
    rank: 8,
    name: "system-design-primer",
    owner: "donnemartin",
    stars: "约 35万+",
    category: "系统设计入门",
    language: "Python / Markdown",
    audience: "后端、架构和面试准备者",
    url: "https://github.com/donnemartin/system-design-primer",
    description: "system-design-primer 讲解可扩展系统设计、缓存、负载均衡、数据库、消息队列和常见架构题。它把抽象的系统设计拆成可复习、可讨论的知识模块。",
    tags: ["系统设计", "架构", "后端"]
  },
  {
    rank: 9,
    name: "coding-interview-university",
    owner: "jwasham",
    stars: "约 35万+",
    category: "计算机基础与面试准备",
    language: "Markdown",
    audience: "准备大厂面试和补基础的人",
    url: "https://github.com/jwasham/coding-interview-university",
    description: "作者最初用它记录从非 CS 背景准备软件工程面试的学习计划，后来演化为系统化的计算机科学自学清单。它强调算法、数据结构、系统知识和持续练习。",
    tags: ["算法", "CS 基础", "面试"]
  },
  {
    rank: 10,
    name: "awesome-python",
    owner: "vinta",
    stars: "约 30万+",
    category: "Python 生态精选",
    language: "Python / Markdown",
    audience: "Python 开发者和数据方向学习者",
    url: "https://github.com/vinta/awesome-python",
    description: "awesome-python 整理 Python 生态里的框架、库、工具和资源，覆盖 Web、爬虫、数据、机器学习、测试、部署等领域。它是进入 Python 生态时非常实用的地图。",
    tags: ["Python", "工具库", "生态导航"]
  }
];

const grid = document.querySelector("#repoGrid");

grid.innerHTML = repos.map((repo) => `
  <article class="repo-card">
    <div class="repo-head">
      <span class="rank">#${repo.rank}</span>
      <div class="repo-title">
        <h3>${repo.name}</h3>
        <div class="owner">${repo.owner}</div>
      </div>
      <div class="stars">★ ${repo.stars}</div>
    </div>
    <p class="desc">${repo.description}</p>
    <div class="facts" aria-label="${repo.name} 项目信息">
      <div class="fact"><b>类型</b><span>${repo.category}</span></div>
      <div class="fact"><b>主要语言</b><span>${repo.language}</span></div>
      <div class="fact"><b>适合人群</b><span>${repo.audience}</span></div>
    </div>
    <div class="tags">${repo.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    <a class="repo-link" href="${repo.url}" target="_blank" rel="noreferrer">打开 GitHub 仓库</a>
  </article>
`).join("");
