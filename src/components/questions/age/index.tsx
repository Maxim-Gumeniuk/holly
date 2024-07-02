import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useQuizContext } from '@/main-context/Quiz';
import { FlexBox } from '@/comon/styled/FlexBox';
import { Quizoption } from '@/comon/styled/QiuzOption';
import { Actions } from '@/main-context/types';

export const ChooseAge = () => {
  const { state, dispatch } = useQuizContext();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleChooseOption = (age: string) => {
    dispatch({ type: Actions.SET_AGE, payload: age });
    dispatch({ type: Actions.SET_SEQUENCE, payload: state.sequenceNum + 1 });

    navigate(`${state.sequenceNum + 1}`);
  };

  return (
    <FlexBox gap="10px" flexDirection="column">
      {(t('age.variants', { returnObjects: true }) as Array<string>).map(
        (age) => (
          <Quizoption
            checked={state.age === age}
            key={age}
            onClick={() => {
              handleChooseOption(age);
            }}
          >
            {age}
          </Quizoption>
        )
      )}
    </FlexBox>
  );
};
