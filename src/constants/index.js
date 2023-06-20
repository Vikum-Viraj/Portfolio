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
import lumbini from "../assets/lumbini.png"
import scl from "../assets/scl.png"
import mui from "../assets/mi2.png"
import bis from "../assets/bis.png"
import sup from "../assets/sup.png"
import evt from "../assets/evt.png"

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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Ebay Seller",
      icon: creator,
    },
    {
      title: "Java developer",
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
        "Currently Following a Bsc(Hons) degree programme specialising in software engineering in Sri Lanaka Institute of Information Technology",
       
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
      source_code_link: "https://github.com/",
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Event Planing System",
      description:
        "A event planing system basicaaly allow user to plan a event and do payment ",
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
      image: tripguide,
      source_code_link: "https://github.com/",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };