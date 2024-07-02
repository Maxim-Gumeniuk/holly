import styled from 'styled-components';

export const EmailInput = styled.input`
  background-color: ${({ theme }) => theme.colors.secondarybg};
  border-radius: 16px;
  width: 100%;
  padding: 20px 10px;
  border-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 17px;
`;

export const PinkText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const TermContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  line-height: 24px;
`;
