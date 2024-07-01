import styled from "styled-components";

export  const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0df;
  border-radius: 50px;
  margin: 20px 0;
  height: 20px;
`;

export const Filler = styled.div<{ width: number }>`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: #76c7c0;
  border-radius: inherit;
  text-align: right;
  transition: width 0.5s ease-in-out;
`;