import React, { useRef, useState } from 'react'
import "./Portfolio.css"
import {motion , useScroll , useSpring, useTransform} from 'framer-motion'


const items = [
  {
    id: 1,
    title: "Food Order App",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "We developed a food ordering website using React, a popular JavaScript library for building user interfaces. This technology enables responsive and interactive user experiences, enhancing navigation and usability. Our website efficiently manages user authentication, restaurant listings, menu displays, order processing, and secure payments."
  },

  {
    id: 2,
    title: "Porfolio",
    img: "https://media.istockphoto.com/id/682084406/photo/retouche-at-work.jpg?s=612x612&w=0&k=20&c=0M4EMaLiWFXBBGs2VCRbf0oe9Cn3ZaTnEeiIajkbGRU=",
    desc: "We designed a personal portfolio using React for dynamic and responsive frontend development. CSS was utilized for styling, ensuring a visually appealing and user-friendly interface. The portfolio showcases skills, projects, and achievements effectively. Integration of React allows for easy updates and modifications, enhancing flexibility and scalability."
  },

  {
    id: 3,
    title: "Chat App",
    img: "https://media.istockphoto.com/id/1443479446/photo/smart-digital-customer-service-application-ai-chatbot-artificial-intelligence-chatbot.jpg?s=612x612&w=0&k=20&c=wkXZhsbYtH0mw0zIV6OFUH79gHGhcz9_NdtrgG6Lct0=",
    desc: "We developed a chatting site using React for frontend interactivity and CSS for styling. This platform facilitates real-time communication with features like message sending, user authentication, and chat room management.  The site supports multimedia content sharing and user profile customization, enhancing engagement and personalization."
  },

  {
    id: 4,
    title: "E-commerce",
    img: "https://media.istockphoto.com/id/1340117122/photo/cube-with-shopping-trolley-symbol-on-the-laptop-keyboard.jpg?s=612x612&w=0&k=20&c=H9wHzhYHnZ8EjaM-Mp9ssQwoyjs1Ol1Imi7xy1b7J-M=",
    desc: "We built an e-commerce platform using React for frontend development, ensuring a responsive and engaging user interface. Backend functionalities were implemented using technologies like Node.js for server-side operations and database management. The website supports product listings, secure payment gateways, and user authentication."
  },
];

const Single = ({item}) => {
  const ref = useRef()

  const {scrollYProgress} = useScroll({target:ref , 
    // offset:["start start" , "end start"]
  })

  const y = useTransform(scrollYProgress , [0,1] , [-300 , 300])
 
  return(
    <section id='work-section'>
     <div className="container"  >
      <div className="wrapper">
        <div className="imgContainer" ref={ref}>
      <img src={item.img} alt="" />
      </div>
      <motion.div className="textContainerr"  style={{y}}>
        <h2 >{item.title}</h2>
        <p>{item.desc}</p>
        <button>See Demo</button>
      </motion.div>
      </div>
     </div>
    </section>
  )
}


function Portfolio() {
  
  const ref = useRef()

  const {scrollYProgress} = useScroll({target:ref , offset:["end end" , "start start"]})
 
 const scaleX = useSpring(scrollYProgress , {
  stiffness: 100,
  damping: 30,
 })

  return (
    <>
      <div className="portfolio" ref={ref}>
        <div className="progres" >
          <h1>Featured Works</h1>
          <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {/* <h1>Hello</h1> */}
        {items.map(item => (
          <Single item={item}  key={item.id}/>
        ))}
      </div>
    </>
  )
}

export default Portfolio
