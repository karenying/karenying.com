import React, { useState, useEffect, useRef } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import {
  FaCode,
  FaChevronLeft,
  FaChevronRight,
  FaPaperclip,
  FaPlay,
} from 'react-icons/fa';
import ProgressiveImage from 'react-progressive-image';
import Slide from '@material-ui/core/Slide';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';

import '../Styles/Projects.css';
import { projectInfo, ALMOST_WHITE } from '../constants';

const Arrow = (props) => {
  const { icon: Icon, clickFunction, myRef, arrowClass } = props;

  return (
    <div
      className={`arrow-container ${arrowClass}`}
      onClick={clickFunction}
      ref={myRef}
    >
      <Icon color={ALMOST_WHITE} size='4rem' />
    </div>
  );
};

const Projects = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 39) {
        handleClick('right');
      }
      if (e.keyCode === 37) {
        handleClick('left');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const leftArrow = useRef();
  const rightArrow = useRef();

  const [index, setIndex] = useState(0);

  const currInfo = projectInfo[index];
  const {
    backgroundColor,
    color,
    image,
    mini,
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
  const [direction, setDirection] = useState('down');

  const handleClick = (direction) => {
    const ref = direction === 'right' ? rightArrow : leftArrow;
    const oppDirection = direction === 'right' ? 'left' : 'right';

    ref.current.firstChild.style.transform = 'scale(1.15)';
    ref.current.firstChild.style.fill = '#cecece';

    let newIndex = (index + 1) % projectInfo.length;
    setSlideIn(false);
    setDirection(direction);
    setTimeout(() => {
      setIndex(newIndex);
      setDirection(oppDirection);
      setSlideIn(true);
      ref.current.firstChild.style.transform = '';
      ref.current.firstChild.style.fill = ALMOST_WHITE;
    }, 500);
  };

  const siteButton = (
    <a href={site} target='_blank' rel='noopener noreferrer'>
      <div
        className='projectcard-button'
        style={{
          backgroundColor: color,
        }}
      >
        <FiExternalLink color={ALMOST_WHITE} style={{ paddingRight: 7 }} />
        <h3 style={{ color: ALMOST_WHITE }}>site</h3>
      </div>
    </a>
  );

  const gameButton = (
    <a href={game} target='_blank' rel='noopener noreferrer'>
      <div
        className='projectcard-button'
        style={{
          backgroundColor: color,
        }}
      >
        <FaPlay
          color={ALMOST_WHITE}
          style={{ paddingRight: 7 }}
          size='1.2rem'
        />
        <h3 style={{ color: ALMOST_WHITE }}>play</h3>
      </div>
    </a>
  );

  const codeButton = (
    <a href={code} target='_blank' rel='noopener noreferrer'>
      <div
        className='projectcard-button'
        style={{
          backgroundColor: color,
        }}
      >
        <FaCode color={ALMOST_WHITE} style={{ paddingRight: 7 }} />
        <h3 style={{ color: ALMOST_WHITE }}>code</h3>
      </div>
    </a>
  );

  const paperButton = (
    <a href={paper} target='_blank' rel='noopener noreferrer'>
      <div
        className='projectcard-button'
        style={{
          backgroundColor: color,
        }}
      >
        <FaPaperclip
          color={ALMOST_WHITE}
          style={{ paddingRight: 7 }}
          size='1.5rem'
        />
        <h3 style={{ color: ALMOST_WHITE }}>paper</h3>
      </div>
    </a>
  );

  const useStyles = makeStyles((theme) => ({
    projectContainer: {
      [theme.breakpoints.down('xs')]: {
        minHeight: 'calc(100vh - 3.5rem)',
      },
    },
    projectCard: {
      backgroundColor,
      boxShadow: '2rem 2rem 2rem black',
      display: 'flex',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      [theme.breakpoints.up('md')]: {
        padding: '7.5rem 5rem',
        margin: '0rem 2.5rem',
      },
      [theme.breakpoints.up('lg')]: {
        width: '87rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '0rem 0px',
        height: 550,
        margin: '0rem 1rem 5rem 1rem',
      },
    },
    infoCard: {
      minHeight: '40rem',
      maxWidth: '40rem',
      backgroundColor: ALMOST_WHITE,
      display: 'flex',
      borderRadius: 5,
      boxShadow: '2rem 2rem 2rem rgba(0,0,0,0.5)',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: { padding: '3rem 4rem' },
      [theme.breakpoints.down('md')]: {
        padding: '3rem 2rem',
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
      [theme.breakpoints.up('xs')]: { marginBottom: '1.5rem' },
    },
    infoGridTitle: {
      [theme.breakpoints.down('xs')]: { marginBottom: '0.4rem' },
    },
    arrow: {
      [theme.breakpoints.down('md')]: { marginBottom: '5rem' },
    },
  }));

  const classes = useStyles();

  return (
    <div className={`projects-container ${classes.projectContainer}`}>
      <div className='projects-content'>
        <Arrow
          icon={FaChevronLeft}
          clickFunction={() => handleClick('left')}
          myRef={leftArrow}
          arrowClass={classes.arrow}
        />
        <div className='projectcard-container'>
          <Slide in={slideIn} direction={direction}>
            <Card className={classes.projectCard}>
              <Hidden mdDown>
                <div className='projectcard-image'>
                  <ProgressiveImage src={image} placeholder={mini}>
                    {(src, loading) => (
                      <img
                        style={{
                          opacity: loading ? 0.7 : 1,
                        }}
                        src={src}
                        alt='project'
                      />
                    )}
                  </ProgressiveImage>
                </div>
              </Hidden>
              <Card className={classes.infoCard}>
                <h2
                  style={{
                    marginBottom: 30,
                    textShadow: '0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {name}
                </h2>
                <Grid className={classes.infoGrid} container>
                  <Grid
                    className={
                      classes.infoGridItem + ' ' + classes.infoGridTitle
                    }
                    item
                    xs={12}
                    sm={4}
                  >
                    <h3
                      style={{
                        color,
                      }}
                    >
                      type:
                    </h3>
                  </Grid>
                  <Grid className={classes.infoGridItem} item xs={12} sm={8}>
                    <p>{type}</p>
                  </Grid>
                  <Grid
                    className={
                      classes.infoGridItem + ' ' + classes.infoGridTitle
                    }
                    item
                    xs={12}
                    sm={4}
                  >
                    <h3
                      style={{
                        color,
                      }}
                    >
                      stack:
                    </h3>
                  </Grid>
                  <Grid className={classes.infoGridItem} item xs={12} sm={8}>
                    <p>{stack}</p>
                  </Grid>
                  <Grid
                    className={
                      classes.infoGridItem + ' ' + classes.infoGridTitle
                    }
                    item
                    xs={12}
                    sm={4}
                  >
                    <h3
                      style={{
                        color,
                      }}
                    >
                      description:
                    </h3>
                  </Grid>
                  <Grid className={classes.infoGridItem} item xs={12} sm={8}>
                    <p>{description}</p>
                  </Grid>
                </Grid>
                <div className='projectcard-buttons'>
                  {game && gameButton}
                  {site && siteButton}
                  {paper && paperButton}
                  {code && codeButton}
                </div>
              </Card>
            </Card>
          </Slide>
        </div>
        <Arrow
          icon={FaChevronRight}
          clickFunction={() => handleClick('right')}
          myRef={rightArrow}
          arrowClass={classes.arrow}
        />
      </div>
    </div>
  );
};

export default Projects;
