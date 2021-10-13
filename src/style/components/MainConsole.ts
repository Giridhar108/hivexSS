import styled from 'styled-components';
import {GREY_02, WHITE} from '../../constants/styleVariables';

export const MainConsole = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SectionHistory = styled.section`
  display: flex;
  width: 100%;
  min-height: 50px;
  padding: 10px 15px;
  border-bottom: 1px solid ${GREY_02};
`;

export const SectionQuery = styled.section`
  display: flex;
  background: ${WHITE};
  height: 100%;
  padding: 10px 15px;
`;

export const Label = styled.label`
  font-size: 12px;
  line-height: 20px;
  color: #999999;
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

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
`;
