'use client'
import React, { useEffect, useState } from 'react'
import styles from '../page.module.css'
import { BsDiscord } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { DiGithubBadge } from "react-icons/di";
import { IoIosMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = ({color}:any) => {
  const [mailHover, setMailHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [githubHover, setGithubHover] = useState(false);
useEffect(()=>{
  AOS.init({
    duration:1000
  });
},[])
  return (

    <>
    <div className={styles.container_home} id='home' data-aos="fade-up" data-theme={color.theme}>
      <div className={styles.intro}>
      <h4 className={styles.name} data-aos="fade-right" data-theme={color.theme}>I am Shubham.</h4>
      {/* <button className="btn btn-active btn-accent">Accent</button> */}
        <p className={styles.para} data-aos="fade-right" data-theme={color.theme}>Lorem ipsum dolor sit 
        amet consectetur adipisicing elit. Officiis provident cupiditate 
        culpa iure voluptatibus fugit architecto rem adipisci assumenda 
        maiores illum quasi laborum, vel error unde officia ab odit vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque velit accusantium, eius nam numquam reiciendis ipsa distinctio illum, quo quos assumenda possimus amet deserunt 
        ipsam, quisquam tempora error eveniet iusto.</p>

        <Link href="/Resume"> <button className={styles.resume_btn} data-aos="fade-right" data-theme={color.theme}>My Resume</button></Link>
        <div className={styles.contact_logo}>
          
<Link href={"https://discord.com/channels/@das1091"} data-aos="fade-right" target='_blank'> <BsDiscord className={styles.mail} color={mailHover?'#415a77':'#3e5c76'}  onMouseLeave={() => setMailHover(false)}
          onMouseEnter={() => setMailHover(true)} size={25} /></Link>
<Link href={"https://www.linkedin.com/in/shubham-das-03554023b/"} data-aos="fade-right" target='_blank'> <GrLinkedin className={styles.linkedin} color={linkedinHover?'#415a77':'#3e5c76'} onMouseLeave={() => setLinkedinHover(false)}
          onMouseEnter={() => setLinkedinHover(true)} size={18}/></Link>
<Link href={"https://github.com/Das0078"} data-aos="fade-right" target='_blank'> <DiGithubBadge className={styles.github} color={githubHover?'#415a77':'#3e5c76'} onMouseLeave={() => setGithubHover(false)}
          onMouseEnter={() => setGithubHover(true)} size={30}/></Link>
          
          

          
          
        </div>
        <div className={styles.short_details}>
          <p className={styles.email} data-aos="fade-right"><IoIosMail color={'#8d99ae'} className={styles.mail_logo} data-theme={color.theme}/>shubham78das@gmail.com</p>
          <p className={styles.address} data-aos="fade-right"><MdLocationOn color={'#8d99ae'}  className={styles.address_logo} data-theme={color.theme}/>Kharagpur-721301,West Bengal,India</p>
        </div>
      </div>

      <div className={styles.image} data-aos="fade-left">
        <Link href={'https://www.facebook.com/suvam.das.5201254'} target='_blank'><img src="/images/what_port_img.jpg" alt="image" /></Link>
      </div>
        
    </div>
    </>
  )
}

export default Home