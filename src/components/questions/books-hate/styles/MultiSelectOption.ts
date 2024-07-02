import styled from 'styled-components';

interface IMultiSelectOption {
  checked?: boolean;
}

export const MultiSelectOption = styled.div<IMultiSelectOption>`
  border-radius: 16px;
  padding: 30px;
  height: 80px;
  background-color: ${({ checked }) =>
    checked ? 'rgba(228, 34, 155, 0.2)' : '#36173d'};
  border: ${({ checked }) => checked && '1px solid #E4229B'};
  width: 100%;
  color: #fff;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;

  &:checked {
    background-color: #e4229b;
  }
  &:hover {
    /* background-color: lightgrey; */
  }
`;
