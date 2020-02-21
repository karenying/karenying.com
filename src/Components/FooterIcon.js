import React from 'react';
import '../Styles/FooterIcon.css';
import { GoPlus } from 'react-icons/go';
import { BLUE } from '../constants';

class FooterIcon extends React.Component {

    render() {
        
        const { clickFunction } = this.props;

        return (
            <>
                <div className="footer-icon-container">
                    <div className="footer-icon-content" >
                        <GoPlus color={ BLUE } size="20px" style={{ marginTop: '-2px' }} onClick={ clickFunction }/>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterIcon;