import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Input } from './';

Enzyme.configure({
    adapter: new Adapter()
});

describe('Truc', function () {
    it('should be truc', () => {
        const wrapper = shallow(<Input value="2" onChange={() => null} />);

        expect(wrapper).toHaveLength(1);
    });
});
