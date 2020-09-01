import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { Block } from '../components/Block';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const TextFieldCustom = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#FC6600',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#A8A8A8',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FC6600',
        },
        '& .MuiInput-underline:hover:not($disabled):before': {
            borderBottomColor: '#A8A8A8',
        }
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(0),
    },
    textField: {
        fontFamily: 'Montserrat',
        fontWeight: 500,
        fontSize: '16px',
        letterSpacing: '0.1em',
        color: '#F2F3F4',
    },
    textFieldLabel: {
        fontFamily: 'Montserrat',
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '0.1em',
        color: '#F2F3F4',
        opacity: '70%',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: '#F2F3F4',
        background: '#27CEC5',
        borderRadius: 30,
        "&:hover": {
            background: "#27CEC5",
            boxShadow: `5px 5px 5px rgba(0, 0, 0, 0.25)`,
        }
    },
}));

const Settings = (props) => {
    const classes = useStyles();

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [loading, setLoader] = useState(false);
    
    const handleChangeUsername = e => {
        setUsername(e.target.value);
    };
    
    const handleChangeEmail = e => {
        setEmail(e.target.value);
    };
    
    const handleChangePassword = e => {
        setPassword(e.target.value);
    };
    
    const handleSubmit = event => {
        setLoader(true);

        event.preventDefault();
        axios.post(`http://localhost:8080/signup/`, {
            username: username,
            email: email,
            password: password,
        }, {withCredentials: true},)
            .then(response => {
                if (response.status === 201 && response.data !== null) {
                    let { avatar, username } = response.data;
                    props.setAuthUserData(avatar, username);
                    props.history.push(`/`);
                }
            });
        
        setLoader(false);
    };

    return (
        <Fragment>
            <Block>
                <div style={{textAlign: "center", fontSize: "20px"}}>
                    <plaintext>Account Settings</plaintext>
                </div>
                <Grid container spacing={1}>
                    <Grid item xs={6} style={{marginTop: "36px"}}>
                       <img src={props.avatar} style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "70%"}}/>
                       <Button
                            type="submit"
                            justifyContent="center"
                            variant="contained"
                            className={ classes.submit }
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload
                        </Button>
                    </Grid>
                    <Grid item xs={6} >
                    <form onSubmit={ handleSubmit }>
                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <AccountCircle />
                                        </Grid>
                                        <Grid item>
                                            <TextFieldCustom
                                                autoComplete="off"
                                                autoCorrect="off"
                                                style={{ margin: 10, marginTop: 16, }}
                                                id="input-with-icon-grid" 
                                                label="Username"
                                                className={ classes.textField }
                                                onChange={ handleChangeUsername }
                                                InputLabelProps={{
                                                    className: classes.textFieldLabel
                                                }}
                                                InputProps={{
                                                    className: classes.textField
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
        
                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <MailOutlineIcon />
                                        </Grid>
                                        <Grid item>
                                            <TextFieldCustom
                                                autoComplete="off"
                                                autoCorrect="off"
                                                style={{ margin: 10 }}
                                                id="input-with-icon-grid" 
                                                label="Email"
                                                className={ classes.textField }
                                                onChange={ handleChangeEmail }
                                                InputLabelProps={{
                                                    className: classes.textFieldLabel
                                                }}
                                                InputProps={{
                                                    className: classes.textField
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
        
                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <LockOpenIcon />
                                        </Grid>
                                        <Grid item>
                                            <TextFieldCustom
                                                autoComplete="off"
                                                autoCorrect="off"
                                                style={{ margin: 10 }}
                                                id="input-with-icon-grid" 
                                                label="Old Password"
                                                type="password"
                                                className={ classes.textField }
                                                onChange={ handleChangePassword }
                                                InputLabelProps={{
                                                    className: classes.textFieldLabel
                                                }}
                                                InputProps={{
                                                    className: classes.textField
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
        
                                <div className={classes.margin}>
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <LockOpenIcon />
                                        </Grid>
                                        <Grid item>
                                            <TextFieldCustom
                                                autoComplete="off"
                                                autoCorrect="off"
                                                style={{ margin: 10 }}
                                                id="input-with-icon-grid" 
                                                label="New Password"
                                                type="password"
                                                className={ classes.textField }
                                                InputLabelProps={{
                                                    className: classes.textFieldLabel
                                                }}
                                                InputProps={{
                                                    className: classes.textField
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </div>
        
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className={ classes.submit }
                                    style={{
                                        maxWidth: "280px"
                                    }}
                                >
                                    Save
                                </Button>
                            </form>
                    </Grid>
                </Grid>
            </Block>
        </Fragment>
    )
}


const mapStateToProps = (state) => ({
    avatar: state.auth.avatar,
    username: state.auth.username
})

export default connect(mapStateToProps)(Settings);