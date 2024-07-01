import { useEffect, useMemo } from 'react';

import { FlexContainer } from '@/comon/styled/Flex';
import { Quizoption } from '@/comon/styled/QiuzOption';
import { useTranslation } from 'react-i18next';
import FemalePicture from '@/assets/female.png';
import MalePicture from '@/assets/male.png';
import OtherPicture from '@/assets/other.png';
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from '@/main-context/Quiz';

export const ChooseGender = () => {
  const { dispatch, sequenceNum, setSequenceNum } = useQuizContext();
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    <div style={{ marginTop: '20px' }}>
      <FlexContainer gap="10px">
        {(t('gender.variants', { returnObjects: true }) as Array<string>).map(
          (variant, index) => (
            <Quizoption
              key={variant}
              textAlign="center"
              onClick={() => {
                handleChooseOption(variant);
              }}
            >
              <FlexContainer flexDirection="column">
                <img src={genderImages[index as keyof typeof genderImages]} />
                {variant}
              </FlexContainer>
            </Quizoption>
          )
        )}
      </FlexContainer>
    </div>
  );
};
