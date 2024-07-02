import { changeLanguage } from 'i18next';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    changeLanguage(localStorage.getItem('languageKey')!);
  }, []);

  return <></>;
}

export default App;
