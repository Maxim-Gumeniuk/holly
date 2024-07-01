import { Fragment, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { EmailInput, RedText } from './styles';
import { SeparateContainer } from '@/comon/styled/SeparateContainer';
import { useQuizContext } from '@/main-context/Quiz';
import { validateEmail } from '@/utils/emailValidation';

export const ResultEmail = () => {
  const { t } = useTranslation();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const { state, dispatch } = useQuizContext();

  const highlightTerms = (text: string, terms: string[]): React.ReactNode => {
    const regex = new RegExp(`(${terms.join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (terms.includes(part)) {
        return <RedText key={index}>{part}</RedText>;
      }
      return <Fragment key={index}>{part}</Fragment>;
    });
  };

  return (
    <SeparateContainer gap="30px">
      <EmailInput
        ref={inputRef}
        placeholder={t('email.placeholder')}
        value={state.email}
        onChange={(e) => {
          dispatch({ type: 'SET_EMAIL', payload: e.target.value });
        }}
      />
      {!validateEmail(state.email) && inputRef.current && (
        <RedText>{t('errors.emaild')}</RedText>
      )}

      <div>
        {highlightTerms(t('email.terms'), ['Privacy policy', 'Terms of use'])}
      </div>
    </SeparateContainer>
  );
};
