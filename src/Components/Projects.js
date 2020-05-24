import React from 'react';
import '../Styles/Projects.css';
import Header from './Header';
import Expresso from '../Assets/expresso.png';
import Dayz from '../Assets/dayz.png';
import { DARK_PINK, LIGHT_PINK, BLUE, YELLOW, LIGHT_GRAY } from '../constants';
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Gradient from '../Assets/gradient.png';
import { FiExternalLink } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';

class Projects extends React.Component {
    render() {
        const ProjectCard = withStyles({
            root: {
                height: 550,
                width: 1000,
                backgroundColor: DARK_PINK,
                boxShadow: '20px 20px 20px black',
                display: 'flex',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'space-evenly',
            },
        })(Card);

        const InfoCard = withStyles({
            root: {
                height: 400,
                width: 400,
                backgroundColor: '#f5f5f5',
                display: 'flex',
                borderRadius: 5,
                marginRight: 10,
                boxShadow: '20px 20px 20px rgba(0,0,0,0.5)',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '30px 40px',
                position: 'relative',
            },
        })(Card);

        return (
            <div className='projects-container'>
                <Header page='projects' />
                <div className='projects-content'>
                    {/*
                    <div className='projects-title'>
                        <h1>
                            here are some things
                            <br /> i've worked on
                        </h1>
                    </div> */}
                    <div className='projectcard-container'>
                        <ProjectCard>
                            <div className='projectcard-image'>
                                <img src={Gradient} />
                            </div>
                            <InfoCard>
                                <h2 style={{ marginBottom: 30 }}>
                                    gradient.png
                                </h2>
                                <div className='projectcard-content'>
                                    <h3 style={{ color: DARK_PINK }}>type: </h3>
                                    <p>static web page</p>
                                    <h3 style={{ color: DARK_PINK }}>stack:</h3>
                                    <p>React</p>
                                    <h3 style={{ color: DARK_PINK }}>
                                        description:
                                    </h3>
                                    <p>
                                        Nulla mi ultrices risus lectus vel, elit
                                        nulla etiam in tristique nec in, vivamus
                                        eget ut, id sapien integer. Sed semper
                                        ridiculus facilisis ante. Nulla libero
                                        ut vestibulum vitae quam, justo
                                        consequat nunc orci. Nisl interdum
                                        aliquet elementum pellentesque venenatis
                                        quis.
                                    </p>
                                </div>
                                <div className='projectcard-buttons'>
                                    <div
                                        className='projectcard-demo'
                                        style={{ marginRight: 20 }}
                                    >
                                        <FiExternalLink
                                            color={DARK_PINK}
                                            style={{ paddingRight: 7 }}
                                        />
                                        <h3 style={{ color: DARK_PINK }}>
                                            demo
                                        </h3>
                                    </div>
                                    <div className='projectcard-code'>
                                        <FaCode
                                            color={DARK_PINK}
                                            style={{ paddingRight: 7 }}
                                        />
                                        <h3 style={{ color: DARK_PINK }}>
                                            code
                                        </h3>
                                    </div>
                                </div>
                                <h2></h2>
                            </InfoCard>
                        </ProjectCard>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
