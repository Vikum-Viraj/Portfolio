import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {BsPatchCheckFill} from "react-icons/bs"
import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from "../hoc";
import {fadeIn,textVariant } from '../utils/motion'
import mvn from "../assets/mvn.png"
import "./floatnav.css"
import mycv from "../assets/myCv.pdf"

const ServiceCard = ({ index, title, icon }) => (

  <div className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='bg-gradient-to-r from-blue-500 to-transparent p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>

);


const About = () => {
  return (
    <>
    
        <motion.div variants={textVariant()}><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div>      <img style={{width:'280px',height:'280px',marginTop:'-250px',position:'absolute',textAlign:'center'}} src={mvn}/></div><br></br><br></br>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        {/*<button className='btn'> <a href ={mycv}  target="_blank" download="My Cv">Download Cv</a></button>*/}
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I am an undergraduate software engineer with a passion of developing
innovative software solutions. with the keen interest in web designing. and I thrive in a team environment 
where I can contribute my skills and knowledge while also learning from others. I believe in fostering a friendly and
supportive atmosphere, and I enjoy educating and sharing my expertise with team
members. I have always maintained a positive attitude to navigate through obstacles 
with resilience and determination.I am eager to contribute my skills and passion with
everyone who passionate about it which values innovation and teamwork.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-12'>
        {services.map((service, index) => (
          <ServiceCard key={service.title}  index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about");