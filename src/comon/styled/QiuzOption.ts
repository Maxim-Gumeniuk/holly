import styled from 'styled-components';

interface IQuizoption {
  textAlign?: string;
  padding?: string;
  checked?: boolean;
}

export const Quizoption = styled.div<IQuizoption>`
  border-radius: 16px;
  padding: ${({ padding }) => padding || '20px 12px;'};
  background-color: ${({ theme }) => theme.colors.secondarybg};
  width: 100%;
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-size: 17px;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
  border: ${({ checked, theme }) => checked && `1px solid ${theme.colors.selectedbg}`}
`;
