import styled from 'styled-components';

interface ICenteredContainer {
  jusstifyConten?: string;
  flexDirection?: string;
}

export const CenteredContainer = styled.div<ICenteredContainer>`
  width: 100%;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  /* align-items: center; */
  justify-content: ${({ jusstifyConten }) => jusstifyConten || 'flex-start'};
  text-align: center;
  padding: 20px 10px;
  flex: 1 1 auto;
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 968px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;
