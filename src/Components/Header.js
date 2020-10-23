import React from 'react';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

import '../Styles/Header.css';
import { DARK_PINK, BLUE, YELLOW, LIGHT_GRAY, LIGHT_PINK } from '../constants';

const HeaderLink = ({ title, color, edge, selected }) => {
  const padding = edge ? '0rem' : '0.5rem';
  const link = title === 'karenying.com' ? 'about' : title;

  return (
    <div className='header-link'>
      <Link
        to={`/${link}`}
        style={{ textDecoration: 'none' }}
        className={selected ? 'header-no-link' : null}
      >
        <h3 style={{ color, paddingRight: padding }}>{title}</h3>
        <div className={selected ? 'header-dot-active' : 'header-dot'}>
          {title !== 'karenying.com' && <h3 style={{ color }}>•</h3>}
        </div>
      </Link>
    </div>
  );
};

const Header = (props) => {
  const { page } = props.match.params;
  const useStyles = makeStyles((theme) => ({
    headerContent: {
      [theme.breakpoints.up('sm')]: {
        position: 'fixed',
        right: 0,
        paddingRight: '5rem',
      },
      [theme.breakpoints.down('sm')]: {},
    },
    headerContainer: {
      [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
    },
  }));

  const classes = useStyles();

  return (
    <div className={'header-container ' + classes.headerContainer}>
      <Hidden xsDown>
        <div className='header-logo'>
          <HeaderLink
            title='karenying.com'
            color={LIGHT_GRAY}
            selected={page === 'about' ? true : false}
          />
        </div>
      </Hidden>
      <div className={'header-content ' + classes.headerContent}>
        <HeaderLink
          title='about'
          color={DARK_PINK}
          selected={page === 'about' ? true : false}
        />
        <h3 id='slash'>/</h3>
        <HeaderLink
          title='projects'
          color={BLUE}
          selected={page === 'projects' ? true : false}
        />
        <h3 id='slash'>/</h3>
        <HeaderLink
          title='contact'
          color={YELLOW}
          selected={page === 'contact' ? true : false}
        />
        <h3 id='slash'>/</h3>
        <div className='header-link'>
          <a
            href='https://www.blog.karenying.com/'
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
