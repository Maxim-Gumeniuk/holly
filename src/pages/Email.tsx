import { CenteredContainer } from '@/comon/styled/CenteredContainer';
import { FlexContainer } from '@/comon/styled/Flex';
import { WrapperEmail } from '@/components/email/WrappeEmail';
import { ProgressCircle } from '@/components/progress';
import { useState } from 'react';

export const EmailPage = () => {
  const [progress, setProgress] = useState(0);
  return (
    <CenteredContainer style={{ color: '#fff' }}>
      {progress !== 100 ? (
        <FlexContainer flexDirection="column" gap="20px">
          <ProgressCircle progress={progress} setProgress={setProgress} />
          Finding collections for <br /> you..
        </FlexContainer>
      ) : (
        <WrapperEmail />
      )}
    </CenteredContainer>
  );
};
