import React from 'react';
import { shallow } from 'enzyme';
import ProductCluster from '../components/ProductCluster';
import { Item } from '../models/SearchDTO';
import styles from '../components/ProductCluster/productCluster.styles.scss';
import Link from 'next/link';

const getMockItem = () =>
  ({
    id: 'ML-un-id-falso',
    title: 'PS5',
    picture: '',
    address: 'Mi casa 975',
    price: { currency: 'ARS', amount: 10, decimals: 10 },
    condition: 'new',
    free_shipping: true,
  } as Item);

describe('ProductCluster Component', () => {
  it('renders the component with the className prop', () => {
    const css = 'mi-clase-css';
    const item = getMockItem();

    const wrapper = shallow(<ProductCluster data={item} className={css} />);

    expect(
      wrapper
        .find('div')
        .first()
        .prop('className'),
    ).toContain(css);
  });

  it('verify correct behavior of free_shipping', () => {
    const item = getMockItem();
    let wrapper = shallow(<ProductCluster data={item} />);

    expect(wrapper.find(`.${styles.shipping}`)).toHaveLength(1);
    expect(wrapper.find(`.${styles.shipping}`).text()).toEqual('Envio gratis!');

    item.free_shipping = false;
    wrapper = shallow(<ProductCluster data={item} />);

    expect(wrapper.find(`.${styles.shipping}`)).toHaveLength(0);
  });

  it('verify correct behavior of condition', () => {
    const item = getMockItem();
    let wrapper = shallow(<ProductCluster data={item} />);
    expect(wrapper.find('#div-condition')).toHaveLength(1);
    expect(wrapper.find('#div-condition').text()).toEqual('Nuevo');

    item.condition = 'NeW';
    wrapper = shallow(<ProductCluster data={item} />);
    expect(wrapper.find('#div-condition')).toHaveLength(1);
    expect(wrapper.find('#div-condition').text()).toEqual('Nuevo');

    item.condition = 'UsEd';
    wrapper = shallow(<ProductCluster data={item} />);
    expect(wrapper.find('#div-condition')).toHaveLength(1);
    expect(wrapper.find('#div-condition').text()).toEqual('Usado');

    item.condition = 'asdasdasd';
    wrapper = shallow(<ProductCluster data={item} />);
    expect(wrapper.find('#div-condition')).toHaveLength(0);

    item.condition = '';
    wrapper = shallow(<ProductCluster data={item} />);
    expect(wrapper.find('#div-condition')).toHaveLength(0);
  });

  it('renders the props of link component', () => {
    const item = getMockItem();
    let wrapper = shallow(<ProductCluster data={item} />);

    expect(wrapper.find(Link).prop('href')).toBe('items/ML-un-id-falso');
  });
});
