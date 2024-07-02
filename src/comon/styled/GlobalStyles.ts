import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    height: 100%;
  }
  
  body {
    font-family: 'Nunito Sans', sans-serif;  
    height: 100%;
    overflow: hidden;
    background-color: #1f002b;
    color: #fff;
  }

#root{
    display: flex;
    flex-direction: column;
    height: 100%;
}`;
