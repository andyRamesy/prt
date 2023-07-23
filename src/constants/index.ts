import {
  html,
  css,
  threejs,
  react,
  vue,
  flutter,
  nodejs,
  hatDegree,
  myagency,
  bootstrap,
  scss,
  nuxt,
  nextjs,
  mongo,
  express,
  sql,
  firebase,
  tailwind
} from "../assets/index";

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
    title: "React Developer",
    icon: react,
    level: 100,
  },
  {
    title: "Vue Developer",
    icon: vue,
    level: 100,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
    level: 90,
  },
  {
    title: "Flutter",
    icon: flutter,
    level: 90,
  },
];

const techs = [
  { 
    id: 0,
    title:"Frontend",
    data: [
      {
         id: 0,
         name: "HTML 5",
         icon: html,
         level: 97
      },
      {
        id: 1,
        name: "CSS",
        icon: css,
        level:97
      },
      {
        name:"Tailwind",
        icon:null,
        level:97
      },
      {
        name:"Bootstrap",
        icon:bootstrap,
        level:97
      },
      {
        name:"Scss",
        icon:scss,
        level:97
      },
      {
        name:"Vue",
        icon:vue,
        level:99
      },
      {
        name:"Nuxtjs",
        icon:nuxt,
        level:99
      },
      {
        name: "React JS",
        icon: null,
        level:95
      },
      {
        name:"Nextjs",
        icon:nextjs,
        level:99
      },
      {
        name:"Flutter",
        icon:flutter,
        level:90
      },
    ]
  },
  {
    id:1,
    title:"Backend",
    data:[
      {
        id:0,
        name:"Nodejs",
        icon:null,
      },
      {
        id:1,
        name:"MongoDB",
        icon:mongo
      },
      {
        id:2,
        name:"Express",
        icon:express
      },
      {
        id:3,
        name:"SQL",
        icon:sql
      },
      {
        id:4,
        name:"Firebase",
        icon:firebase
      }
    ]
  }
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
    icon: null,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "TypeScript",
    icon: null,
  },
  {
    name: "React JS",
    icon: null,
  },
  {
    name: "Redux Toolkit",
    icon: null,
  },
  {
    name: "Tailwind CSS",
    icon: null,
  },
  {
    name: "Node JS",
    icon: null,
  },
  {
    name: "MongoDB",
    icon: null,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: null,
  },
  {
    name: "figma",
    icon: null,
  },
  {
    name: "docker",
    icon: null,
  },
];

const experiences = [
  {
    title: "Restaurant Management System project",
    company_name: "License defense project",
    icon: hatDegree,
    iconBg: "#383E56",
    date: "March 2021 - November 2021",
    // points: [
    //   "Developing and maintaining web applications using React.js and other related technologies.",
    //   "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //   "Implementing responsive design and ensuring cross-browser compatibility.",
    //   "Participating in code reviews and providing constructive feedback to other developers.",
    // ],
    points: [
      "Developing mobile application using MERN stack (MongoDB, Express, React Native, Nodejs) for restaurant",
      "The application is mainly a Restaurant POS (Point of Sale) System",
      "This system streamlines the order-taking process, helps manage inventory, and facilitates efficient communication between the front-of-house staff (servers or waiters) and the back-of-house staff (chefs or kitchen staff)",
    ],
  },
  {
    title: "Internship Flutter Developer",
    company_name: "ILO Madagascar",
    icon: hatDegree,
    iconBg: "#E6DEDD",
    date: "September 2021 - December 2021",
    points: [
      "Four months of internship in mobile development using flutter",
      "In close collaboration with the lead mobile developer, the backend team, and the graphic designer, the mission was to integrate the mockups provided by the designer and the REST API provided by the backend team",
      "The mission focused on integrating the designer's mockups and the backend's REST API, ensuring seamless communication between the frontend and backend teams.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "MyAgency",
    icon: myagency,
    iconBg: "#383E56",
    date: "March 2022 - till now",
    points: [
      "Develop responsive user interfaces using Vue.js and Nuxt, working closely with designers and the backend team to integrate mockups, enhance functionalities, and optimize the user experience.",
      "The responsibilities also include adding interactivity and dynamic features to the interfaces to enhance the overall functionality. Additionally, optimizing the user experience is a key focus, ensuring that the application is intuitive, efficient, and user-friendly. This collaboration between different teams is crucial to deliver a high-quality product that meets both design and functionality requirements",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: null,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: null,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: null,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects,techs };
