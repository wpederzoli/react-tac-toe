import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App container', () =>{
    const wrapper = shallow(<App />);
    it('should have a black background', () =>{
        expect(wrapper.find('#app-container').prop('style')).toHaveProperty('backgroundColor', '#000');
    });
    it('should contain a game component', () =>{
        expect(wrapper.exists('GameComponent')).toBeTruthy();
    });
});