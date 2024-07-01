import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e8eaf2;
  border-radius: 50px;
  height: 10px;
`;

export const Filler = styled.div<{ width: number }>`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: #e4229c;
  border-radius: inherit;
  text-align: right;
  transition: width 0.5s ease-in-out;
`;
