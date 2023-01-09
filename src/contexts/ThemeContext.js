import {createContext,useState } from "react";



const ThemeContext=createContext();

export const ThemeContextProvider=({children})=>{

   const[theme,setTheme]=useState("light");
   
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


export default ThemeContext;