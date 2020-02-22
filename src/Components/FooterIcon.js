import React from 'react';
import '../Styles/FooterIcon.css';
import { FaChevronUp } from 'react-icons/fa';
import { BLUE } from '../constants';

class FooterIcon extends React.Component {

    render() {
        const { clickFunction } = this.props;

        return (
            <>
                <div className="footer-icon-container">
                    <div className="footer-icon-content" onClick={ clickFunction }>
                        <FaChevronUp color={ BLUE } size="20px" title="Show footer"/>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterIcon;