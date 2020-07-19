import React from 'react';
import '../Styles/Error.css';
import Header from './Header';

export default function Error() {
    return (
        <div className='error-container'>
            <Header page='error' />
            <div className='error-text'>
                <h1>
                    oops, something went wrong{' '}
                    <span role='img' aria-label='confused'>
                        😨
                    </span>
                </h1>
            </div>
        </div>
    );
}
