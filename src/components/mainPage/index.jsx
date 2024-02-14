import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global";
import Brightness7OutlinedIcon from "@mui/icons-material/Brightness7Outlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useEffect } from "react";
import style from "./index.module.css";
import heroImg from "../../assets/heroImg.png";
import { useTranslation } from "react-i18next";

export const lightTheme = {
  body: "#fff",
  text: "black",
  paragraph: " #6B6868",
  borderColor: "black",
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  paragraph: "white",
  borderColor: "white",
};
export default function Main() {
  const [lang,setLang] = useState()
const {t,i18n}   = useTranslation();


  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
    if (localStorage.getItem('lang')) {
      setLang(localStorage.getItem('lang'))
      i18n.changeLanguage(localStorage.getItem('lang'))
    }
  }, []);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };


  function handleChangeLang(e){
    setLang(e.target.value)
    i18n.changeLanguage(e.target.value)
    localStorage.setItem('lang',e.target.value)
  }

  return (
    <div id="mainPage" className={style.mainPage}>
      <div className={style.container}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <div className={style.header}>
            <nav className={style.nav}>
              <ul className={style.ul} id="buttonNav">
                <li>
                  <a href="#">{t("about")}</a>
                </li>
                <li>
                  <a href="#">{t("skills")}</a>
                </li>
                <li>
                  <a href="#">{t("project")}</a>
                </li>
                <li>
                  <a href="#">{t("contact")}</a>
                </li>
                <li>
                  <select onChange={handleChangeLang} id="navbarSelect" className={style.select} value={lang}>
                    <option value="uz">Uz</option>
                    <option value="ru">Ru</option>
                    <option value="en">En</option>
                  </select>
                </li>
                <li>
                  <button
                    id="buttonMain"
                    onClick={toggleTheme}
                    className={style.button}
                  >
                    {theme == "light" ? "Dark" : "Light"}
                    {theme == "light" ? (
                      <DarkModeOutlinedIcon />
                    ) : (
                      <Brightness7OutlinedIcon />
                    )}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className={style.heroWrapper}>
            <div className={style.heroTexts}>
              <h3>
              {t("hero-texts")}
              </h3>
              <p id="paragraph">
              {t("hero-desc")}
              </p>
              <div id="buttons" className={style.buttons}>
                <button>{t("hero-button")}</button>
                <button>{t("hero-button-two")}</button>
              </div>
            </div>
            <div className={style.heroImg}>
              <img src={heroImg} alt="Developer's Image" />
            </div>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}
