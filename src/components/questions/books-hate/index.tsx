import { CheckBox } from './styles/Checkbox';
import { MultiSelectOption } from './styles/MultiSelectOption';
import { useTranslation } from 'react-i18next';
import { useQuizContext } from '@/main-context/Quiz';

export const HateInBook = () => {
  const { dispatch } = useQuizContext();

  const { t } = useTranslation();

  return (
    <>
      {(t('books.variants', { returnObjects: true }) as Array<string>).map(
        (hateInBook) => (
          <MultiSelectOption
            key={hateInBook}
            onClick={() => {
              dispatch({ type: 'SET_HATE_IN_BOOKS', payload: hateInBook });
            }}
          >
            <div>{hateInBook}</div>
            <CheckBox />
          </MultiSelectOption>
        )
      )}
    </>
  );
};
