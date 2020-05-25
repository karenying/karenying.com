import React from 'react';
import '../Styles/FooterIcon.css';
import { FaChevronUp } from 'react-icons/fa';
import { DARK_PINK } from '../constants';
import Hidden from '@material-ui/core/Hidden';

class FooterIcon extends React.Component {
    render() {
        const { clickFunction } = this.props;

        return (
            <Hidden xsDown>
                <div className='footer-icon-container'>
                    <div
                        className='footer-icon-content'
                        onClick={clickFunction}
                    >
                        <FaChevronUp
                            color={DARK_PINK}
                            size='20px'
                            title='Show footer'
                        />
                    </div>
                </div>
            </Hidden>
        );
    }
}

export default FooterIcon;
