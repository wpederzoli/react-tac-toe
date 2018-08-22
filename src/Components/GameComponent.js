import React, { Component } from 'react';

import StartButton from './StartButton';
import RestartButton from './RestartButton';
import GamePanel from './GamePanel';

class GameComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <GamePanel />
                <StartButton />
                <RestartButton />
            </div>
        );
    }
}

export default GameComponent;
