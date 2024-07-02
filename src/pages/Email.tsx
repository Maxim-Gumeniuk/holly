import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CenteredContainer } from '@/comon/styled/CenteredContainer';
import { WrapperEmail } from '@/components/email/WrapperEmail';
import { ProgressCircle } from '@/comon/components/progress';
import { useQuizContext } from '@/main-context/Quiz';
import { FlexBox } from '@/comon/styled/FlexBox';

export const EmailPage = () => {
  const [progress, setProgress] = useState(0);

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
