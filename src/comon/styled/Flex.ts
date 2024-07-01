import styled from 'styled-components';

interface Flex {
  gap?: string;
  justifyItems?: string;
  flexDirection?: string;
}

export const FlexContainer = styled.div<Flex>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-items: ${({ justifyItems }) => justifyItems || 'center'};
  align-items: center;
  text-align: center;
  gap: ${({ gap }) => gap || '5px'};
`;
