import styled from 'styled-components';

export const CenteredContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  text-align: center;
  flex: 1 1 auto;
  padding: 20px 10px;

  @media (min-width: 968px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;
