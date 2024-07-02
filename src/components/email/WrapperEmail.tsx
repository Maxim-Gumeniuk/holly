import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { SuccesEmail } from './SuccessEmail';
import { ResultEmail } from './ResultEmail';

import { MainTitle } from '@/comon/styled/MainTitle';
import { Subtitle } from '@/comon/styled/Subtitle';
import { Button } from '@/comon/styled/Button';

import { useQuizContext } from '@/main-context/Quiz';
import { ROUTES } from '@/navigation';
import { validateEmail } from '@/utils/emailValidation';
import { ExtendedFlexBox, FlexBox } from '@/comon/styled/FlexBox';

export const WrapperEmail = () => {
  const [succes, setSucces] = useState(
    localStorage.getItem('succes')
      ? JSON.parse(localStorage.getItem('succes')!)
      : false
  );

  const { state, setSequenceNum, dispatch } = useQuizContext();

  const navigate = useNavigate();

  const retakeQuiz = () => {
    localStorage.clear();

    dispatch({ type: 'CLEAR_ALL', payload: null });

    setSequenceNum(1);

    navigate(`/${ROUTES.QUIZ}/1`);
  };

  const filledEmail = () => {
    setSucces(true);

    localStorage.setItem('succes', JSON.stringify(true));
  };

  const { t } = useTranslation();

  return (
    <FlexBox gap="20px" padding="20px 0" flexDirection="column" marginTop="15%">
      <ExtendedFlexBox flexDirection="column">
        <FlexBox flexDirection="column" gap="60px">
          <FlexBox gap="15px" flexDirection="column">
            <MainTitle>
              {succes ? t('quize-succes.title') : t('email.title')}
            </MainTitle>

            <Subtitle>
              {succes ? t('quize-succes.subtitle') : t('email.subtitle')}
            </Subtitle>
          </FlexBox>
          {succes ? <SuccesEmail /> : <ResultEmail />}
        </FlexBox>
      </ExtendedFlexBox>

      <Button
        disabled={!validateEmail(state.email)}
        onClick={() => {
          return succes ? retakeQuiz() : filledEmail();
        }}
      >
        {succes ? t('quize-succes.button') : t('button.next')}
      </Button>
    </FlexBox>
  );
};
