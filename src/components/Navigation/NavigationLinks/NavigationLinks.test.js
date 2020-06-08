import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationLinks from './NavigationLinks';
import NavigationLink from './NavigationLink/NavigationLink';

configure({adapter: new Adapter()});

describe('<NavigationLinks />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationLinks />);
    });

    it('should render four <NavigationLink /> elements if not authenticated', () => {
        expect(wrapper.find(NavigationLink)).toHaveLength(4);
    });

    it('should render five <NavigationLink /> elements if authenticated', () => {
        wrapper.setProps({ isAuth: true });
        expect(wrapper.find(NavigationLink)).toHaveLength(5);
    });
});