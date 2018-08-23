import React from 'react';
import PropTypes from 'prop-types';

const GamePanel = ({ onClick }) => {
    return (
        <div id="game-panel">
            <div onClick={onClick} />
            <div onClick={onClick} />
            <div onClick={onClick} />
            <div onClick={onClick} />
            <div onClick={onClick} />
            <div onClick={onClick} />
            <div onClick={onClick} />
            <div onClick={onClick} />
        </div>
    );
};

GamePanel.propTypes = {
    onClick: PropTypes.func.isRequired,
};

GamePanel.defaultProps = {
    onClick: () => console.log,
};

export default GamePanel;
