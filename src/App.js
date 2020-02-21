import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

class App extends React.Component {
    
    render() {

        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact={true} path='/' component={Home} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
