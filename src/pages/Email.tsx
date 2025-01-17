import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { CenteredContainer } from '@/comon/styled/CenteredContainer';

import { ProgressCircle } from '@/comon/components/progress';
import { useQuizContext } from '@/main-context/Quiz';
import { FlexBox } from '@/comon/styled/FlexBox';
import { ResultEmail } from '@/components/email/ResultEmail';

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
        <ResultEmail />
      )}
    </CenteredContainer>
  );
};
