import styled from 'styled-components';

interface Button {
  disabled?: boolean;
}

export const Button = styled.div<Button>`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  font-size: 17px;
  border-radius: 40px;
  cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;
