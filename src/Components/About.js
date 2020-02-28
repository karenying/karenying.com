import React from 'react';
import '../Styles/About.css';
import Header from './Header';
import Karen from '../Assets/karen.png'

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
                            <div>
                                <h1>hello!</h1>
                                <p>
                                    I'm a junior studying Computer Science at Princeton University.
                                    Welcome to my own little space on the web 🙂. 
                                    

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default About;