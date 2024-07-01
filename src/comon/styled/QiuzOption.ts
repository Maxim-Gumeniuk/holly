import styled from 'styled-components';

interface IQuizoption {
  textAlign?: string;
}

export const Quizoption = styled.div<IQuizoption>`
  border-radius: 16px;
  padding: 20px 12px;
  background-color: #36173d;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-size: 17px;
  font-weight: 600;
  line-height: 24px;
  cursor: pointer;
`;
