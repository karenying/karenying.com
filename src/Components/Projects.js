import React, { useState } from 'react';
import '../Styles/Projects.css';
import Header from './Header';
import { projectInfo } from '../constants';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { FiExternalLink } from 'react-icons/fi';
import { FaCode, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slide from '@material-ui/core/Slide';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

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

function Projects() {
    const [index, setIndex] = useState(0);
    const [slideIn, setIn] = useState(true);
    const [direction, setDirection] = useState('left');

    const onRightClick = () => {
        let newIndex = (index + 1) % projectInfo.length;
        setIn(false);
        setDirection('right');

        setTimeout(() => {
            setDirection('left');
            setIndex(newIndex);
            setIn(true);
        }, 500);
    };

    const onLeftClick = () => {
        let newIndex = index - 1;
        if (newIndex === -1) {
            newIndex = projectInfo.length - 1;
        }

        setIn(false);
        setDirection('left');

        setTimeout(() => {
            setDirection('right');
            setIndex(newIndex);
            setIn(true);
        }, 500);
    };

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
                <FiExternalLink color='#f5f5f5' style={{ paddingRight: 7 }} />
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

    const useStyles = makeStyles((theme) => ({
        projectCard: {
            backgroundColor,
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            margin: '0px 25px',
            padding: '75px 50px',
        },
        infoCard: {
            [theme.breakpoints.up('md')]: { minHeight: 400 },
            maxWidth: 400,
            backgroundColor: '#f5f5f5',
            display: 'flex',
            borderRadius: 5,
            boxShadow: '20px 20px 20px rgba(0,0,0,0.5)',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '30px 40px',
            position: 'relative',
        },
        infoGrid: {
            textAlign: 'left',
        },
    }));

    const classes = useStyles();

    return (
        <div className='projects-container'>
            <Header page='projects' />
            <div className='projects-content'>
                <LeftArrow clickFunction={onLeftClick} />
                <div className='projectcard-container'>
                    <Slide in={slideIn} direction={direction}>
                        <Card className={classes.projectCard}>
                            <Hidden mdDown>
                                <div className='projectcard-image'>
                                    <img src={image} alt='project' />
                                </div>
                            </Hidden>
                            <Card className={classes.infoCard}>
                                <h2 style={{ marginBottom: 30 }}>{name}</h2>
                                <Grid className={classes.infoGrid} container>
                                    <Grid
                                        className={classes.infoGrid}
                                        item
                                        xs={12}
                                        sm={4}
                                        mb={15}
                                    >
                                        <h3 style={{ color }}>type:</h3>
                                    </Grid>
                                    <Grid
                                        className={classes.infoGrid}
                                        item
                                        xs={12}
                                        sm={8}
                                    >
                                        <p>{type}</p>
                                    </Grid>
                                    <Grid
                                        className={classes.infoGrid}
                                        item
                                        xs={12}
                                        sm={4}
                                    >
                                        <h3 style={{ color }}>stack:</h3>
                                    </Grid>
                                    <Grid
                                        className={classes.infoGrid}
                                        item
                                        xs={12}
                                        sm={8}
                                    >
                                        <p>{stack}</p>
                                    </Grid>
                                    <Grid
                                        className={classes.infoGrid}
                                        item
                                        xs={12}
                                        sm={4}
                                    >
                                        <h3 style={{ color }}>description:</h3>
                                    </Grid>
                                    <Grid
                                        className={classes.infoGrid}
                                        item
                                        xs={12}
                                        sm={8}
                                    >
                                        <p>{description}</p>
                                    </Grid>
                                </Grid>
                                <div className='projectcard-buttons'>
                                    {siteButton}
                                    {codeButton}
                                </div>
                            </Card>
                        </Card>
                    </Slide>
                </div>
                <RightArrow clickFunction={onRightClick} />
            </div>
        </div>
    );
}

export default Projects;
