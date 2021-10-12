import styled from 'styled-components';

export const HeaderConsole = styled.header`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 10px 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
  color: #0d0d0d;
`;

export const UserInfo = styled.div`
  padding: 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  font-size: 16px;
  line-height: 15px;
  color: #0d0d0d;

  span {
    color: rgba(0, 0, 0, 0.2);
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
    color: #0d0d0d;
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
`;
