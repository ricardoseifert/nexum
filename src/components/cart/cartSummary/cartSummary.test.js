import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import CartSummary from './cartSummary';

configure({adapter: new Adapter()});

describe('<cartSummary />', () => {
    it('Zu einem Spanshot bestimmt', () => {
        const tree =  renderer.create(<CartSummary />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});