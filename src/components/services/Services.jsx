import React, { useRef } from 'react'
import "./Services.css"
import {motion , useInView} from 'framer-motion'

const variants = {
  initial:{
    x: -500,
    y:100,
    opacity:0,
  },
  animate:{
    x:0,
    opacity: 1,
    y: 0, 
    transition:{
      duration:1,
      staggerChildren: 0.1,
    }
  }
}

function services() {

  const ref = useRef();

  const isInView = useInView(ref ,{margin: "-100px" });
  return (
    <>
      
  <motion.div className="services" id='services-section' variants={variants} initial="initial" ref={ref} animate={"animate"}>
  <motion.div className="textContainer">
    <p>I focus on helping your brand grow<br/> and move forward</p>
    <hr />

  </motion.div>
  <motion.div className="titleContainer"  variants={variants}>

   <div className="title">
    <img src="office.avif" alt="" />
    <h1><motion.b style={{fontWeight:600}} whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
   </div>

   <div className="title">
    <h1><motion.b style={{fontWeight:600}} whileHover={{color:"orange"}}>For Your</motion.b> Business.</h1>
    <button>WHAT WE DO?</button>
   </div>

  </motion.div>
  <motion.div className="listContainer"  variants={variants}>

   <motion.div className="box" whileHover={{backgroundColor: "lightgray" , color: "black"}}>
    <h3>Web Development</h3>
    <p>Our web development team combines years of experience with an understanding of the most up-to-date programming skills and approaches. When we build your app, we'll leverage the latest development innovations. The entire process is built around your precise specifications and requirements. </p>
   <button>Go</button>
   </motion.div>

   <motion.div className="box"  whileHover={{backgroundColor: "lightgray" , color: "black"}} >
    <h3>E-commerce</h3>
    <p>Allow our eCommerce website development experts to redefine your business and transform it into a state-of-the-art online store with a seamless user experience</p>
   <button>Go</button>
   </motion.div>

   <motion.div className="box"  whileHover={{backgroundColor: "lightgray" , color: "black" }}>
    <h3>UX design</h3>
    <p>Our UX experts design and create digital experiences that are purposeful and enjoyable for end-users, as well as for our clients.Your users are our first priority, and our minimum goal is a client’s maximum satisfaction, making us a top UX agency, ready to deliver.</p>
   <button>Go</button>
   </motion.div>

   <motion.div className="box"  whileHover={{backgroundColor: "lightgray" , color: "black"}}>
    <h3>UI / Front-end</h3>
    <p>Our UI design team specialises in creating beautiful and functional interface designs for various digital solutions.  We believe that creativity and visual design is as important as smart information architecture and interaction design that altogether create a smooth and coherent user experience.</p>
   <button>Go</button>
   </motion.div>
   
   

  </motion.div>

  </motion.div>

    </>
  )
}

export default services
