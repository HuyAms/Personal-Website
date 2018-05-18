import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
  myInfo: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INFO_START:
      return fetchInfoStart(state, action);
    case actionTypes.FETCH_INFO_FAIL:
      return fetchInfoFail(state, action);
    case actionTypes.FETCH_INFO_SUCCESS:
      return fetchInfoSuccess(state, action);
  }
  return state;
}

const fetchInfoStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  })
}

const fetchInfoFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  })
}

const fetchInfoSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    myInfo: updateObject(state.myInfo, action.myInfo)
  })
}

export default reducer;