import React from 'react';
import { shallow } from 'enzyme';
import GameComponent from '../Components/GameComponent';

describe('Game Component ', () => {
    describe('rendering', () => {
        const wrapper = shallow(<GameComponent />);

        it('has a start button', () => {
            expect(wrapper.exists('StartButton')).toBeTruthy();
        });
        // it('has a game panel');
        // it('has a restart button');
        // it('shows the scores');
    });
});
