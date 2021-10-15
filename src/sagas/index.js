import {all, fork} from 'redux-saga/effects';

import login from './auth';
import query from './query';

export default function* root() {
  yield all([fork(login), fork(query)]);
}
