import React from 'react';
import '../Styles/Contact.css';
import Header from './Header';
import { BLUE, YELLOW, DARK_PINK } from '../constants';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

function Contact() {
    const useStyles = makeStyles((theme) => ({
        contact: {
            [theme.breakpoints.up('sm')]: {
                paddingTop: 200,
            },
            [theme.breakpoints.down('sm')]: {
                paddingTop: 80,
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className={'contact-container ' + classes.contact}>
            <Header page='contact' />
            <Fade in={true} timeout={{ enter: 1200 }}>
                <div className='contact-content'>
                    <h2>
                        got an interesting project you're working on, or just
                        want to say hi?
                    </h2>
                    <p>
                        I'd love to hear from you!
                        <br />
                        <br />
                        The best way to reach me is to shoot me an email at{' '}
                        <a
                            href='mailto:karenying7@gmail.com'
                            style={{ color: BLUE }}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            karenying7@gmail.com
                        </a>
                        .
                        <br />
                        <br />
                        You can also connect with me on{' '}
                        <a
                            href='https://www.linkedin.com/in/kyying/'
                            style={{ color: YELLOW }}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            LinkedIn
                        </a>
                        , or{' '}
                        <a
                            href='https://twitter.com/karen_ying_'
                            style={{ color: DARK_PINK }}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            tweet at me
                        </a>
                        .
                    </p>
                </div>
            </Fade>
        </div>
    );
}

export default Contact;
