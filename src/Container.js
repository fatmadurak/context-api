
import ChangeLang from "./components/ChangeLang";
import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";
import { useContext } from "react";
import ThemeContext from './contexts/ThemeContext';

function Container() {

    const {theme}=useContext(ThemeContext)

  return (
    <div className={`container ${theme}`} >
    <ChangeTheme/>
    <ChangeLang/>
    <Footer/>
   

    
   </div>
  )
}

export default Container