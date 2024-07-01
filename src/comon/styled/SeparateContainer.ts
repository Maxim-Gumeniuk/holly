import styled from 'styled-components';

interface SeparateContainerProps {
  gap?: string;
}

export const SeparateContainer = styled.div<SeparateContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap || '5px'};
  width: 100%;
`;
