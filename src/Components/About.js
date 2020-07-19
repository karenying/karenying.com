import React from 'react';
import '../Styles/About.css';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Karen from '../Assets/karen.png';
import MiniKaren from '../Assets/mini-karen.png';
import { BLUE, YELLOW, LIGHT_PINK, DARK_PINK } from '../constants';
import ProgressiveImage from 'react-progressive-image';
import { Link } from 'react-router-dom';

export default function About() {
    const useStyles = makeStyles((theme) => ({
        aboutGrid: {
            textAlign: 'left',
            maxWidth: '80rem',
            [theme.breakpoints.up('sm')]: {
                padding: '20rem 0px',
            },
            [theme.breakpoints.down('sm')]: {
                padding: '8rem 5rem 5rem 5rem',
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
            <Header page='about' />
            <Grid className={classes.aboutGrid} container>
                <Grid item sm={12} md={4} className={classes.image}>
                    <ProgressiveImage src={Karen} placeholder={MiniKaren}>
                        {(src, loading) => (
                            <img
                                style={{ opacity: loading ? 0.7 : 1 }}
                                src={src}
                                alt='karen'
                            />
                        )}
                    </ProgressiveImage>
                </Grid>
                <Grid item sm={12} md={8}>
                    <Fade in={true} timeout={{ enter: 1200 }}>
                        <div>
                            <p>
                                Hi! I'm Karen, a rising senior studying Computer
                                Science at Princeton University. I'm interested
                                in anything tech &mdash; especially web
                                development and UI/UX design.
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
                                . In my free time, you can find me playing
                                frisbee, eating{' '}
                                <a
                                    href='https://www.instagram.com/fry.nsta/'
                                    style={{ color: YELLOW }}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    fries
                                </a>
                                , or trying to convince my friends that country
                                and EDM are the best music genres (
                                <a
                                    href='https://www.youtube.com/watch?v=qDyCMxS8YfE'
                                    style={{ color: DARK_PINK }}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    EDM remixes of country songs
                                </a>{' '}
                                slap even harder).
                                <br />
                                <br />
                                Sometimes I{' '}
                                <a
                                    href='https://medium.com/@karenying'
                                    style={{ color: LIGHT_PINK }}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    blog
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
