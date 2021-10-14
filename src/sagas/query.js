import {all, put, takeLatest} from 'redux-saga/effects';
import api from 'src/helpers/sendsay';

import {ActionTypes} from '../constants/sagaActions';
import { setQuery } from '../features/query/querySlice';

export function* querySaga({ payload }) {
  console.log(payload)
  try {
    const response = yield api.sendsay
      .request(payload)
      .then((res) => {
        return res;
      });

    yield put(
      setQuery({
        text: JSON.stringify(payload),
        response: JSON.stringify(response),
        status: 'resolve',
      })
    );
  } catch (error) {
    console.log('err', error);
    yield put(
      setQuery({
        text: JSON.stringify(payload),
        response: '',
        status: 'reject',
      })
    );
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.QUERY, querySaga)]);
}
