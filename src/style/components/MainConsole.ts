import styled from 'styled-components';
import {GREY_02, TEXT_RED, WHITE} from '../../constants/styleVariables';

interface Props {
  colorLabel?: boolean;
}

export const MainConsole = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SectionQuery = styled.section`
  display: flex;
  background: ${WHITE};
  height: 100%;
  padding: 10px 15px;
`;

export const Label = styled.label<Props>`
  font-size: 12px;
  line-height: 20px;
  color: ${(props) => (props.colorLabel ? TEXT_RED : '#999999')};
`;

export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Spliter = styled.div`
  min-width: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Textarea = styled.textarea<Props>`
  width: 100%;
  height: 100%;
  min-width: 400px;
  min-height: 400px;
  overflow: auto;
  resize: none;
  border-color: ${(props) => (props.colorLabel ? TEXT_RED : GREY_02)};
`;
