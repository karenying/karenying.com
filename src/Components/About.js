import React from 'react';
import '../Styles/About.css';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Karen from '../Assets/karen.png';
import Fade from '@material-ui/core/Fade';

function About() {
    const useStyles = makeStyles((theme) => ({
        aboutGrid: {
            textAlign: 'left',
            maxWidth: 1000,
            [theme.breakpoints.up('md')]: {
                padding: '100px 0px',
            },
            [theme.breakpoints.down('md')]: {
                padding: '10px 50px',
            },
        },
        image: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            [theme.breakpoints.up('md')]: {
                justifyContent: 'left',
            },
            [theme.breakpoints.down('md')]: {
                paddingBottom: '10px',
                justifyContent: 'center',
            },
        },
    }));

    const classes = useStyles();

    return (
        <>
            <div className='about-container'>
                <Header page='about' />
                <Grid className={classes.aboutGrid} container>
                    <Grid item sm={12} md={4} className={classes.image}>
                        <Fade in={true} timeout={{ enter: 1000 }}>
                            <img src={Karen} alt='karen' />
                        </Fade>
                    </Grid>
                    <Grid item sm={12} md={8}>
                        <Fade in={true} timeout={{ enter: 1000 }}>
                            <div>
                                <h2>Karen Ying</h2>
                                <p>
                                    Blandit nullam nisl, morbi duis. Amet odio,
                                    amet scelerisque pede volutpat ipsum, lorem
                                    nisl proin pharetra fusce mollis, ut sed
                                    morbi nullam semper eget, sem ut urna.
                                    Ornare mauris aliquip scelerisque, semper
                                    velit. Fringilla blandit nullam nibh, risus
                                    porta sagittis, aliquam eu elit sem, sociis
                                    vitae vel sollicitudin tellus erat turpis.
                                    Cum feugiat amet, at volutpat et orci amet
                                    odio tempor, praesent morbi fermentum arcu
                                    dui duis, sodales nam vitae fringilla
                                    elementum. Ultricies nibh lectus proin
                                    scelerisque, aenean ac dapibus consectetuer
                                    aut bibendum, elit morbi ut tortor nunc nunc
                                    non, in donec mauris a molestie amet. Purus
                                    at justo posuere eu, quis nulla ipsum ut
                                    aenean, dapibus nullam tenetur aliquam in
                                    aliquam in. Varius pariatur class, etiam
                                    velit fusce consectetuer magna sem nibh.
                                    Felis sit pellentesque augue aliquet varius
                                    est. In lorem, vitae suspendisse aliquet hac
                                    at nonummy, adipiscing non, felis nam. Magna
                                    cras quam nec etiam, nulla quis in,
                                    sollicitudin ante scelerisque tellus.
                                    Fermentum tincidunt, nulla velit, proin
                                    maecenas nibh egestas.
                                </p>
                            </div>
                        </Fade>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default About;
