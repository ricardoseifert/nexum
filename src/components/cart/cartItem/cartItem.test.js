import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import CartItem from './cartItem';

configure({adapter: new Adapter()});

describe('<cartItem />', () => {
    it('Zu einem Spanshot bestimmt', () => {
        const tree =  renderer.create(<CartItem />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});