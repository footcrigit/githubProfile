import React from 'react';
import { shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ImageDef } from '../component/ImageDef';
Enzyme.configure({adapter: new Adapter()})
var props = {
    RepoAPIDetails : {
        "name" : "test",
        "favreport" : [
            {
                "name": "test",
                "description" : "test",
                "language" : "test",
                "namepair": "test1",
                "descriptionpair" : "test2",
                "languagepair" : "test3",
            }
        ]
    }
}
test('should render Homeprofile page', () => {
    const wrapper = shallow (<ImageDef {...props}/>);
    expect(wrapper).toMatchSnapshot();
})