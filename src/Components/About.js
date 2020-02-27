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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.

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