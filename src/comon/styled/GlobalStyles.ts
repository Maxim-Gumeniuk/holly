import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap');  

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
  }

#root{
    display: flex;
    flex-direction: column;
    height: 100%;
}`;
