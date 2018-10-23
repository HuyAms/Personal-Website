import * as actionTypes from './actionTypes';

export const fetchInfoSuccess = (myInfo) => {
  return {
    type: actionTypes.FETCH_INFO_SUCCESS,
    myInfo
  }
}

export const fetchInfoFail = (error) => {
  return {
    type: actionTypes.FETCH_INFO_FAIL,
    error
  }
}

export const fetchInfoStart = () => {
  return {
    type: actionTypes.FETCH_INFO_START,
  }
}

export const fetchExpSuccess = (workExps) => {
  return {
    type: actionTypes.FETCH_EXP_SUCCESS,
    workExps
  }
}

export const fetchExpFail = (error) => {
  return {
    type: actionTypes.FETCH_EXP_FAIL,
    error
  }
}

export const fetchExpStart = () => {
  return {
    type: actionTypes.FETCH_EXP_START,
  }
}
