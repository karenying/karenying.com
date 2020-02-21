import React from 'react';
import '../Styles/Header.css';
import { DARK_PINK, LIGHT_PINK, BLUE, YELLOW, LIGHT_GRAY } from '../constants';

class Header extends React.Component {

    render() {
        
        return (
            <>
                <div className="header-container">
                    <div className="header-logo">
                        <h3 style={{color: LIGHT_GRAY}}>karenying.com</h3>
                    </div>
                    <div className="header-content">
                        <div className="header-link">
                            <h3 style={{color: DARK_PINK, paddingRight: '5px'}}>home</h3>
                            <div className="header-dot" >
                                <h3 style={{color: DARK_PINK}}>•</h3>
                            </div>
                        </div>
                        <h3 style={{color: LIGHT_GRAY, paddingRight: '5px'}}>/</h3>
                        <div className="header-link">
                            <h3 style={{color: LIGHT_PINK, paddingRight: '5px'}}>about</h3>
                            <div className="header-dot">
                                <h3 style={{color: LIGHT_PINK}}>•</h3>
                            </div>
                        </div>
                        <h3 style={{color: LIGHT_GRAY, paddingRight: '5px'}}>/</h3>
                        <div className="header-link">
                            <h3 style={{color: BLUE, paddingRight: '5px'}}>projects</h3>
                            <div className="header-dot">
                                <h3 style={{color: BLUE}}>•</h3>
                            </div>
                        </div>
                        <h3 style={{color: LIGHT_GRAY, paddingRight: '5px'}}>/</h3>
                        <div className="header-link">
                            <h3 style={{color: YELLOW}}>contact</h3>
                            <div className="header-dot">
                                <h3 style={{color: YELLOW}}>•</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;