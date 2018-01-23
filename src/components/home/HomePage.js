import React from 'react';
import { Link } from 'react-router';
import NewsPage from '../news/NewsPage';
 
class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1> News Feed RSS</h1>
                    <p>React, Reduc and React Router for great responsiveness.</p>
                    <Link to="about" className="btn btn-primary btn-lg"> About</Link>
                </div>
                <NewsPage />
            </div>
        );
    }
}

export default HomePage;