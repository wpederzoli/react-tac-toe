import React from 'react';
import { shallow } from 'enzyme';
import GameComponent from '../Components/GameComponent';

describe('Game Component ', () => {
    describe('rendering', () => {
        const wrapper = shallow(<GameComponent />);

        it('has a start button', () => {
            let component = shallow(<GameComponent label="Start" />);
            expect(
                component
                    .find('Button')
                    .at(0)
                    .prop('label')
            ).toEqual('Start');
        });
        it('has a game panel', () => {
            expect(wrapper.exists('GamePanel')).toBeTruthy();
        });
        it('has a restart button', () => {
            let component = shallow(<GameComponent label="Restart" />);
            expect(
                component
                    .find('Button')
                    .at(1)
                    .prop('label')
            ).toEqual('Restart');
        });
        it('shows the scores', () => {
            expect(wrapper.exists('ScoreBoard')).toBeTruthy();
        });
    });
});
