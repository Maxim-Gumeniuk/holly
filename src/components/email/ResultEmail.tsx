import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { EmailInput, PinkText, TermContainer } from './styles';

import { useQuizContext } from '@/main-context/Quiz';
import { validateEmail } from '@/utils/emailValidation';
import { FlexBox } from '@/comon/styled/FlexBox';
import { highlight } from '@/comon/components/highlightText';

export const ResultEmail = () => {
  const { t } = useTranslation();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const { state, dispatch } = useQuizContext();

  return (
    <FlexBox gap="60px" flexDirection="column">
      <FlexBox gap="10px" flexDirection="column">
        <EmailInput
          ref={inputRef}
          placeholder={t('email.placeholder')}
          value={state.email}
          onChange={(e) => {
            dispatch({ type: 'SET_EMAIL', payload: e.target.value });
          }}
        />
        {!validateEmail(state.email) && inputRef.current && (
          <PinkText>{t('errors.email')}</PinkText>
        )}
      </FlexBox>
      <TermContainer>
        {highlight(t('email.terms'), ['Privacy policy', 'Terms of use'])}
      </TermContainer>
    </FlexBox>
  );
};
