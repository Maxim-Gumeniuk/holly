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
    font-family: ${({ theme }) => theme.fonts.body};
    height: 100%;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text}
  }

#root{
    display: flex;
    flex-direction: column;
    height: 100%;
}`;
