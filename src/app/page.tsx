'use client'
import styles from './page.module.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Top from './components/Top'
import Test from './components/Test'
import Preloader from './components/Preloader'
import CircleLoader from "react-spinners/CircleLoader";
import AOS from 'aos';
import 'aos/dist/aos.css';

// import { Element } from 'react-scroll';
import { useState,useEffect } from 'react'




const Page = () => {
 const [toggle,setToggle]=useState("Home")
 const [weather,setWeather]=useState({temp:"",main:""})
 const [loader,setLoader]=useState(false);
 const[theme,setTheme]=useState("")

//  const [darkMode,setLightMode]=useState(true);



useEffect(()=>{
  setLoader(true);
  const fetchData=async()=>{
console.log("key",process.env.NEXT_PUBLIC_API_KEY);
  AOS.init({
    duration:2000
  });

  try {
      
 
      const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kharagpur&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`);
      if(res.ok){
        const data= await res.json()
        setWeather({
          temp:data.main.temp,
          main:data.weather[0].main
      })
console.log(weather);

        
      }else{
        console.log("network issues...");
        
      }
    
      }catch (error) {
        console.log("bad request",error);
    
  }
} 
setTimeout(()=>{
  setLoader(false);
    },2000)
fetchData()

},[])



  return (
    <>
   {loader?
   <section className={styles.preloader}>
   <CircleLoader data-aos="fade-out"
   color={'#ffff'}
   loading={loader}
 
   size={150}
 />
 </section>
   :
 
   <section  data-theme={theme}>
    <Top weather={weather} color={{theme,setTheme}}/>
    <Navbar color={{theme,setTheme}}/>
    <div className={styles.homeContainer}>
      <Home color={{theme,setTheme}}/>
     <Project color={{theme,setTheme}}/>
    <Skills color={{theme,setTheme}}/>
    <Contact color={{theme,setTheme}}/>
    </div>
   </section>
   

   }

   

    
    </>
  )
}

export default Page
