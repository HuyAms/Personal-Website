import * as actionTypes from './actionTypes';

export const fetchPositiveSuccess = (positives) => {
  return {
    type: actionTypes.FETCH_POSITIVE_SUCCESS,
    positives,
  };
};

export const fetchPositiveFail = (error) => {
  return {
    type: actionTypes.FETCH_POSITIVE_FAIL,
    error,
  };
};

export const fetchPositiveStart = () => {
  return {
    type: actionTypes.FETCH_POSITIVE_START,
  };
};

export const postPositiveSuccess = (positiveData, id) => {
  return {
    type: actionTypes.POST_POSITIVE_SUCCESS,
    positiveData: positiveData,
    id,
  };
};

export const postPositiveFail = (error) => {
  return {
    type: actionTypes.POST_POSITIVE_FAIL,
    error,
  };
};

export const postPositiveStart = (positiveData) => {
  return {
    type: actionTypes.POST_POSITIVE_START,
    positiveData
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
