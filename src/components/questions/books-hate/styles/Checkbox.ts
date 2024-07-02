import styled from 'styled-components';
import checkSvg from '@/assets/svg/check.svg';

interface ICheckBox {
  checked?: boolean;
}

export const CheckBox = styled.div<ICheckBox>`
  width: 23px;
  height: 23px;
  cursor: pointer;
  border: 2px solid #e4229b;
  border-radius: 8px;
  background-color: ${({ checked }) => (checked ? '#e4229b' : '#6d4376')};
  background-image: ${({ checked }) => checked && `url(${checkSvg})`};
  background-repeat: no-repeat;
  background-position: center;
`;
