import React from 'react';
import { shallow } from 'enzyme';
import CategoriesBreadcrum from '../components/CategoriesBreadcrum';
import Link from 'next/link';

describe('CategoriesBreadcrum Component', () => {
  it('renders the component correctly', () => {
    const c = ['hola', 'como', 'estas', 'amigo'];

    const wrapper = shallow(<CategoriesBreadcrum categories={c} />);

    c.forEach((value, i) => {
      expect(
        wrapper
          .find('ul')
          .childAt(i)
          .find(Link)
          .find('a')
          .text(),
      ).toEqual(value);
    });
  });

  it('renders the component the ">" in the correct place', () => {
    const items = ['hola', 'como', 'estas', 'amigo'];

    const wrapper = shallow(<CategoriesBreadcrum categories={items} />);

    expect(wrapper.find('svg')).toHaveLength(3);

    items.forEach((value, i) => {
      const isLastElement = !items[i + 1];
      expect(
        wrapper
          .find('ul')
          .childAt(i)
          .find('svg'),
      ).toHaveLength(isLastElement ? 0 : 1);
    });
  });

  it('renders the props of each link item', () => {
    const items = ['hola', 'como', 'estas', 'amigo'];

    const wrapper = shallow(<CategoriesBreadcrum categories={items} />);

    expect(wrapper.find('svg')).toHaveLength(3);

    items.forEach((value, i) => {
      expect(
        wrapper
          .find('ul')
          .childAt(i)
          .find(Link)
          .prop('href'),
      ).toEqual({ pathname: '/items', query: { search: value } });
    });
  });
});
