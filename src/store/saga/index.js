import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as positiveBoxSaga from './positivebox';
import * as infoSaga from './info';
import * as projectSaga from './project';

export function* rootSaga() {
  yield takeEvery(actionTypes.FETCH_INFO_START, infoSaga.fetchInfoSaga)
  yield takeEvery(actionTypes.FETCH_INFO_START, infoSaga.fetchExpSaga)

  yield takeEvery(actionTypes.FETCH_POSITIVE_START, positiveBoxSaga.fetchPositiveSaga)
  yield takeEvery(actionTypes.POST_POSITIVE_START, positiveBoxSaga.postPositivesSaga)

  yield takeEvery(actionTypes.FETCH_PROJECTS_START, projectSaga.fetchProjectSaga)
}
