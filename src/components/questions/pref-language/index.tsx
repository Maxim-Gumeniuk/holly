import { Quizoption } from '@/comon/styled/QiuzOption';
import { SeparateContainer } from '@/comon/styled/SeparateContainer';
import { useQuizContext } from '@/main-context/Quiz';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const PrefLanguage = () => {
  const { dispatch, sequenceNum, setSequenceNum } = useQuizContext();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleChooseOption = (language: string) => {
    dispatch({ type: 'SET_LANGUAGE', payload: language });
    setSequenceNum((prev) => prev + 1);
    navigate(`${sequenceNum + 1}`);
  };

  return (
    <SeparateContainer gap="10px">
      {(t('language.variants', { returnObjects: true }) as Array<string>).map(
        (language) => (
          <Quizoption
            key={language}
            onClick={() => {
              handleChooseOption(language);
            }}
          >
            {language}
          </Quizoption>
        )
      )}
    </SeparateContainer>
  );
};
