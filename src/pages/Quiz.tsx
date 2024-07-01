import { CenteredContainer } from '@/comon/styled/CenteredContainer';
import { QuizWrapper } from '@/components/quiz-wrapper';
import { QuizProvider } from '@/main-context/Quiz';

export const Quiz = () => {
  return (
    <QuizProvider>
      <CenteredContainer>
        <QuizWrapper />
      </CenteredContainer>
    </QuizProvider>
  );
};
