import React from 'react';
import axios from 'axios';
import { resetAuthUserData } from '../redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:8080/logout/`, {
            withCredentials: true,
        })
            .then(response => {
                if (response.status === 200) {
                    this.props.resetAuthUserData();
                }
            });
    }

    render() {
        return <Redirect to='/' />
    }
}

export default connect(null, { resetAuthUserData })(Logout);