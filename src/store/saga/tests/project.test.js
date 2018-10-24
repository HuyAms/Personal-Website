/**
 * Tests for Project sagas
 */

import {put} from 'redux-saga/effects';
import {fetchProjectSaga} from '../project';
import * as actions from '../../actions/project';

describe('fetchProjectSaga', () => {
  let fetchProjectGenerator;

  beforeEach(() => {
    fetchProjectGenerator = fetchProjectSaga();

    const callDescriptor = fetchProjectGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the fetchProjectsSuccess action if it requests the data successfully', () => {
    const response = {
      data: []
    }

    const putDescriptor = fetchProjectGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(actions.fetchProjectsSuccess(response.data)));
  })

  it('should dispatch the fetchProjectsFail action if the response errors', () => {
    const error = new Error('Some error');
    const putDescriptor = fetchProjectGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(actions.fetchProjectsFail(error)));
  })
})