import React from 'react';
import MainHeader from './MainHeader';

import { shallow, mount } from 'enzyme';

describe('MainHeader Tests', () => {
  it('MainHeader renders without crashing', () => {
    const wrapper = shallow(<MainHeader/>);
    const headers = <h1>Jonathan Espinosa</h1>;
    expect((wrapper).contains(headers)).toEqual(true);
  })

  it('Link sends to LinkedIn page', () => {
    const wrapper = mount(<MainHeader/>);
    const linkedInLink = `https://www.linkedin.com/in/jonathanespinosa/`;
    const target = wrapper.find('a[data-enzyme-id="linkedin"]').prop('href');

    expect(target).toEqual(linkedInLink);
  })

  it('Link sends to Github page', () => {
    const wrapper = mount(<MainHeader/>);
    const githubLink = `https://github.com/jonespi`;
    const target = wrapper.find('a[data-enzyme-id="github"]').prop('href');

    expect(target).toEqual(githubLink);
  })

  it('Link sends to Github page', () => {
    const wrapper = mount(<MainHeader/>);
    const githubLink = `mailto:jonathan.espinosa@gmail.com`;
    const target = wrapper.find('a[data-enzyme-id="email"]').prop('href');

    expect(target).toEqual(githubLink);
  })
})