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
                        <h1>hi, i'm karen <span className="wave" role="img" aria-label="wave">👋</span></h1>
                        { /*<h3>hehe</h3>*/ }
                    </div>
                </div>
            </>
        );
    }
}

export default Home;