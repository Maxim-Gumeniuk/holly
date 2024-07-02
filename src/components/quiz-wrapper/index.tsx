import { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/navigation';
import { useQuizContext } from '@/main-context/Quiz';
import { MainTitle } from '@/comon/styled/MainTitle';
import { Subtitle } from '@/comon/styled/Subtitle';
import { Button } from '@/comon/styled/Button';
import { ProgressBarLinear } from '@/comon/components/progress-linear';
import { quizComponents, quizTitles } from '@/constants/quiz';
import { BackSvg } from '@/public/assets/svg/back';
import { PinkText } from '../email/styles';
import { ExtendedFlexBox, FlexBox } from '@/comon/styled/FlexBox';
import { highlight } from '@/comon/components/highlightText';

export const QuizWrapper = () => {
  const { quizId } = useParams();

  const navigate = useNavigate();

  const { t } = useTranslation();

  const { state, sequenceNum, setSequenceNum } = useQuizContext();

  const keysOfQuizComponents = useMemo(() => Object.keys(quizComponents), []);

  useEffect(() => {
    if (!keysOfQuizComponents.includes(quizId!)) {
      setSequenceNum(1);
      navigate('1');
    }

    setSequenceNum(+quizId!);

    localStorage.setItem('quizId', String(quizId));
  }, [quizId]);

  const nextQuiz = () => {
    if (sequenceNum === keysOfQuizComponents.length) {
      navigate(`/${ROUTES.EMAIL}`);

      return;
    }

    setSequenceNum((prev) => ++prev);

    navigate(`${sequenceNum + 1}`);
  };

  const prevQuiz = () => {
    if (sequenceNum > 1) {
      setSequenceNum((prev) => --prev);

      navigate(`${sequenceNum - 1}`);

      return;
    }

    return;
  };

  return (
    <FlexBox gap="10px" flexDirection="column">
      <FlexBox>
        {sequenceNum > 1 && (
          <div onClick={prevQuiz}>
            <BackSvg />
          </div>
        )}
        <FlexBox gap="2px">
          <PinkText>{sequenceNum}</PinkText>/
          <div>{keysOfQuizComponents.length}</div>
        </FlexBox>
      </FlexBox>
      <FlexBox gap="50px" flexDirection="column" height="100%">
        <ProgressBarLinear
          step={sequenceNum}
          totalSteps={keysOfQuizComponents.length + 1}
        />
        <ExtendedFlexBox
          flexDirection="column"
          gap="20px"
          justifyContent="flex-start"
        >
          <FlexBox gap="20px" flexDirection="column">
            <FlexBox gap="25px" flexDirection="column">
              <MainTitle>
                {highlight(
                  t(
                    quizTitles[String(sequenceNum) as keyof typeof quizTitles]
                      .title
                  ),
                  t('color-text.red', { returnObjects: true })
                )}
              </MainTitle>
              {quizTitles[String(sequenceNum) as keyof typeof quizTitles]
                .subtitle && (
                <Subtitle>
                  {t(
                    quizTitles[String(sequenceNum) as keyof typeof quizTitles]
                      .subtitle!
                  )}
                </Subtitle>
              )}
            </FlexBox>

            {quizComponents[String(sequenceNum) as keyof typeof quizComponents]}
          </FlexBox>
        </ExtendedFlexBox>
      </FlexBox>
      {sequenceNum > 3 && (
        <Button
          disabled={
            !(sequenceNum === 4
              ? state.hateInBooks.length >= 2
              : state.favoriteTopics.length === 3)
          }
          onClick={() => {
            nextQuiz();
          }}
        >
          {t('button.next')}
        </Button>
      )}
    </FlexBox>
  );
};
