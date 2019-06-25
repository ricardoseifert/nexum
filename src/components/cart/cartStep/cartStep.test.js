import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import CartStep from './cartStep';

configure({adapter: new Adapter()});

describe('<cartStep />', () => {
    it('Zu einem Spanshot bestimmt', () => {
        const tree =  renderer.create(<CartStep />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Sollte ein span tag in der Aktivitemstep rendern', () => {
        const wrapper = shallow(<CartStep step='3' />);  
        expect(wrapper.find('ul li span')).toHaveLength(1);
     });
});