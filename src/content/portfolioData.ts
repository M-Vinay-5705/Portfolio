import {
  BrainCircuit,
  Briefcase,
  Cloud,
  Code2,
  Database,
  FolderKanban,
  GraduationCap,
  Laptop,
  Radar,
  Rocket,
  Users,
  Wrench,
} from "lucide-react";

export const heroPills = [
  "Computer Science Student",
  "Robotics Club Core Member",
  "Full-Stack Builder",
  "Cloud & AI Explorer",
];

export const aboutPoints = [
  "Built a strong academic foundation from school to engineering with a results-driven mindset.",
  "Explores Python, web development, databases, and core computer science to turn ideas into useful systems.",
  "Finds energy in robotics, problem solving, mentoring juniors, and creating practical experiences through workshops.",
];

export const timelineItems = [
  {
    year: "2021",
    title: "School years set the pace",
    subtitle: "Sarvani Vidyalaya, Srikakulam",
    description:
      "Completed 10th with 96.8%, establishing the discipline and consistency that would shape every next step.",
    stat: "96.8%",
    icon: GraduationCap,
  },
  {
    year: "2023",
    title: "Science stream widened the lens",
    subtitle: "Maharshi Gurukul, Gunupur",
    description:
      "Finished +2 Science and moved closer to a technology-driven path, pairing curiosity with structured academic growth.",
    stat: "70.5%",
    icon: BrainCircuit,
  },
  {
    year: "2023–Present",
    title: "Started the engineering chapter",
    subtitle: "GIET University · B.Tech in CSE",
    description:
      "Currently pursuing Computer Science and Engineering while building depth in DSA, OOP, DBMS, networks, operating systems, and hands-on development.",
    stat: "CGPA 8.77",
    icon: Code2,
  },
  {
    year: "2023–Present",
    title: "Robotics became a leadership lane",
    subtitle: "Core Member · SARS, GIETU",
    description:
      "Helped run technical sessions in robotics and automation, including a Wireless Bot workshop that trained 200+ students in Bluetooth-controlled systems.",
    stat: "200+ learners",
    icon: Radar,
  },
  {
    year: "2024–Present",
    title: "Expanded into campus responsibility",
    subtitle: "Office Bearer Member · GIETU",
    description:
      "Contributed to planning and coordination for major student events, strengthening execution, teamwork, communication, and ownership under pressure.",
    stat: "Leadership role",
    icon: Users,
  },
  {
    year: "Internship Phase",
    title: "Built stronger data and backend foundations",
    subtitle: "Python with SQL + Data Analysis",
    description:
      "Worked with Python, SQL, Pandas, Matplotlib, and Seaborn to automate data tasks, clean datasets, and convert raw information into insight.",
    stat: "Data + Automation",
    icon: Database,
  },
  {
    year: "Recent Milestone",
    title: "Stepped into cloud and AI-driven systems",
    subtitle: "Python–AWS Cloud Internship · Hebbale Academy",
    description:
      "Gained hands-on exposure to Lambda, DynamoDB, and S3, then helped integrate Agentic AI into a home inventory application that reached the Top 10 in the final hackathon round.",
    stat: "Top 10 finish",
    icon: Cloud,
  },
  {
    year: "Now",
    title: "Shaping a builder’s identity",
    subtitle: "Developer, collaborator, robotics enthusiast",
    description:
      "Today the journey blends academics, full-stack projects, workshops, hackathons, and innovation-focused learning into a clear direction: building meaningful technology.",
    stat: "Top 50 by CGPA",
    icon: Rocket,
  },
];

export const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 78 },
      { name: "C", level: 72 },
      { name: "JavaScript", level: 76 },
    ],
  },
  {
    title: "Web & App Development",
    icon: Laptop,
    skills: [
      { name: "HTML / CSS", level: 88 },
      { name: "React", level: 74 },
      { name: "MERN Stack", level: 72 },
      { name: "ServiceNow", level: 70 },
    ],
  },
  {
    title: "Data, Cloud & Tools",
    icon: Wrench,
    skills: [
      { name: "SQL / DBMS", level: 84 },
      { name: "Pandas / NumPy", level: 82 },
      { name: "Matplotlib / Seaborn", level: 80 },
      { name: "AWS Cloud Services", level: 73 },
      { name: "GitHub / VS Code", level: 86 },
    ],
  },
];

