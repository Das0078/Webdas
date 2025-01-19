'use client'
import React, { useEffect,useState } from 'react'
import styles from '../page.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = ({color}:any) => {
  // const [hovered,setHovered]=useState(false)

  // const add_class=hovered?styles.big:"";

  useEffect(()=>{
    AOS.init({
      duration:1000
    });
  })
  return (
    <>
    <div className={styles.container_skills} id='skills' data-aos="fade-left" data-theme={color.theme}>

    
      <div className={styles.con}>

        <h5 className={styles.nameH} data-aos="fade-right">HTML</h5>
        <div className={styles.par} data-aos="fade-right">
          <div className={styles.perH} data-aos="fade-right"></div>
        </div>

        <h5 className={styles.nameC} data-aos="fade-right">CSS</h5>
        <div className={styles.par} data-aos="fade-right">
          <div className={styles.perC} data-aos="fade-right"></div>
        </div>

        <h5 className={styles.nameJs} data-aos="fade-right">JAVASCRIPT (ES7)</h5>
        <div className={styles.par} data-aos="fade-right">
          <div className={styles.perJs} data-aos="fade-right"></div>
        </div>

        <h5 className={styles.nameMdb} data-aos="fade-right">MONGODB</h5>
        <div className={styles.par}data-aos="fade-right">
          <div className={styles.perMdb} data-aos="fade-right"></div>
        </div>

        <h5 className={styles.nameEx} data-aos="fade-right">EXPRESS.JS</h5>
        <div className={styles.par} data-aos="fade-right">
          <div className={styles.perEx} data-aos="fade-right"></div>
        </div>

        <h5 className={styles.nameR} data-aos="fade-right">REACT.JS</h5>
        <div className={styles.par} data-aos="fade-right">
          <div className={styles.perR} data-aos="fade-right"></div>
        </div>

        <h5 className={styles.nameN} data-aos="fade-right">NODE.JS</h5>
        <div className={styles.par} data-aos="fade-right">
          <div className={styles.perN} data-aos="fade-right"></div>
        </div>

        <h5 className={styles.nameJa} data-aos="fade-right">CORE JAVA</h5>
        <div className={styles.par} data-aos="fade-right">
          <div className={styles.perJa} data-aos="fade-right"></div>
        </div>

        <h5 className={styles.namePy} data-aos="fade-right">BASIC PYTHON</h5>
        <div className={styles.par} data-aos="fade-right">
          <div className={styles.perPy} data-aos="fade-right"></div>
        </div>

      </div>
      </div>
    </>
  )
}

export default Skills