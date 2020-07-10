import React, {Fragment} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Block } from '../components/Block'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'

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

export const Registration = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Block>
                <div className="blockForm">
                    <p>JOIN THE TRAINING CAMP</p>
                    
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
                                    className={classes.textField}
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
                                    className={classes.textField}
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
                                    label="Password"
                                    type="password"
                                    className={classes.textField}
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
                                    label="Confirm Password"
                                    type="password"
                                    className={classes.textField}
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
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>

                    
                    <NavLink style={{ margin: 10 }} className="link" to="/signin">
                        Already have an account? Sign in
                    </NavLink>
                </div>
            </Block>
        </Fragment>
    )
}