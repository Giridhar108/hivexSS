import {all, fork} from 'redux-saga/effects';

import login from 'src/store/sagas/auth';
import query from 'src/store/sagas/query';

export default function* root() {
  yield all([fork(login), fork(query)]);
}
