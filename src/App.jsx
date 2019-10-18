import React, { Component } from 'react';
import Welcome from './Welcome';

class App extends Component {
    render() {
        return (
            <div>
                <Welcome name="Sara"/>
                <Welcome name="Cahal"/>
                <Welcome name="Edite"/>
            </div>
        );
    }
}

export default App;