import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { RouterProvider } from 'react-router-dom';
import { router } from './router/index.tsx';
import './i18n/config';
import { GlobalStyle } from './comon/styled/GlobalStyles.ts';
import { QuizProvider } from './main-context/Quiz.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './comon/styled/theme/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuizProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QuizProvider>
  </React.StrictMode>
);
