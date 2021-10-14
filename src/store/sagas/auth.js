import {all, put, call, takeLatest} from 'redux-saga/effects';
import api from 'src/helpers/sendsay';

import {authenticateFailure, authenticateSuccess, setLoading} from '../../features/auth/authSlice';
import {ActionTypes} from '../../constants/sagaActions';

export function* authenticateCheckSaga() {
  try {
    yield api.sendsay.request({
      action: 'pong',
    });
  } catch (error) {
    if (error.id === 'error/auth/failed') {
      yield call(logoutSaga);
    }
  }
}

export function* authenticateSaga({payload}) {
  yield put(setLoading());
  try {
    yield api.sendsay
      .login({
        login: payload.login,
        sublogin: payload.sublogin,
        password: payload.password,
      })
      .then(() => {
        document.cookie = `sendsay_session=${api.sendsay.session}`;
      });
    yield put(
      authenticateSuccess({
        sessionKey: api.sendsay.session,
        login: payload.login,
        sublogin: payload.sublogin,
      })
    );
  } catch (err) {
    document.cookie = '';
    console.log('err', err);
    yield put(authenticateFailure(err));
  }
}

export function* logoutSaga() {
  yield put(authenticateFailure());
  document.cookie = '';
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.AUTHENTICATE, authenticateSaga),
    takeLatest(ActionTypes.AUTHENTICATE_CHECK, authenticateCheckSaga),
    takeLatest(ActionTypes.LOGOUT, logoutSaga),
  ]);
}
