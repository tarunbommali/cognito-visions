import {
  // Navigation & General
  Home,
  Code as CodeIcon,
  Brain,
  Settings,
  Database,
  Container,
  Zap,
  Lightbulb,
  Rocket,
  Users,
  Shield,
  Target,
  GraduationCap,
  Gem,
  Handshake,
  Crown,
  Clock,
  TrendingUp,
  Heart,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Instagram,
} from "lucide-react";

import { BrainCircuit, Award, ShieldCheck } from "lucide-react";
// 1. Navigation
export const navItems = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Team", id: "team" },
  // { name: "Careers", id: "careers" },
  { name: "Contact", id: "contact" },
];

// 2. Services
export const services = [
  {
    icon: CodeIcon,
    title: "Full Stack Development",
    description:
      "End-to-end web application development using modern MERN stack technologies with scalable architecture.",
    tags: ["React.js", "Node.js", "RESTful APIs", "Responsive Design"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "AI Integration & Solutions",
    description:
      "Cutting-edge AI and machine learning integration to enhance your applications with intelligent features.",
    tags: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "AI Automation",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: CodeIcon,
    title: "MERN Stack Expertise",
    description:
      "Specialized in MongoDB, Express.js, React.js, and Node.js for robust and scalable web applications.",
    tags: [
      "MongoDB Database",
      "Express.js APIs",
      "React Components",
      "Node.js Services",
    ],
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Brain,
    title: "AWS Cloud Solutions",
    description:
      "Comprehensive cloud infrastructure setup and management using Amazon Web Services.",
    tags: ["EC2 Instances", "S3 Storage", "Lambda Functions", "CloudFormation"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Database,
    title: "MongoDB Management",
    description:
      "Expert database design, optimization, and management for high-performance applications.",
    tags: [
      "Schema Design",
      "Performance Optimization",
      "Data Migration",
      "Backup Solutions",
    ],
    gradient: "from-teal-500 to-green-600",
  },
  {
    icon: Container,
    title: "Docker Containerization",
    description:
      "Application containerization for consistent deployment across different environments.",
    tags: [
      "Container Images",
      "Multi-stage Builds",
      "Orchestration",
      "Scalability",
    ],
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: Settings,
    title: "DevOps Implementation",
    description:
      "Complete DevOps pipeline setup for continuous integration and deployment.",
    tags: [
      "CI/CD Pipelines",
      "Automated Testing",
      "Monitoring",
      "Infrastructure as Code",
    ],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Advanced optimization techniques to ensure your applications run at peak performance.",
    tags: [
      "Code Splitting",
      "Caching Strategies",
      "Load Balancing",
      "Database Tuning",
    ],
    gradient: "from-red-500 to-pink-500",
  },
];

// 3. Portfolio
export const projects = [
  {
    title: "AI-Powered E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with AI-driven product recommendations and inventory management.",
    image: "https://placehold.co/800x400/e0f2fe/0c4a6e?text=E-Commerce+AI",
    status: "Coming Soon",
    category: "E-Commerce",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "TensorFlow"],
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    title: "Smart Analytics Dashboard",
    description:
      "Real-time data visualization platform with machine learning insights for business intelligence.",
    image:
      "https://placehold.co/800x400/dbeafe/1e3a8a?text=Analytics+Dashboard",
    status: "In Development",
    category: "Analytics",
    technologies: ["React", "Express.js", "PostgreSQL", "Docker", "Python"],
    statusColor: "bg-orange-100 text-orange-800",
  },
  {
    title: "Healthcare Management System",
    description:
      "Comprehensive healthcare platform with patient management, appointment scheduling, and telemedicine.",
    image: "https://placehold.co/800x400/e0e7ff/312e81?text=Healthcare+System",
    status: "Planning",
    category: "Healthcare",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "WebRTC"],
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    title: "FinTech Mobile Application",
    description:
      "Secure mobile banking solution with AI fraud detection and personal finance management.",
    image: "https://placehold.co/800x400/f3e8ff/581c87?text=FinTech+App",
    status: "Concept",
    category: "FinTech",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "AWS",
      "Machine Learning",
    ],
    statusColor: "bg-gray-100 text-gray-800",
  },
];

// 4. About Us

