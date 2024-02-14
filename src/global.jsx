// global.js

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  #mainPage {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  #buttonNav li a:hover{
      border-color: ${({ theme }) => theme.borderColor};
     color: ${({ theme }) => theme.text};
  }
  #buttonNav li a{
     color: ${({ theme }) => theme.text};
  }
  #buttonMain{
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    box-shadow:0px 0px 9px ${({ theme }) =>theme.text};
  }
  #navbarSelect{
      border-color:${({ theme }) => theme.text}
      
  }
  #navbarSelect,#navbarSelect option{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  #paragraph{
    color: ${({ theme }) => theme.paragraph};
  }
  #buttons button{
    background: ${({ theme }) => theme.body};
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    border-color:${({ theme }) => theme.text}
  }
  
  #buttons button:hover{
    background: ${({ theme }) => theme.text};
    cursor: pointer;
    color: ${({ theme }) => theme.body};
    border-color:${({ theme }) => theme.text}
  }
`;
