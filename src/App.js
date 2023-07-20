import React from "react";

import {useTranslation} from  "react-i18next" 
//import {withTranslation} from "react-i18next" useTranslation kullanmadığımızda
import { sayHello } from "./utils";

function App() {
  //function App({t,i18n}) 

  const {t,i18n} = useTranslation()

  const clickHandle= async lang =>{
   await i18n.changeLanguage(lang)
  }
  return (
    <div className="App">
    aktif dil:{i18n.language}<br/>
    <nav>
      <button onClick={()=>clickHandle("tr")}>Turkce</button>
      <button onClick={()=>clickHandle("en")}>English</button>
      <button onClick={()=>sayHello()}>SayHello()- i18n.t()</button>
    </nav>
    <h1>{t('welcome',{user:'Ayhan'})}</h1>
    </div>
  );
}

export default App;
//export withTranslation()(App)