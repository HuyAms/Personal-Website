/**
 * Tests for Info sagas
 */

import {put} from 'redux-saga/effects';
import {fetchInfoSaga, fetchExpSaga} from '../info';
import * as actions from '../../actions/info';

describe('fetchInfoSaga', () => {
  let fetchInfoGenerator;

  beforeEach(() => {
    fetchInfoGenerator = fetchInfoSaga();

    const callDescriptor = fetchInfoGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the fetchInfoSuccess action if it requests the data successfully', () => {
    const response = {
      data: {}
    }

    const putDescriptor = fetchInfoGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(actions.fetchInfoSuccess(response.data)));
  })

  it('should dispatch the fetchInfoFail action if the response errors', () => {
    const error = new Error('Some error');
    const putDescriptor = fetchInfoGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(actions.fetchInfoFail(error)));
  })
})

describe('fetchExpSaga', () => {
  let fetchExpGenerator;

  beforeEach(() => {
    fetchExpGenerator = fetchExpSaga();

    const callDescriptor = fetchExpGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the fetchExpSuccess action if it requests the data successfully', () => {
    const response = {
      data: []
    }

    const putDescriptor = fetchExpGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(actions.fetchExpSuccess(response.data)));
  })

  it('should dispatch the fetchExpFail action if the response errors', () => {
    const error = new Error('Some error');
    const putDescriptor = fetchExpGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(actions.fetchExpFail(error)));
  })
})
