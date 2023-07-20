import i18n from "./i18n"

export const sayHello=()=>{
    i18n.changeLanguage("en")
    console.log(i18n.t("welcome"))
}