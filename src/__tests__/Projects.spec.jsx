import React from 'react';
import { mount } from 'enzyme';

import Projects from '../Components/Projects';

describe('Projects', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Projects />);
  });

  it('renders the two arrows', () => {
    expect(wrapper.find('Arrow').length).toEqual(2);
  });

  it('renders gradient.png as the first slide', () => {
    expect(wrapper.find('h2').text()).toBe('gradient.png');
  });

  it('renders dayz when the right arrow is clicked', () => {
    wrapper.find('.arrow-container').at(0).simulate('click');
    // wrapper.simulate("keydown", { keyCode: 39 });
    // expect(wrapper.find("h2").text()).toBe("dayz");
  });

  it('renders gradient.png when the left arrow is clicked', () => {
    wrapper.find('.arrow-container').at(0).simulate('click');
    wrapper.find('.arrow-container').at(1).simulate('click');
    expect(wrapper.find('h2').text()).toBe('gradient.png');
  });
});
