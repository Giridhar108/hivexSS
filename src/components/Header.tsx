import React from 'react';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import useOpenFullScreen from '../hooks/useOpenFullScreen';
import {ActionTypes} from '../constants/sagaActions';
import {FullScreen, HeaderConsole, Logo, Logout, Sides, Title, UserInfo} from '../style/components/HeaderConsole';
import {CONSOLE_EXIT, APPLICATION_NAME} from '../constants/variables';
import {logoutSvg} from '../svg/logoutSvg';
import {fullScreenOffSvg} from '../svg/fullScreenOffSvg';
import {fullScreenOnSvg} from '../svg/fullScreenOnSvg';

function Header() {
  const dispatch = useAppDispatch();
  const {login, sublogin} = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch({
      type: ActionTypes.LOGOUT,
    });
  };

  const {fullScreen, openFullScreen} = useOpenFullScreen();

  return (
    <HeaderConsole>
      <Sides>
        <Logo src="/icons/logo.svg"></Logo>
        <Title>{APPLICATION_NAME}</Title>
      </Sides>
      <Sides>
        <UserInfo>
          {login} {sublogin ? <span> : </span> : null} {sublogin ? sublogin : null}
        </UserInfo>
        <Logout onClick={handleLogout}>
          <span>{CONSOLE_EXIT}</span>
          {logoutSvg}
        </Logout>
        <FullScreen onClick={openFullScreen}>{fullScreen ? fullScreenOffSvg : fullScreenOnSvg}</FullScreen>
      </Sides>
    </HeaderConsole>
  );
}

export default Header;
