import React from 'react';
import '../Styles/FooterIcon.css';
import { FaChevronUp } from 'react-icons/fa';
import { LIGHT_PINK } from '../constants';
import Hidden from '@material-ui/core/Hidden';

export default function FooterIcon(props) {
    const { clickFunction } = props;

    return (
        <Hidden xsDown>
            <div className='footer-icon-container'>
                <div className='footer-icon-content' onClick={clickFunction}>
                    <FaChevronUp
                        color={LIGHT_PINK}
                        size='2rem'
                        title='Show footer'
                    />
                </div>
            </div>
        </Hidden>
    );
}
