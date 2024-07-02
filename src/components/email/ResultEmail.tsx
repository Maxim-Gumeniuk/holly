import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { EmailInput, PinkText, TermContainer } from './styles';

import { useQuizContext } from '@/main-context/Quiz';
import { validateEmail } from '@/utils/emailValidation';
import { ExtendedFlexBox, FlexBox } from '@/comon/styled/FlexBox';
import { highlight } from '@/comon/components/highlightText';
import { Button } from '@/comon/styled/Button';
import { MainTitle } from '@/comon/styled/MainTitle';
import { Subtitle } from '@/comon/styled/Subtitle';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/navigation';
import { Actions } from '@/main-context/types';

export const ResultEmail = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const { state, dispatch } = useQuizContext();

  return (
    <FlexBox gap="20px" padding="20px 0" flexDirection="column" marginTop="15%">
      <ExtendedFlexBox flexDirection="column">
        <FlexBox flexDirection="column" gap="60px">
          <FlexBox gap="15px" flexDirection="column">
            <MainTitle>{t('email.title')}</MainTitle>

            <Subtitle>{t('email.subtitle')}</Subtitle>
          </FlexBox>
          <FlexBox gap="60px" flexDirection="column">
            <FlexBox gap="10px" flexDirection="column">
              <EmailInput
                ref={inputRef}
                placeholder={t('email.placeholder')}
                value={state.email}
                onChange={(e) => {
                  dispatch({
                    type: Actions.SET_EMAIL,
                    payload: e.target.value,
                  });
                }}
              />
              {!validateEmail(state.email) && inputRef.current && (
                <PinkText>{t('errors.email')}</PinkText>
              )}
            </FlexBox>
            <TermContainer>
              {highlight(
                t('email.terms'),
                t('color-text.red', { returnObjects: true })
              )}
            </TermContainer>
          </FlexBox>
        </FlexBox>
      </ExtendedFlexBox>

      <Button
        disabled={!validateEmail(state.email)}
        onClick={() => {
          navigate(`/${ROUTES.SUCCESS}`);
        }}
      >
        {t('button.next')}
      </Button>
    </FlexBox>
  );
};
