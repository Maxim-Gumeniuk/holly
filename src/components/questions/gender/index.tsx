import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useQuizContext } from '@/main-context/Quiz';

import { Quizoption } from '@/comon/styled/QiuzOption';

import { FlexBox } from '@/comon/styled/FlexBox';
import { genderImages } from '@/constants/quiz';
import { Actions } from '@/main-context/types';

export const ChooseGender = () => {
  const { state, dispatch } = useQuizContext();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const choosedLang = (
      t('language.variants', {
        returnObjects: true,
      }) as Array<{
        language: string;
        value: string;
      }>
    ).find(
      ({ value }) => localStorage.getItem('languageKey') === value
    )?.language;

    dispatch({ type: Actions.SET_LANGUAGE, payload: choosedLang! });
  }, []);

  const handleChooseOption = (gender: string) => {
    dispatch({ type: Actions.SET_GENDER, payload: gender });
    dispatch({ type: Actions.SET_SEQUENCE, payload: state.sequenceNum + 1 });

    navigate(`${state.sequenceNum + 1}`);
  };

  return (
    <FlexBox gap="10px">
      {(t('gender.variants', { returnObjects: true }) as Array<string>).map(
        (variant, index) => (
          <Quizoption
            checked={state.gender === variant}
            key={variant}
            textAlign="center"
            onClick={() => {
              handleChooseOption(variant);
            }}
          >
            <FlexBox
              flexDirection="column"
              gap="10px"
              alignItem="center"
              cursor="pointer"
            >
              <img src={genderImages[index as keyof typeof genderImages]} />
              {variant}
            </FlexBox>
          </Quizoption>
        )
      )}
    </FlexBox>
  );
};
