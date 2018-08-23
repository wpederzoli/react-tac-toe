import React from 'react';
import { shallow } from 'enzyme';
import GamePanel from '../Components/GamePanel';

describe('Game Panel ', () => {
    const props = {
        onClick: jest.fn(),
    };
    const wrapper = shallow(<GamePanel {...props} />);
    it('should have 8 clickable squares', () => {
        expect(wrapper.find({ onClick: props.onClick }).length).toEqual(8);
    });
});
