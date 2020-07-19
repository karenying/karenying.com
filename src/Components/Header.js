import React from 'react';
import '../Styles/Header.css';
import { DARK_PINK, LIGHT_PINK, BLUE, YELLOW, LIGHT_GRAY } from '../constants';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

const HeaderLink = ({ title, color, edge, selected }) => {
    const padding = edge ? '0rem' : '0.5rem';
    let link = title === 'karenying.com' ? 'home' : title;

    return (
        <div className='header-link'>
            <Link
                to={`/${link}`}
                style={{ textDecoration: 'none' }}
                className={selected ? 'header-no-link' : null}
            >
                <h3 style={{ color, paddingRight: padding }}>{title}</h3>
                <div className={selected ? 'header-dot-active' : 'header-dot'}>
                    {title === 'karenying.com' ? null : (
                        <h3 style={{ color }}>•</h3>
                    )}
                </div>
            </Link>
        </div>
    );
};

export default function Header(props) {
    const { page } = props;

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
                        edge={false}
                        selected={page === 'home' ? true : false}
                    />
                </div>
            </Hidden>
            <div className={'header-content ' + classes.headerContent}>
                <HeaderLink
                    title='home'
                    color={DARK_PINK}
                    edge={false}
                    selected={page === 'home' ? true : false}
                />
                <h3 id='slash'>/</h3>
                <HeaderLink
                    title='about'
                    color={LIGHT_PINK}
                    edge={false}
                    selected={page === 'about' ? true : false}
                />
                <h3 id='slash'>/</h3>
                <HeaderLink
                    title='projects'
                    color={BLUE}
                    edge={false}
                    selected={page === 'projects' ? true : false}
                />
                <h3 id='slash'>/</h3>
                <HeaderLink
                    title='contact'
                    color={YELLOW}
                    edge={true}
                    selected={page === 'contact' ? true : false}
                />
            </div>
        </div>
    );
}
