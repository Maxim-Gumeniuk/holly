import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { FlexBox } from '@/comon/styled/FlexBox';
import { Quizoption } from '@/comon/styled/QiuzOption';

import { useQuizContext } from '@/main-context/Quiz';
import { Actions } from '@/main-context/types';

export const PrefLanguage = () => {
  const { state, dispatch } = useQuizContext();

  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleChooseOption = async (value: string) => {
    await changeLanguage(value || localStorage.getItem('languageKey')!);

    localStorage.setItem('languageKey', value);

    dispatch({ type: Actions.SET_SEQUENCE, payload: state.sequenceNum + 1 });

    navigate(`${state.sequenceNum + 1}`);
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
