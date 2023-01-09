import React, { useContext } from 'react'
import LangContext from '../contexts/LangContext';


function ChangeLang() {

    const lang=useContext(LangContext);
  return (
    <div>
    
    Aktif Dil:{lang}

    </div>
  )
}

export default ChangeLang