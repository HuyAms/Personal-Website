import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
  positives: [],
  loading: false,
  error: null,
  sharing: false,
};

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
  return updateObject(state, {
    sharing: true,
  });
};

const unSharingPositive = (state, action) => {
  return updateObject(state, {
    sharing: false,
  });
};

const postPositiveStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const postPositiveFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const postPositiveSuccess = (state, action) => {
  const newPositive = {
    ...action.positiveData,
    id: action.id,
  };

  return updateObject(state, {
    positives: state.positives.concat(newPositive),
    loading: false,
    sharing: false
  });
};

const fetchPositiveStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const fetchPositiveFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const fetchPositiveSuccess = (state, action) => {
  return updateObject(state, {
    positives: action.positives,
    loading: false,
  });
};

export default reducer;