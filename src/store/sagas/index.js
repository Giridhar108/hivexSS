import {all, fork} from 'redux-saga/effects';

import login from 'src/store/sagas/auth';

export default function* root() {
  yield all([fork(login)]);
}
