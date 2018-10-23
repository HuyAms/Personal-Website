import {takeEvery, takeLatest, all} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as positiveBoxSaga from './positivebox';
import * as infoSaga from './info';
import * as projectSaga from './project';

export function* rootSaga() {
  yield all([
    takeEvery(actionTypes.FETCH_INFO_START, infoSaga.fetchInfoSaga),
    takeEvery(actionTypes.FETCH_INFO_START, infoSaga.fetchExpSaga),

    takeEvery(actionTypes.FETCH_POSITIVE_START, positiveBoxSaga.fetchPositiveSaga),
    takeLatest(actionTypes.POST_POSITIVE_START, positiveBoxSaga.postPositivesSaga),

    takeEvery(actionTypes.FETCH_PROJECTS_START, projectSaga.fetchProjectSaga)
  ]);
}
