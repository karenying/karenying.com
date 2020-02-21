import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import FooterIcon from './Components/FooterIcon';

class App extends React.Component {

    render() {

        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route exact={true} path='/' component={Home} />
                    </Switch>
                    <FooterIcon />
                </div>
            </Router>
        );
    }
}

export default App;
