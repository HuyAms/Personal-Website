import { fromJS } from 'immutable';
import * as actionTypes from '../actions/actionTypes';

const initialState = fromJS({
  myInfo: null,
  loading: false,
  error: null,
  workExps: []
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INFO_START:
      return fetchInfoStart(state, action);
    case actionTypes.FETCH_INFO_FAIL:
      return fetchInfoFail(state, action);
    case actionTypes.FETCH_INFO_SUCCESS:
      return fetchInfoSuccess(state, action);
    case actionTypes.FETCH_EXP_START:
      return fetchExpStart(state, action);
    case actionTypes.FETCH_EXP_SUCCESS:
      return fetchExpSuccess(state, action);
    case actionTypes.FETCH_EXP_FAIL:
      return fetchExpFail(state, action);
    default:
      return state;
  }
};

const fetchExpStart = (state, action) => {
  return state
      .set('error', null)
      .set('loading', true);
};

const fetchExpFail = (state, action) => {
  return state
      .set('error', action.error)
      .set('loading', false);
};

const fetchExpSuccess = (state, action) => {
  return state
      .set('loading', false)
      .set('workExps', action.workExps);
}

const fetchInfoStart = (state, action) => {
  return state
      .set('error', null)
      .set('loading', true);
};

const fetchInfoFail = (state, action) => {
  return state
      .set('error', action.error)
      .set('loading', false);
};

const fetchInfoSuccess = (state, action) => {
  return state
      .set('myInfo', action.myInfo)
      .set('loading', false);
};

export default reducer;
