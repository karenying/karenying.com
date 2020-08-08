import React from 'react';
import '../Styles/FooterIcon.css';
import { FaChevronUp } from 'react-icons/fa';
import { LIGHT_PINK } from '../constants';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    footerContainer: {
        [theme.breakpoints.down('xs')]: {
            position: 'static',
            padding: 0,
            paddingBottom: '1rem',
        },
    },
    footerIcon: {
        [theme.breakpoints.down('xs')]: {
            paddingRight: '1.7rem !important',
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

export default function FooterIcon(props) {
    const { clickFunction } = props;

    const classes = useStyles();

    return (
        <div className={`footer-icon-container ${classes.footerContainer} `}>
            <div
                className={`footer-icon-content ${classes.footerContent} ${classes.footerIcon}`}
                onClick={clickFunction}
            >
                <FaChevronUp
                    color={LIGHT_PINK}
                    size='2rem'
                    title='Show footer'
                />
            </div>
        </div>
    );
}
