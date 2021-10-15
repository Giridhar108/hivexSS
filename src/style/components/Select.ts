import styled from 'styled-components';
import {GREY_02, TEXT_BLACK, TEXT_RED, WHITE} from '../../constants/styleVariables';

interface Props {
  visible: boolean;
}

export const SelectWrapper = styled.div<Props>`
  position: absolute;
  display: ${(Props) => Props.visible ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: space-evenly;
  width: 133px;
  height: 141px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  top: 90px;

  font-size: 16px;
  line-height: 20px;
  color: ${TEXT_BLACK};
  z-index: 2;
`;

export const SelectItem = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 133px;
  padding: 10px 15px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: ${WHITE};
    background-color: #0055fb;
  }
`;

export const SelectItemDelete = styled(SelectItem)`
  &:hover {
    color: ${WHITE};
    background-color: ${TEXT_RED};
  }
`;

export const SelectItemLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${GREY_02};
`;
