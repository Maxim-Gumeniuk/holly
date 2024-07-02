import { Button } from '@/comon/styled/Button';
import { CenteredContainer } from '@/comon/styled/CenteredContainer';
import { ExtendedFlexBox, FlexBox } from '@/comon/styled/FlexBox';
import { MainTitle } from '@/comon/styled/MainTitle';
import { Subtitle } from '@/comon/styled/Subtitle';
import { useQuizContext } from '@/main-context/Quiz';
import { Actions } from '@/main-context/types';
import { ROUTES } from '@/navigation';
import { DownLoadSvg } from '@/public/assets/svg/download';
import { SuccesSvg } from '@/public/assets/svg/succes';
import { downloadCSV } from '@/utils/csv';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const Succes = () => {
  const { state, dispatch } = useQuizContext();

  const navigate = useNavigate();

  const retakeQuiz = () => {
    localStorage.clear();

    dispatch({ type: Actions.CLEAR_ALL, payload: null });

    dispatch({ type: Actions.SET_SEQUENCE, payload: 1 });

    navigate(`/${ROUTES.QUIZ}/1`);
  };

  const userAnswers = useMemo(() => {
    return [
      {
        order: 1,
        title: 'What is prefferred language?',
        type: 'single-select',
        answer: `${state.language}`,
      },
      {
        order: 2,
        title: 'Waht gender do you identify with?',
        type: 'single-select-imagw',
        answer: `${state.gender}`,
      },
      {
        order: 3,
        title: 'What is your age?',
        type: 'single-select',
        answer: `${state.age}`,
      },
      {
        order: 4,
        title: 'What do you hate the most in a book',
        type: 'multiple-select',
        answer: `${state.hateInBooks.join(',')}`,
      },
      {
        order: 5,
        title: 'What are you favorite topics',
        type: 'bubble',
        answer: `${state.favoriteTopics.join(',')}`,
      },
      { order: 6, title: 'email', type: 'email', answer: `${state.email}` },
    ];
  }, []);

  const { t } = useTranslation();

  return (
    <CenteredContainer flexDirection="row">
      <FlexBox
        gap="20px"
        padding="20px 0"
        flexDirection="column"
        marginTop="15%"
      >
        <ExtendedFlexBox flexDirection="column">
          <FlexBox flexDirection="column" gap="60px">
            <FlexBox gap="15px" flexDirection="column">
              <MainTitle>{t('quize-succes.title')}</MainTitle>

              <Subtitle>{'quize-succes.subtitle'}</Subtitle>
            </FlexBox>

            <div>
              <SuccesSvg />
            </div>

            <FlexBox
              cursor="pointer"
              justifyContent="center"
              gap="5px"
              alignItem="center"
              onClick={() => {
                downloadCSV(userAnswers);
              }}
            >
              <DownLoadSvg />

              <div>{t('download-answers.title')}</div>
            </FlexBox>
          </FlexBox>
        </ExtendedFlexBox>

        <Button
          onClick={() => {
            retakeQuiz();
          }}
        >
          {t('quize-succes.button')}
        </Button>
      </FlexBox>
    </CenteredContainer>
  );
};
