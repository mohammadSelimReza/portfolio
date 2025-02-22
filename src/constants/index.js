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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  django,
  postgresql,
  mysql,
  postman,
  jwt,
  redis,
  celery,
  websockets,
  react,
  vaccine,
  edusoft,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Django Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "API Developer",
    icon: creator,
  },
];

const technologies = [
  // Languages
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },

  // Frameworks
  { name: "Django", icon: django },
  { name: "React", icon: react },

  // Databases
  { name: "PostgreSQL", icon: postgresql },
  { name: "MySQL", icon: mysql },

  // Tools
  { name: "Git", icon: git },
  { name: "Postman", icon: postman },
  { name: "Docker", icon: docker },

  // Other Technologies
  { name: "JWT", icon: jwt },
  { name: "Redis", icon: redis },
  { name: "Celery", icon: celery },
  { name: "WebSockets", icon: websockets },
];


const projects = [
  {
    name: "Learning Management System (LMS)",
    description:
      "A comprehensive Learning Management System that allows instructors to create, manage, and track online courses, while students can enroll, access course materials, and track their progress.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
      {
        name: "SSLCommerz",
        color: "yellow-text-gradient",
      },
    ],
    image: edusoft,
    source_code_link: "https://github.com/mohammadSelimReza/Learning-Management-System-Client",
  },
  {
    name: "Vaccine Management System",
    description:
      "A platform to streamline vaccine distribution, track appointments, and monitor vaccine administration for health agencies and the public.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "React/API",
        color: "pink-text-gradient",
      },
    ],
    image: vaccine,
    source_code_link: "https://github.com/mohammadSelimReza/Vaccine_Management_System",
  },
  // {
  //   name: "Tech Portfolio",
  //   description:
  //     "A minimal and professional portfolio website to showcase my tech skills, projects, and achievements to potential employers and clients.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: portfolioImage, // Replace with your portfolio image variable or URL.
  //   source_code_link: "https://github.com/your-github-repo", // Update with your GitHub link.
  // },
];

export { services, technologies, projects };
