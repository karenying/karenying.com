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
import Header from './Header';

function LeftArrow(props) {
  const { clickFunction, myRef, arrowClass } = props;

  return (
    <div
      className={`arrow-container ${arrowClass}`}
      onClick={clickFunction}
      ref={myRef}
    >
      <FaChevronLeft color={ALMOST_WHITE} size='4rem' />
    </div>
  );
}

function RightArrow(props) {
  const { clickFunction, myRef, arrowClass } = props;

  return (
    <div
      className={`arrow-container ${arrowClass}`}
      onClick={clickFunction}
      ref={myRef}
    >
      <FaChevronRight color={ALMOST_WHITE} size='4rem' />
    </div>
  );
}

export default function Projects() {
  useEffect(() => {
    const handleKeyDown = (e) => {
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

  const onRightClick = () => {
    rightArrow.current.firstChild.style.transform = 'scale(1.15)';
    rightArrow.current.firstChild.style.fill = '#cecece';

    let newIndex = (index + 1) % projectInfo.length;
    setSlideIn(false);
    setDirection('right');
    setTimeout(() => {
      setIndex(newIndex);
      setDirection('left');
      setSlideIn(true);
      rightArrow.current.firstChild.style.transform = '';
      rightArrow.current.firstChild.style.fill = ALMOST_WHITE;
    }, 500);
  };

  const onLeftClick = () => {
    leftArrow.current.firstChild.style.transform = 'scale(1.15)';
    leftArrow.current.firstChild.style.fill = '#cecece';

    let newIndex = index - 1;
    if (newIndex === -1) {
      newIndex = projectInfo.length - 1;
    }

    setSlideIn(false);
    setDirection('left');

    setTimeout(() => {
      setIndex(newIndex);
      setDirection('right');
      setSlideIn(true);
      leftArrow.current.firstChild.style.transform = '';
      leftArrow.current.firstChild.style.fill = ALMOST_WHITE;
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
      <Header page='projects' />
      <div className='projects-content'>
        <LeftArrow
          clickFunction={onLeftClick}
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
        <RightArrow
          clickFunction={onRightClick}
          myRef={rightArrow}
          arrowClass={classes.arrow}
        />
      </div>
    </div>
  );
}
