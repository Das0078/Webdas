import React,{useEffect} from 'react'
import styles from '../page.module.css'
import Link from 'next/link'
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Card = ({project,color}:any) => {
  
  console.log(project);
  
  return (
    <>
    
           <div className={styles.card} data-theme={color.theme}>
           <img className={styles.card_image} src={project.img} alt="Card Image"/>
           <div className={styles.card_description}>
               <h2 className={styles.card_title} data-theme={color.theme}>{project.title}</h2>
               <p className={styles.card_para}>{project.description}</p>
               
               
           <Link href={'https://www.google.com/'} target='_blank'><button className={styles.card_btn}>Learn more</button></Link>
   
           </div>
       </div>
   

    </>
  )
}

export default Card