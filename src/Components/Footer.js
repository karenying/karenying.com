import React from 'react';
import { FaLinkedin, FaCode } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillMediumCircle } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { IoMdMail } from 'react-icons/io';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import '../Styles/Footer.css';
import {
  LIGHT_GRAY,
  BLUE,
  YELLOW,
  LIGHT_PINK,
  DARK_PINK,
  ALMOST_WHITE,
  DARK_GRAY,
} from '../constants';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    [theme.breakpoints.down('xs')]: {
      position: 'static',
      padding: 0,
      paddingBottom: '1rem',
    },
  },
  footerContent: {
    [theme.breakpoints.down('xs')]: {
      position: 'static',
      marginLeft: 'auto',
      paddingRight: '1rem',
    },
  },
}));

const LightTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: ALMOST_WHITE,
    color: DARK_GRAY,
    boxShadow: '0.3rem 0.3rem 1rem black',
    fontSize: 11,
    fontWeight: 700,
  },
  arrow: {
    color: ALMOST_WHITE,
  },
}))(Tooltip);

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={`footer-container ${classes.footerContainer}`}>
      <Hidden xsDown>
        <div className='footer-copyright'>
          <p
            style={{
              marginRight: '1rem',
              color: DARK_PINK,
            }}
          >
            ©
          </p>
          <p
            style={{
              marginRight: '1rem',
              color: LIGHT_PINK,
            }}
          >
            karen ying 2020
          </p>
          <h3 style={{ color: LIGHT_GRAY }}>•</h3>
          <p style={{ marginLeft: '1rem', color: BLUE }}>all rights reserved</p>
        </div>
      </Hidden>
      <div className={`footer-links-container ${classes.footerContent}`}>
        <div className='footer-link'>
          <h3 style={{ color: LIGHT_GRAY }}>•</h3>
        </div>
        <div className='footer-link'>
          <LightTooltip title='Site source code' placement='top' arrow>
            <a
              href='https://github.com/karenying/karenying.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaCode color={YELLOW} style={{ animationDelay: '100ms' }} />
            </a>
          </LightTooltip>
        </div>
        <div className='footer-link'>
          <LightTooltip title='GitHub' placement='top' arrow>
            <a
              href='https://github.com/karenying/karenying.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GoMarkGithub
                color={DARK_PINK}
                style={{ animationDelay: '200ms' }}
              />
            </a>
          </LightTooltip>
        </div>
        <div className='footer-link'>
          <LightTooltip title='Email' placement='top' arrow>
            <a
              href='mailto:karenying7@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoMdMail
                color={LIGHT_PINK}
                style={{ animationDelay: '300ms' }}
                size='1.7rem'
              />
            </a>
          </LightTooltip>
        </div>
        <div className='footer-link'>
          <LightTooltip title='LinkedIn' placement='top' arrow>
            <a
              href='https://linkedin.com/in/kyying/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin
                color={BLUE}
                style={{ animationDelay: '400ms' }}
                size='1.7rem'
              />
            </a>
          </LightTooltip>
        </div>

        <div className='footer-link'>
          <LightTooltip title='Twitter' placement='top' arrow>
            <a
              href='https://twitter.com/karen_ying_'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillTwitterCircle
                color={YELLOW}
                size='1.9rem'
                style={{ animationDelay: '500ms' }}
              />
            </a>
          </LightTooltip>
        </div>
        <div className='footer-link'>
          <LightTooltip title='Medium' placement='top' arrow>
            <a
              href='https://medium.com/@karenying'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillMediumCircle
                color={DARK_PINK}
                size='1.9rem'
                style={{ animationDelay: '600ms' }}
              />
            </a>
          </LightTooltip>
        </div>
        <div className='footer-link'>
          <h3
            style={{
              color: LIGHT_GRAY,
              animationDelay: '700ms',
            }}
          >
            •
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
