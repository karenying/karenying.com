import React from 'react';
import '../Styles/FooterIcon.css';
import { TiInfoLargeOutline } from 'react-icons/ti';
import { LIGHT_GRAY } from '../constants';

class FooterIcon extends React.Component {

    render() {
        
        return (
            <>
                <div className="footer-icon-container">
                    <div className="footer-icon-content">
                        <TiInfoLargeOutline color={ LIGHT_GRAY } size='20px'/>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterIcon;