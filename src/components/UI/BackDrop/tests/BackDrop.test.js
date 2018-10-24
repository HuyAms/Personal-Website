import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import BackDrop from '../BackDrop';

const setup = (props = {}) => shallow(<BackDrop {...props}/>);

describe('BackDrop', () => {

  it('should render Backdrop with correct style', () => {

    const clicked = sinon.spy();
    const renderBackDrop = setup({clicked});
    expect(renderBackDrop.hasClass('Backdrop')).toEqual(true);
  });

  it('should handle click event', () => {

    const clicked = sinon.spy();
    const renderBackDrop = setup({clicked});
    renderBackDrop.find('div').simulate('click');
    expect(clicked.calledOnce).toEqual(true);
  });
});
