import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
function Footer() {

    const{theme,setTheme}=useContext(ThemeContext);

  return (
    <div>


      <hr/>
      Footer Aktif Tema:{theme}
      <br/>
      <br/>
      <button onClick={()=>setTheme(theme==="light"?"dark":"light")}>Temayı Değiştir</button>

     
    </div>
  )
}

export default Footer