export const whyChooseUsData = [
  {
    icon: BrainCircuit,
    title: "Latest Technologies",
    description:
      "Always stay ahead with cutting-edge frameworks, tools, and methodologies in the rapidly evolving tech landscape.",
    bgColor: "bg-blue-100",
  },
  {
    icon: Rocket,
    title: "Rapid Development",
    description:
      "Agile startup approach enabling quick iterations, faster time-to-market, and efficient project delivery.",
    bgColor: "bg-purple-100",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "Deep collaboration with clients to understand their vision and deliver tailored solutions that exceed expectations.",
    bgColor: "bg-green-100",
  },
  {
    icon: Award,
    title: "Innovation Focus",
    description:
      "Passionate about solving complex problems with creative solutions and pushing the boundaries of what's possible.",
    bgColor: "bg-amber-100",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Rigorous testing and quality control processes ensure robust, secure, and reliable applications.",
    bgColor: "bg-pink-100",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description:
      "Results-driven approach with clear objectives, measurable outcomes, and continuous improvement.",
    bgColor: "bg-teal-100",
  },
];

export const combinedExpertise = [
  {
    number: "2+",
    label: "Combined Years of Experience",
    sublabel:
      "Bringing together strong early-stage expertise in development and innovation.",
    color: "text-blue-600",
  },
  {
    number: "5+",
    label: "Projects Delivered Individually",
    sublabel: "Proven track record before uniting at Cognito.",
    color: "text-purple-600",
  },
  {
    number: "2+",
    label: "Enterprise-Grade Solutions",
    sublabel: "Building scalable and secure systems.",
    color: "text-green-600",
  },
  {
    number: "3",
    label: "Core Technology Pillars",
    sublabel: "AI/ML, Full-Stack, and Cloud & DevOps.",
    color: "text-amber-600",
  },
];

// 5. Team
export const teamMembers = [
  {
    name: "Tarun Bommali",
    role: "Lead Full Stack Developer",
    image: "https://placehold.co/400x400/15803d/f0fdf4?text=TB",
    description:
      "Expert in Full stack development with a focus on scalable architecture and modern web technologies.",
    skills: ["React.js", "Node.js", "MongoDB", "System Design"],
    icon: CodeIcon,
    iconBg: "bg-green-500",
    roleColor: "text-green-600",
    linkedin: "https://www.linkedin.com/in/tarun-bommali/",
    twitter: "https://twitter.com/tarun_bommali",
    github: "",
  },
];
export const teamBenefits = [
  { icon: Home, title: "Remote-First Culture" },
  { icon: Clock, title: "Flexible Hours" },
  { icon: TrendingUp, title: "Growth Opportunities" },
  { icon: Lightbulb, title: "Innovation Focus" },
];

// 6. Careers
export const jobOpenings = [
  {
    title: "Senior Full Stack Developer (React/Node)",
    location: "Remote / Bangalore",
    type: "Full-time",
    experience: "3-5 years",
    status: "Coming Soon",
    description:
      "Lead development of scalable web applications using MERN stack with AI integration capabilities.",
    requirements: ["React.js", "Node.js", "MongoDB", "AWS", "AI/ML basics"],
  },
];
export const benefits = [
  {
    icon: Users,
    title: "Collaborative Environment",
    description:
      "Work with passionate individuals in a supportive, growth-oriented culture.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description:
      "Stay at the forefront of technology with access to latest tools and frameworks.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description:
      "Flexible working hours and remote-first approach for better work-life integration.",
  },
  {
    icon: MapPin,
    title: "Remote-First Culture",
    description:
      "Work from anywhere with occasional team meetups and collaboration sessions.",
  },
];

// 7. Contact & Footer
export const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@cognitovisions.com",
    subtitle: "Send us your queries anytime",
    bgColor: "bg-primary/10",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 95811 93026",
    subtitle: "Mon-Fri from 9am to 6pm",
    bgColor: "bg-green-100",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Vishakapatnam, India",
    subtitle: "Remote-first with flexible meetups",
    bgColor: "bg-orange-100",
  },
];
export const footerServices = [
  "Full Stack Development",
  "AI Integration",
  "Cloud Solutions",
  "DevOps Services",
  "MongoDB Management",
  "Docker Containerization",
];
export const footerQuickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Team", href: "#team" },
  // { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];
export const footerSocialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];
