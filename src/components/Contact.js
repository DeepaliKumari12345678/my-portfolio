import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
export default function Contact() {
  return (
   <>
   <div className='container contact' id='contact'>
    <h1>CONTACT ME</h1>
    <div className='contact-icon' data-aos="zoom-in-up"
   data-aos-duration="1000">
      <a href="https://www.instagram.com/" target="_blank"className='items'><FaInstagram className='icons' /></a>
      <a href="https://www.facebook.com/" target="_blank" className='items'><FaFacebook className='icons'/></a>
      <a href="https://www.linkedin.com/in/deepali-kumari-075730238/" target="_blank" className='items'><FaLinkedin className='icons'/></a>
      <a href="mailto:deepali784521@gmail.com" target="_blank" className='items'><CgMail className='icons' /></a>
      <a href="https://github.com/DeepaliKumari12345678" target="_blank" className='items'><FaGithub className='icons'/></a>
    </div>
   </div>
   </>
  )
}
