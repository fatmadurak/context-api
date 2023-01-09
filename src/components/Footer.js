
import {useTheme} from '../contexts/ThemeContext'
import {useLang} from '../contexts/LangContext';


function Footer() {

    const{theme,toogleTheme}=useTheme();
    const{lang}=useLang();

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