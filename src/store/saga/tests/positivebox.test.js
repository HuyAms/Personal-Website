/**
 * Tests for PositiveBox sagas
 */

import {put} from 'redux-saga/effects';
import {fetchPositiveSaga, postPositivesSaga} from '../positivebox';
import * as actions from '../../actions/positivebox';

describe('fetchPositiveSaga', () => {
  let fetchPositiveGenerator;

  beforeEach(() => {
    fetchPositiveGenerator = fetchPositiveSaga();

    const callDescriptor = fetchPositiveGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the fetchPositiveSuccess action if it requests the data successfully', () => {
    const response = {
      data: []
    }

    const putDescriptor = fetchPositiveGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(actions.fetchPositiveSuccess(response.data)));
  })

  it('should dispatch the fetchPositiveFail action if the response errors', () => {
    const error = new Error('Some error');
    const putDescriptor = fetchPositiveGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(actions.fetchPositiveFail(error)));
  })
})

describe('postPositivesSaga', () => {
  let postPositiveGenerator;

  let action = {
    positiveData: []
  }

  beforeEach(() => {
    postPositiveGenerator = postPositivesSaga(action);

    const callDescriptor = postPositiveGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the postPositiveSuccess action if it requests the data successfully', () => {
    const response = {
      data: {
        name: ""
      }
    }

    const putDescriptor = postPositiveGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(actions.postPositiveSuccess(action.positiveData, response.data.name)));
  })

  it('should dispatch the postPositiveFail action if the response errors', () => {
    const error = new Error('Some error');
    const putDescriptor = postPositiveGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(actions.postPositiveFail(error)));
  })
})