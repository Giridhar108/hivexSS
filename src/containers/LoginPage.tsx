import React, {useEffect, useState} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import styled from 'styled-components';

import {useAppDispatch, useAppSelector} from '../app/hooks';
import {ActionTypes} from '../store/constants';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.section`
  width: 520px;
  height: 425px;
  left: calc(50% - 520px / 2);
  top: 222px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 40px 30px;
`;

const LogoStyled = styled.img`
  margin-bottom: 20px;
`;

const LoginPage: React.FunctionComponent<RouteComponentProps> = ({history}) => {
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState('');
  const [sublogin, setSubLogin] = useState('');
  const [password, setPassword] = useState('');

  const {loading, sessionKey} = useAppSelector((state) => state.auth);

  console.log('loading', loading);

  useEffect(() => {
    if (sessionKey) {
      history.push('/console');
    }
  }, [sessionKey, history]);

  const doLogin = () => {
    dispatch({
      type: ActionTypes.AUTHENTICATE,
      payload: {
        login,
        sublogin,
        password,
      },
    });
  };

  function onSubmit(event: {preventDefault: () => void}) {
    event.preventDefault();
    doLogin();
  }

  return (
    <Wrapper>
      <LogoStyled src="/icons/logo.svg" alt="" />
      <Form>
        <form onSubmit={onSubmit} action="">
          <input value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Логин" />
          <input value={sublogin} onChange={(e) => setSubLogin(e.target.value)} placeholder="Сублогин" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Сублогин" />
          <button type="submit" onClick={onSubmit}>
            Отправить
          </button>
        </form>
      </Form>
    </Wrapper>
  );
};

export default withRouter(LoginPage);
