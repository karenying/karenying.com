import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Error from './Components/Error';
import FooterIcon from './Components/FooterIcon';
import Footer from './Components/Footer';

function App() {
    const [footerActive, setFooterActive] = useState(false);

    const handleFooterIconClick = () => {
        setFooterActive(true);
    };

    const handleFooterCloseClick = () => {
        setFooterActive(false);
    };

    return (
        <Router>
            <Switch>
                <Route exact path='/' component={About} />
                <Route exact path='/about' component={About} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/contact' component={Contact} />
                <Route path='*' component={Error} />
            </Switch>
            {footerActive ? (
                <Footer clickFunction={handleFooterCloseClick} />
            ) : (
                <FooterIcon clickFunction={handleFooterIconClick} />
            )}
        </Router>
    );
}

export default App;
