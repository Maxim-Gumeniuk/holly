import { styled } from 'styled-components';

export const ProgressCircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 300px;
  height: 300px;
`;

export const StyledSvg = styled.svg`
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;

  circle {
    transition: stroke-dashoffset 0.3s;
  }
`;

export const PercentageText = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
`;
