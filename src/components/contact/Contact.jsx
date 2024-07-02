import React, { useState } from 'react';
import "./Contact.css"
import emailjs from '@emailjs/browser';

 const Result = () => {
  return(
   alert("Your message has been successfully sent. i wil contact you soon.")
  )
 };

function Contact(props) {
  const[result , showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();       

    
        emailjs
          .sendForm('service_qa0x26e', 'template_wn9rjis', e.target, {
            publicKey: 'hZAb8alUKNqAccg4m',
          })
          .then(
            (result) => {
              alert("Your message sent successfully")
             
              
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset();
          showResult(true);
        };
  return (
    <>

<div className="cont" id='contact-section' >

     <div className="containerr">
     <div className="contactInfo">
         <div>
             <h2>Contact Info</h2>
             <ul className="info">
                 <li>
                     <span><img src="location.png" alt="" /></span>
                     <span>
                     RajHarsh Colony, Kolar Road, Bhopal 462042,<br /> M.P. , India
                     </span>
                 </li>

                 <li>
                     <span><img src="mail.png" alt="" /></span>
                     <span>
                     pratyushkanathe@gmail.com
                     </span>
              </li>

                 <li>
                     <span><img src="call.png" alt="" /></span>
                     <span>
                     +91-7067847476
                     </span>
                 </li>
             </ul>
         </div>
         <ul className="sci">
             <li><a href="https://www.facebook.com/pratyush.kanathe?mibextid=kFxxJD"><img src="1.png"/></a></li>
             <li><a href="https://twitter.com/KanathePratyush?t=yrV7R-ySWtne85iRNm7h3w&s=09"><img src="2.png"/></a></li>
             <li><a href="https://www.instagram.com/pratyush_kanathe_no.18?igsh=cHB3MjYxaXUzN3lm"><img src="3.png"/></a></li>
             <li><a href="https://www.linkedin.com/in/pratyush-kanathe-8a9687286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="5.png"/></a></li>
         </ul>
    </div>


    <form className='contactForm' id='con-sec' onSubmit={sendEmail} >

    <h2>Let's Work Together</h2>

    <div className="formBox">
         <div className="inputBox w50">
             <input type="text"  required  name="user_name"/>
             <span>First Name</span>
         </div>

         <div className="inputBox w50">
             <input type="text"  required name="user_lastname"/>
             <span>Last Name</span>
         </div>
        
         <div className="inputBox w50">
             <input type="email"  required name="user_email" />
             <span>Email Address</span>
         </div>

         <div className="inputBox w50">
             <input type="text"  required  name="user_mobile"/>
             <span>Mobile Number</span>
         </div>

         <div className="inputBox w100">
             <textarea required name="message" ></textarea>
             <span>Write your message here...</span>
         </div>

        
            <button type="submit" value="Send" >Submit</button>
      <div className='row'>{result ? <Result/> : null}</div>
    
    </div>

     </form>
     </div>
 
     </div>

    </>
  )
}

export default Contact

