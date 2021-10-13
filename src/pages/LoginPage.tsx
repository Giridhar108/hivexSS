import React, {useEffect} from 'react';
import {useFormik} from 'formik';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {validate} from '../helpers/validate';
import ReactLoading from 'react-loading';

import {useAppDispatch, useAppSelector} from '../app/hooks';
import {ActionTypes} from '../constants';
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
import {
  LOGIN_PAGE_DESCRIPTION_INPUT,
  LOGIN_PAGE_ERROR,
  LOGIN_PAGE_LINKTOGITHAB,
  LOGIN_PAGE_LOGIN,
  LOGIN_PAGE_PASSWORD,
  LOGIN_PAGE_SUBLOGIN,
  APPLICATION_NAME,
} from '../constants/variables';

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
        <Title>{APPLICATION_NAME}</Title>
        {status.status !== 'idle' ? (
          <ErrorEnter>
            <ErrorTitle>{LOGIN_PAGE_ERROR}</ErrorTitle>
            <ErrorText>{`{id: "${status?.id}", explain: "${status?.explain}"}`}</ErrorText>
          </ErrorEnter>
        ) : null}
        <Form onSubmit={formik.handleSubmit}>
          <Label inputColor={formik.touched.login && formik.errors.login ? '#CF2C00' : '#0d0d0d'} htmlFor="login">
            {LOGIN_PAGE_LOGIN}
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
            <Options>{LOGIN_PAGE_DESCRIPTION_INPUT}</Options>
            <Label htmlFor="sublogin">{LOGIN_PAGE_SUBLOGIN}</Label>
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
            {LOGIN_PAGE_PASSWORD}
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
          {LOGIN_PAGE_LINKTOGITHAB}
        </LinkToGithab>
      </FormInner>
    </Wrapper>
  );
};

export default withRouter(LoginPage);
