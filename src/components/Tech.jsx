import React from 'react'

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
       <h1 style={{borderBottom:'10px',textAlign:'center',fontSize:'30px'}}><b>Languages & Frameworks</b></h1><br></br><br></br>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
     
      {technologies.map((technology) => (
        <div>
          <img style={{textAlign:'center'}} src={technology.icon} alt="img"  width={100} height={100} />
          <h4 style={{marginLeft:'25px'}}>{technology.name}</h4>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");