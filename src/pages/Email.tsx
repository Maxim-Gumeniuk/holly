import { CenteredContainer } from '@/comon/styled/CenteredContainer';
import { FlexContainer } from '@/comon/styled/Flex';
import { WrapperEmail } from '@/components/email/WrapperEmail';
import { ProgressCircle } from '@/comon/components/progress';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const EmailPage = () => {
  const [progress, setProgress] = useState(0);

  const { t } = useTranslation();
  return (
    <CenteredContainer style={{ color: '#fff' }}>
      {progress !== 100 ? (
        <FlexContainer flexDirection="column" gap="20px">
          <ProgressCircle progress={progress} setProgress={setProgress} />
          {t('progress.title')}
        </FlexContainer>
      ) : (
        <WrapperEmail />
      )}
    </CenteredContainer>
  );
};
