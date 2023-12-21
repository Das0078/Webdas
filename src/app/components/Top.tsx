'use client'
import React, { useState,useEffect } from 'react'
import styles from '../page.module.css'
import { RiLightbulbFlashFill} from "react-icons/ri";
import { RiLightbulbFill} from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Top = ({weather}:any) => {
    const [darkMode,setLightMode]=useState(false);
    const istTimezone = 'Asia/Kolkata';
const istOptions = { timeZone: istTimezone, hour12: false, hour: '2-digit', minute: '2-digit'};

const istTime = new Date().toLocaleTimeString('en-US', { ...istOptions });

console.log('Indian Standard Time (IST):', istTime);

useEffect(()=>{
  AOS.init({
    duration:1000
  });
})

  return (
    <>
    <div className={styles.top_con} data-aos="fade-down">
<div className={styles.time}>
    {istTime} IST
</div>
<div className={styles.weather}>
  {weather?`${weather.temp}°c,${weather.main}`:""}
</div>
{darkMode? <RiLightbulbFill className={styles.mode} size={20} onClick={()=>setLightMode(!darkMode)}/>
:<RiLightbulbFlashFill className={styles.mode} size={20} onClick={()=>setLightMode(!darkMode)}/>
}
    </div>
    </>
  )
}

export default Top