import React from 'react';
import '../Styles/Footer.css';
import { FaLinkedin, FaCode, FaChevronDown } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { IoMdMail } from 'react-icons/io';
import { LIGHT_GRAY, BLUE, YELLOW, LIGHT_PINK, DARK_PINK } from '../constants';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f5',
        color: '#333333',
        boxShadow: '3px 3px 10px black',
        fontSize: 11,
        fontWeight: 700,
    },
    arrow: {
        color: '#f5f5f5',
    },
}))(Tooltip);

function Footer(props) {
    const { clickFunction } = props;

    return (
        <div className='footer-container'>
            <Hidden xsDown>
                <div className='footer-copyright'>
                    <p
                        style={{
                            marginRight: '10px',
                            color: DARK_PINK,
                        }}
                    >
                        ©
                    </p>
                    <p
                        style={{
                            marginRight: '10px',
                            color: LIGHT_PINK,
                        }}
                    >
                        karen ying 2020
                    </p>
                    <h3 style={{ color: LIGHT_GRAY }}>•</h3>
                    <p style={{ marginLeft: '10px', color: BLUE }}>
                        all rights reserved
                    </p>
                </div>
            </Hidden>
            <div className='footer-links-container'>
                <div className='footer-link'>
                    <h3 style={{ color: LIGHT_GRAY }}>•</h3>
                </div>
                <div className='footer-link'>
                    <LightTooltip
                        title='Site source code'
                        placement='top'
                        arrow
                    >
                        <a
                            href='https://github.com/karenying/karenying.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaCode
                                color={YELLOW}
                                style={{ animationDelay: '100ms' }}
                            />
                        </a>
                    </LightTooltip>
                </div>
                <div className='footer-link'>
                    <LightTooltip title='GitHub' placement='top' arrow>
                        <a
                            href='https://github.com/karenying/karenying.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <GoMarkGithub
                                color={DARK_PINK}
                                style={{ animationDelay: '200ms' }}
                            />
                        </a>
                    </LightTooltip>
                </div>
                <div className='footer-link'>
                    <LightTooltip title='Email' placement='top' arrow>
                        <a
                            href='mailto:karenying7@gmail.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <IoMdMail
                                color={LIGHT_PINK}
                                style={{ animationDelay: '300ms' }}
                            />
                        </a>
                    </LightTooltip>
                </div>
                <div className='footer-link'>
                    <LightTooltip title='LinkedIn' placement='top' arrow>
                        <a
                            href='https://linkedin.com/in/kyying/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FaLinkedin
                                color={BLUE}
                                style={{ animationDelay: '400ms' }}
                            />
                        </a>
                    </LightTooltip>
                </div>

                <div className='footer-link'>
                    <LightTooltip title='Twitter' placement='top' arrow>
                        <a
                            href='https://twitter.com/karen_ying_'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <AiFillTwitterCircle
                                color={YELLOW}
                                size='18px'
                                style={{ animationDelay: '500ms' }}
                            />
                        </a>
                    </LightTooltip>
                </div>
                <div className='footer-link'>
                    <h3
                        style={{
                            color: LIGHT_GRAY,
                            animationDelay: '600ms',
                        }}
                    >
                        •
                    </h3>
                </div>
                <div className='footer-link' onClick={clickFunction}>
                    <FaChevronDown
                        color={DARK_PINK}
                        size='20px'
                        title='Hide footer'
                    />
                </div>
            </div>
        </div>
    );
}

export default Footer;
