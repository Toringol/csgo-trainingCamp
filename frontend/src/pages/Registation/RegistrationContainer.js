import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';
import Registation from './Registration';

class Registration extends React.Component {
    render() {
        return <Registation {...this.props} />
    }    
}


export default connect(null, { setAuthUserData })(Registration);