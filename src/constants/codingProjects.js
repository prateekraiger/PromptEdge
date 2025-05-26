const codingProjects = [
  {
    title: "AutoSecure: AI Agent for Autonomous Security Threat Hunting",
    overview: {
      objective:
        "Develop an autonomous cybersecurity agent that scans logs, system metrics, and network data to identify potential threats and automatically mitigate them or suggest patches.",
      problemSolved:
        "Improves security posture by proactively identifying and mitigating risks, reducing the likelihood of successful cyber attacks through AI-powered threat detection.",
    },
    techStack: {
      frontend: "React.js with TypeScript, Material-UI for dashboard",
      backend: "Python with FastAPI, Kafka for real-time data processing",
      aiModels: "PyTorch, LangChain, OpenAI API, Hugging Face Transformers",
      devOps: "Docker, Kubernetes, ELK Stack for logging",
    },
  },
  {
    title: "DevGPT Swarm: Multi-Agent Debugging Assistant",
    overview: {
      objective:
        "Create a multi-agent system that collaborates to debug codebases, isolate bugs, suggest fixes, and verify changes through intelligent code analysis.",
      problemSolved:
        "Accelerates debugging process and improves code quality through AI-powered collaboration between specialized debugging agents.",
    },
    techStack: {
      frontend: "VS Code Extension with React, Monaco Editor",
      backend: "Python with FastAPI, Tree-sitter for code parsing",
      aiModels: "OpenAI API, LangChain, Fine-tuned LLMs for code",
      devOps: "GitHub Actions, Docker for agent deployment",
    },
  },
  {
    title: "AutoFlow: Autonomous Workflow Orchestrator for DevOps",
    overview: {
      objective:
        "Build a self-managing DevOps assistant that optimizes CI/CD pipelines, flags inefficiencies, and suggests improvements in workflows using AI.",
      problemSolved:
        "Reduces manual DevOps work and optimizes pipeline performance through autonomous workflow analysis and improvement.",
    },
    techStack: {
      frontend: "React.js with D3.js for workflow visualization",
      backend: "Python with Ray for distributed processing",
      aiModels: "LangChain, OpenAI API, Reinforcement Learning models",
      devOps: "Docker, Kubernetes, GitHub Actions integration",
    },
  },
  {
    title: "RoboPR: Autonomous Pull Request Agent",
    overview: {
      objective:
        "Develop a GitHub bot that autonomously reviews pull requests, suggests improvements, and flags security or performance issues using AI.",
      problemSolved:
        "Accelerates code review process and improves code quality through automated, intelligent PR analysis.",
    },
    techStack: {
      frontend: "GitHub App interface with React",
      backend: "Python with FastAPI, GitHub API integration",
      aiModels: "LangChain, OpenAI API, CodeQL for security analysis",
      devOps: "Docker, GitHub Actions for deployment",
    },
  },
  {
    title: "ChainSage: Visual Workflow Builder for LLM Agents",
    overview: {
      objective:
        "Create an open-source GUI tool that lets users drag-and-drop components to create LLM agent pipelines for various AI tasks.",
      problemSolved:
        "Democratizes AI agent development by providing a visual interface for building complex LLM workflows without coding.",
    },
    techStack: {
      frontend: "React.js with D3.js for flow visualization",
      backend: "Node.js with Express, Python with Flask",
      aiModels: "LangChain, OpenAI API, Custom LLM integrations",
      devOps: "Docker, AWS/GCP deployment options",
    },
  },
  {
    title: "DataGenie: AI Agent for Autonomous Synthetic Data Generation",
    overview: {
      objective:
        "Build a developer tool that uses LLM agents to generate synthetic datasets for training/testing based on schema or prompts.",
      problemSolved:
        "Accelerates ML development by automatically generating high-quality synthetic data for testing and training.",
    },
    techStack: {
      frontend: "React.js with Material-UI for data visualization",
      backend: "Python with FastAPI, Pandas for data processing",
      aiModels: "LangChain, OpenAI API, Custom data generation models",
      devOps: "Docker, CI/CD for automated testing",
    },
  },
  {
    title: "InsightAgent: Automated Technical Documentation Writer",
    overview: {
      objective:
        "Develop an autonomous agent that reads codebases and generates accurate READMEs, API docs, and onboarding guides using AI.",
      problemSolved:
        "Reduces documentation overhead and improves codebase understanding through automated, intelligent documentation generation.",
    },
    techStack: {
      frontend: "React.js with Markdown preview",
      backend: "Python with FastAPI, GitHub API integration",
      aiModels: "LangChain, OpenAI API, Code understanding models",
      devOps: "Docker, GitHub Actions for automated updates",
    },
  },
  {
    title: "CollabAgent: Real-Time Collaborative AI Agents",
    overview: {
      objective:
        "Create a platform enabling teams to interact with AI agents in real-time via voice/video for collaborative tasks like brainstorming and coding.",
      problemSolved:
        "Enhances team collaboration by providing real-time AI assistance during meetings and collaborative sessions.",
    },
    techStack: {
      frontend: "Next.js with WebRTC integration",
      backend: "Python with FastAPI, WebSocket support",
      aiModels: "Whisper for transcription, LangChain, OpenAI API",
      devOps: "Docker, Kubernetes for scaling",
    },
  },
  {
    title: "AutoQuant: Real-Time Financial Report Generator",
    overview: {
      objective:
        "Build AI agents that autonomously analyze financial data and generate actionable insights from earnings calls and financial reports.",
      problemSolved:
        "Accelerates financial analysis and decision-making through automated processing of financial documents and data.",
    },
    techStack: {
      frontend: "React.js with Plotly for data visualization",
      backend: "Python with FastAPI, BeautifulSoup for scraping",
      aiModels: "LangChain, OpenAI API, FinGPT integration",
      devOps: "Docker, AWS for deployment",
    },
  },
  {
    title: "AutoMedGPT: Healthcare Intake Agent",
    overview: {
      objective:
        "Develop an AI agent that handles patient intake by interpreting speech, visual symptoms, and EHR history using multimodal AI.",
      problemSolved:
        "Streamlines healthcare intake process and improves patient care through intelligent, automated data collection and analysis.",
    },
    techStack: {
      frontend: "React Native for mobile, React.js for web",
      backend: "Python with FastAPI, EHR system integration",
      aiModels: "Whisper for speech, Vision Transformers, LangChain",
      devOps: "Docker, HIPAA-compliant cloud deployment",
    },
  },
  {
    title: "CodeCraft: AI-Powered Code Architecture Designer",
    overview: {
      objective:
        "Create an AI agent that analyzes project requirements and automatically generates optimal software architecture designs, including microservices, database schemas, and API structures.",
      problemSolved:
        "Accelerates software design phase and ensures best practices by providing AI-driven architecture recommendations and automated documentation.",
    },
    techStack: {
      frontend: "React.js with Mermaid.js for architecture diagrams",
      backend: "Python with FastAPI, Neo4j for knowledge graph",
      aiModels: "LangChain, OpenAI API, Architecture-specific LLMs",
      devOps: "Docker, Terraform for infrastructure as code",
    },
  },
  {
    title: "TestGenius: Autonomous Test Suite Generator",
    overview: {
      objective:
        "Build an AI agent that automatically generates comprehensive test suites by analyzing codebases, understanding business logic, and creating test cases with high coverage.",
      problemSolved:
        "Reduces testing time and improves code quality by automatically generating and maintaining test suites that adapt to code changes.",
    },
    techStack: {
      frontend: "VS Code Extension with React",
      backend: "Python with FastAPI, AST parser",
      aiModels: "LangChain, OpenAI API, Test generation models",
      devOps: "Docker, GitHub Actions for CI integration",
    },
  },
];

export default codingProjects;
