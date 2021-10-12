import styled from 'styled-components';

export const WrapperConsole = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SectionHistory = styled.section`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 10px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const SectionQuery = styled.section`
  display: flex;
  background: #ffffff;
  height: 100%;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 70px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  background: #ffffff;
`;
