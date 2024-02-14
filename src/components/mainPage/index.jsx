import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../global";
import Brightness7OutlinedIcon from "@mui/icons-material/Brightness7Outlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useEffect } from "react";
import style from "./index.module.css";
import heroImg from "../../assets/heroImg.png";
import vector from "../../assets/Vector.svg";
export const lightTheme = {
  body: "#fff",
  text: "black",
  paragraph:" #6B6868",
  borderColor: "black",
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  paragraph:"white",
  borderColor: "white",
};
export default function Main() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <div id="mainPage" className={style.mainPage}>
      <div className={style.container}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <div className={style.header}>
            <nav className={style.nav}>
              <ul className={style.ul} id="buttonNav">
                <li>
                  <a href="#">About Me</a>
                </li>
                <li>
                  <a href="#">Skills</a>
                </li>
                <li>
                  <a href="#">Project</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <select id="navbarSelect" className={style.select}>
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
                Hi <img src={vector} />, I’m Charles,
                Front-end Developer
              </h3>
              <p id="paragraph">
                I design and develop experiences that make people’s lives
                simpler through Web and Mobile apps.I work with FIgma , HTML5,
                CSS3, JavaScript, React, ReactNative and Flutter.
              </p>
              <div id="buttons" className={style.buttons}>
                <button>HIRE ME</button>
                <button>SEE MY PROJECTS</button>
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
