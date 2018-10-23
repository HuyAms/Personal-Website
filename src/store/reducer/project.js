import { fromJS } from 'immutable';
import * as actionTypes from '../actions/actionTypes';

const initialState = fromJS({
  projects: [],
  loading: false,
  error: null,
  activeFilterIndex: 0,
  search: '',
  h2ON32: false
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROJECTS_START:
      return fetchProjectStart(state, action);
    case actionTypes.FETCH_PROJECT_FAIL:
      return fetchProjectFail(state, action);
    case actionTypes.FETCH_PROJECTS_SUCCESS:
      return fetchProjectSuccess(state, action);
    case actionTypes.SET_PROJECT_FILTER:
      return setProjectFilter(state, action);
    case actionTypes.SET_PROJECT_SERACH:
      return setProjectSearch(state, action);
    default:
      return state;
  }
};

const setProjectSearch = (state, action) => {
  if (action.search.toLowerCase() === 'nhung') {
    return state
        .set('search', action.search)
        .set('h2ON32', true);
  }
  return state
      .set('search', action.search)
      .set('h2ON32', false);
}

const setProjectFilter = (state, action) => {
  return state.set('activeFilterIndex', action.filter)
}

const fetchProjectStart = (state, action) => {
  return state
      .set('error', null)
      .set('loading', true);
};

const fetchProjectFail = (state, action) => {
  return state
      .set('error', action.error)
      .set('loading', false);
};

const fetchProjectSuccess = (state, action) => {
  return state
      .set('projects', action.projects)
      .set('loading', false);
};

export default reducer;
