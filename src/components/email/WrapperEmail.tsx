import { useState } from 'react';
import { SuccesEmail } from './SuccessEmail';
import { ResultEmail } from './ResultEmail';

import { useTranslation } from 'react-i18next';
import { MainTitle } from '@/comon/styled/MainTitle';
import { Subtitle } from '@/comon/styled/Subtitle';
import { Button } from '@/comon/styled/Button';
import { useNavigate } from 'react-router-dom';

import { useQuizContext } from '@/main-context/Quiz';
import { ROUTES } from '@/navigation';
import { validateEmail } from '@/utils/emailValidation';
import { ExtendedFlexBox, FlexBox } from '@/comon/styled/FlexBox';

export const WrapperEmail = () => {
  const [succes, setSucces] = useState(false);
  const [isDisabled, setDisabled] = useState(true);

  const { state, setSequenceNum, dispatch } = useQuizContext();

  const checkEmail = validateEmail;

  const navigate = useNavigate();
  ////rename

  const retakeQuizFunc = () => {
    localStorage.clear();

    dispatch({ type: 'CLEAR_ALL', payload: null });

    setSequenceNum(1);

    navigate(`/${ROUTES.QUIZ}/_`);
  };

  const { t } = useTranslation();
  return (
    <FlexBox gap="20px" padding="20px 0">
      <ExtendedFlexBox>
        <FlexBox>
          <FlexBox gap="15px">
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
          return succes ? retakeQuizFunc() : setSucces(true);
        }}
      >
        {succes ? t('quize-succes.button') : t('button.next')}
      </Button>
    </FlexBox>
  );
};
