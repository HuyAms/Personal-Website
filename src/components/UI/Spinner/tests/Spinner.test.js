import React from 'react';
import {shallow} from 'enzyme';
import Spinner from '../Spinner';

const setup = (props = {}) => shallow(<Spinner {...props}/>);

describe('Spinner', () => {

  it('should render Spinner with correct style', () => {
    const renderButton = setup();
    expect(renderButton.hasClass('Loader')).toEqual(true);
  })
});

