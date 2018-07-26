import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
  projects: [],
  loading: false,
  error: null,
  activeFilterIndex: 0,
  search: '',
  h2ON32: false
};

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
    return updateObject(state, {
      search: action.search,
      h2ON32: true
    })
  }
  return updateObject(state, {
    search: action.search,
    h2ON32: false
  })
}

const setProjectFilter = (state, action) => {
  return updateObject(state, {
    activeFilterIndex: action.filter
  })
}

const fetchProjectStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const fetchProjectFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const fetchProjectSuccess = (state, action) => {
  return updateObject(state, {
    projects: action.projects,
    loading: false,
  });
};

export default reducer;