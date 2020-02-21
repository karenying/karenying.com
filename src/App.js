import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Error from './Components/Error';
import FooterIcon from './Components/FooterIcon';
import Footer from './Components/Footer';

class App extends React.Component {
    state = {
        footerActive: false,
    }

    handleFooterIconClick = () => {
        let footerActive = !this.state.footerActive;
        this.setState({ footerActive });
    };

    render() {

        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact={ true } path='/home' component={Home} />
                        <Route exact={ true } path='/' component={Home} />
                        <Route exact={ true } path='/about' component={About} />
                        <Route path='*' component={Error} />
                    </Switch>
                    <FooterIcon clickFunction={ this.handleFooterIconClick }/>
                    {
                        this.state.footerActive ? 
                            <Footer/> : 
                            null
                    }
                </div>
            </Router>
        );
    }
}

export default App;
