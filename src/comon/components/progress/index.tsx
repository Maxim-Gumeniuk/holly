import { useEffect, Dispatch, SetStateAction, FC } from 'react';
import { ProgressCircleContainer, StyledSvg, PercentageText } from './styles';

type Props = {
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
};

export const ProgressCircle: FC<Props> = ({ progress, setProgress }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const radius = 140;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <ProgressCircleContainer>
      <StyledSvg>
        <circle
          cx="150"
          cy="150"
          r={radius}
          stroke="#e0e0e0"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="150"
          cy="150"
          r={radius}
          stroke="#6D4376"
          strokeWidth="10" /* Adjust strokeWidth as needed */
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </StyledSvg>
      <PercentageText>{progress}%</PercentageText>
    </ProgressCircleContainer>
  );
};
