import React from 'react';
import {shallow} from 'enzyme';
import ButtonLink from '../ButtonLink';

const children = <p>Test</p>

const setup = (props = {}) => shallow(
    <ButtonLink {...props}>
      {children}
    </ButtonLink>
);

describe('ButtonLink', () => {

  it('should have children', () => {
    const renderButtonLink = setup();
    expect(renderButtonLink.contains(children)).toEqual(true);
  });

  it('should render button with default style', () => {
    const renderButtonLink = setup();
    expect(renderButtonLink.hasClass('Button')).toEqual(true);
  })

  it('should have correct href and target attribute', () => {
    const props = {
      link: 'https://test.com',
      target: '_blank'
    }
    const renderButtonLink = setup(props);
    expect(renderButtonLink.find('a').prop('href')).toEqual(props.link);
    expect(renderButtonLink.find('a').prop('target')).toEqual(props.target);
  });
});
