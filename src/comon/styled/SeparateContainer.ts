import styled from 'styled-components';

interface SeparateContainerProps {
  gap?: string;
  width?: string;
  padding?: string;
}

export const SeparateContainer = styled.div<SeparateContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap || '5px'};
  width: ${({ width }) => width || '100%'};
  padding: ${({ padding }) => padding || '0'};
`;
