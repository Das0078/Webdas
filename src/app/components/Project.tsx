import React, { useEffect } from 'react'
import styles from '../page.module.css'
import Card from './Card'
import AOS from 'aos';
import 'aos/dist/aos.css';
import api from '../Projects.json'
const Project = () => {

  return (
    <>
   
     <div className={styles.container_project} id='project' data-aos="fade-right">
 {api.map((project,idx)=>{
  return <Card key={idx} project={project}/>
 })}
        
    </div>
    </>
  )
}

export default Project