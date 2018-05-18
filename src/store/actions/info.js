import * as actionTypes from './actionTypes';
import axios from '../../axious';

export const fetchInfoSuccess = (myInfo) => {
  return {
    type: actionTypes.FETCH_INFO_SUCCESS,
    myInfo: myInfo
  }
}

export const fetchInfoFail = (error) => {
  return {
    type: actionTypes.FETCH_INFO_FAIL,
    error: error
  }
}

export const fetchInfoStart = () => {
  return {
    type: actionTypes.FETCH_INFO_START,
  }
}

export const fetchInfo = () => {
  return dispatch => {
    dispatch(fetchInfoStart())
    axios.get('/me.json')
    .then(res => {
      dispatch(fetchInfoSuccess(res.data))
    })
    .catch(error => {
      dispatch(fetchInfoFail(error))
    })
  }
}