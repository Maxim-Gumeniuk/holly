import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap');  

  ${reset}

  * {
    box-sizing: border-box;
    overflow: hidden;
  }
  
  html {
    height: 100%;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;  
    height: 100%;
  }

#root{
    display: flex;
    flex-direction: column;
    height: 100%;
}`;
