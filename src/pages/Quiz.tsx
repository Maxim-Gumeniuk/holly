import { CenteredContainer } from '@/comon/styled/CenteredContainer';
import { QuizWrapper } from '@/components/quiz-wrapper';
import { QuizProvider } from '@/main-context/Quiz';

export const Quiz = () => {
  // const { t } = useTranslation();

  // const r = t('dashboard.title', { returnObjects: true });

  return (
    <QuizProvider>
      <CenteredContainer>
        <QuizWrapper />
      </CenteredContainer>
    </QuizProvider>
  );
};
