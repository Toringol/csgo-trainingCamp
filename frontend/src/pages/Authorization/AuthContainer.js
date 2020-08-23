import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';
import Auth from './Auth';

class Authorization extends React.Component {
    render() {
        return <Auth {...this.props} />
    }    
}


export default connect(null, { setAuthUserData })(Authorization);