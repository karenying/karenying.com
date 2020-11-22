import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  it('should render 2 react router Switches', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Switch').length).toEqual(1);
  });
});
