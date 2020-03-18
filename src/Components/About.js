import React from 'react';
import '../Styles/About.css';
import Header from './Header';
import Karen from '../Assets/karen.png';

class About extends React.Component {

    render() {
        
        return (
            <>
                <div className="about-container">
                    <Header page="about"/>
                    <div className="about-content-container">
                        <div className="about-content-left">
                            <img src={Karen}></img>
                        </div>
                        <div className="about-content-right">
                            <div className="about-content-intro">
                                <h1>hello!</h1>
                                <p>
                                    I'm a junior studying Computer Science at Princeton University.
                                    Welcome to my little space on the web 🙂. 
                                </p>
                            </div>
                            {/*
                            <div className="about-content-timeline">
                                <h1>timeline</h1>
                                <p>
                                    👶 8/9/1999 Born in Boston, MA<br/>
                                    🇨🇳 1999 - 2001 Lived to China
                                    
                                </p>
                            </div> 
                            */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default About;