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

const About = () => {
  const useStyles = makeStyles((theme) => ({
    aboutGrid: {
      textAlign: 'left',
      maxWidth: '80rem',
      [theme.breakpoints.up('sm')]: { marginBottom: '3rem' },
      [theme.breakpoints.down('sm')]: {
        padding: '0 4.5rem 3rem',
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
  const { aboutGrid, image } = classes;

  return (
    <div className='about-container'>
      <Grid className={aboutGrid} container>
        <Grid item sm={12} md={4} className={image}>
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
                I'm Karen, a senior studying Computer Science at Princeton
                University. I'm interested in anything tech &mdash; especially
                web dev and UI/UX.
                <br />
                <br />
                Currently I'm on campus, Zoomin' my last year of Princeton while
                also doing frontend things for{' '}
                <a
                  href='https://gather.town/'
                  style={{ color: BLUE }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Gather Town
                </a>
                .
                <br />
                <br />
                If I'm not beep booping, you can find me{' '}
                <a
                  href='https://blog.karenying.com/posts/blogmas-2020#-1222-quarantine-running-recap'
                  style={{ color: LIGHT_PINK }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  running
                </a>
                , eating{' '}
                <a
                  href='https://www.instagram.com/fry.nsta/'
                  style={{ color: YELLOW }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  fries
                </a>
                , looking for EDM{' '}
                <a
                  href='https://www.youtube.com/watch?v=qDyCMxS8YfE&ab_channel=DanAndShay'
                  style={{ color: DARK_PINK }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  remixes
                </a>{' '}
                of Country songs, or speaking to your manager.
                <br />
                <br />
                Sometimes I{' '}
                <a
                  href='https://blog.karenying.com'
                  style={{ color: LIGHT_PINK }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  blog
                </a>{' '}
                (complain / meme) about coding and design. Check out some of my{' '}
                <Link
                  to={`/projects`}
                  style={{
                    color: BLUE,
                  }}
                  className='internal-link'
                >
                  projects
                </Link>{' '}
                and definitely feel free to{' '}
                <Link
                  to={`/contact`}
                  style={{
                    color: YELLOW,
                  }}
                  className='internal-link'
                >
                  connect
                </Link>
                !
              </p>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
