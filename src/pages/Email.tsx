import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { CenteredContainer } from '@/comon/styled/CenteredContainer';
import { WrapperEmail } from '@/components/email/WrapperEmail';
import { ProgressCircle } from '@/comon/components/progress';
import { useQuizContext } from '@/main-context/Quiz';
import { FlexBox } from '@/comon/styled/FlexBox';
import { useParams } from 'react-router-dom';

export const EmailPage = () => {
  const { quizId } = useParams();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    localStorage.setItem('quizId', String(quizId));
  }, []);

  const { state } = useQuizContext();

  const { t } = useTranslation();
  return (
    <CenteredContainer flexDirection="row">
      {progress !== 100 && !state.email ? (
        <CenteredContainer jusstifyConten="center">
          <FlexBox alignItem="center" flexDirection="column" gap="20px">
            <ProgressCircle progress={progress} setProgress={setProgress} />
            {t('progress.title')}
          </FlexBox>
        </CenteredContainer>
      ) : (
        <WrapperEmail />
      )}
    </CenteredContainer>
  );
};
