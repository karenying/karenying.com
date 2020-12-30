import React from 'react';
import { FaLinkedin, FaCode } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillMediumCircle } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { IoMdMail } from 'react-icons/io';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import '../Styles/Footer.css';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
      paddingBottom: '1rem',
    },
  },
  footerContent: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      paddingRight: '1rem',
    },
  },
}));

const StyledTooltip = withStyles(() => ({
  tooltip: {
    boxShadow: '0.3rem 0.3rem 1rem black',
    fontSize: 11,
    fontWeight: 700,
    fontFamily: 'Varela Round',
  },
}))(Tooltip);

const Footer = () => {
  const classes = useStyles();
  const { footerContainer, footerContent } = classes;

  return (
    <div className={`footer-container ${footerContainer}`}>
      <Hidden xsDown>
        <div className='footer-copyright'>
          <p
            style={{
              marginRight: '1rem',
            }}
          >
            ©
          </p>
          <p
            style={{
              marginRight: '1rem',
            }}
          >
            karen ying 2020
          </p>
          <h3>•</h3>
          <p style={{ marginLeft: '1rem' }}>all rights reserved</p>
        </div>
      </Hidden>
      <div className={`footer-links-container ${footerContent}`}>
        <div className='footer-link code'>
          <StyledTooltip title='Site source code' placement='top' arrow>
            <a
              href='https://github.com/karenying/karenying.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaCode size='1.7rem' />
            </a>
          </StyledTooltip>
        </div>
        <div className='footer-link github'>
          <StyledTooltip title='GitHub' placement='top' arrow>
            <a
              href='https://github.com/karenying/karenying.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GoMarkGithub style={{ animationDelay: '100ms' }} />
            </a>
          </StyledTooltip>
        </div>
        <div className='footer-link email'>
          <StyledTooltip title='Email' placement='top' arrow>
            <a
              href='mailto:karenying7@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoMdMail style={{ animationDelay: '200ms' }} size='1.7rem' />
            </a>
          </StyledTooltip>
        </div>
        <div className='footer-link linkedin'>
          <StyledTooltip title='LinkedIn' placement='top' arrow>
            <a
              href='https://linkedin.com/in/kyying/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin style={{ animationDelay: '300ms' }} size='1.7rem' />
            </a>
          </StyledTooltip>
        </div>

        <div className='footer-link twitter'>
          <StyledTooltip title='Twitter' placement='top' arrow>
            <a
              href='https://twitter.com/karen_ying_'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillTwitterCircle
                size='1.9rem'
                style={{ animationDelay: '400ms' }}
              />
            </a>
          </StyledTooltip>
        </div>
        <div className='footer-link medium'>
          <StyledTooltip title='Medium' placement='top' arrow>
            <a
              href='https://medium.com/@karenying'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillMediumCircle
                size='1.9rem'
                style={{ animationDelay: '500ms' }}
              />
            </a>
          </StyledTooltip>
        </div>
      </div>
    </div>
  );
};

export default Footer;
