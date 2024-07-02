import styled from 'styled-components';

interface IMultiSelectOption {
  checked?: boolean;
}

export const MultiSelectOption = styled.div<IMultiSelectOption>`
  border-radius: 16px;
  padding: 30px;
  height: 80px;
  background-color: ${({ checked, theme }) =>
    checked ? 'rgba(228, 34, 155, 0.2)' : `${theme.colors.secondarybg}`};
  border: ${({ checked, theme }) =>
    checked && `1px solid ${theme.colors.secondary}`};
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.selectedbg};
  }
`;
