import React from 'react';
import {shallow} from 'enzyme';
import Search from '../Search';
import sinon from "sinon";

const setup = (props = {}) => shallow(<Search {...props}/>);

describe('Search', () => {

  it('should render search with correct style', () => {
    const renderButton = setup();
    expect(renderButton.find('div').hasClass('InputContainer')).toEqual(true);
    expect(renderButton.find('input').hasClass('InputElement')).toEqual(true);
  })

  it('should render search with correct props', () => {
    const props = {
      searchValue: 'test'
    }
    const renderButton = setup(props);
    expect(renderButton.find('input').prop('value')).toEqual(props.searchValue);
  })


  it('should handle onChange event', () => {
    const onChanged = sinon.spy();
    const renderButton = setup({onChanged});
    renderButton.find('input').simulate('change');
    expect(onChanged.calledOnce).toEqual(true);
  });
});

