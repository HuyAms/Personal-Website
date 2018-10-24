import React from 'react';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import Button from '../Button';

const children = <p>Test</p>

const setup = (props = {}) => shallow(
    <Button {...props}>
      {children}
    </Button>
);

describe('Button', () => {

  it('should have children', () => {
    const renderButton = setup();
    expect(renderButton.contains(children)).toEqual(true);
  });

  it('should render button with disabled props', () => {
    const props = {
      disabled: true,
    }
    const renderButton = setup(props);
    expect(renderButton.find('button').prop('disabled')).toEqual(props.disabled);
  })

  it('should render button with default style', () => {
    const renderButton = setup();
    expect(renderButton.hasClass('Button')).toEqual(true);
  })

  it('should render button with dark theme', () => {
    const renderButton = setup({btnTheme: 'Dark'});
    expect(renderButton.hasClass('Dark')).toEqual(true);
  });

  it('should render button with light theme', () => {
    const renderButton = setup({btnTheme: 'Light'});
    expect(renderButton.hasClass('Light')).toEqual(true);
  });

  it('should render normal button', () => {
    const renderButton = setup({btnType: 'Normal'});
    expect(renderButton.hasClass('Normal')).toEqual(true);
  });

  it('should render small button', () => {
    const renderButton = setup({btnType: 'Small'});
    expect(renderButton.hasClass('Small')).toEqual(true);
  });

  it('should handle click event', () => {
    const clicked = sinon.spy();
    const renderButton = setup({clicked});
    renderButton.find('button').simulate('click');
    expect(clicked.calledOnce).toEqual(true);
  });
});
