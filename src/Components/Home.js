import React from 'react';
import '../Styles/Home.css';
import Header from './Header';

function Home() {
    return (
        <div className='home-container'>
            <Header page='home' />
            <div className='home-text'>
                <h1>
                    hi, i'm karen{' '}
                    <span className='wave' role='img' aria-label='wave'>
                        👋
                    </span>
                </h1>
            </div>
        </div>
    );
}

export default Home;
