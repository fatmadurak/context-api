import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext';

function ChangeTheme() {

const {theme,toogleTheme}=useContext(ThemeContext);
  

  return (
    <div>

     Aktif Tema:{theme}
     <br/>
     <br/>
    <button onClick={toogleTheme}>ChangeTheme</button>

    </div>
  )
}

export default ChangeTheme