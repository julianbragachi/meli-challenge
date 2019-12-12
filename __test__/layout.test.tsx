import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../components/Layout';

describe('Layout Component', () => {
  it('renders the component with the correct title', () => {
    const title = 'Titulo de la Aplicacion';

    const wrapper = shallow(<Layout title={title} />);

    expect(wrapper.find('title').text()).toEqual(`${title} | Mercado Libre`);
  });

  it('renders the component with children', () => {
    const childText = 'Hola soy el hijo';

    const MockComponent = () => <h1>{childText}</h1>;

    const wrapper = shallow(
      // tslint:disable-next-line: jsx-wrap-multiline
      <Layout title="Hola">
        <MockComponent />
      </Layout>,
    );

    expect(wrapper.find(MockComponent)).toHaveLength(1);
  });
});
