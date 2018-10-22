import { fromJS } from 'immutable';
import * as actionTypes from '../actions/actionTypes';

const initialState = fromJS({
  positives: [],
  loading: false,
  error: null,
  sharing: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSITIVE_START:
      return fetchPositiveStart(state, action);
    case actionTypes.FETCH_POSITIVE_FAIL:
      return fetchPositiveFail(state, action);
    case actionTypes.FETCH_POSITIVE_SUCCESS:
      return fetchPositiveSuccess(state, action);
    case actionTypes.POST_POSITIVE_START:
      return postPositiveStart(state, action);
    case actionTypes.POST_POSITIVE_FAIL:
      return postPositiveFail(state, action);
    case actionTypes.POST_POSITIVE_SUCCESS:
      return postPositiveSuccess(state, action);
    case actionTypes.OPEN_POSITIVE_FORM:
      return openPositiveForm(state, action);
    case actionTypes.CLOSE_POSITIVE_FORM:
      return unSharingPositive(state, action);
    default:
      return state;
  }
};

const openPositiveForm = (state, action) => {
  return state.set('sharing', true);
};

const unSharingPositive = (state, action) => {
  return state.set('sharing', false);
};

const postPositiveStart = (state, action) => {
  return state
      .set('error', null)
      .set('loading', true);
};

const postPositiveFail = (state, action) => {
  return state
      .set('error', action.error)
      .set('loading', false);
};

const postPositiveSuccess = (state, action) => {
  const newPositive = {
    ...action.positiveData,
    id: action.id,
  };

  return state
      .set('positives', newPositive)
      .set('loading', false)
      .set('sharing', false);
};

const fetchPositiveStart = (state, action) => {
  return state
      .set('error', null)
      .set('loading', true);
};

const fetchPositiveFail = (state, action) => {
  return state
      .set('error', action.error)
      .set('loading', false)
};

const fetchPositiveSuccess = (state, action) => {
  return state
      .set('positives', action.positives)
      .set('loading', false)
};

export default reducer;
