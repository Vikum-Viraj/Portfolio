import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion'
import mvn from "../assets/mvn.png"
import "./floatnav.css"

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
        <div>      <img style={{ width: '280px', height: '280px', marginTop: '-250px', position: 'absolute', textAlign: 'center' }} src={mvn} /></div><br></br><br></br>
        <p className={styles.sectionSubText}>Overview</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
        {/*<button className='btn'> <a href ={mycv}  target="_blank" download="My Cv">Download Cv</a></button>*/}
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Dedicated software engineer passionate about web and mobile development. Skilled in problem-solving,
        Agile methodologies, and delivering customer-focused solutions with a commitment to quality and
        continuous improvement. Values teamwork and collaboration to drive innovation and success.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-12'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about");