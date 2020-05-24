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
import { FaCode, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slide from '@material-ui/core/Slide';
import Hidden from '@material-ui/core/Hidden';

function LeftArrow(props) {
    const { clickFunction } = props;

    return (
        <div className='arrow-container' onClick={clickFunction}>
            <FaChevronLeft color='#f5f5f5' size='40px' />
        </div>
    );
}

function RightArrow(props) {
    const { clickFunction } = props;

    return (
        <div className='arrow-container' onClick={clickFunction}>
            <FaChevronRight color='#f5f5f5' size='40px' />
        </div>
    );
}

class Projects extends React.Component {
    state = {
        index: 0,
        in: true,
        direction: 'left',
    };

    onRightClick = () => {
        const { index } = this.state;
        let newIndex = (index + 1) % projectInfo.length;
        this.setState({ in: false, direction: 'right' });
        setTimeout(
            () =>
                this.setState({ in: true, direction: 'left', index: newIndex }),
            500
        );
    };

    onLeftClick = () => {
        const { index } = this.state;
        let newIndex = index - 1;
        if (newIndex === -1) {
            newIndex = projectInfo.length - 1;
        }
        this.setState({ in: false, direction: 'left' });
        setTimeout(
            () =>
                this.setState({
                    in: true,
                    direction: 'right',
                    index: newIndex,
                }),
            500
        );
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
                backgroundColor,
                boxShadow: '20px 20px 20px black',
                display: 'flex',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                margin: '100px 25px',
                padding: '75px 50px',
            },
        })(Card);

        const InfoCard = withStyles({
            root: {
                height: 400,
                width: 400,
                backgroundColor: '#f5f5f5',
                display: 'flex',
                borderRadius: 5,
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
                    <LeftArrow clickFunction={this.onLeftClick} />
                    <div className='projectcard-container'>
                        <Slide
                            in={this.state.in}
                            direction={this.state.direction}
                        >
                            <ProjectCard>
                                <Hidden mdDown>
                                    <div className='projectcard-image'>
                                        <img src={image} />
                                    </div>
                                </Hidden>
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
                        </Slide>
                    </div>
                    <RightArrow clickFunction={this.onRightClick} />
                </div>
            </div>
        );
    }
}

export default Projects;
