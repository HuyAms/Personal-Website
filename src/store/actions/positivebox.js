import * as actionTypes from './actionTypes';
import axios from '../../axious';

const fetchPositiveSuccess = (positives) => {
  return {
    type: actionTypes.FETCH_POSITIVE_SUCCESS,
    positives: positives,
  };
};

const fetchPositiveFail = (error) => {
  return {
    type: actionTypes.FETCH_POSITIVE_FAIL,
    error: error,
  };
};

const fetchPositiveStart = () => {
  return {
    type: actionTypes.FETCH_POSITIVE_START,
  };
};

const postPositiveSuccess = (positiveData, id) => {
  return {
    type: actionTypes.POST_POSITIVE_SUCCESS,
    positiveData: positiveData,
    id: id,
  };
};

const postPositiveFail = (error) => {
  return {
    type: actionTypes.POST_POSITIVE_FAIL,
    error: error,
  };
};

const postPositiveStart = () => {
  return {
    type: actionTypes.POST_POSITIVE_START,
  };
};

export const openPositiveForm = () => {
  return {
    type: actionTypes.OPEN_POSITIVE_FORM
  }
};

export const closePositiveForm = () => {
  return {
    type: actionTypes.CLOSE_POSITIVE_FORM
  }
};

export const fetchPositive = () => {
  return dispatch => {
    dispatch(fetchPositiveStart());
    axios.get('/positive.json').then(res => {
      const fetchedPositive = [];
      for (let key in res.data) {
        fetchedPositive.push({
          ...res.data[key],
          id: key,
        });
      }
      dispatch(fetchPositiveSuccess(fetchedPositive));
    }).catch(error => {
      dispatch(fetchPositiveFail(error));
    });
  };
};

export const postPositives = (positiveData) => {
  return dispatch => {
    dispatch(postPositiveStart());
    axios.post('/positive.json', positiveData).then(res => {
      dispatch(postPositiveSuccess(positiveData, res.data.name));
    }).catch(error => {
      dispatch(postPositiveFail(error));
    });
  };
};