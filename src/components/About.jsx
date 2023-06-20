import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from "../hoc";
import {fadeIn,textVariant } from '../utils/motion'
import mv from "../assets/mv.jpg"

const ServiceCard = ({ index, title, icon }) => (

  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
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
  </Tilt>

);


const About = () => {
  return (
    <>
    
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I am an undergraduate software engineer with a strong endeavour for developing
innovative software solutions. with the keen interest in web designing, Collaboration is
a core value of me, and I thrive in a team environment where I can contribute my skills
and knowledge while also learning from others. I believe in fostering a friendly and
supportive atmosphere, and I enjoy educating and sharing my expertise with team
members. I have always maintained a positive atitude to navigate through obstacles 
with resilience and determination.I am eager to contribute my skills and passion with
everyone who passonate about it which values innovation and teamwork.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about");