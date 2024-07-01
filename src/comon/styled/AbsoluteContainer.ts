import styled from 'styled-components';

interface IAbsoluteContainer {
  top?: string;
  width?: string;
}

export const AbsoluteContainer = styled.div<IAbsoluteContainer>`
  position: absolute;
  top: ${({ top }) => top || '0px'};
  right: 50%;
  transform: translateX(50%);
  width: ${({ width }) => width || '100%'};

  @media (min-width: 968px) {
    max-width: 580px;
  }
`;
