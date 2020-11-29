import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

import '../Styles/Header.css';
import { DARK_PINK, BLUE, YELLOW, LIGHT_GRAY, LIGHT_PINK } from '../constants';

const HeaderLink = ({ title, color, edge, selected }) => {
  const padding = edge ? '0rem' : '0.5rem';
  const link = title === 'karenying.com' ? '' : title;

  return (
    <div className='header-link'>
      <Link
        to={`/${link}`}
        style={{ textDecoration: 'none' }}
        className={selected && 'header-no-link'}
      >
        <h3 style={{ color, paddingRight: padding }}>{title}</h3>
        {title !== 'karenying.com' && (
          <div className={selected ? 'header-dot-active' : 'header-dot'}>
            <h3 style={{ color }}>•</h3>
          </div>
        )}
      </Link>
    </div>
  );
};

const Header = () => {
  const page = useParams().page || 'about';

  const useStyles = makeStyles((theme) => ({
    headerContent: {
      [theme.breakpoints.up('sm')]: {
        position: 'fixed',
        right: 0,
        paddingRight: '5rem',
      },
    },
    headerContainer: {
      [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
    },
  }));

  const classes = useStyles();
  const { headerContent, headerContainer } = classes;

  return (
    <div className={`header-container ${headerContainer}`}>
      <Hidden xsDown>
        <div className='header-logo'>
          <HeaderLink
            title='karenying.com'
            color={LIGHT_GRAY}
            selected={page === 'about'}
          />
        </div>
      </Hidden>
      <div className={`header-content ${headerContent}`}>
        <HeaderLink
          title='about'
          color={DARK_PINK}
          selected={page === 'about'}
        />
        <h3 id='slash'>/</h3>
        <HeaderLink
          title='projects'
          color={BLUE}
          selected={page === 'projects'}
        />
        <h3 id='slash'>/</h3>
        <HeaderLink
          title='contact'
          color={YELLOW}
          selected={page === 'contact'}
        />
        <h3 id='slash'>/</h3>
        <div className='header-link'>
          <a
            href='https://blog.karenying.com/'
            style={{ textDecoration: 'none' }}
          >
            <h3 style={{ color: LIGHT_PINK }}>blog</h3>
            <div className='header-dot'>
              <h3 style={{ color: LIGHT_PINK }}>•</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
