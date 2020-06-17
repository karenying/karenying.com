import React from 'react';
import '../Styles/FooterIcon.css';
import { FaChevronUp } from 'react-icons/fa';
import { DARK_PINK } from '../constants';
import Hidden from '@material-ui/core/Hidden';

function FooterIcon(props) {
    const { clickFunction } = props;

    return (
        <Hidden xsDown>
            <div className='footer-icon-container'>
                <div className='footer-icon-content' onClick={clickFunction}>
                    <FaChevronUp
                        color={DARK_PINK}
                        size='2rem'
                        title='Show footer'
                    />
                </div>
            </div>
        </Hidden>
    );
}

export default FooterIcon;
