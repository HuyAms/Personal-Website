import {put, call} from 'redux-saga/effects';
import * as actions from '../actions/project';
import axios from "../../axious";

export function* fetchProjectSaga(action) {
  try {

    const response = yield call(axios.get, '/projects.json', action.positiveData);

    const fetchedProject = [];
    for (let key in response.data) {
      fetchedProject.push({
        ...response.data[key],
        id: key,
      });
    }

    yield put(actions.fetchProjectsSuccess(fetchedProject));

  } catch(error) {

    yield put(actions.fetchProjectsFail(error));
  }
}
