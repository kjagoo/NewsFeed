import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1> News Feed RSS</h1>
                <p>React, Reduc and React Router for great responsiveness.</p>
                <Link to="about" className="btn btn-primary btn-lg"> About</Link>
            </div>
        );
    }
}

export default HomePage;