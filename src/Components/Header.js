import React from 'react';
import '../Styles/Header.css';
import { DARK_PINK, LIGHT_PINK, BLUE, YELLOW, LIGHT_GRAY } from '../constants';
import { Link } from 'react-router-dom';

const HeaderLink = ({ title, color, edge, selected }) => {
    const padding = edge ? '0px' : '5px';
    let link = (title === "karenying.com") ? "home" : title;

    return (
        <div className="header-link">
            <Link 
                to={`/${link}`} 
                style={{textDecoration: 'none'}}
                className={selected ? "header-no-link" : null}
            >
                <h3 style={{color, paddingRight: padding}}>{title}</h3>
            </Link>
            <div className={selected ? "header-dot-active" : "header-dot"} >
                {
                    title === "karenying.com" ? null : <h3 style={{color}}>•</h3>
                }
            </div>
        </div>
    )
};

class Header extends React.Component {

    render() {

        const { page } = this.props;

        return (
            <>
                <div className="header-container">
                    <div className="header-logo">
                        <HeaderLink 
                            title="karenying.com" 
                            color={ LIGHT_GRAY } 
                            edge={ false } 
                            selected={ page === "home" ? true : false }
                        />
                    </div>
                    <div className="header-content">
                        <HeaderLink 
                            title="home" 
                            color={ DARK_PINK } 
                            edge={ false } 
                            selected={ page === "home" ? true : false }
                        />
                        <h3 style={{color: LIGHT_GRAY, paddingRight: '5px'}}>/</h3>
                        <HeaderLink 
                            title="about" 
                            color={ LIGHT_PINK } 
                            edge={ false } 
                            selected={ page === "about" ? true : false }
                        />
                        <h3 style={{color: LIGHT_GRAY, paddingRight: '5px'}} >/</h3>
                        <HeaderLink 
                            title="projects" 
                            color={ BLUE } 
                            edge={ false } 
                            selected={ page === "projects" ? true : false }
                        />
                        <h3 style={{color: LIGHT_GRAY, paddingRight: '5px'}}>/</h3>
                        <HeaderLink 
                            title="contact" 
                            color={ YELLOW } 
                            edge={ true } 
                            selected={ page === "contact" ? true : false }
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Header;