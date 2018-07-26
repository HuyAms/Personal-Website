import * as actionTypes from './actionTypes';
import axios from '../../axious';

const fetchInfoSuccess = (myInfo) => {
  return {
    type: actionTypes.FETCH_INFO_SUCCESS,
    myInfo: myInfo
  }
}

const fetchInfoFail = (error) => {
  return {
    type: actionTypes.FETCH_INFO_FAIL,
    error: error
  }
}

const fetchInfoStart = () => {
  return {
    type: actionTypes.FETCH_INFO_START,
  }
}

const fetchExpSuccess = (workExps) => {
  return {
    type: actionTypes.FETCH_EXP_SUCCESS,
    workExps: workExps
  }
}

const fetchExpFail = (error) => {
  return {
    type: actionTypes.FETCH_EXP_FAIL,
    error: error
  }
}

const fetchExpStart = () => {
  return {
    type: actionTypes.FETCH_EXP_START,
  }
}


export const fetchExp = () => {
  return dispatch => {
    dispatch(fetchExpStart())
    axios.get('/workexp.json')
        .then(res => {
          const fetchedExp = [];
          for (let key in res.data) {
            fetchedExp.push({
              ...res.data[key],
              id: key
            });
          }
          dispatch(fetchExpSuccess(fetchedExp))
        }).catch(error => {
      dispatch(fetchExpFail(error))
    })
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