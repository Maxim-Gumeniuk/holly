import styled from 'styled-components';

export const MultiSelectOption = styled.div`
  border-radius: 16px;
  padding: 30px;
  height: 80px;
  background-color: #36173d;
  width: 100%;
  color: #fff;
  font-size: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  &:checked {
    background-color: teal;
  }
  &:hover {
    background-color: lightgray;
  }
`;
