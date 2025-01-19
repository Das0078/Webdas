'use client'
import React, { useState,useEffect, useContext} from 'react'
import styles from '../page.module.css'
import { RiLightbulbFlashFill} from "react-icons/ri";
import { RiLightbulbFill} from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { themeContext } from './Theme.jsx';
const Top = ({weather,color}:any) => {
  const {darkTheme,setDarkTheme}=useContext(themeContext)
    const istTimezone = 'Asia/Kolkata';
const istOptions:any = { timeZone: istTimezone, hour12: false, hour: '2-digit', minute: '2-digit'};

const istTime:any = new Date().toLocaleTimeString('en-US', { ...istOptions });

console.log('Indian Standard Time (IST):', istTime);


useEffect(()=>{
  AOS.init({
    duration:1000
  });
})

const handleToggle=(e:any)=>{
  if(e.target.checked){
    color.setTheme("autumn")
}else{
    color.setTheme("night")

}
}

  return (
    <>
    <div className={styles.top_con} data-aos="fade-down" data-theme={color.theme}>
<div className={styles.time}>
    {istTime} IST
</div>
<div className={styles.weather}>
  {weather?`${weather.temp}°c,${weather.main}`:""}
</div>
 <label className="cursor-pointer grid place-items-center">
  <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" onChange={handleToggle} checked={color.theme==="autumn"?true:false}/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
    </div>
    </>
  )
}

export default Top