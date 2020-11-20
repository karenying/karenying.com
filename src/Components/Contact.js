import React from 'react';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

import '../Styles/Contact.css';
import { BLUE, YELLOW, DARK_PINK } from '../constants';

const Contact = () => {
  const useStyles = makeStyles((theme) => ({
    contact: {
      [theme.breakpoints.up('sm')]: {
        paddingTop: '20rem',
      },
      [theme.breakpoints.down('sm')]: {
        paddingTop: '8rem',
      },
    },
  }));

  const classes = useStyles();
  const { contact } = classes;

  return (
    <div className={`contact-container ${contact}`}>
      <Fade in timeout={{ enter: 1200 }}>
        <div className='contact-content'>
          <h2>
            got an interesting project you're working on, or just want to say
            hi?
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
            , or DM/tweet at me on{' '}
            <a
              href='https://twitter.com/karen_ying_'
              style={{ color: DARK_PINK }}
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
            .
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
