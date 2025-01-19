'use client'
import Image from 'next/image'
import styles from '../page.module.css'
import { AiFillHome } from "react-icons/ai";
import { RiProjectorFill } from "react-icons/ri";
import { BsFillBookFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import React, { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';


const Navbar = ({color}:any) => {
  const [isHomeIconHovered, setIsHomeIconHovered] = useState(false);
  const [isProjectIconHovered, setIsProjectIconHovered] = useState(false);
  const [isSkillsIconHovered, setIsSkillsIconHovered] = useState(false);
  const [isContactIconHovered, setIsContactIconHovered] = useState(false);
  useEffect(()=>{
    AOS.init({
      duration:1000
    });
  })
  return (
    <>
    <nav className={styles.navbar} data-aos="fade-right" data-theme={color.theme}>
    <Link href={'#home'}><AiFillHome className={styles.home} size={28} color={isHomeIconHovered ? '#748cab' : '#415a77'}
          onMouseEnter={() => setIsHomeIconHovered(true)}
          onMouseLeave={() => setIsHomeIconHovered(false)} /></Link>
<Link href={'#project'}><RiProjectorFill className={styles.project} size={28}  color={isProjectIconHovered ? '#748cab' : '#415a77'}
          onMouseEnter={() => setIsProjectIconHovered(true)}
          onMouseLeave={() => setIsProjectIconHovered(false)}/> </Link>
<Link href={'#skills'}><BsFillBookFill className={styles.skills} size={28} color={isSkillsIconHovered ? '#748cab' : '#415a77'}
          onMouseEnter={() => setIsSkillsIconHovered(true)}
          onMouseLeave={() => setIsSkillsIconHovered(false)} /></Link>
<Link href={'#contacts'}><BiSolidContact className={styles.contact} size={28} color={isContactIconHovered ? '#748cab' : '#415a77'}
          onMouseEnter={() => setIsContactIconHovered(true)}
          onMouseLeave={() => setIsContactIconHovered(false)} /></Link>

    </nav>
    </>
  )
}

export default Navbar
