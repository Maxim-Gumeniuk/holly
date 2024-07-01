import styled from 'styled-components';

interface FlexContainer {
  gap?: string;
  width?: string;
  padding?: string;
  flexDirection?: string;
  justifyContent?: string;
  height?: string;
}

export const FlexBox = styled.div<FlexContainer>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  gap: ${({ gap }) => gap || '0'};
  width: ${({ width }) => width || '100%'};
  padding: ${({ padding }) => padding || '0'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  height: ${({ height }) => height || 'auto'};
`;

export const ExtendedFlexBox = styled(FlexBox)<FlexContainer>`
  flex: 1 1 auto;
`;
