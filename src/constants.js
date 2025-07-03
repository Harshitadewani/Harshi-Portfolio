// Skills Section Logos
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';


// Education Logos
import jnctLogo from './assets/education/jnct_logo.jpeg';
import dpsLogo from './assets/education/dps_logo.jpeg';
// Experience Logos (placeholder)


// Project Logos
import lmsLogo from './assets/work_logo/lms.jpg';
import umsLogo from './assets/work_logo/ums.png';
import chatbotLogo from './assets/work_logo/ai-chatbot.jpg';
import reminderLogo from './assets/work_logo/reminder-app.png';
import jwellerLogo from './assets/work_logo/jweller.png'
import galleryPhoto from './assets/work_logo/galleryPhoto.png'


// ✅ Skills
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "JWT", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },
      { name: "REST API", logo: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "DSA", logo: "https://cdn-icons-png.flaticon.com/512/2721/2721295.png" },
    ],
  },
];
 
// ✅ Education
export const education = [
  {
    id: 0,
    img: jnctLogo,
    school: "Jai Narain College of Technology, Bhopal (MP)",
    date: "2022 – 2026",
    grade: "8.2 CGPA (till 5th sem)",
    desc: "Learning core concepts of Artificial Intelligence, Machine Learning, and Full Stack Web Development.",
    degree: "B.Tech in AI & ML",
  },
  {
    id: 1,

    school: "Deepmala Pagarani Sanskar Public School, MP",
    date: "2021 – 2022",
    grade: "89.2%",
    desc: "Completed Higher Secondary in PCM with strong foundation in Math and Computer Science.",
    degree: "Class XII - PCM with Computer Science",
  },
  {
    id: 2,
    img: dpsLogo,
    school: "Deepmala Pagarani Sanskar Public School, MP",
    date: "2019 – 2020",
    grade: "91%",
    desc: "Completed High School with keen interest in science and technology.",
    degree: "Class X - Science with Computer Application",
  },
];




// ✅ Projects
export const projects = [
  {
    id: 0,
    title: "Learning Management System (LMS)",
    description:
      "A full-featured LMS platform for managing courses, users, and instructors. Includes authentication, protected routes, admin dashboard, and user roles.",
    image: lmsLogo,
    tags: ["React.js", "Node.js", "MongoDB", "Express", "JWT", "Tailwind"],
    github: "https://github.com/Harshitadewani/LearnSpark-Management",
    webapp: "https://learn-spark-management.vercel.app/",
  },
  {
    id: 1,
    title: "User Management System (UMS)",
    description:
      "A MERN-based role-based login system with JWT authentication. Admin can manage users and roles securely.",
    image: umsLogo,
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    github: "https://github.com/Harshitadewani/user-management",
    webapp: "https://user-management-kohl-ten.vercel.app/",
  },
  {
    id: 2,
    title: "AI Chatbot",
    description:
      "Built an intelligent chatbot interface with React.js and OpenAI API integration to respond to user queries in real time.",
    image: chatbotLogo,
    tags: ["React.js", "Node.js", "OpenAI", "Chat API"],
    github: "https://github.com/Harshitadewani/Ai-Chatbot",
    webapp: "https://ai-chatbot-alpha-sooty-49.vercel.app/",
  },
  {
    id: 3,
    title: "Medicine Reminder App",
    description:
      "Built a medicine reminder app with CRUD features, default meds list, and local notification scheduler.",
    image: reminderLogo,
    tags: ["React", "Node", "MongoDB", "Notifications"],
    github: "https://github.com/Harshitadewani/medicine-reminder",
    wepapp: "",
  },
  {
  id: 4,
  title: "E-Commerce Jewelers Website",
  description:
    "A responsive e-commerce website for a jewelers store showcasing product listings, filtering, and a smooth cart experience. Built with React and Tailwind.",
  image: jwellerLogo,
  tags: ["React.js", "Tailwind CSS", "E-Commerce", "UI/UX"],
  github: "https://github.com/Harshitadewani/E---Commerce",
  webapp: "",
},
{
  id: 5,
  title: "Google Photo Gallery",
  description:
    "A photo gallery app using React and Google Photos API to fetch, display, and search albums and photos in real time.",
  image: galleryPhoto,
  tags: ["React.js", "Google API", "Photo Viewer", "REST API"],
  github: "https://github.com/Harshitadewani/google-photo-gallery",
  webapp: "",
}
];
