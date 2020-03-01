import React from 'react';
import '../Styles/Projects.css';
import Header from './Header';
import Expresso from '../Assets/expresso.png';
import Dayz from '../Assets/dayz.png';
import { DARK_PINK, LIGHT_PINK, BLUE, YELLOW, LIGHT_GRAY } from '../constants';

class Projects extends React.Component {

    render() {
        
        return (
            <>
                <div className="projects-container">
                    <Header page="projects"/>
                    <div className="projects-content">
                        <div className="projects-title">
                            <h1>here are some things<br/> i've worked on</h1>
                        </div>
                        <div className="projects-expresso-wrapper">
                            <div className="projects-expresso-image">
                                <img src={Dayz}></img>
                            </div>
                            <div className="projects-expresso-content">
                            <h2><a href="http://dayz-app.herokuapp.com/" style={{color: BLUE}}>Dayz</a></h2>
                                <p>
                                    • A minimalistic, aesthetic, and colorful online bullet journal<br/>
                                    • Built on a MERN stack<br/>
                                    • Open source on <a href="https://github.com/karenying/dayz/">GitHub</a>
                                </p>
                            </div>
                        </div>
                        <div className="projects-expresso-wrapper">
                            <div className="projects-expresso-image">
                                <img src={Expresso}></img>
                            </div>
                            <div className="projects-expresso-content">
                            <h2><a href="http://coffeeclub.princeton.edu/" style={{color: YELLOW}}>Expresso</a></h2>
                                <p>
                                    • An online-ordering service for the Princeton University Coffee Club<br/>
                                    • Group project for COS 333: Advanced Programming Techniques<br/>
                                    • Designed frontend in React and Semanantic UI
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Projects;