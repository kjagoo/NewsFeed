import React, {PropTypes} from 'react';
import Header from './common/Header';
import { GoogleLogout, GoogleLogin } from './Auth';


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <GoogleLogout
                    buttonText="Logout"
                    />
                <GoogleLogin
                    clientId= "320395606512-vr9n6unncm24kcs2kviq13q1kjkhfpjb.apps.googleusercontent.com"/>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;