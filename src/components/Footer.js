import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
function Footer() {

    const{theme,toogleTheme}=useContext(ThemeContext);

  return (
    <div>


      <hr/>
      Footer Aktif Tema:{theme}
      <br/>
      <br/>
      <button onClick={toogleTheme}>Temayı Değiştir</button>

     
    </div>
  )
}

export default Footer