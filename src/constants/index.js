import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mui,
  express,
  mysql,
  github,
  Three3js,
  aws,
  Django,
  python,
  redis,
  project2,
  project1,
  project3,
  project5,
  project4,
} from "../assets";
import tekisky from '../assets/company/tekisky.png';
// import project2 from '../assets/project2.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: Three3js,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "Django",
    icon: Django,
  },
  {
    name: "mui",
    icon: mui,
  },
  {
    name: "aws",
    icon: aws,
  },
];

// const experiences = [
//   {
//     title: "Full-Stack Developer",
//     company_name: "Templegate Technologies",
//     icon: tekisky,
//     iconBg: "#383E56",
//     date: "May 2024",
//     points: [
//       "Developing and maintaining web applications using MERN technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Templegate Technologies",
    icon: tekisky,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Built responsive S2P solutions using React.js and Django, leveraging Redis and WebSocket for instant updates. This approach reduced data latency by 40% while effectively handling concurrent users.",
      "Implemented intelligent three-way matching with OCR to automatically extract and validate document data. This solution eliminated 85% of the manual reconciliation work between invoices, POs, and GRNs.",
      "Streamlined procurement by automating data validation workflows. The system now flags exceptions instantly while processing routine approvals without human intervention.",
      "Designed a conversational AI chatbot for S2P clients that answers common queries and performs basic actions. This reduced the volume of support tickets by 30% while improving user satisfaction scores. Users can now exchange files and messages instantly without page refreshes or delays.",
      "Developed a Python-based Web Scraper that automatically collects and organizes supplier information. This tool has successfully enriched the supplier database with more than 32,000 new qualified vendors.",
      "Integrated a smart search engine that enables clients to discover and connect with new suppliers by filtering and analyzing scraped data. Implemented AI-powered supplier recommendations, helping businesses discover the best vendors based on past interactions and market trends.",
      "Modernized contract management system with version control, secure storage, and collaborative workflows, ensuring a smooth negotiation process with a full audit trail.",
      "Created APIs for instant GST & PAN verification, reducing onboarding time by 75% and eliminating compliance issues.",
      "Designed interactive dashboards using SSE for real-time KPIs and visualizations, giving users instant insights through role-based charts.",
      "Integrated QR & barcode scanning for seamless inventory tracking, allowing instant transactions and automatic stock updates.",
      "Optimized procurement workflows with automated approvals and smart notifications, speeding up processes and improving compliance."
    ],
  },
  {
    title: "Python Full Stack Developer Trainee",
    company_name: "Besant Technologies, Bengaluru, India",
    icon: tekisky,  // Replace with actual icon reference
    iconBg: "#2C3E50",
    date: "Oct 2023 - Apr 2024",
    points: [
      "Designed and integrated five+ user interfaces with an intuitive experience using HTML, CSS, JavaScript, and Django, enhancing website performance and usability.",
      "Developed optimized database solutions for efficient data storage, organization, and retrieval, improving query performance and system responsiveness."
    ],
  },
];



const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Rahul Iyer",
    designation: "Export AutoParts",
    company: "GearXpert",
    image:
      "https://www.stglawfirm.com/wp-content/uploads/2022/11/Rahul-Iyer-Attorney-Profile.png.webp",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Kavita Nair",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "GareXpert",
    description:
      "Web-based platform that enables users to browse, purchase, and manage auto parts from various suppliers, ensuring a seamless and reliable shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "EmailJS",
        color: "-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "TekiskyMart",
    description:
      "An eCommerce platform offering a seamless shopping experience with a wide range of products, secure payments, and fast delivery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "taildwind",
        color: "orange-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://tekiskymart.com/",
  },
  {
    name: "Softcadia",
    description:
      "A job portal connecting job seekers with employers, offering seamless job search, application tracking, and recruitment solutions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://softcadia.tekisky.com/",
  },
  {
    name: "AI-Powered Resume Analyzer",
    description:
      "Built a tool that analyzes resumes and provides feedback using NLP, offering personalized insights for job seekers.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "spaCy",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "orange-text-gradient",
      },
    ],
    image: project4, // Replace with actual image reference
    source_code_link: "https://github.com/yourgithub/resume-analyzer", // Replace with actual repo link
  },
  {
    name: "Call Center Management System Using AI",
    description:
      "An AI-driven system that optimizes call routing and customer interactions using NLP and machine learning.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "sky-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "spaCy",
        color: "pink-text-gradient",
      },
      {
        name: "Twilio API",
        color: "orange-text-gradient",
      },
    ],
    image: project5, // Replace with actual image reference
    source_code_link: "https://github.com/yourgithub/call-center-ai", // Replace with actual repo link
  },
];

export { services, technologies, experiences, testimonials, projects };
