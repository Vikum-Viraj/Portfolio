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
  } from "../assets";
  
import sliit from "../assets/sliit.png"
import orelit from "../assets/orel.png"
import lumbini from "../assets/lum.png"
import scl from "../assets/scl.png"
import mui from "../assets/mi2.png"
import bis from "../assets/bis.png"
import sup from "../assets/sup.png"
import evt from "../assets/evt.png"
import movie from "../assets/movie.png"
import mem from "../assets/mem.png"
import fig from "../assets/fig.png"
import user from "../assets/user.png"
import nw from "../assets/nw.png"
import {BsPatchCheckFill} from "react-icons/bs"
import veri from "../assets/ver.png"
import ex from "../assets/ex.png"
import shirt from "../assets/shirt.png"

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: veri,
    },
    {
      title: "React Developer",
      icon: veri,
    },
    {
      title: "Backend Developer",
      icon: veri,
    },
    {
      title: "React Native Developer",
      icon: veri,
    },
    {
      title: "Java Developer",
      icon: veri,
    },
    {
      title: "UI Designer",
      icon: veri,
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
      name: "MongoDB",
      icon: mongodb,
    },
   
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "MaterialUi",
      icon: mui,
    },
   
  ];
  
  const experiences = [
    {
      title: "BSc(Hons) in Information Technology",
      company_name: "Sri Lanka Institute of Information Technology",
      icon: sliit,
      iconBg: "#383E56",
      date: "july 2021 - to present",
      points: [
        "Currently, pursuing  a Bsc(Hons) degree programme specialising in software engineering in Sri Lanaka Institute of Information Technology",
       
      ],
    },
    {
      title: "Associate Image Processor(AIP)",
      company_name: "OREL IT",
      icon: orelit,
      iconBg: "#E6DEDD",
      date: "june 2020 - july 2021",
      points: [
        "Orel It is a global technology company that provides Artifical Intelligence Services and Machine Vision Technology based solutions. My role was processing the data used to feed AI models.",
       
      ],
    },
    {
      title: "Advanced Level",
      company_name: "Lumbini Colleage,Colombo 05",
      icon: lumbini,
      iconBg: "#383E56",
      date: " 2017 - 2019",
      points: [
        "Passed General Certificate of Education Advanced Level Exam - (Technology Stream) Engineering Technology - C             Science for Technology - C              ICT   -  S",
       
      ],
    },
    {
      title: "Ordinary Level",
      company_name: "Kottawa North Dharmapala Vidyalaya,Colombo",
      icon: scl,
      iconBg: "#383E56",
      date: "2009  to 2016",
      points: [
        "Passed General Certificate of Education Ordinary Level Exam 4 A passes  5 B passes",
       
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
      name: "Biscuit Manufacturing management system",
      description:
        "Group project on developing web application for a Little Lanka Biscuit manufacturing company In second year second semester using MERN stack ",
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
          name: "express js",
          color: "pink-text-gradient",
        },
        {
          name: "mongo db",
          color: "pink-text-gradient",
        },
      ],
      image: bis,
      source_code_link: "https://github.com/SLIITITP/y2_s2_wd_it_01-itp_wd_b08_g03.git",
    },
    {
      name: "Supply chain management system",
      description:
        "Developed Supply chain managemnt function for biscuit manufacture management website",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express js",
          color: "green-text-gradient",
        },
        {
          name: "material UI",
          color: "pink-text-gradient",
        },
      ],
      image: sup,
      source_code_link: "https://github.com/SLIITITP/y2_s2_wd_it_01-itp_wd_b08_g03.git",
    },
    {
      name: "Event Planing System",
      description:
        "The Event Planning System is a web-based application developed using JSP and Servlets that allows users to manage and organize events. The system has essential CRUD functions and features user login, payment handling, and event management. ",
      tags: [
        {
          name: "jsp",
          color: "blue-text-gradient",
        },
        {
          name: "servlet",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "Mysql",
          color: "pink-text-gradient",
        },
      ],
      image: evt,
      source_code_link: "https://github.com/Vikum-Viraj/Event-Management-System.git",
    },
    {
      name: "Expense Tracker App",
      description:
        "Group project on find solution for current economic crisis and develop a Mobile application called Expense tracker app for second year second semester Project. My role was manage expense category,User Login and manage expense.",
      tags: [
        {
          name: "Kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "Room DB",
          color: "pink-text-gradient",
        },
      ],
      image: ex,
      source_code_link: "https://github.com/hirankaushalya/Expense-tracker.git",
    },
    {
      name: "Movie App",
      description:
        "Developed a Movie app using MERN stack basically allow users to search and book movies and add movies by admin side",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Express js",
          color: "green-text-gradient",
        },
        {
          name: "Node Js",
          color: "pink-text-gradient",
        },
        {
          name: "Mongo DB",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/IT21161810/Movie_App.git",
    },
    {
      name: "Bank App",
      description:
        "Designed a UI prototype for a bank app in figma",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Splash plugins",
          color: "green-text-gradient",
        },
      ],
      image: fig,
      
    },
    {
      name: "Memeories App",
      description:
        "Developed a Memories app in MERN stack allow users to add memeoris and relevant pictures",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Express js",
          color: "green-text-gradient",
        },
        {
          name: "Node Js",
          color: "pink-text-gradient",
        },
        {
          name: "Mongo DB",
          color: "pink-text-gradient",
        },
      ],
      image: mem,
      source_code_link: "https://github.com/Vikum-Viraj/Memories-App.git",
    },
    {
      name: "3D Web",
      description:
        "Developed a 3D web using react,react-fiber and threejs allow users to customize t-shirt design according to user preferences ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "three js",
          color: "green-text-gradient",
        },
        {
          name: "React Js",
          color: "pink-text-gradient",
        },
        {
          name: "Dalle API",
          color: "pink-text-gradient",
        },
      ],
      image: shirt,
      source_code_link: "https://github.com/Vikum-Viraj/3D-Web.git",
    },
    {
      name: "Mern Seacrh",
      description:
        "Developed a react search function connect with mongo db with simple CRUD functionality",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Express js",
          color: "green-text-gradient",
        },
        {
          name: "Node Js",
          color: "pink-text-gradient",
        },
        {
          name: "Mongo DB",
          color: "pink-text-gradient",
        },
      ],
      image: user,
      source_code_link: "https://github.com/Vikum-Viraj/User_Manage_App.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };