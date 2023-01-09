import { createContext } from "react";

const LangContext=createContext();

export const LangContextProvider=({children})=>{

return(

<LangContext.Provider value={"tr"}>

  {children}

</LangContext.Provider>


)



}



export default LangContext;