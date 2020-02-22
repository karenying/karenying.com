import React from 'react';
import '../Styles/Footer.css';
import { FaFacebook, FaLinkedin, FaCode, FaChevronDown } from 'react-icons/fa';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { IoMdMail } from 'react-icons/io';
import { LIGHT_GRAY, BLUE, YELLOW, LIGHT_PINK, DARK_PINK } from '../constants';


class Footer extends React.Component {

    render() {
        const { clickFunction } = this.props;

        return (
            <>
                <div className="footer-container">
                    <div className="footer-copyright">
                        <p>© karen ying 2020</p>
                    </div>
                    <div className="footer-links-container">
                        <div className="footer-link">
                            <h3 style={{color: LIGHT_GRAY}}>•</h3>
                        </div>
                        <div className="footer-link"> 
                            <a href="https://github.com/karenying/karenying.com">
                                <FaCode 
                                    color={ YELLOW } 
                                    style={{ animationDelay: '100ms' }}
                                    title="View site source code"
                                />
                            </a>
                        </div>
                        <div className="footer-link"> 
                            <a href="https://github.com/karenying/karenying.com">
                                <GoMarkGithub 
                                    color={ DARK_PINK } 
                                    style={{ animationDelay: '200ms' }}
                                    title="Github"
                                />
                            </a>
                        </div>
                        <div className="footer-link"> 
                            <a href="mailto:karenying7@gmail.com">
                                <IoMdMail 
                                    color={ LIGHT_PINK } 
                                    style={{ animationDelay: '300ms' }}
                                    title="Email"
                                />
                            </a>
                        </div>
                        <div className="footer-link"> 
                            <a href="https://linkedin.com/in/kyying/">
                                <FaLinkedin 
                                    color={ BLUE } 
                                    style={{ animationDelay: '400ms' }}
                                    title="LinkedIn"
                                />
                            </a>
                        </div>
                        <div className="footer-link"> 
                            <a href="https://www.facebook.com/karen.ying.31">
                                <FaFacebook 
                                    color={ YELLOW } 
                                    style={{ animationDelay: '500ms' }}
                                    title="Facebook"
                                />
                            </a>
                        </div>
                        <div className="footer-link"> 
                            <a href="https://twitter.com/karen_ying_">
                                <AiFillTwitterCircle 
                                    color={ DARK_PINK } 
                                    size="18px" 
                                    style={{ animationDelay: '600ms' }}
                                    title="Twitter"
                                />
                            </a>
                        </div>
                        <div className="footer-link" style={{ marginRight: '5px'}}> 
                            <a href="https://www.instagram.com/karenyingstagram/">
                                <AiFillInstagram 
                                    color={ LIGHT_PINK } 
                                    size="18px" 
                                    style={{ animationDelay: '700ms' }}
                                    title="Instagram"
                                />
                            </a>
                        </div>
                        <div className="footer-link">
                            <h3 style={{ color: LIGHT_GRAY, animationDelay: '800ms' }}>•</h3>
                        </div>
                        <div className="footer-link" onClick={ clickFunction }> 
                            <FaChevronDown color={ BLUE } size="20px" title="Hide footer"/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;