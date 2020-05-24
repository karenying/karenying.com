import React from 'react';
import '../Styles/Projects.css';
import Header from './Header';
import {
    DARK_PINK,
    LIGHT_PINK,
    BLUE,
    YELLOW,
    LIGHT_GRAY,
    projectInfo,
} from '../constants';
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';

import { FiExternalLink } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';

class Projects extends React.Component {
    state = {
        index: 0,
    };

    render() {
        const { index } = this.state;
        const currInfo = projectInfo[index];
        const {
            backgroundColor,
            color,
            image,
            name,
            type,
            stack,
            description,
            site,
            code,
        } = currInfo;

        const buttonMargin = code ? 30 : 0;
        const siteButton = site ? (
            <a href={site}>
                <div
                    className='projectcard-site'
                    style={{
                        marginRight: buttonMargin,
                        backgroundColor: color,
                    }}
                >
                    <FiExternalLink
                        color='#f5f5f5'
                        style={{ paddingRight: 7 }}
                    />
                    <h3 style={{ color: '#f5f5f5' }}>site</h3>
                </div>
            </a>
        ) : null;

        const codeButton = code ? (
            <a href={code}>
                <div
                    className='projectcard-code'
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <FaCode color='#f5f5f5' style={{ paddingRight: 7 }} />
                    <h3 style={{ color: '#f5f5f5' }}>code</h3>
                </div>
            </a>
        ) : null;

        const ProjectCard = withStyles({
            root: {
                height: 550,
                width: 1000,
                backgroundColor,
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
                    <div className='projectcard-container'>
                        <ProjectCard>
                            <div className='projectcard-image'>
                                <img src={image} />
                            </div>
                            <InfoCard>
                                <h2 style={{ marginBottom: 30 }}>{name}</h2>
                                <div className='projectcard-content'>
                                    <h3 style={{ color }}>type: </h3>
                                    <p>{type}</p>
                                    <h3 style={{ color }}>stack:</h3>
                                    <p>{stack}</p>
                                    <h3 style={{ color }}>description:</h3>
                                    <p>{description}</p>
                                </div>
                                <div className='projectcard-buttons'>
                                    {siteButton}
                                    {codeButton}
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
