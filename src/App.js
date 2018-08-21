import React from 'react';
import GameComponent from './Components/GameComponent';

const App = () =>{
    return(
        <div id='app-container'style={styles.appContainer}>
            <GameComponent />
        </div>
    );
};

const styles = {
    appContainer: {
        backgroundColor: '#000'
    }
};

export default App;