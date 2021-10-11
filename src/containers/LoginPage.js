import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

import {authenticate} from 'src/store/actions/auth';

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

function LoginPage({history}) {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [sublogin, setSubLogin] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector((state) => state.auth.loading);
  const isLoggedIn = useSelector((state) => !!state.auth.sessionKey?.length);
  console.log('loading', loading);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/console');
    }
  }, [isLoggedIn]);

  const doLogin = () => {
    dispatch(
      authenticate({
        login,
        sublogin,
        password,
      })
    );
  };

  function onSubmit(event) {
    event.preventDefault();
    doLogin();
  }

  return (
    <Wrapper>
      <LogoStyled src="/icons/logo.svg" alt="" />
      <Form onSubmit={onSubmit} action="/">
        <input value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Логин" />
        <input value={sublogin} onChange={(e) => setSubLogin(e.target.value)} placeholder="Сублогин" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Сублогин" />
        <button type="submit" onClick={onSubmit}>
          Отправить
        </button>
      </Form>
    </Wrapper>
  );
}

export default withRouter(LoginPage);
