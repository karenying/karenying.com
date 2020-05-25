import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Error from './Components/Error';
import FooterIcon from './Components/FooterIcon';
import Footer from './Components/Footer';

class App extends React.Component {
    state = {
        footerActive: false,
    };

    handleFooterIconClick = () => {
        this.setState({ footerActive: true });
    };

    handleFooterCloseClick = () => {
        this.setState({ footerActive: false });
    };

    render() {
        return (
            <Router>
                <div className='App'>
                    <Switch>
                        <Route exact={true} path='/home' component={Home} />
                        <Route exact={true} path='/' component={Home} />
                        <Route exact={true} path='/about' component={About} />
                        <Route
                            exact={true}
                            path='/projects'
                            component={Projects}
                        />
                        <Route
                            exact={true}
                            path='/contact'
                            component={Contact}
                        />
                        <Route path='*' component={Error} />
                    </Switch>
                    {this.state.footerActive ? (
                        <Footer clickFunction={this.handleFooterCloseClick} />
                    ) : (
                        <FooterIcon
                            clickFunction={this.handleFooterIconClick}
                        />
                    )}
                </div>
            </Router>
        );
    }
}

export default App;
