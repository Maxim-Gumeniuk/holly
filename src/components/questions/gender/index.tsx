import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useQuizContext } from '@/main-context/Quiz';

import { Quizoption } from '@/comon/styled/QiuzOption';
import FemalePicture from '@/public/assets/female.png';
import MalePicture from '@/public/assets/male.png';
import OtherPicture from '@/public/assets/other.png';
import { FlexBox } from '@/comon/styled/FlexBox';

export const ChooseGender = () => {
  const { state, dispatch, sequenceNum, setSequenceNum } = useQuizContext();
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

    dispatch({ type: 'SET_LANGUAGE', payload: choosedLang! });
  }, []);

  const handleChooseOption = (gender: string) => {
    dispatch({ type: 'SET_GENDER', payload: gender });
    setSequenceNum((prev) => prev + 1);
    navigate(`${sequenceNum + 1}`);
  };

  const genderImages = useMemo(() => {
    return {
      0: FemalePicture,
      1: MalePicture,
      2: OtherPicture,
    };
  }, []);

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
            <FlexBox flexDirection="column" gap="10px" alignItem="center">
              <img src={genderImages[index as keyof typeof genderImages]} />
              {variant}
            </FlexBox>
          </Quizoption>
        )
      )}
    </FlexBox>
  );
};
