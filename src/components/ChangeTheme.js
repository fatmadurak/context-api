import React from 'react'
import ThemeContext, { useTheme } from '../contexts/ThemeContext';

function ChangeTheme() {

const {theme,toogleTheme}=useTheme();
  

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