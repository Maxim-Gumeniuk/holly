import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { FlexBox } from '@/comon/styled/FlexBox';
import { Quizoption } from '@/comon/styled/QiuzOption';

import { useQuizContext } from '@/main-context/Quiz';

export const PrefLanguage = () => {
  const { state, sequenceNum, setSequenceNum } = useQuizContext();

  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleChooseOption = async (value: string) => {
    await changeLanguage(value || localStorage.getItem('languageKey')!);

    localStorage.setItem('languageKey', value);

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
          checked={state.language === language}
          key={value}
          onClick={() => {
            handleChooseOption(value);
          }}
        >
          {language}
        </Quizoption>
      ))}
    </FlexBox>
  );
};
