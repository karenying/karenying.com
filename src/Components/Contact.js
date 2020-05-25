import React from 'react';
import '../Styles/Contact.css';
import Header from './Header';
import { BLUE, YELLOW, DARK_PINK } from '../constants';
import Fade from '@material-ui/core/Fade';

class Contact extends React.Component {
    render() {
        return (
            <div className='contact-container'>
                <Header page='contact' />
                <Fade in={true} timeout={{ enter: 1200 }}>
                    <div className='contact-content'>
                        <h2>
                            Got an interesting project you're working on, or
                            just want to say hi?
                        </h2>
                        <p>
                            I'd love to hear from you!
                            <br />
                            <br />
                            The best way to reach me to shoot me an email at{' '}
                            <a
                                href='mailto:karenying7@gmail.com'
                                style={{ color: BLUE }}
                            >
                                karenying7@gmail.com
                            </a>
                            .
                            <br />
                            <br />
                            You can also connect with me on{' '}
                            <a
                                href='https://www.linkedin.com/in/kyying/'
                                style={{ color: YELLOW }}
                            >
                                LinkedIn
                            </a>
                            , or{' '}
                            <a
                                href='https://twitter.com/karen_ying_'
                                style={{ color: DARK_PINK }}
                            >
                                tweet me{' '}
                            </a>
                            .
                        </p>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Contact;
