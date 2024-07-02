import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { FlexBox } from '@/comon/styled/FlexBox';
import { Quizoption } from '@/comon/styled/QiuzOption';

import { useQuizContext } from '@/main-context/Quiz';

export const PrefLanguage = () => {
  const { dispatch, sequenceNum, setSequenceNum } = useQuizContext();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleChooseOption = (language: string, value: string) => {
    dispatch({ type: 'SET_LANGUAGE', payload: language });

    localStorage.setItem('languageKey', value);

    changeLanguage(localStorage.getItem('languageKey')!);
    setSequenceNum((prev) => prev + 1);

    navigate(`${sequenceNum + 1}`);
  };

  return (
    <FlexBox gap="10px" flexDirection="column">
      {(
        t('language.variants', { returnObjects: true }) as Array<{
          language: string;
          value: string;
        }>
      ).map(({ language, value }) => (
        <Quizoption
          key={value}
          onClick={() => {
            handleChooseOption(language, value);
          }}
        >
          {language}
        </Quizoption>
      ))}
    </FlexBox>
  );
};
