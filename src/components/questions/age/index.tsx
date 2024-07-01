import { Quizoption } from '@/comon/styled/QiuzOption';
import { SeparateContainer } from '@/comon/styled/SeparateContainer';
import { useQuizContext } from '@/main-context/Quiz';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const ChooseAge = () => {
  const { dispatch, sequenceNum, setSequenceNum } = useQuizContext();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleChooseOption = (age: string) => {
    dispatch({ type: 'SET_AGE', payload: age });
    setSequenceNum((prev) => prev + 1);
    navigate(`${sequenceNum + 1}`);
  };

  return (
    <SeparateContainer gap="10px">
      {(t('age.variants', { returnObjects: true }) as Array<string>).map(
        (age) => (
          <Quizoption
            key={age}
            onClick={() => {
              handleChooseOption(age);
            }}
          >
            {age}
          </Quizoption>
        )
      )}
    </SeparateContainer>
  );
};
