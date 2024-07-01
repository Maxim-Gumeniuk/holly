import { Quizoption } from '@/comon/styled/QiuzOption';
import { SeparateContainer } from '@/comon/styled/SeparateContainer';
import { changeLanguage } from '@/i18n/utils/changeLanguage';
import { useQuizContext } from '@/main-context/Quiz';
import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const PrefLanguage = () => {
  const { state, dispatch, sequenceNum, setSequenceNum } = useQuizContext();
  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    if (state.language) {
      changeLanguage(state.language);

      setSequenceNum((prev) => prev + 1);
      navigate(`${sequenceNum + 1}`);

      return;
    }

    return;
  }, [state]);

  return (
    <SeparateContainer gap="10px">
      {(t('language.variants', { returnObjects: true }) as Array<string>).map(
        (language) => (
          <Quizoption
            key={language}
            onClick={() => {
              dispatch({ type: 'SET_LANGUAGE', payload: language });
            }}
          >
            {language}
          </Quizoption>
        )
      )}
    </SeparateContainer>
  );
};
