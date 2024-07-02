import { useTranslation } from 'react-i18next';
import { useQuizContext } from '@/main-context/Quiz';
import { CheckBox } from './styles/Checkbox';
import { MultiSelectOption } from './styles/MultiSelectOption';

export const HateInBook = () => {
  const { dispatch, state } = useQuizContext();

  const { t } = useTranslation();

  return (
    <>
      {(t('books.variants', { returnObjects: true }) as Array<string>).map(
        (hateInBook) => (
          <MultiSelectOption
            checked={!!state.hateInBooks.includes(hateInBook)}
            key={hateInBook}
            onClick={() => {
              dispatch({ type: 'SET_HATE_IN_BOOKS', payload: hateInBook });
            }}
          >
            <div>{hateInBook}</div>
            <CheckBox checked={!!state.hateInBooks.includes(hateInBook)} />
          </MultiSelectOption>
        )
      )}
    </>
  );
};
