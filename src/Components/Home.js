import React from 'react';
import '../Styles/Home.css';
import Header from './Header';

class Home extends React.Component {

    render() {
        
        return (
            <>
                <div className="home-container">
                    <Header page="home"/>
                    <div className="home-text">
                        <h1>hi, i'm karen <span class="wave">👋</span></h1>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;