import styled from 'styled-components';

interface FlexContainer {
  gap?: string;
  width?: string;
  padding?: string;
  flexDirection?: string;
  justifyContent?: string;
  height?: string;
  marginTop?: string;
  alignItem?: string;
  cursor?: string;
}

export const FlexBox = styled.div<FlexContainer>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  gap: ${({ gap }) => gap || '0'};
  width: ${({ width }) => width || '100%'};
  padding: ${({ padding }) => padding || '0'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItem }) => alignItem || 'stretch'};
  height: ${({ height }) => height || 'auto'};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0px')};
  cursor: ${({ cursor }) => cursor || 'auto'}
`;

export const ExtendedFlexBox = styled(FlexBox)<FlexContainer>`
  flex: 1 1 auto;
`;

export const OverflowContainer = styled(FlexBox)`
  overflow-y: auto;
`;
