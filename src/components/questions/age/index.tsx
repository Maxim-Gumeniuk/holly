import { Quizoption } from '@/comon/styled/QiuzOption';
import { SeparateContainer } from '@/comon/styled/SeparateContainer';
import { useQuizContext } from '@/main-context/Quiz';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const ChooseAge = () => {
  const { state, dispatch, sequenceNum, setSequenceNum } = useQuizContext();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.age) {
      setSequenceNum((prev) => prev + 1);
      navigate(`${sequenceNum + 1}`);

      return;
    }

    return;
  }, [state]);

  return (
    <SeparateContainer gap="10px">
      {(t('age.variants', { returnObjects: true }) as Array<string>).map(
        (age) => (
          <Quizoption
            key={age}
            onClick={() => {
              dispatch({ type: 'SET_AGE', payload: age });
            }}
          >
            {age}
          </Quizoption>
        )
      )}
    </SeparateContainer>
  );
};
