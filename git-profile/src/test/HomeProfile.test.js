import React from 'react';
import { shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { HomeProfile } from '../component/HomeProfile';
Enzyme.configure({adapter: new Adapter()})

test('should render Homeprofile page', () => {
    const wrapper = shallow (<HomeProfile />);
    expect(wrapper).toMatchSnapshot();
})