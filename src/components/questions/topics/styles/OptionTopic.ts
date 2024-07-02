import styled from 'styled-components';

interface IOptionTopic {
  checked?: boolean;
}

export const OptionTopic = styled.div<IOptionTopic>`
  display: flex;
  cursor: pointer;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondarybg};
  border-radius: 100%;
  min-width: 110px;
  min-height: 110px;

  width: 100%;
  height: 100%;
  border: ${({ checked, theme }) =>
    checked && `2px solid ${theme.colors.secondary}`};

  @media (min-width: 968px) {
    width: 150px;
    height: 150px;
  }
`;
