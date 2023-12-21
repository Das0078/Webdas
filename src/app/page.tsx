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



const page = () => {
 const [toggle,setToggle]=useState("Home")
 const [weather,setWeather]=useState({temp:"",main:""})
 const [loader,setLoader]=useState(false);




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
   <section>
    <Top weather={weather} />
    <Navbar />
    <div className={styles.homeContainer}>
      <Home />
     <Project />
    <Skills />
    <Contact />
    </div>
   </section>


   }

   

    
    </>
  )
}

export default page
