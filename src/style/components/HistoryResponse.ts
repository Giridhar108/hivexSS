import styled from 'styled-components';
import {GREY_02, TEXT_BLACK, WHITE} from '../../constants/styleVariables';

export const SectionHistory = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;
  border-bottom: 1px solid ${GREY_02};
  overflow: hidden;
`;

export const LineHistory = styled.div`
  display: flex;
  padding: 10px 15px;
  overflow: hidden;
  overflow-x: auto;
`;

export const HistoryItem = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  padding: 5px 10px;
  margin-right: 10px;

  color: ${TEXT_BLACK};

  background: ${WHITE};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }

  p {
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    margin-right: 10px;
    padding-bottom: 2px;
  }
`;

export const DeleteItemHistory = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 51px;
  height: 49px;
  border: none;
  border-left: 1px solid#C4C4C4;
  background: transparent;
  cursor: pointer;
`;

export const SvgHistory = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.2s;
  svg circle {
    fill: inherit;
  }

  svg circle {
    fill: rgba(0, 0, 0, 0.2);
  }

  &:hover {
    svg circle {
      fill: #999999;
    }
  }

  svg {
    margin-right: 5px;
  }
`;
