import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import moon from "../assets/moon.png"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import Feedbacks from "./Feedbacks";
import Motion from "./Motion";
import styled from "styled-components";
import link from "../assets/link.png"
import git from "../assets/git.png"
import ins from "../assets/ins.png"
import "./floatnav.css"
import { Link } from "react-router-dom";
import mv from "../assets/mv.jpg"

const Hero = () => {

  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-6 h-6 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} #e6f7ff`}>
           <font>Hi, I'm</font>  <span className='text-[#005ce6]'><br></br>Vikum Viraj</span>
          </h1>
        <Feedbacks text={"Software Engineer"}/>    
      
        </div>
   <div className="dis">
       <Link to="https://www.linkedin.com/in/vikum-viraj/"><img src={link}/></Link>
       <Link to="https://github.com/Vikum-Viraj"> <img src={git}/></Link>
       <Link to="https://www.instagram.com/_.vikum._.viraj_/"> <img style={{width:'50px',height:'50px',marginTop:'8px',marginLeft:'5px'}} src={ins}/></Link>
   </div>
      </div>

      {/*<ComputersCanvas />*/}
      
      
      <div style={{marginLeft:'800px'}}>
      <Motion/>
      </div>
   
    </section>
  );
};

export default Hero;