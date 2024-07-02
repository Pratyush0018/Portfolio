import React from 'react'
import "./Hero.css"
import {motion} from "framer-motion"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0, 
    opacity:1,
    transition: {
      duration:1,
      staggereChildren: 0.1,

    },
  },
};

const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x:"-220%",

transition: {
  repeat: Infinity,
  repeatType: "mirror",
  duration: 20,
},
  },
};


function Hero() {

  
  return (
    <>
    
    <div className="hero" id='home-section'>
    <div className="wrapper">

    <motion.div 
    className="textContainer" 
    variants={textVariants} initial="initial" 
    animate="animate"
    >

      <motion.h2 variants={textVariants}>Pratyush Kumar</motion.h2>

      <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>


    <motion.div  variants={textVariants} id='buttons'>

      <a href="#work-section">
      <motion.button variants={textVariants}>See the Latest Works</motion.button>
      </a>

    <a href="P Resume.pdf">
      <motion.button  variants={textVariants}>Resume</motion.button>
      </a>

      </motion.div> 
      </motion.div>
      
      </div>

    <motion.div 
    className="slidingText" 
    variants={slideVariants} 
    initial="initial" 
    animate="animate">  
      Web-Developer Designer Video-Editor 
      </motion.div> 


    
    <div className="imgContainerr">
        <img src="pkimg.png"  alt="" />
    </div>
    </div>
    

    </>
  )
}

export default Hero
