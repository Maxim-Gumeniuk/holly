import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { maxSteps, quizComponents, quizTitles } from '@/constants/quiz';
import { ROUTES } from '@/navigation';
import { useQuizContext } from '@/main-context/Quiz';
import { MainTitle } from '@/comon/styled/MainTitle';
import { useTranslation } from 'react-i18next';
import { Subtitle } from '@/comon/styled/Subtitle';
import { SeparateContainer } from '@/comon/styled/SeparateContainer';
import { Button } from '@/comon/styled/Button';

export const QuizWrapper = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const { state, sequenceNum, setSequenceNum } = useQuizContext();

  useEffect(() => {
    if (!Object.keys(quizComponents).includes(quizId!)) {
      setSequenceNum(1);
      navigate('1');
    }
  }, [quizId]);

  const nextQuiz = () => {
    if (sequenceNum === maxSteps) {
      navigate(`/${ROUTES.EMAIL}`);

      return;
    }

    setSequenceNum((prev) => ++prev);

    navigate(`${sequenceNum + 1}`);
  };

  return (
    <SeparateContainer
      gap="20px"
      padding="20px 0"
      style={{ minHeight: '100%' }}
    >
      <SeparateContainer gap="20px" style={{ flex: '1 1 auto' }}>
        <SeparateContainer gap="15px">
          <MainTitle>
            {t(
              quizTitles[String(sequenceNum) as keyof typeof quizTitles].title
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
        </SeparateContainer>

        {quizComponents[String(sequenceNum) as keyof typeof quizComponents]}
      </SeparateContainer>

      {sequenceNum > 3 && (
        <Button
          disabled={
            !(sequenceNum === 4
              ? state.hateInBooks.length
              : state.favoriteTopics.length === 3)
          }
          onClick={() => {
            nextQuiz();
          }}
        >
          Next
        </Button>
      )}
    </SeparateContainer>
  );
};
