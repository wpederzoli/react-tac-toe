import React, { Component } from 'react';

import Button from './Button';
import GamePanel from './GamePanel';
import ScoreBoard from './ScoreBoard';

class GameComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ScoreBoard />
                <GamePanel />
                <Button label="Start" />
                <Button label="Restart" />
            </div>
        );
    }
}

export default GameComponent;
