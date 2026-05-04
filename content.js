window.CONTENT = {
  ru: {
    hero_title: "Python Backend для AI-систем",
    hero_subtitle: "RAG, LLM-интеграции, realtime backend",
    pages: {
      main: {
        file_name: "main.py",
        code_type: "python",
        code: `
<span class="hero">&lt;<span class="accent">CV</span>&gt;</span>
<span class="hero-name">Роман Шведов</span>
<span class="hero-role">Python Backend Engineer</span>
<span class="hero-sub">AI / LLM / Event-driven systems</span>

<span class="section"># --- Обо мне ----------------------------------------------------</span>
<span class="keyword">def</span> <span class="function">about_me</span>():
    <span class="keyword">return</span> [
        <span class="string">"Python Backend / AI Engineer с опытом разработки LLM-систем"</span>,
        <span class="string">"Разрабатываю backend-сервисы, RAG-пайплайны и интеграции"</span>,
        <span class="string">"Работаю с REST API, WebSocket, очередями и event-driven логикой"</span>,
        <span class="string">"Фокус: AI backend, надежность, автоматизация и production-ready архитектура"</span>,
    ]

<span class="section"># --- Опыт -------------------------------------------------------</span>
<span class="keyword">class</span> <span class="class-name">AI_Backend_Developer</span>:

    <span class="property">period</span> = <span class="string">"2026 — настоящее время"</span>
    <span class="property">role</span> = <span class="string">"AI Backend разработчик"</span>
    <span class="property">project</span> = <span class="string">"RAG система / AI ассистент"</span>

    <span class="keyword">def</span> <span class="function">responsibilities</span>(self):
        <span class="keyword">return</span> [
            <span class="string">"Спроектировал и реализовал end-to-end RAG pipeline"</span>,
            <span class="string">"Разработал REST API на FastAPI с асинхронной обработкой"</span>,
            <span class="string">"Реализовал worker-based архитектуру с Redis queue"</span>,
            <span class="string">"Интегрировал локальные LLM через LM Studio"</span>,
            <span class="string">"Построил retrieval слой: embeddings, vector search, top-k, threshold"</span>,
            <span class="string">"Внедрил Kubernetes, архитектура дополнительно подготовлена к k3s"</span>,
        ]

<span class="keyword">class</span> <span class="class-name">Trading_System_Developer</span>:

    <span class="property">period</span> = <span class="string">"2025 — 2026"</span>
    <span class="property">role</span> = <span class="string">"Python разработчик"</span>
    <span class="property">domain</span> = <span class="string">"Финансовый сектор / торговая система"</span>

    <span class="keyword">def</span> <span class="function">results</span>(self):
        <span class="keyword">return</span> [
            <span class="string">"Автоматизировал до 98% торговых операций"</span>,
            <span class="string">"Сократил ручные действия с ~4 часов до ~10 минут в день"</span>,
            <span class="string">"Обеспечил стабильную работу системы: ~99.9% uptime"</span>,
        ]

<span class="section"># --- Статус ----------------------------------------------------</span>
<span class="keyword">def</span> <span class="function">status</span>():
    <span class="keyword">return</span> <span class="string">"open_to_work"</span>
`.trim()
      },

      hard: {
        file_name: "hard_skills.py",
        code_type: "python",
        code: `
<span class="keyword">class</span> <span class="class-name">HardSkills</span>:

    backend = [
        <span class="string">"Python"</span>,
        <span class="string">"FastAPI"</span>,
        <span class="string">"SQLAlchemy"</span>,
        <span class="string">"PostgreSQL"</span>,
        <span class="string">"asyncpg"</span>,
        <span class="string">"Alembic"</span>,
        <span class="string">"httpx"</span>,
        <span class="string">"Pydantic"</span>,
    ]

    async_stack = [
        <span class="string">"asyncio"</span>,
        <span class="string">"Redis"</span>,
        <span class="string">"RabbitMQ"</span>,
        <span class="string">"aio-pika"</span>,
        <span class="string">"FastStream"</span>,
        <span class="string">"event-driven architecture"</span>,
    ]

    ai_stack = [
        <span class="string">"LLM integrations"</span>,
        <span class="string">"OpenAI-compatible API"</span>,
        <span class="string">"RAG pipelines"</span>,
        <span class="string">"ChromaDB"</span>,
        <span class="string">"SentenceTransformers"</span>,
        <span class="string">"embeddings"</span>,
        <span class="string">"semantic search"</span>,
    ]

    data_processing = [
        <span class="string">"Pandas"</span>,
        <span class="string">"BeautifulSoup"</span>,
        <span class="string">"lxml"</span>,
        <span class="string">"Selenium"</span>,
        <span class="string">"Requests"</span>,
    ]

    document_and_voice_ai = [
        <span class="string">"PyMuPDF"</span>,
        <span class="string">"faster-whisper"</span>,
        <span class="string">"ctranslate2"</span>,
        <span class="string">"AV"</span>,
        <span class="string">"soundfile"</span>,
    ]

    infra_and_tools = [
        <span class="string">"Docker"</span>,
        <span class="string">"Linux"</span>,
        <span class="string">"GitHub"</span>,
        <span class="string">"Jinja2"</span>,
        <span class="string">"python-dotenv"</span>,
        <span class="string">"pytest"</span>,
    ]
`.trim()
      },

      soft: {
        file_name: "soft_skills.md",
        code_type: "python",
        code: `
<span class="keyword">from</span> core.mindset <span class="keyword">import</span> SystemThinking, Debugging, Ownership
<span class="keyword">from</span> core.behavior <span class="keyword">import</span> ShipIt, LearnFast, HandleComplexity


<span class="keyword">def</span> <span class="function">solve</span>(problem):
    mindset = [
        SystemThinking(),
        Debugging(),
        Ownership(),
    ]

    behavior = [
        ShipIt(),
        LearnFast(),
        HandleComplexity(),
    ]

    <span class="keyword">return</span> build_working_solution(problem, mindset, behavior)


soft_skills = [
    <span class="string">"Системное мышление"</span>,
    <span class="string">"Спокойный разбор сложных задач"</span>,
    <span class="string">"Доведение задач до рабочего состояния"</span>,
    <span class="string">"Самостоятельность и ownership"</span>,
    <span class="string">"Быстрое погружение в чужой код и legacy-системы"</span>,
    <span class="string">"Работа с неопределённостью и сложными интеграциями"</span>,
]
`.trim()
      },

      projects: {
        file_name: "projects.json",
        code_type: "json",
        code: `
{
  "local_ai_station": {
    "type": "AI Backend / RAG / Multi-agent platform",
    "stack": ["Python", "FastAPI", "Redis", "ChromaDB", "Sentence Transformers",
      "LM Studio", "faster-whisper", "Docker", "Kubernetes / k3s" ],
    "description": [
      "Локальная AI-платформа для анализа документов, RAG-вопросов, локального чата и voice-to-text сценариев",
      "Реализована архитектура с разделением API, очереди, worker-процессов, assistant layer, document/query pipelines и vector storage",
      "Документы проходят pipeline: PDF upload → clean → summary → chunking → embeddings → Chroma → Obsidian-compatible storage",
      "Поддерживается маршрутизация между ассистентами: rag, chat, dummy, auto",
      "Добавлены endpoints для документов, jobs, assistants, ask/voice сценариев",
      "Система контейнеризирована через Docker и подготовлена к Kubernetes deployment"
    ],
    "engineering_focus": ["async ingestion", "queue-based processing", "local LLM integration",
      "multi-agent orchestration", "persistent vector retrieval", "deployment-oriented architecture"]
  },

  "trading_bot_platform": {
    "type": "Realtime Backend / Event-driven trading system",
    "stack": ["Python", "asyncio", "REST API", "WebSocket", "SQLite", "PyQt5", "local file storage", "JSONL logs"],
    "description": [
      "Backend-платформа для grid trading bot с GUI-панелью управления параметрами по тикерам",
      "Бот хранит конфигурации, runtime state, логи, историю ордеров и событий локально",
      "GUI позволяет управлять параметрами стратегии: включение тикера, направление, размер, шаг сетки, количество уровней и take-profit",
      "Реализована работа с состоянием между итерациями: выставленные уровни, обработанные события, внутренние флаги и кэши",
      "Есть ветка с SQLite как single source of truth для orders, fills, executions, lifecycle events и snapshots",
      "Архитектура разделяет domain logic, broker API layer, storage/state layer и GUI"
    ],
    "engineering_focus": ["event-driven order processing", "state recovery", "idempotency", "runtime diagnostics", "order lifecycle tracking", "local GUI tooling"]
  },

  "figma_localization": {
    "type": "Automation / Integration / Design workflow tooling",
    "stack": ["Python", "Pandas", "JSON", "XLSX", "Figma Plugin", "layout rules", "decision engine"],
    "description": [
      "Инструмент автоматизации локализации баннеров и подготовки действий для Figma plugin",
      "Pipeline читает XLSX-файлы с переводами, собирает payload для макетов и оценивает переполнение текста",
      "Decision engine принимает решения по адаптации layout: уменьшение шрифта, line-height, auto-resize и fallback-варианты",
      "На выходе формируются decision report, layout adjustment plan и plugin actions",
      "Цель проекта — снизить ручную работу дизайнера при массовой локализации баннеров"
    ],
    "engineering_focus": ["data transformation", "layout validation", "automation for design workflows",
      "plugin action generation","edge-case reporting"]
  },

  "yacht_parser_bot": {
    "type": "Parser / Telegram Bot / Data automation",
    "stack": ["Python", "Selenium", "BeautifulSoup", "SQLite", "python-telegram-bot", "dotenv"],
    "description": [
      "Проект для поиска и анализа яхт с сайта yachtall.com с выдачей результатов через Telegram-бота",
      "Парсер собирает название, локацию, цену, описание и фотографии яхт",
      "Данные сохраняются в SQLite-базу",
      "Telegram-бот позволяет искать яхты по базе и получать результаты в удобном интерфейсе",
      "Проект разделён на Parser и Bot модули: получение ссылок, парсинг карточек, запуск парсера, bot logic и handlers"
    ],
    "engineering_focus": ["web scraping", "browser automation","SQLite storage", "Telegram bot integration", "modular project structure"]
  },

  "auth_rbac_api": {
    "type": "Backend API / Auth / RBAC",
    "stack": ["Django", "Django REST Framework", "PostgreSQL", "Docker", "JWT"],
    "description": [
      "Backend API для регистрации, логина, логаута, обновления профиля и soft-delete пользователя",
      "Реализована ролевая модель доступа RBAC: Role → BusinessElement → AccessRoleRule",
      "AccessRoleRule управляет CRUD-пермишенами: read, read_all, create, update, update_all, delete, delete_all",
      "Добавлены mock business endpoints для демонстрации 401 / 403 / 200 сценариев",
      "Есть admin API для управления ролями, бизнес-элементами и правилами доступа",
      "Проект запускается с PostgreSQL через Docker и seed_demo для демо-пользователей"
    ],
    "engineering_focus": ["auth flow", "JWT", "RBAC modeling", "permission checks", "admin API","Dockerized PostgreSQL"]
  },

  "wildberries_parser": {
    "type": "Parser / Data extraction / Excel reporting",
    "stack": ["Python", "Selenium", "Excel", "ChromeDriver"],
    "description": [
      "Парсер каталога Wildberries по поисковому запросу",
      "Собирает ссылки на карточки товаров и извлекает артикул, название, цену, описание, изображения, характеристики, селлера, размеры, остатки, рейтинг, отзывы и страну производства",
      "Результат сохраняется в Excel",
      "Дополнительно формируется отфильтрованный файл по условиям: рейтинг >= 4.5, цена <= 10000, страна производства — Россия",
      "Используется Selenium из-за динамической подгрузки данных на сайте"
    ],
    "engineering_focus": ["dynamic content scraping", "structured data extraction", "Excel export",
      "filtering pipeline","parser robustness"]
  }
}
`.trim()
      },

      experience: {
        file_name: "experience.log",
        code_type: "log",
        code: `
[2026] Построил локальный AI backend с полным RAG pipeline
       → Реализовал загрузку документов (PDF), извлечение текста и очистку
       → Спроектировал пайплайн чанкинга и генерации embeddings
       → Интегрировал векторное хранилище (ChromaDB) и семантический поиск
       → Подключил LLM (локальные / OpenAI-compatible) для генерации ответов
       → Разработал API для обработки документов и пользовательских запросов

[2026] Добавил асинхронную обработку, Redis queue и retrieval слой
       → Разделил обработку документов и обработку запросов
       → Ввел очередь задач на базе Redis для фоновых процессов
       → Реализовал async пайплайны (обработка / поиск / генерация ответа)
       → Оптимизировал top-k поиск и threshold-фильтрацию
       → Подготовил архитектуру к масштабированию и переходу на внешний vector DB

[2025] Спроектировал архитектуру обработки документов и AI ассистента
       → Определил pipeline: input → processing → storage → retrieval → response
       → Построил модульные сервисы для парсинга, чанкинга и embeddings
       → Реализовал хранение промежуточных данных (chunks, embeddings, metadata)
       → Интегрировал систему с внешними инструментами (Figma automation, document workflows)

[2025] Разработал realtime backend для торговой системы (WebSocket)
       → Реализовал event-driven архитектуру для рыночных и ордерных событий
       → Интегрировался с API брокера через HTTP и WebSocket
       → Построил управление состоянием ордеров и позиций
       → Спроектировал обработку событий в реальном времени

[2025] Реализовал идемпотентность, очереди, кэширование и восстановление
       → Обеспечил защиту от дублирующих и несинхронных событий
       → Добавил слой кэширования для ускорения работы системы
       → Реализовал retry-логику и восстановление после сбоев
       → Стабилизировал систему при нестабильных API и сетевых условиях

[2024] Работал с парсингом PDF, валидацией и распознаванием документов
       → Построил пайплайн извлечения структурированных данных
       → Реализовал валидацию и нормализацию данных
       → Улучшил устойчивость парсинга для разных форматов документов

[2024] Улучшил точность, скорость и покрытие тестами
       → Снизил количество ошибок парсинга на ~20%
       → Повысил точность извлечения ключевых данных
       → Оптимизировал производительность (+6% к скорости)
       → Увеличил покрытие тестами (50% → 70%)
`.trim()
      },

      contact: {
        file_name: "contact.env",
        code_type: "env",
        code: `
ROLE=AI_BACKEND_ENGINEER
STATUS=OPEN_TO_WORK
LOCATION=REMOTE
GITHUB=<a class="code-link" href="https://github.com/russianko" target="_blank">https://github.com/russianko</a>
PHONE=<a class="code-link" href="tel:+79002319199">+79002319199</a>
EMAIL=<a class="code-link" href="mailto:shvedov.ra@gmail.com">shvedov.ra@gmail.com</a>
TELEGRAM=<a class="code-link" href="https://t.me/shvedov_ra" target="_blank">@shvedov_ra</a>
`.trim()
      }
    }
  },

  en: {
    hero_title: "Python Backend for AI Systems",
    hero_subtitle: "RAG, LLM integrations, realtime backend",
    pages: {
      main: {
        file_name: "main.py",
        code_type: "python",
        code: `
<span class="hero">&lt;<span class="accent">CV</span>&gt;</span>
<span class="hero-name">Roman Shvedov</span>
<span class="hero-role">Python Backend Engineer</span>
<span class="hero-sub">AI / LLM / Event-driven systems</span>

<span class="section"># --- About ------------------------------------------------------</span>
<span class="keyword">def</span> <span class="function">about_me</span>():
    <span class="keyword">return</span> [
        <span class="string">"Python Backend / AI Engineer with experience in LLM systems"</span>,
        <span class="string">"Builds backend services, RAG pipelines and integrations"</span>,
        <span class="string">"Works with REST API, WebSocket, queues and event-driven logic"</span>,
        <span class="string">"Focus: AI backend, reliability, automation and production-ready architecture"</span>,
    ]

<span class="section"># --- Experience -------------------------------------------------</span>
<span class="keyword">class</span> <span class="class-name">AI_Backend_Developer</span>:

    <span class="property">period</span> = <span class="string">"2026 — present"</span>
    <span class="property">role</span> = <span class="string">"AI Backend Developer"</span>
    <span class="property">project</span> = <span class="string">"RAG system / AI assistant"</span>

<span class="section"># --- Status -----------------------------------------------------</span>
<span class="keyword">def</span> <span class="function">status</span>():
    <span class="keyword">return</span> <span class="string">"open_to_work"</span>
`.trim()
      },

      hard: {
        file_name: "hard_skills.py",
        code_type: "python",
        code: `
<span class="keyword">class</span> <span class="class-name">HardSkills</span>:

    backend = [
        <span class="string">"Python"</span>,
        <span class="string">"FastAPI"</span>,
        <span class="string">"SQLAlchemy"</span>,
        <span class="string">"PostgreSQL"</span>,
        <span class="string">"asyncpg"</span>,
        <span class="string">"Alembic"</span>,
        <span class="string">"httpx"</span>,
        <span class="string">"Pydantic"</span>,
    ]

    async_stack = [
        <span class="string">"asyncio"</span>,
        <span class="string">"Redis"</span>,
        <span class="string">"RabbitMQ"</span>,
        <span class="string">"aio-pika"</span>,
        <span class="string">"FastStream"</span>,
        <span class="string">"event-driven architecture"</span>,
    ]

    ai_stack = [
        <span class="string">"LLM integrations"</span>,
        <span class="string">"OpenAI-compatible API"</span>,
        <span class="string">"RAG pipelines"</span>,
        <span class="string">"ChromaDB"</span>,
        <span class="string">"SentenceTransformers"</span>,
        <span class="string">"embeddings"</span>,
        <span class="string">"semantic search"</span>,
    ]

    data_processing = [
        <span class="string">"Pandas"</span>,
        <span class="string">"BeautifulSoup"</span>,
        <span class="string">"lxml"</span>,
        <span class="string">"Selenium"</span>,
        <span class="string">"Requests"</span>,
    ]

    document_and_voice_ai = [
        <span class="string">"PyMuPDF"</span>,
        <span class="string">"faster-whisper"</span>,
        <span class="string">"ctranslate2"</span>,
        <span class="string">"AV"</span>,
        <span class="string">"soundfile"</span>,
    ]

    infra_and_tools = [
        <span class="string">"Docker"</span>,
        <span class="string">"Linux"</span>,
        <span class="string">"GitHub"</span>,
        <span class="string">"Jinja2"</span>,
        <span class="string">"python-dotenv"</span>,
        <span class="string">"pytest"</span>,
    ]
`.trim()
      },

      soft: {
        file_name: "soft_skills.md",
        code_type: "python",
        code: `
<span class="keyword">from</span> core.mindset <span class="keyword">import</span> SystemThinking, Debugging, Ownership
<span class="keyword">from</span> core.behavior <span class="keyword">import</span> ShipIt, LearnFast, HandleComplexity


<span class="keyword">def</span> <span class="function">solve</span>(problem):
    mindset = [
        SystemThinking(),
        Debugging(),
        Ownership(),
    ]

    behavior = [
        ShipIt(),
        LearnFast(),
        HandleComplexity(),
    ]

    <span class="keyword">return</span> build_working_solution(problem, mindset, behavior)


soft_skills = [
    <span class="string">"Systems thinking"</span>,
    <span class="string">"Calm debugging of complex problems"</span>,
    <span class="string">"Shipping working solutions"</span>,
    <span class="string">"Ownership and autonomy"</span>,
    <span class="string">"Fast onboarding into existing codebases and legacy systems"</span>,
    <span class="string">"Working with uncertainty and complex integrations"</span>,
]
`.trim()
      },

      projects: {
      file_name: "projects.json",
      code_type: "json",
      code: `
{
  "local_ai_station": {
    "type": "AI Backend / RAG / Multi-agent platform",
    "stack": ["Python", "FastAPI", "Redis", "ChromaDB", "SentenceTransformers", "LM Studio", "faster-whisper", "Docker", "Kubernetes / k3s"],
    "description": [
      "Local AI platform for document analysis, RAG Q&A, local chat and voice-to-text scenarios",
      "Architecture separates API, queue, workers, assistant layer, document/query pipelines and vector storage",
      "Documents pass through pipeline: PDF upload → clean → summary → chunking → embeddings → Chroma → Obsidian-compatible storage",
      "Supports assistant routing: rag, chat, dummy, auto",
      "Includes endpoints for documents, jobs, assistants, ask and voice scenarios",
      "Containerized with Docker and prepared for Kubernetes deployment"
    ],
    "engineering_focus": ["async ingestion", "queue-based processing", "local LLM integration", "multi-agent orchestration", "persistent vector retrieval", "deployment-oriented architecture"]
  },

  "trading_bot_platform": {
    "type": "Realtime Backend / Event-driven trading system",
    "stack": ["Python", "asyncio", "REST API", "WebSocket", "SQLite", "PyQt5", "local file storage", "JSONL logs"],
    "description": [
      "Backend platform for a grid trading bot with GUI-based per-ticker parameter management",
      "Stores configuration, runtime state, logs, order history and lifecycle events locally",
      "GUI controls strategy parameters: enable flag, direction, size, grid step, level count and take-profit",
      "Maintains state between iterations: placed levels, processed events, internal flags and caches",
      "Includes SQLite branch as a single source of truth for orders, fills, executions, lifecycle events and snapshots",
      "Architecture separates domain logic, broker API layer, storage/state layer and GUI"
    ],
    "engineering_focus": ["event-driven order processing", "state recovery", "idempotency", "runtime diagnostics", "order lifecycle tracking", "local GUI tooling"]
  },

  "figma_localization": {
    "type": "Automation / Integration / Design workflow tooling",
    "stack": ["Python", "Pandas", "JSON", "XLSX", "Figma Plugin", "layout rules", "decision engine"],
    "description": [
      "Automation tool for banner localization and Figma plugin action generation",
      "Pipeline reads XLSX translation files, builds layout payloads and evaluates text overflow",
      "Decision engine suggests layout adaptation: font-size reduction, line-height changes, auto-resize and fallback text",
      "Generates decision report, layout adjustment plan and plugin actions",
      "Goal: reduce manual designer work during large-scale banner localization"
    ],
    "engineering_focus": ["data transformation", "layout validation", "automation for design workflows", "plugin action generation", "edge-case reporting"]
  },

  "yacht_parser_bot": {
    "type": "Parser / Telegram Bot / Data automation",
    "stack": ["Python", "Selenium", "BeautifulSoup", "SQLite", "python-telegram-bot", "dotenv"],
    "description": [
      "Project for searching and analyzing yachts from yachtall.com with results delivered through a Telegram bot",
      "Parser collects yacht name, location, price, description and photos",
      "Data is stored in a local SQLite database",
      "Telegram bot lets users search the database and receive results in a convenient chat interface",
      "Project is split into Parser and Bot modules: link collection, yacht parsing, parser entrypoint, bot logic and handlers"
    ],
    "engineering_focus": ["web scraping", "browser automation", "SQLite storage", "Telegram bot integration", "modular project structure"]
  },

  "auth_rbac_api": {
    "type": "Backend API / Auth / RBAC",
    "stack": ["Django", "Django REST Framework", "PostgreSQL", "Docker", "JWT"],
    "description": [
      "Backend API for registration, login, logout, profile update and user soft-delete",
      "Role-based access model: Role → BusinessElement → AccessRoleRule",
      "AccessRoleRule controls CRUD permissions: read, read_all, create, update, update_all, delete, delete_all",
      "Includes mock business endpoints to demonstrate 401 / 403 / 200 scenarios",
      "Includes admin API for managing roles, business elements and access rules",
      "Runs with PostgreSQL via Docker and seed_demo demo users"
    ],
    "engineering_focus": ["auth flow", "JWT", "RBAC modeling", "permission checks", "admin API", "Dockerized PostgreSQL"]
  },

  "wildberries_parser": {
    "type": "Parser / Data extraction / Excel reporting",
    "stack": ["Python", "Selenium", "Excel", "ChromeDriver"],
    "description": [
      "Wildberries catalog parser by search query",
      "Collects product links and extracts SKU, title, price, description, images, characteristics, seller, sizes, stock, rating, reviews and country of origin",
      "Saves full result to Excel",
      "Creates an additional filtered file by conditions: rating >= 4.5, price <= 10000, country of origin — Russia",
      "Uses Selenium because the website relies on dynamic content loading"
    ],
    "engineering_focus": ["dynamic content scraping", "structured data extraction", "Excel export", "filtering pipeline", "parser robustness"]
  }
}
`.trim()
},

      experience: {
        file_name: "experience.log",
        code_type: "log",
        code: `
[2026] Built local AI backend with full RAG pipeline
           → Implemented document ingestion (PDF), text extraction and cleaning
           → Designed chunking and embedding generation pipeline
           → Integrated vector storage (ChromaDB) and semantic retrieval
           → Connected LLM (local / OpenAI-compatible) for answer generation
           → Built API layer for document processing and user queries
    
[2026] Added async processing, Redis queue and retrieval layer
       → Separated document processing from request handling
       → Introduced Redis-based queue for background tasks
       → Implemented async pipelines (processing / retrieval / response)
       → Optimized top-k search and threshold-based filtering
       → Prepared architecture for scaling and external vector DB

[2025] Designed document processing and AI assistant architecture
       → Defined pipeline structure: input → processing → storage → retrieval → response
       → Built modular services for parsing, chunking and embeddings
       → Implemented storage for intermediate artifacts (chunks, embeddings, metadata)
       → Integrated with external tools (Figma automation, document flows)

[2025] Developed realtime trading backend with WebSocket events
       → Implemented event-driven architecture for market and order events
       → Integrated broker API via HTTP and WebSocket
       → Built state management for orders and positions
       → Designed processing flow for realtime updates and execution tracking

[2025] Added idempotency, queues, caching and crash recovery
       → Ensured safe handling of duplicate and out-of-order events
       → Introduced caching layer for performance optimization
       → Implemented retry logic and recovery after failures
       → Stabilized system behavior under unstable network/API conditions

[2024] Worked on PDF parsing, validation and document recognition
       → Developed pipeline for extracting structured data from documents
       → Implemented validation and normalization of extracted data
       → Improved parsing robustness for different document formats

[2024] Improved parsing accuracy, speed and test coverage
       → Reduced parsing errors by ~20%
       → Increased extraction accuracy (key fields)
       → Optimized processing performance (+6% speed)
       → Expanded automated test coverage (50% → 70%)
`.trim()
      },

      contact: {
        file_name: "contact.env",
        code_type: "env",
        code: `
ROLE=AI_BACKEND_ENGINEER
STATUS=OPEN_TO_WORK
LOCATION=REMOTE
GITHUB=<a class="code-link" href="https://github.com/russianko" target="_blank">https://github.com/russianko</a>
PHONE=<a class="code-link" href="tel:+79002319199">+79002319199</a>
EMAIL=<a class="code-link" href="mailto:shvedov.ra@gmail.com">shvedov.ra@gmail.com</a>
TELEGRAM=<a class="code-link" href="https://t.me/shvedov_ra" target="_blank">@shvedov_ra</a>
`.trim()
      }
    }
  }
};