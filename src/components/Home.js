import React , {useRef, useEffect} from 'react';
import pdf from '../pdf/resume.pdf';
import hero from './data/hero.json';
import Typed from 'typed.js';


export default function Home() {
  const typedRef=useRef(null)
  useEffect(()=>{
   const options = {
    strings:["Welcome to my profile" , "My Name is Deepali Kumari" , "I'm Java Developer"],
    typeSpeed:50,
    backSpeed:50,
    loop:true
   }
   const typed= new Typed(typedRef.current , options)
    return() => {
    typed.destroy()
    }
  }, [])
  return (
    <>
    <div className='home container' id='home'>
        <div className="left" data-aos="fade-up-right"
   data-aos-duration="1000"><h1 ref={typedRef}></h1>
        <a href={pdf} download="Resume.pdf" className='btn btn-outline-warning my-3'>Download Resume</a></div>
        <div className='right'>
          <div className='img' data-aos="fade-up-left"
   data-aos-duration="1000">
            <img src={`/assests/${hero.imgSrc}`} alt="Deepali"/>
          </div>
        </div>
    </div>
    </>
  )
}
