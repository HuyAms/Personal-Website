import {put, call} from 'redux-saga/effects';
import * as actions from '../actions/info';
import axios from "../../axious";

export function* fetchInfoSaga(action) {
  try {

    const response = yield call(axios.get, '/me.json');

    yield put(actions.fetchInfoSuccess(response.data));

  } catch(error) {

    yield put(actions.fetchInfoFail(error));
  }
}

export function* fetchExpSaga(action) {
  try {

    const response = yield call(axios.get, '/workexp.json');

    const fetchedExp = [];

    for (let key in response.data) {
      fetchedExp.push({
        ...response.data[key],
        id: key
      });
    }

    yield put(actions.fetchExpSuccess(fetchedExp))

  } catch (error) {

    yield put(actions.fetchExpFail(error));
  }
}
