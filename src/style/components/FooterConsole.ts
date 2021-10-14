import styled from 'styled-components';
import {GREY_02, TEXT_BLACK, WHITE} from '../../constants/styleVariables';
import {LinkToGithab} from './LoginPage';

export const FooterConsole = styled.footer`
  display: flex;
  justify-content: space-between;
  min-height: 70px;
  padding: 15px;
  border-top: 1px solid ${GREY_02};
  background: ${WHITE};
`;

export const LinkToGithabFooter = styled(LinkToGithab)`
  position: relative;
  bottom: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const Format = styled.div`
  display: flex;
  align-items: center;
  width: 158px;
  border: none;
  background: transparent;
`;

export const FormatInner = styled.button`
  display: flex;
  align-items: center;
  width: 158px;
  border: none;
  background: transparent;

  font-size: 16px;
  line-height: 20px;
  color: ${TEXT_BLACK};
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 7px;
  stroke: #0d0d0d;

  svg {
    margin-right: 8px;
  }

  svg path {
    stroke: inherit;
  }

  &:hover {
    color: #0055fb;
    stroke: #0055fb;
  }

  &:focus {
    outline: 2px solid rgb(69, 165, 255, 0.5);
    color: #0055fb;
    stroke: #0055fb;
  }
`;
