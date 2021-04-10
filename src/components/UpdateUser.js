import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'


import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

class UpdateUser extends Component{

    constructor(){
        super();
        this.username = React.createRef();
        this.password = React.createRef();

        this.state = {message: ''}
    }

    updateUser(event){
        console.log('Username...',this.props.match.params.username)
        console.log('password...',this.password.current.value)

        event.preventDefault();

        this.props.onUpdateUser(this.props.match.params.username , this.password.current.value)
    }


    render(){

        const classes = useStyles;

        return(

            <div>
                <Container component="main" maxWidth="xs">
                <Typography component="h1" variant="h5" style={{textAlign:"center",textShadow:"2px 2px #E3EEFF"}}>
                    Update Your Password
                </Typography>
                <br/>
                <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    defaultValue={this.props.match.params.username} 
                    id="standard-read-only-input" 
                    label="Username" 
                    variant="outlined" 
                    InputProps={{readOnly: true,}}
                    required
                    fullWidth
                    style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}
                    />
                </Grid>

                <Grid item xs={12}>
                <TextField
                    inputRef={this.password} 
                    id="outlined-required"  
                    type="password"  
                    label="Enter new password to be updated" 
                    variant="outlined"
                    required
                    fullWidth
                    InputLabelProps={{shrink: true}}
                    style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}
                    />
                </Grid>

                <Grid item xs={12}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.button} 
                    onClick={this.updateUser.bind(this)}
                    >
                        Update Password
                </Button>
                </Grid>

                </Grid>
                </form>
                </Container>
            </div>
            // <div>

            //     <br/>
            //      <form className={classes.root} noValidate autoComplete="off" >
            //      &emsp;
            //      <TextField  defaultValue={this.props.match.params.username} id="standard-read-only-input" label="Username" variant="filled" InputProps={{readOnly: true,}}></TextField>
            //      </form>
            //      <br/>
            //      <form className={classes.root} noValidate autoComplete="off">
            //      &emsp;
            //      <TextField  inputRef={this.password} id="standard-password-input" label="Password" type="password" helperText="New password to be updated" autoComplete="current-password" variant="filled"></TextField>
            //      </form>
            //      <br/>
            //      &emsp;
            //      <Button variant="contained" color="primary" className={classes.button} onClick={this.updateUser.bind(this)}>Update Passowrd</Button> 
            //      <br/>
            //      <form className={classes.root} noValidate autoComplete="off" >
            //      &emsp;
            //      <TextField fullWidth  disabled id="outlined-required" label={this.props.message} variant="filled"></TextField>
            //      </form>

            
            // </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.message,
        // bookings: state.bookings
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onUpdateUser: (username, password) => dispatch(actions.updateUsers(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(UpdateUser);
