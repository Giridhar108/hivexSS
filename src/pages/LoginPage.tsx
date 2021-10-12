import React, {useEffect} from 'react';
import {useFormik} from 'formik';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {validate} from '../helpers/validate';
import ReactLoading from 'react-loading';

import {useAppDispatch, useAppSelector} from '../app/hooks';
import {ActionTypes} from '../store/constants';
import {
  FormInner,
  Iput,
  IputPass,
  Label,
  LogoStyled,
  Title,
  Wrapper,
  Form,
  Article,
  Button,
  SubloginWrapper,
  ErrorEnter,
  ErrorTitle,
  ErrorText,
  Options,
  LinkToGithab,
} from '../style/components/LoginPage';

const LoginPage: React.FunctionComponent<RouteComponentProps> = ({history}) => {
  const dispatch = useAppDispatch();

  const {sessionKey, loading, status} = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (sessionKey) {
      history.push('/console');
    } else {
      history.push('/');
    }
  }, [sessionKey, history]);

  const formik = useFormik({
    initialValues: {
      login: '',
      sublogin: '',
      password: '',
    },
    validate: validate,
    onSubmit: ({login, sublogin, password}) => {
      dispatch({
        type: ActionTypes.AUTHENTICATE,
        payload: {
          login,
          sublogin,
          password,
        },
      });
    },
  });

  return (
    <Wrapper>
      <FormInner>
        <LogoStyled src="/icons/logo.svg" alt="logo" />
        <Title>API-консолька</Title>
        {status.status !== 'idle' ? (
          <ErrorEnter>
            <ErrorTitle>Вход не вышел</ErrorTitle>
            <ErrorText>{`{id: "${status?.id}", explain: "${status?.explain}"}`}</ErrorText>
          </ErrorEnter>
        ) : null}
        <Form onSubmit={formik.handleSubmit}>
          <Label inputColor={formik.touched.login && formik.errors.login ? '#CF2C00' : '#0d0d0d'} htmlFor="login">
            Логин
          </Label>

          <Iput
            inputColor={formik.touched.login && formik.errors.login ? '#CF2C00' : 'rgba(0, 0, 0, 0.2)'}
            id="login"
            name="login"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.login}
          />

          <SubloginWrapper>
            <Options>Опционально</Options>
            <Label htmlFor="sublogin">Сублогин</Label>
            <Iput
              id="sublogin"
              name="sublogin"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.sublogin}
            />
          </SubloginWrapper>

          <Label inputColor={formik.touched.password && formik.errors.password ? '#CF2C00' : '#0d0d0d'} htmlFor="password">
            Пароль
          </Label>

          <IputPass
            inputColor={formik.touched.password && formik.errors.password ? '#CF2C00' : 'rgba(0, 0, 0, 0.2)'}
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          <Button disabled={Boolean(formik.errors.login) || Boolean(formik.errors.password) || loading} type="submit">
            {loading ? (
              <Article>
                <ReactLoading type={'spokes'} color="#fff" />
              </Article>
            ) : (
              'Войти'
            )}
          </Button>
        </Form>
        <LinkToGithab href="https://github.com/Giridhar108/hivexSS" target="_blank">
          @github.com/Giridhar108/hivexSS
        </LinkToGithab>
      </FormInner>
    </Wrapper>
  );
};

export default withRouter(LoginPage);
