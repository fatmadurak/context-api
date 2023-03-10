import {createContext,useContext,useEffect,useState } from "react";



const ThemeContext=createContext();

const defaultTheme=localStorage.getItem("theme") || "light";


export const ThemeContextProvider=({children})=>{

   const[theme,setTheme]=useState(defaultTheme);
   
 useEffect(()=>{

   localStorage.setItem("theme",theme)

 },[theme])

   const toogleTheme=()=>{

     setTheme((prev)=>prev==="light"?"dark":"light")

   }

   const values={

    theme,
    toogleTheme,


   };

return(

    <ThemeContext.Provider value={values}>
        {children}
    </ThemeContext.Provider>

);



}

export const useTheme=()=>{


return useContext(ThemeContext)

}


