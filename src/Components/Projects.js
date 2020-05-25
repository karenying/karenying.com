import React, { useState, useEffect } from 'react';
import '../Styles/Projects.css';
import Header from './Header';
import { projectInfo } from '../constants';
import { FiExternalLink } from 'react-icons/fi';
import {
    FaCode,
    FaChevronLeft,
    FaChevronRight,
    FaPaperclip,
    FaGamepad,
} from 'react-icons/fa';
import Slide from '@material-ui/core/Slide';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

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
    useEffect(() => {
        const handleKeyDown = (e) => {
            console.log(e);
            if (e.keyCode === 39) {
                onRightClick();
            }
            if (e.keyCode === 37) {
                onLeftClick();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    const [index, setIndex] = useState(0);

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
        paper,
        game,
    } = currInfo;

    const [slideIn, setSlideIn] = useState(true);
    const [direction, setDirection] = useState('left');
    const [imageSrc, setImgSrc] = useState(image);

    const onRightClick = () => {
        let newIndex = (index + 1) % projectInfo.length;
        setSlideIn(false);
        setDirection('right');
        setImgSrc(projectInfo[newIndex].image);
        setTimeout(() => {
            setIndex(newIndex);
            setDirection('left');
            setSlideIn(true);
        }, 500);
    };

    const onLeftClick = () => {
        let newIndex = index - 1;
        if (newIndex === -1) {
            newIndex = projectInfo.length - 1;
        }

        setSlideIn(false);
        setDirection('left');

        setImgSrc(projectInfo[newIndex].image);
        setTimeout(() => {
            setIndex(newIndex);
            setDirection('right');
            setSlideIn(true);
        }, 500);
    };

    const siteButton = site ? (
        <a href={site}>
            <div
                className='projectcard-button'
                style={{
                    backgroundColor: color,
                }}
            >
                <FiExternalLink color='#f5f5f5' style={{ paddingRight: 7 }} />
                <h3 style={{ color: '#f5f5f5' }}>site</h3>
            </div>
        </a>
    ) : null;

    const gameButton = game ? (
        <a href={game}>
            <div
                className='projectcard-button'
                style={{
                    backgroundColor: color,
                }}
            >
                <FaGamepad
                    color='#f5f5f5'
                    style={{ paddingRight: 7 }}
                    size='17px'
                />
                <h3 style={{ color: '#f5f5f5' }}>game</h3>
            </div>
        </a>
    ) : null;

    const codeButton = code ? (
        <a href={code}>
            <div
                className='projectcard-button'
                style={{
                    backgroundColor: color,
                }}
            >
                <FaCode color='#f5f5f5' style={{ paddingRight: 7 }} />
                <h3 style={{ color: '#f5f5f5' }}>code</h3>
            </div>
        </a>
    ) : null;

    const paperButton = paper ? (
        <a href={paper}>
            <div
                className='projectcard-button'
                style={{
                    backgroundColor: color,
                }}
            >
                <FaPaperclip color='#f5f5f5' style={{ paddingRight: 7 }} />
                <h3 style={{ color: '#f5f5f5' }}>paper</h3>
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
            [theme.breakpoints.up('md')]: {
                padding: '75px 50px',
                margin: '0px 25px',
            },
            [theme.breakpoints.down('md')]: {
                padding: '0px 0px',
                height: 550,
                margin: '0px 10px 50px 10px',
            },
        },
        infoCard: {
            minHeight: 400,
            maxWidth: 400,
            backgroundColor: '#f5f5f5',
            display: 'flex',
            borderRadius: 5,
            boxShadow: '20px 20px 20px rgba(0,0,0,0.5)',
            flexDirection: 'column',
            alignItems: 'center',
            [theme.breakpoints.up('md')]: { padding: '30px 40px' },
            [theme.breakpoints.down('md')]: {
                padding: '30px 20px',
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
            },
            position: 'relative',
        },
        infoGrid: {
            textAlign: 'left',
        },
        infoGridItem: {
            textAlign: 'left',
            [theme.breakpoints.up('xs')]: { marginBottom: 15 },
            [theme.breakpoints.down('xs')]: { marginBottom: 8 },
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
                                <Fade in={slideIn} timeout={{ enter: 1200 }}>
                                    <div className='projectcard-image'>
                                        <img src={imageSrc} alt='project' />
                                    </div>
                                </Fade>
                            </Hidden>
                            <Card className={classes.infoCard}>
                                <h2 style={{ marginBottom: 30 }}>{name}</h2>
                                <Grid className={classes.infoGrid} container>
                                    <Grid
                                        className={classes.infoGridItem}
                                        item
                                        xs={12}
                                        sm={4}
                                        mb={15}
                                    >
                                        <h3 style={{ color }}>type:</h3>
                                    </Grid>
                                    <Grid
                                        className={classes.infoGridItem}
                                        item
                                        xs={12}
                                        sm={8}
                                    >
                                        <p>{type}</p>
                                    </Grid>
                                    <Grid
                                        className={classes.infoGridItem}
                                        item
                                        xs={12}
                                        sm={4}
                                    >
                                        <h3 style={{ color }}>stack:</h3>
                                    </Grid>
                                    <Grid
                                        className={classes.infoGridItem}
                                        item
                                        xs={12}
                                        sm={8}
                                    >
                                        <p>{stack}</p>
                                    </Grid>
                                    <Grid
                                        className={classes.infoGridItem}
                                        item
                                        xs={12}
                                        sm={4}
                                    >
                                        <h3 style={{ color }}>description:</h3>
                                    </Grid>
                                    <Grid
                                        className={classes.infoGridItem}
                                        item
                                        xs={12}
                                        sm={8}
                                    >
                                        <p>{description}</p>
                                    </Grid>
                                </Grid>
                                <div className='projectcard-buttons'>
                                    {gameButton}
                                    {siteButton}
                                    {paperButton}
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
