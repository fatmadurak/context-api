import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext';

function ChangeTheme() {

const data=useContext(ThemeContext);
  

  return (
    <div>

     Aktif Tema:{data.theme}
     <br/>
     <br/>
    <button onClick={()=>data.setTheme("dark")}>ChangeTheme</button>

    </div>
  )
}

export default ChangeTheme