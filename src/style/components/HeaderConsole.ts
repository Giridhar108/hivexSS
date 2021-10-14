import styled from 'styled-components';
import {GREY_02, TEXT_BLACK} from '../../constants/styleVariables';

export const HeaderConsole = styled.header`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 10px 15px;
  border-bottom: 1px solid ${GREY_02};
`;

export const Sides = styled.div`
  display: flex;
`;

export const Logo = styled.img``;

export const Title = styled.h1`
  margin: 0;
  margin-left: 20px;
  font-size: 20px;
  line-height: 30px;
  color: ${TEXT_BLACK};
`;

export const UserInfo = styled.div`
  padding: 5px 15px;
  border: 1px solid ${GREY_02};
  border-radius: 5px;

  font-size: 16px;
  line-height: 15px;
  color: ${TEXT_BLACK};

  span {
    color: ${GREY_02};
  }
`;

export const Logout = styled.button`
  display: flex;
  height: 24px;
  width: 82px;

  background: transparent;
  border: none;
  margin-top: 2px;
  margin-left: 20px;
  padding: 0;
  cursor: pointer;
  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    font-size: 16px;
    line-height: 20px;
    color: ${TEXT_BLACK};
    margin-right: 8px;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const FullScreen = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  border-radius: 7px;
  stroke: #0d0d0d;
  transition: all 0.2s;

  svg path {
    stroke: inherit;
  }

  &:hover {
    color: #0055fb;
    stroke: #0055fb;
    transition: all 0.2s;
  }

  &:focus {
    outline: 2px solid rgb(69, 165, 255, 0.5);
    color: #0055fb;
    stroke: #0055fb;
  }
`;
