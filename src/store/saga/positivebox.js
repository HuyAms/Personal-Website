import {put} from 'redux-saga/effects';
import * as actions from '../actions/positivebox';
import axios from "../../axious";

export function* fetchPositiveSaga(action) {
  try {

    const response = yield axios.get('/positive.json');

    const fetchedPositive = [];
    for (let key in response.data) {
      fetchedPositive.push({
        ...response.data[key],
        id: key,
      });
    }

    yield put(actions.fetchPositiveSuccess(fetchedPositive));

  } catch(error) {

    yield put(actions.fetchPositiveFail(error));
  }
}

export function* postPositivesSaga(action) {
  try {

    const response = yield axios.post('/positive.json', action.positiveData);

    yield put(actions.postPositiveSuccess(action.positiveData, response.data.name));

  } catch(error) {

    yield put(actions.postPositiveFail(error));
  }
}
