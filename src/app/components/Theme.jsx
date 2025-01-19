"use client"
import React, { createContext, useState } from 'react'
export const themeContext=createContext({
    darkTheme:false,
    setDarkTheme:(s)=>{

    }
})
const Theme = ({children}) => {
const [darkTheme,setDarkTheme]=useState(true)

  return (
    <themeContext.Provider value={{darkTheme,setDarkTheme}}>
    <div>{children}</div>

    </themeContext.Provider>
  )
}

export default Theme