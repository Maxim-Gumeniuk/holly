import { FC } from 'react';
import { Filler, ProgressBarContainer } from './styles';

interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

export const ProgressBarLinear: FC<ProgressBarProps> = ({
  step,
  totalSteps,
}) => {
  const percentage = Math.min((step / totalSteps) * 100, 100);

  return (
    <ProgressBarContainer>
      <Filler width={percentage} />
    </ProgressBarContainer>
  );
};
