'use client'
import React,{useEffect, useState} from 'react'
import styles from '../page.module.css'
import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Contact = () => {
  const [githubHover,setGithubHover]=useState(false);
  const [linkedHover,setLinkedHover]=useState(false);
  const [xHover,setXHover]=useState(false);
  const [fbHover,setFbHover]=useState(false);
  const [instaHover,setInstaHover]=useState(false);
useEffect(()=>{
  AOS.init({
    duration:1000
  });
})
  return (
    <>
    <div className={styles.container_contact} id='contacts' data-aos="fade-right">
        
              <Link href={'https://github.com/Das0078'} data-aos="fade-right" target='_blank'><VscGithubInverted className={styles.con_github} size={githubHover?80:60} color={githubHover?'#343a40':'azure'} 
               onMouseEnter={()=>setGithubHover(true)} onMouseLeave={()=>setGithubHover(false)}/></Link> 

              <Link href={'https://www.linkedin.com/in/shubham-das-03554023b/'} data-aos="fade-right" target='_blank'> <BsLinkedin className={styles.linked} size={linkedHover?80:60} color={linkedHover?'#003566':'azure'} 
              onMouseEnter={()=>setLinkedHover(true)} onMouseLeave={()=>setLinkedHover(false)}/></Link>

              <Link href={'https://twitter.com/ShubhamDAS0078'} data-aos="fade-right" target='_blank'> <FaXTwitter className={styles.x} size={xHover?80:60} color={xHover?'#001219':'azure'} 
              onMouseEnter={()=>setXHover(true)} onMouseLeave={()=>setXHover(false)}/></Link>

              <Link href={'https://www.facebook.com/suvam.das.5201254'} data-aos="fade-right" target='_blank'> <FaFacebook className={styles.fb} size={fbHover?80:60} color={fbHover?'#1565c0':'azure'} 
              onMouseEnter={()=>setFbHover(true)} onMouseLeave={()=>setFbHover(false)}/></Link>

              <Link href={'https://www.instagram.com/shubham.das.0078/'} data-aos="fade-right" target='_blank'> <SiInstagram className={styles.insta} size={instaHover?80:60} color={instaHover?'#ff0a54':'azure'} 
              onMouseEnter={()=>setInstaHover(true)} onMouseLeave={()=>setInstaHover(false)}/></Link>

        
    </div>
    </>
  )
}

export default Contact