import React from 'react';
import '../Styles/About.css';
import Header from './Header';

class About extends React.Component {

    render() {
        
        return (
            <>
                <div className="about-container">
                    <Header page="about"/>
                </div>
            </>
        );
    }
}

export default About;