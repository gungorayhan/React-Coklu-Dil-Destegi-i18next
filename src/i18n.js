import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

// const resources ={
//     tr:{
//         translation:{
//             welcome:"Hoş Geldiniz"
//         }
//     },
//     en:{
//         translation:{
//             welcome:"welcome"
//         }
//     }

// }


i18n
    .use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .init({
        fallbackLng:"tr",
        // backend:{ // yapısı ile backend tarafından json dil destekli dosyalarımızı alıp uygulamamızda kuullanailiriz. şuan datalarımız uygulamamızın içerinmden gelmektedir
        //     loadPath:`http://www.apiadresi.com/api/language/${lng}` 
        // }
        //lng:'tr',
        //resources:resources
    })


    export default i18n