import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { setAuthUserData } from '../../redux/authReducer'
import { connect } from 'react-redux';

class NavbarContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:8080/`, {
            withCredentials: true,
        })
            .then(response => {
                if (response.status === 200 && response.data !== null) {
                    let { avatar, username } = response.data;
                    this.props.setAuthUserData(avatar, username);
                }
            });
    }

    render() {
        return <Navbar {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    avatar: state.auth.avatar,
    username: state.auth.username
})

export default connect(mapStateToProps, { setAuthUserData })(NavbarContainer);