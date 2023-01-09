import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext';

function ChangeTheme() {

const {theme,setTheme}=useContext(ThemeContext);
  

  return (
    <div>

     Aktif Tema:{theme}
     <br/>
     <br/>
    <button onClick={()=>setTheme(theme==="light"?"dark":"light")}>ChangeTheme</button>

    </div>
  )
}

export default ChangeTheme