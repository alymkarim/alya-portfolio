export type ProjectCategory =
  | "Software"
  | "AI"
  | "Data"
  | "Healthcare"
  | "Research"
  | "Sustainability";

export type ProjectStatus = "Completed" | "In progress" | "Planned";

export type Project = {
  id: string;
  title: string;
  year: string;
  status: ProjectStatus;
  featured?: boolean;
  category: ProjectCategory[];
  shortDescription: string;
  description: string;
  role: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  paper?: string;
  facebook?: string;
  youtube?: string;
  youtube2?: string;
  poster?: string;
  problem: string;
  architecture?: string[];
  highlights: string[];
  challenges: string[];
  lessons: string[];
};

export const projectFilters: Array<"All" | ProjectCategory> = [
  "All",
  "Software",
  "AI",
  "Data",
  "Healthcare",
  "Research",
  "Sustainability",
];

export const projects: Project[] = [
  {
    id: "researchiq",
    title: "ResearchIQ",
    year: "2026",
    status: "In progress",
    featured: true,
    category: ["AI", "Software"],
    shortDescription:
      "AI-assisted scientific literature search, comparison and structured paper analysis.",
    description:
      "ResearchIQ is a full-stack research application for uploading scientific papers, searching extracted content, generating structured LLM-assisted analyses and comparing findings across multiple documents. The backend extracts and stores paper text, sends relevant content to an OpenAI-compatible language model and returns evidence-grounded summaries, methods, datasets, findings, strengths and limitations.",
    role: "Full-stack AI developer",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "Python",
      "PDF Text Extraction",
      "OpenAI-Compatible LLM API",
    ],
    image: "/project-images/researchiq.svg",
    github: "https://github.com/alymkarim/researchiq",
    problem:
      "Researchers spend significant time finding, comparing and validating claims across papers. ResearchIQ provides structured, source-grounded assistance rather than an untraceable generic chatbot.",
    architecture: [
      "Scientific-paper ingestion and metadata extraction",
      "Text chunking and vector embeddings",
      "Semantic retrieval with source references",
      "Structured paper comparison",
      "Evidence-grounded answer generation",
      "React analysis interface and FastAPI backend",
    ],
    highlights: [
      "Multi-document question answering",
      "Paper comparison by method, dataset and findings",
      "Source-grounded summaries",
      "Evidence retrieval for claim verification",
      "Saved research sessions",
    ],
    challenges: [
      "Reducing unsupported LLM claims",
      "Comparing papers that use different terminology",
      "Evaluating retrieval quality",
    ],
    lessons: [
      "A useful RAG system depends more on retrieval quality than impressive wording",
      "Scientific AI tools must expose evidence and uncertainty",
      "Structured outputs are more valuable than a generic chat interface",
    ],
  },
  {
    id: "cartos",
    title: "CartOS Payment Platform",
    year: "2026",
    status: "In progress",
    featured: true,
    category: ["Software"],
    shortDescription:
      "Production-style e-commerce platform with authentication, payments, orders and webhooks.",
    description:
      "A full-stack commerce system designed to demonstrate secure backend engineering, payment processing and cloud-ready application architecture.",
    role: "Full-stack developer",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Stripe",
      "JWT",
      "RBAC",
      "SQLAlchemy",
      "Docker",
    ],
    image: "/project-images/payment.jpg",
    github: "https://github.com/alymkarim/CartOS",
    problem:
      "Build a realistic payment workflow that securely connects users, products, checkout sessions, webhooks and persisted orders.",
    architecture: [
      "React storefront",
      "FastAPI REST API",
      "JWT authentication and RBAC",
      "Stripe Checkout",
      "Signed webhook processing",
      "PostgreSQL persistence",
    ],
    highlights: [
      "Registration and login",
      "Protected endpoints",
      "Product and order APIs",
      "Stripe Checkout",
      "Webhook verification",
    ],
    challenges: [
      "Keeping payment and database state consistent",
      "Designing secure authorization rules",
      "Handling duplicate webhook delivery",
    ],
    lessons: [
      "The backend must confirm payment through webhooks",
      "Authentication and authorization solve different problems",
      "Payment handlers should be idempotent",
    ],
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    year: "2026",
    status: "Completed",
    featured: true,
    category: ["Software"],
    shortDescription:
      "Deployed full-stack task manager with persistent PostgreSQL storage.",
    description:
      "TaskFlow is a responsive CRUD application with separately deployed frontend, backend and database services.",
    role: "Full-stack developer",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Vercel",
      "Render",
      "Supabase",
      "pytest",
    ],
    image: "https://raw.githubusercontent.com/alymkarim/taskflow/main/taskflow.gif",
    github: "https://github.com/alymkarim/taskflow",
    demo: "https://taskflow-six-sandy.vercel.app/",
    problem:
      "Create and deploy a complete CRUD system with a clean API boundary and persistent cloud data.",
    architecture: [
      "React and TypeScript frontend",
      "FastAPI REST API",
      "SQLAlchemy data layer",
      "Supabase PostgreSQL",
      "Vercel and Render deployments",
    ],
    highlights: [
      "Create, edit, complete and delete tasks",
      "Filtering and optional notes",
      "Responsive interface",
      "API and integration tests",
    ],
    challenges: [
      "CORS configuration",
      "SQLite-to-PostgreSQL migration",
      "Environment-variable management",
    ],
    lessons: [
      "Deployment exposes problems that local development does not",
      "Frontend types must match API schemas",
      "Integration tests verify the real request path",
    ],
  },
  {
    id: "drone-human-detection",
    title: "Drone-Assisted Human Detection",
    year: "2025",
    status: "Completed",
    featured: true,
    category: ["AI", "Research"],
    shortDescription:
      "YOLO-based aerial human and posture detection for search-and-rescue operations.",
    description:
      "My MSc research developed a real-time computer-vision pipeline for detecting people in aerial imagery, including difficult body positions relevant to disaster response.",
    role: "Computer-vision researcher and developer",
    technologies: [
      "Python",
      "YOLOv8",
      "PyTorch",
      "OpenCV",
      "ByteTrack",
      "Streamlit",
      "PyQt6",
    ],
    image: "/project-images/drone.png",
    problem:
      "People in drone footage can appear small, partially obscured or positioned in ways that standard person detectors struggle to recognise.",
    architecture: [
      "Multi-source UAV dataset preparation",
      "Five posture-class detection",
      "YOLO model training and evaluation",
      "Dual-scale and tiled inference",
      "Object tracking",
      "Monitoring interfaces",
    ],
    highlights: [
      "Approximately 0.81 mAP@0.5",
      "Approximately 0.62 mAP@0.5:0.95",
      "Approximately 25–30 FPS on a laptop",
      "Five body-posture classes",
    ],
    challenges: [
      "Small-object detection",
      "Inconsistent annotation formats",
      "Balancing accuracy and inference speed",
    ],
    lessons: [
      "Dataset design can matter more than changing models",
      "Deployment speed is part of model quality",
      "A model becomes useful when integrated into a usable system",
    ],
  },
  {
    id: "deepfake-detection",
    title: "DeepGuard (Deepfake Detection)",
    year: "2026",
    status: "In progress",
    featured: true,
    category: ["AI"],
    shortDescription:
      "Video and webcam pipeline for identifying manipulated facial media.",
    description:
      "A real-time computer-vision application that detects faces, processes video frames and classifies content as authentic or manipulated.",
    role: "Computer-vision developer",
    technologies: ["Python", "PyTorch", "OpenCV", "Deep Learning", "FastAPI"],
    image: "/project-images/deepfake.png",
    problem:
      "Synthetic media is increasingly difficult to identify visually, creating a need for tools that expose possible manipulation while communicating uncertainty.",
    architecture: [
      "Video and webcam input",
      "Frame extraction",
      "Face detection and alignment",
      "Deepfake classifier",
      "Video-level result aggregation",
      "Web interface",
    ],
    highlights: [
      "Uploaded-video analysis",
      "Webcam inference",
      "Prediction confidence display",
      "Frame-level visual feedback",
    ],
    challenges: [
      "Generalising to unseen manipulation methods",
      "Handling compressed video",
      "Avoiding misleading confidence",
    ],
    lessons: [
      "Deepfake models require testing outside their training dataset",
      "Frame predictions need careful video-level aggregation",
      "Results must be presented as evidence, not absolute truth",
    ],
  },
 {
  id: "insightforge",
  title: "InsightForge AI",
  year: "2026",
  status: "Completed",
  featured: true,
  category: ["AI", "Software Engineering", "Data"],

  shortDescription:
    "Full-stack machine learning platform for dataset analysis, model training, explainable AI and interactive predictions.",

  description:
    "InsightForge AI is a full-stack analytics platform that enables users to upload datasets, automatically profile their structure, train and compare machine learning models, and generate explainable predictions through an intuitive web interface. The platform supports CSV, Excel and structured PDF datasets while adapting dynamically to both classification and regression tasks.",

  role: "Full-Stack AI Developer",

  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "FastAPI",
    "Python",
    "Pandas",
    "NumPy",
    "scikit-learn",
    "Recharts",
    "Joblib",
    "pdfplumber",
    "pytest",
    "Vercel",
  ],

  image: "/project-images/insightai.png",

  github: "https://github.com/alymkarim/InsightForge-AI",

  demo: "https://insight-forge-ai-bb4f.vercel.app/",

  problem:
    "Building machine learning solutions typically requires multiple disconnected tools for preprocessing, training, evaluation and prediction. InsightForge AI unifies the complete workflow into a single interactive application, making machine learning more accessible while maintaining transparency through explainable AI.",

  architecture: [
    "Dataset upload (CSV, Excel and PDF)",
    "Automatic schema detection and data profiling",
    "Data validation and preprocessing",
    "Dynamic classification and regression pipeline",
    "Model training and comparison",
    "Feature importance analysis",
    "Interactive prediction interface",
    "REST API with FastAPI",
  ],

  highlights: [
    "Supports CSV, Excel and structured PDF datasets",
    "Automatic dataset profiling and schema detection",
    "Classification and regression workflows",
    "Automatic best-model selection",
    "Feature importance visualisation",
    "Interactive prediction dashboard",
    "Responsive React frontend",
    "REST API built with FastAPI",
    "Live deployment on Vercel",
  ],

  challenges: [
    "Designing a dataset-agnostic machine learning pipeline",
    "Supporting multiple file formats including PDF tables",
    "Automatically switching between regression and classification",
    "Generating dynamic prediction forms from uploaded datasets",
    "Deploying a full-stack AI application on Vercel",
  ],

  lessons: [
    "Machine learning applications require strong software engineering principles as much as good models.",
    "Dynamic preprocessing pipelines greatly improve reusability across different datasets.",
    "Explainability is most valuable when presented in language users can easily understand.",
    "Separating frontend and backend deployments simplifies maintenance and scaling.",
  ],
},
{
  id: "portfolio",
  title: "Developer Portfolio",
  year: "2026",
  status: "Completed",
  category: ["Software"],
  shortDescription:
    "A responsive React portfolio showcasing software engineering, AI and data projects with an interactive project explorer and technical blog.",
  description:
    "Designed and developed a modern portfolio application to present projects, technical writing and professional experience. Built from scratch with React and TypeScript, focusing on responsive design, reusable components, accessibility and performance.",
  role: "Frontend developer",
  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "CSS",
    "Lucide React",
    "Vercel",
  ],
  image: "/project-images/webpage.png",
  github: "https://github.com/alymkarim",
  demo: "https://alya-portfolio-jade.vercel.app",
  problem:
    "Create a fast, responsive portfolio that clearly communicates technical skills, project experience and career progression while remaining easy to navigate for recruiters.",
  highlights: [
    "Responsive design for desktop, tablet and mobile",
    "Interactive project showcase with reusable components",
    "Integrated technical blog and article pages",
    "Downloadable CV and social links",
    "Optimised performance with Vite",
    "Deployed with Vercel using continuous deployment",
  ],
  challenges: [
    "Presenting diverse projects without overwhelming users",
    "Creating a consistent visual design across all sections",
    "Balancing aesthetics with usability and accessibility",
  ],
  lessons: [
    "Good UX helps recruiters find important information quickly",
    "Reusable components make future updates much easier",
    "Performance and responsiveness are just as important as appearance",
  ],
},
  {
    id: "urbantech",
    title: "UrbanTech Co-Working Spaces",
    year: "2025",
    status: "Completed",
    category: ["Software"],
    shortDescription:
      "Java management platform delivered by a six-person Agile team.",
    description:
      "A co-working management system developed during the Ericsson Software Engineering programme with booking, user management and financial functionality.",
    role: "UI contributor and Scrum Master for Sprint 2",
    technologies: ["Java", "PrimeFaces", "Maven", "Tomcat", "Jira", "Git"],
    image: "/project-images/ericsson.jpg",
    github: "https://github.com/alymkarim/UTCS_Ericsson",
    problem:
      "Deliver a multi-role web application within an Agile team and fixed programme schedule.",
    highlights: [
      "Authentication and login",
      "Workspace reservations",
      "Member and administrator features",
      "Financial reporting",
      "Agile delivery",
    ],
    challenges: [
      "Coordinating six contributors",
      "Integrating independently developed features",
      "Balancing Scrum and development responsibilities",
    ],
    lessons: [
      "Interface contracts reduce integration failures",
      "Small Git commits improve collaboration",
      "Agile ceremonies need concrete outcomes",
    ],
  },
  {
    id: "medtech-imaging",
    title: "AI for MedTech",
    year: "2025",
    status: "Completed",
    category: ["AI", "Healthcare"],
    shortDescription:
      "RUN-EU collaborative research project exploring AI for CT and MRI analysis.",
    description:
      "An international multidisciplinary project examining how machine learning and data validation can support medical-imaging research and clinical decision support.",
    role: "Research team contributor",
    technologies: [
      "Python",
      "Machine Learning",
      "Medical Imaging",
      "Data Validation",
      "Exploratory Analysis",
    ],
    image: "/project-images/MedTech.jpeg",
    problem:
      "Explore how AI can assist medical-image interpretation while respecting the limitations of healthcare datasets and diagnostic systems.",
    highlights: [
      "International RUN-EU collaboration",
      "CT and MRI data exploration",
      "Data validation",
      "Model experimentation",
    ],
    challenges: [
      "Working with complex medical data",
      "Interdisciplinary communication",
      "Avoiding overstatement of diagnostic capability",
    ],
    lessons: [
      "Healthcare AI requires strong validation",
      "Domain expertise is essential",
      "Clinical tools must support rather than replace professional judgement",
    ],
  },
  {
    id: "parkinsons",
    title: "Parkinson’s Disease Prediction",
    year: "2025",
    status: "Completed",
    category: ["AI", "Data", "Healthcare"],
    shortDescription:
      "Explainable machine learning using sensor-based handwriting data.",
    description:
      "A classification and regression project analysing handwriting and drawing measurements for Parkinson’s disease prediction and progression analysis.",
    role: "Machine-learning developer",
    technologies: [
      "Python",
      "R",
      "Random Forest",
      "Decision Trees",
      "KNN",
      "SHAP",
      "ggplot2",
    ],
    image: "/project-images/parkinson.jpg",
    github:
      "https://github.com/alymkarim/Advanced-Machine-Learning-for-Health-Data-Handwriting-Classification-Parkinson-s-Disease-Regression",
    problem:
      "Evaluate whether handwriting sensor features can distinguish healthy participants from people with Parkinson’s disease.",
    highlights: [
      "Multiple classification algorithms",
      "Regression analysis",
      "Model evaluation",
      "SHAP feature interpretation",
    ],
    challenges: [
      "Small health datasets",
      "Potential class imbalance",
      "Interpreting model features responsibly",
    ],
    lessons: [
      "Cross-validation is essential for small datasets",
      "Accuracy alone is insufficient",
      "Explainability strengthens health-data analysis",
    ],
  },
  {
    id: "gp-practice",
    title: "GP Practice Analytics",
    year: "2024",
    status: "Completed",
    category: ["Data"],
    shortDescription:
      "Operational analytics and reporting for an Irish general-practice setting.",
    description:
      "A decision-focused analytics proposal exploring staffing, scheduling and activity within a GP practice.",
    role: "Data analyst",
    technologies: ["R", "R Markdown", "dplyr", "ggplot2"],
    image: "/project-images/gp-practice.jpg",
    github:
      "https://github.com/alymkarim/GP-Practice-Analytics-R-Markdown-Project",
    problem:
      "Translate routine practice data into useful operational insight for doctors and reception staff.",
    highlights: [
      "Healthcare operations use case",
      "Reproducible report",
      "Staffing analysis",
      "Decision-focused visualisation",
    ],
    challenges: [
      "Defining useful operational metrics",
      "Communicating results to non-technical users",
    ],
    lessons: [
      "Analytics should connect to a decision",
      "Reports need implications, not just numbers",
    ],
  },
  {
    id: "research-sql",
    title: "Research Data Management System",
    year: "2025",
    status: "Completed",
    category: ["Data"],
    shortDescription:
      "Relational database for scientists, research projects, funding and outcomes.",
    description:
      "A normalised database system with advanced SQL and PL/SQL queries for managing and analysing university research activity.",
    role: "Database designer",
    technologies: ["SQL", "PL/SQL", "Database Design", "Normalisation"],
    image: "/project-images/SQL.png",
    github: "https://github.com/alymkarim/Research_Project_Data_System_SQL",
    youtube: "https://youtu.be/-6CFcrz3PiY",
    youtube2: "https://youtu.be/6SM4HiEQFRs",
    problem:
      "Represent scientists, institutions, projects and funding relationships consistently in a relational system.",
    highlights: [
      "Normalised schema",
      "Primary and foreign keys",
      "Advanced analytical queries",
      "Research reporting",
    ],
    challenges: [
      "Modelling many-to-many relationships",
      "Avoiding duplication",
      "Designing useful queries",
    ],
    lessons: [
      "Business rules should drive schema design",
      "Normalisation protects consistency",
      "Indexes should follow access patterns",
    ],
  },
  {
    id: "research-mongodb",
    title: "MongoDB Research Query Framework",
    year: "2025",
    status: "Completed",
    category: ["Data"],
    shortDescription:
      "NoSQL research dataset with 25 structured queries and aggregation pipelines.",
    description:
      "A document-database project covering data modelling, filtering, indexing and progressively advanced MongoDB aggregation.",
    role: "Database designer",
    technologies: ["MongoDB", "NoSQL", "Aggregation Pipelines", "MongoDB Atlas"],
    image: "/project-images/mongodb.png",
    github:
      "https://github.com/alymkarim/Research-Project-Database-Design-using-MongoDB",
    youtube: "https://youtu.be/ImHuT0ZtSoQ",
    youtube2: "https://youtu.be/JtdJFTK6Gk8",
    problem:
      "Model research records flexibly while demonstrating practical document queries and aggregations.",
    highlights: [
      "25 structured queries",
      "Aggregation pipelines",
      "Indexing strategies",
      "MongoDB Compass and Atlas",
    ],
    challenges: [
      "Choosing embedding versus references",
      "Avoiding uncontrolled duplication",
    ],
    lessons: [
      "Flexible databases still need intentional schemas",
      "Document shape should reflect access patterns",
    ],
  },
  {
    id: "agriculture-dashboard",
    title: "Irish Agricultural Productivity Dashboard",
    year: "2025",
    status: "Completed",
    category: ["Data", "Sustainability"],
    shortDescription:
      "Interactive dashboard combining crop, weather and market trends.",
    description:
      "A Tableau dashboard for exploring agricultural productivity across Irish regions and farming types.",
    role: "Data analyst",
    technologies: ["Tableau", "Time-Series Analysis", "Data Visualisation"],
    image: "/project-images/agriculturaldash.png",
    problem:
      "Help users explore how environmental and market conditions relate to agricultural productivity.",
    highlights: [
      "Regional comparisons",
      "Crop-yield trends",
      "Weather analysis",
      "Interactive filtering",
    ],
    challenges: [
      "Combining data from different sources",
      "Selecting interpretable visualisations",
    ],
    lessons: [
      "Dashboards need a clear user question",
      "Time-series comparisons require consistent periods",
    ],
  },
  {
    id: "data-infrastructure",
    title: "Data Infrastructure for AI Systems",
    year: "2025",
    status: "In progress",
    category: ["Data", "Software"],
    shortDescription:
      "Cloud-ready ETL pipelines for machine-learning and analytics workflows.",
    description:
      "A data-engineering project exploring ingestion, transformation, validation and monitoring for scalable analytics systems.",
    role: "Data engineer",
    technologies: ["Python", "Apache Spark", "Databricks", "Snowflake", "Azure"],
    image: "/project-images/analytics.svg",
    problem:
      "Build reliable data movement and transformation workflows that can support analytics and model training.",
    highlights: [
      "ETL pipeline design",
      "Distributed processing",
      "Data validation",
      "Cloud architecture",
    ],
    challenges: [
      "Maintaining data quality across stages",
      "Designing observable pipelines",
      "Handling large datasets efficiently",
    ],
    lessons: [
      "Reliable AI depends on reliable data systems",
      "Pipeline failures need traceable logs and metrics",
      "Validation should happen at every boundary",
    ],
  },
  {
    id: "ecozone",
    title: "EcoZone Mapper",
    year: "2025",
    status: "Completed",
    category: ["Sustainability", "Data"],
    shortDescription:
      "GIS waste-management analytics created during NASA Space Apps.",
    description:
      "A geospatial analytics concept that maps waste patterns and supports improved resource allocation and environmental monitoring.",
    role: "Hackathon team contributor",
    technologies: ["GIS", "Tableau", "Power BI", "Data Visualisation"],
    image: "/project-images/cinco.jpg",
    github:
      "https://github.com/alymkarim/EcoZone-Mapper-GIS-for-Waste-Management-NASA-Space-Apps-2024-",
    problem:
      "Make waste-distribution patterns visible to communities and decision-makers.",
    highlights: [
      "Geospatial analysis",
      "Interactive environmental maps",
      "NASA Space Apps project",
      "Open-data concept",
    ],
    challenges: [
      "Building within a hackathon timeframe",
      "Selecting meaningful geographic indicators",
    ],
    lessons: [
      "Maps are effective when location drives the decision",
      "Hackathon projects need a sharply defined user",
    ],
  },
  {
    id: "umbrella-green",
    title: "Umbrella Green",
    year: "2022",
    status: "Completed",
    category: ["Sustainability", "Research"],
    shortDescription:
      "Award-winning modular rainwater-harvesting concept for climate-resilient cities.",
    description:
      "Developed during EU TalentOn, Umbrella Green integrates rainwater collection and urban greenery into a modular infrastructure concept. The project received second place.",
    role: "Multidisciplinary innovation team member",
    technologies: [
      "Environmental Systems",
      "Sustainability Analysis",
      "Urban Design",
      "Research",
      "Pitching",
    ],
    image: "/project-images/eutalenton.jpg",
    problem:
      "Cities need practical infrastructure that manages rainfall while supporting greenery and climate resilience.",
    highlights: [
      "EU TalentOn second place",
      "Rainwater harvesting",
      "Nature-based urban infrastructure",
      "International jury presentation",
    ],
    challenges: [
      "Balancing technical feasibility and concept communication",
      "Estimating sustainability impact",
    ],
    lessons: [
      "Strong innovation connects physical systems to user needs",
      "A clear prototype story helps multidisciplinary ideas land",
    ],
  },
  {
  id: "utp-uir-riau",
  title: "UTP–UIR Riau Community Service Project",
  year: "2018",
  status: "Completed",
  category: ["Sustainability"],
  shortDescription:
    "Community-service project supporting a rural island community through solar-energy installation and science outreach.",
  description:
    "A community-service collaboration between Universiti Teknologi PETRONAS and Universitas Islam Riau. Our group worked with the rural community of Pulau Mendol in Riau, Indonesia, installing five solar panels and delivering practical science activities for local students.",
  role: "Vice President",
  technologies: [
    "Solar Energy",
    "Community Engagement",
    "Science Outreach",
    "Project Coordination",
    "International Collaboration",
  ],
  image: "/project-images/riau.jpg",
  facebook: "https://www.facebook.com/profile.php?id=100068842090190",
  problem:
    "The rural community had limited access to infrastructure and educational resources. The project aimed to provide a practical renewable-energy contribution while encouraging students to become more interested in science.",
  architecture: [
    "Collaboration between UTP and Universitas Islam Riau",
    "Community-needs assessment",
    "Solar-panel installation planning",
    "Installation of five solar panels",
    "Science experiments and activities for local students",
  ],
  highlights: [
    "Installed five solar panels",
    "Supported a rural community on Pulau Mendol",
    "Collaborated with Universitas Islam Riau",
    "Conducted science experiments with local students",
    "Served as Vice President of the project",
  ],
  challenges: [
    "Coordinating an international student collaboration",
    "Organising equipment and activities in a rural location",
    "Communicating science concepts to younger students",
    "Delivering useful work within a two-month project period",
  ],
  lessons: [
    "Community projects should respond to real local needs",
    "Renewable-energy projects combine technical work with social responsibility",
    "Good leadership depends on coordination, communication and adaptability",
    "Hands-on science activities can make technical subjects more approachable",
  ],
},
  {
    id: "graphene-biosensor",
    title: "Graphene–Iron Oxide Biosensor",
    year: "2020",
    status: "Completed",
    category: ["Research", "Healthcare"],
    shortDescription:
      "Award-winning impedimetric biosensor for detecting the mycotoxin zearalenone.",
    description:
      "My Applied Physics final-year project developed a graphene and iron-oxide aptamer-based biosensor designed for selective, sensitive and stable mycotoxin detection.",
    role: "Undergraduate researcher",
    technologies: [
      "Applied Physics",
      "Graphene",
      "Iron Oxide",
      "Aptamers",
      "Impedance",
      "Nanomaterials",
    ],
    image: "/project-images/graphene.png",
    paper:"https://iopscience.iop.org/article/10.1088/1755-1315/842/1/012016/meta",
    problem:
      "Zearalenone contamination affects food and animal feed, creating a need for sensitive and practical detection methods.",
    architecture: [
      "Material and biosensor design",
      "Electrode preparation",
      "Aptamer functionalisation",
      "Impedance measurement",
      "Sensitivity and selectivity evaluation",
    ],
    highlights: [
      "SEDEX43 Gold FYP Award",
      "Best Presenter Award",
      "Best Poster Award",
      "Selective mycotoxin detection",
    ],
    challenges: [
      "Controlling nanomaterial preparation",
      "Achieving reproducible sensor response",
      "Separating true signal from experimental noise",
    ],
    lessons: [
      "Reproducibility is central to experimental engineering",
      "Material properties must be connected to measurable performance",
      "Physics research developed my approach to debugging complex systems",
    ],
  },
  {
    id: "thermal-resin",
    title: "Thermally Conductive 3D-Printing Resin",
    year: "2019",
    status: "Completed",
    category: ["Research"],
    shortDescription:
      "Nanocomposite research to improve the thermal conductivity of printable resins.",
    description:
      "An experimental materials project evaluating nanomaterial types and concentrations for increasing resin thermal conductivity while retaining usefulness for parts fabrication.",
    role: "Research intern",
    technologies: [
      "Materials Science",
      "Nanocomposites",
      "3D Printing",
      "Thermal Characterisation",
    ],
    image: "/project-images/resin.jpg",
    problem:
      "Standard printable resins have limited thermal performance for certain manufacturing applications.",
    highlights: [
      "Nanomaterial concentration analysis",
      "Composite comparison",
      "Manufacturing application",
      "Experimental materials testing",
    ],
    challenges: [
      "Balancing conductivity with processability",
      "Comparing multiple material formulations",
    ],
    lessons: [
      "Optimisation often involves competing material properties",
      "Controlled experiments require consistent preparation",
    ],
  },
  {
    id: "oil-spill-foam",
    title: "Graphene/CNT Foam for Oil-Spill Cleanup",
    year: "2019",
    status: "Completed",
    category: ["Research", "Sustainability"],
    shortDescription:
      "Review and research support for recyclable oleophilic nanomaterial foam.",
    description:
      "A short research project examining graphene and carbon-nanotube hybrid foams for reusable oil–water separation and spill cleanup.",
    role: "Research assistant",
    technologies: [
      "Graphene",
      "Carbon Nanotubes",
      "Porous Materials",
      "Environmental Remediation",
    ],
    image: "/project-images/oil.jpg",
    problem:
      "Oil-spill cleanup materials must absorb oil effectively while supporting recovery and reuse.",
    highlights: [
      "Oleophilic material review",
      "Reusability analysis",
      "Oil–water separation",
      "Environmental application",
    ],
    challenges: [
      "Comparing performance across different material studies",
      "Connecting laboratory results to practical cleanup",
    ],
    lessons: [
      "Material performance must include lifecycle and reusability",
      "Sustainability claims need measurable criteria",
    ],
  },
  {
    id: "auto-vent",
    title: "Auto-Vent",
    year: "2018",
    status: "Completed",
    category: ["Research", "Sustainability"],
    shortDescription:
      "Automated vehicle ventilation concept designed to reduce hot-car incidents.",
    description:
      "A semi-finalist project in the Intel CREST Industry University Challenge that monitored dangerous vehicle heat and proposed an integrated ventilation response.",
    role: "Engineering challenge team member",
    technologies: ["Sensors", "Embedded Systems", "Thermal Monitoring", "Prototyping"],
    image: "/project-images/intel.jpg",
    problem:
      "Vehicle heatstroke can endanger infants and animals left inside rapidly heating cars.",
    highlights: [
      "Intel CREST semi-finalist",
      "Temperature monitoring concept",
      "Automated ventilation response",
      "Safety-focused engineering",
    ],
    challenges: [
      "Designing a reliable trigger",
      "Considering false alarms and power constraints",
    ],
    lessons: [
      "Safety systems need fail-safe thinking",
      "Sensor thresholds must account for real operating conditions",
    ],
  },
  {
    id: "wastewater-treatment",
    title: "Aquatic-Plant Wastewater Treatment",
    year: "2018",
    status: "Completed",
    category: ["Research", "Sustainability"],
    shortDescription:
      "Team study of natural water treatment measured using flame AAS.",
    description:
      "A four-person science project investigating whether aquatic plants could improve the quality of water samples collected around the university.",
    role: "Research team member",
    technologies: [
      "Flame AAS",
      "Water Analysis",
      "Aquatic Plants",
      "Environmental Science",
    ],
    image: "/project-images/wastewater.jpg",
    problem:
      "Explore whether low-cost biological treatment could improve contaminated water quality.",
    highlights: [
      "Team experimental study",
      "University water sampling",
      "Flame AAS measurements",
      "Nature-based treatment",
    ],
    challenges: [
      "Maintaining consistent samples",
      "Distinguishing treatment effects from variation",
    ],
    lessons: [
      "Environmental experiments require careful controls",
      "Measurement quality determines conclusion quality",
    ],
  },
  {
    id: "dye-solar-cells",
    title: "Dye-Sensitized Solar Cells",
    year: "2017",
    status: "Completed",
    category: ["Research", "Sustainability"],
    shortDescription:
      "Low-cost solar-cell research focused on improving light absorption.",
    description:
      "A second-year research-assistant project supporting the synthesis and analysis of dye-sensitized solar cells as a lower-cost photovoltaic technology.",
    role: "Research assistant",
    technologies: [
      "Solar Cells",
      "Photovoltaics",
      "Materials Synthesis",
      "Optical Characterisation",
    ],
    image: "/project-images/dyesensitize.jpg",
    problem:
      "Investigate accessible photovoltaic materials that can improve light absorption at lower production cost.",
    highlights: [
      "Dye-sensitized cell synthesis",
      "Light-absorption analysis",
      "Photovoltaic materials research",
      "Average absorption improvement reported in the study",
    ],
    challenges: [
      "Producing consistent cells",
      "Comparing optical performance fairly",
    ],
    lessons: [
      "Small manufacturing variations can influence device performance",
      "Energy technologies require both materials and systems thinking",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
