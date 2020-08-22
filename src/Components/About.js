import React from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

import '../Styles/About.css';
import { BLUE, YELLOW, LIGHT_PINK, DARK_PINK } from '../constants';
import Karen from '../Assets/karen.png';
import MiniKaren from '../Assets/mini-karen.png';

export default function About() {
  const useStyles = makeStyles((theme) => ({
    aboutGrid: {
      textAlign: 'left',
      maxWidth: '80rem',
      [theme.breakpoints.up('sm')]: {
        padding: '20rem 0px',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '8rem 5rem 0rem 5rem',
        minHeight: 'calc(100vh - 3.5rem)',
      },
    },
    image: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'left',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '2rem 0px 3rem 0px',
        justifyContent: 'center',
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className='about-container'>
      <Grid className={classes.aboutGrid} container>
        <Grid item sm={12} md={4} className={classes.image}>
          <ProgressiveImage src={Karen} placeholder={MiniKaren}>
            {(src, loading) => (
              <img
                style={{ opacity: loading ? 0.8 : 1 }}
                src={src}
                alt='karen'
              />
            )}
          </ProgressiveImage>
        </Grid>
        <Grid item sm={12} md={8}>
          <Fade in timeout={{ enter: 1200 }}>
            <div>
              <p>
                Hi{' '}
                <span className='wave' role='img' aria-label='wave'>
                  👋🏼
                </span>{' '}
                I'm Karen, a rising senior studying Computer Science at
                Princeton University. I'm interested in anything tech &mdash;
                especially web development and UI/UX design.
                <br />
                <br />
                Currently, I'm a SWE intern at{' '}
                <a
                  href='https://www.wellsheet.com/'
                  style={{ color: BLUE }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Wellsheet
                </a>
                . In my free time, you can find me playing frisbee, eating{' '}
                <a
                  href='https://www.instagram.com/fry.nsta/'
                  style={{ color: YELLOW }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  fries
                </a>
                , trying to convince my friends that country and EDM are the
                best music genres (
                <a
                  href='https://www.youtube.com/watch?v=qDyCMxS8YfE'
                  style={{ color: DARK_PINK }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  EDM x country
                </a>{' '}
                slaps even harder), or speaking to your manager.
                <br />
                <br />
                Sometimes I{' '}
                <a
                  href='https://medium.com/@karenying'
                  style={{ color: LIGHT_PINK }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  blog/complain
                </a>{' '}
                about coding and visual design. Browse the{' '}
                <Link
                  to={`/projects`}
                  style={{
                    color: BLUE,
                  }}
                  className='projects-link'
                >
                  projects
                </Link>{' '}
                tab to see some of my work!
              </p>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
}