export const projects = [
  {
    title: "University Management System",
    stack: ["ServiceNow", "Custom Tables", "Workflow Automation", "RBAC"],
    summary:
      "Designed a university operations platform that organizes departments, hostels, faculty, students, and complaint workflows in a more structured and trackable way.",
    outcome: "Improves operational clarity and response tracking.",
    icon: FolderKanban,
  },
  {
    title: "Workshop Management System",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    summary:
      "Built a workshop operations platform for registrations, schedules, participation management, and administration, making campus events easier to coordinate end-to-end.",
    outcome: "Combines student-friendly flows with admin-side control.",
    link: "https://workshopmsys.onrender.com/",
    icon: Briefcase,
  },
  {
    title: "Home Inventory App with Agentic AI",
    stack: ["Python", "AWS Lambda", "DynamoDB", "S3", "Agentic AI"],
    summary:
      "Created a cloud-backed inventory solution and later evolved it with Agentic AI features to add smarter automation and decision support during the internship hackathon.",
    outcome: "Reached the Top 10 in the final round.",
    icon: Cloud,
  },
  {
    title: "Grocery Management System",
    stack: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
    summary:
      "Developed a responsive management system for grocery operations with product handling, inventory updates, orders, reporting, and transaction workflows.",
    outcome: "Balances usability with practical store management features.",
    link: "https://m-vinay-5705.github.io/Grocery-Management-System/index.html",
    icon: Database,
  },
  {
    title: "Resume Builder",
    stack: ["HTML", "CSS", "JavaScript"],
    summary:
      "Created a resume-generation experience that turns user input into a polished formatted profile, focusing on accessibility and simplicity for job seekers.",
    outcome: "Transforms details into ready-to-use resume output.",
    link: "https://m-vinay-5705.github.io/Resume-Builder/intro.html",
    icon: Code2,
  },
];

export const experiences = [
  {
    title: "Core Member · SARS, GIETU",
    period: "Sept 2023 – Present",
    description:
      "Supports robotics and automation activities, conducts technical sessions, and helps juniors learn through hands-on demonstrations and guided workshops.",
  },
  {
    title: "Office Bearer Member · GIETU",
    period: "June 2024 – Present",
    description:
      "Worked on event planning, logistics, and team coordination, contributing to smooth execution of campus activities and farewell event management.",
  },
  {
    title: "Certified System Administrator (CSA) · ServiceNow",
    period: "2025 · Certification",
    description:
      "Cleared the ServiceNow CSA certification, validating platform fundamentals, application UI, data model, workflows, and core administration practices.",
    certificate: "/certificates/servicenow-csa.pdf",
    certificateType: "pdf" as const,
  },
  {
    title: "Python Full-Stack Virtual Intern · EduSkills",
    period: "10 Weeks · Virtual",
    description:
      "Strengthened full-stack application thinking through guided learning, application logic, integration practice, and project-based development.",
    certificate: "/certificates/eduskills-python-fullstack.pdf",
    certificateType: "pdf" as const,
  },
  {
    title: "Data Analyst Intern · CTTC, BBSR",
    period: "15 May 2025 – 14 June 2025",
    description:
      "Completed Data Analytics training under Ministry of MSME covering Python, SQL, Advanced Excel, Tableau, and machine learning models for insight-driven reporting.",
    certificate: "/certificates/cttc-data-analytics.jpg",
    certificateType: "image" as const,
  },
  {
    title: "Python – AWS Cloud Intern · Hebbale Academy",
    period: "45 Days · From May 15, 2025",
    description:
      "Industry Exposure Program covering Python backend, AWS Lambda, S3, and DynamoDB with hands-on participation in the Cloud First Hackathon.",
    certificate: "/certificates/hebbale-aws.jpg",
    certificateType: "image" as const,
  },
  {
    title: "Python with SQL Intern · GIETU",
    period: "10 June 2024 – 10 July 2024",
    description:
      "Connected Python applications with SQL workflows, automated data handling, and built a mini project to strengthen backend-oriented thinking.",
    certificate: "/certificates/python-sql-gietu.jpg",
    certificateType: "image" as const,
  },
];

export const highlights = [
  "Ranked among the Top 50 students in college based on CGPA.",
  "Reached the Top 10 in the final round with an Agentic AI-powered home inventory project.",
  "Helped conduct a Wireless Bot workshop for 200+ students.",
  "Active participant in hackathons, robotics competitions, coding practice, photography, and editing projects.",
];

export const contactDetails = {
  email: "moningivinaykumar5705@gmail.com",
  githubUsername: "M-Vinay-5705",
  linkedinLabel: "Moningi Vinay Kumar",
  linkedinUrl: "https://www.linkedin.com/in/moningi-vinay-kumar/",
  phone: "+91-8280528986",
  location: "Gunupur, Odisha",
};
