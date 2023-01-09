import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'

import LangContext from '../contexts/LangContext';

function Footer() {

    const{theme,toogleTheme}=useContext(ThemeContext);
    const{lang}=useContext(LangContext);

  return (
    <div>


      <hr/>
      Footer Aktif Tema:{theme}
      <br/>
      <br/>
       <div>
       Aktif Dil:{lang}
       </div>

      <button onClick={toogleTheme}>Temayı Değiştir</button>

     
    </div>
  )
}

export default Footer