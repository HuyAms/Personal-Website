import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import Input from '../Input';

const setup = (props = {}) => shallow(<Input {...props}/>);

describe('Input', () => {

  it('should render input with default style', () => {

    const renderInput = setup();

    expect(renderInput.hasClass('Input')).toEqual(true);
    expect(renderInput.find('label')).toHaveLength(1);
    expect(renderInput.find('label').hasClass('Label')).toEqual(true);
  });

  it('should render input with correct label', () => {

    const props = {
      label: 'test'
    }

    const renderInput = setup(props);

    expect(renderInput.find('label').text()).toEqual(props.label);
  });

  it('should render input with input type', () => {

    const props = {
      elementType: 'input'
    }

    const renderInput = setup(props);

    expect(renderInput.find('input')).toHaveLength(1);
  })

  it('should render input with textarea type', () => {

    const props = {
      elementType: 'textarea'
    }

    const renderInput = setup(props);

    expect(renderInput.find('textarea')).toHaveLength(1);
    expect(renderInput.find('textarea').hasClass('TextArea')).toEqual(true);
  })

  it('should handle onChange event on input type', () => {
    const changed = sinon.spy();
    const renderInput = setup({changed});
    renderInput.find('input').simulate('change');
    expect(changed.calledOnce).toEqual(true);
  });

  it('should handle onChange event on textarea type', () => {

    const props = {
      elementType: 'textarea',
      changed: sinon.spy()
    }

    const renderInput = setup(props);
    renderInput.find('textarea').simulate('change');
    expect(props.changed.calledOnce).toEqual(true);
  });
});
