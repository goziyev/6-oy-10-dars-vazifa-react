
import "./App.css";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import Brightness7OutlinedIcon from "@mui/icons-material/Brightness7Outlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useEffect } from "react";
import Main from "./components/mainPage";

function App() {
  return <Main />;
}

export default App;
