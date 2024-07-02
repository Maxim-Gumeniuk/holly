import styled from 'styled-components';
import checkSvg from '@/assets/svg/check.svg';

interface ICheckBox {
  checked?: boolean;
}

export const CheckBox = styled.div<ICheckBox>`
  width: 23px;
  height: 23px;
  cursor: pointer;
  border: ${({ theme }) => ` 2px solid ${theme.colors.selectedbg}`};
  border-radius: 8px;
  background-color: ${({ checked, theme }) =>
    checked ? `${theme.colors.secondarybg}` : `${theme.colors.disabledbg}`};
  background-image: ${({ checked }) => checked && `url(${checkSvg})`};
  background-repeat: no-repeat;
  background-position: center;
`;
