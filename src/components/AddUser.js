import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'


import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';

import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import Container from '@material-ui/core/Container';



function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {/* <Link color="inherit" href="https://material-ui.com/"> */}
          Your Website
        {/* </Link>*/}{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.dark,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
    



class AddUser extends Component{

    constructor(){
        super();
        this.username = React.createRef();
        this.password = React.createRef();

        this.state = {message: ''}
    }

    addUser(event){
        console.log('username...',this.username.current.value)
        console.log('password...',this.password.current.value)

        this.setState = {message: ''}
        this.props.onAddUser({
            username: this.username.current.value,
            password: this.password.current.value
        })
    }

    render() {
        
        

        const classes = useStyles;
        
        const handleClick = 
        
        this.addUser.bind(this)
        


        return (
             <div>
                 
                 <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper} >
        <div style={{display:"flex",justifyContent:"center"}}>
        <Avatar className={classes.avatar} style={{backgroundImage:" linear-gradient(blue, red)"}}>
          <LockTwoToneIcon />
        </Avatar>
        </div>
        <Typography component="h1" variant="h5" style={{textAlign:"center",textShadow:"2px 2px #E3EEFF"}}>
          Sign up (New User)
        </Typography>
        <br/>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Enter Username"
                inputRef={this.username}
                style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                inputRef={this.password}
                style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <br/>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //className={classes.submit}
            //onClick={this.addUser.bind(this)}
            onClick = {handleClick}
          >
            Sign Up
          </Button>
          <br/><br/>
          <Grid container justify="flex-end">
            <Grid item>
              <Link  to={"/"} >
                <h6>Already have an account? Sign in</h6>
              </Link>
            </Grid>
          </Grid>
          
          
          <TextField  
          fullWidth 
          disabled 
          id="outlined-required" 
          label={this.props.message} 
          variant="standard" 
          style={{backgroundImage:" linear-gradient(white,#ECF4FF)"}}
          ></TextField>        
        
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>  
      </div>
             
             
             
           

            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        message: state.message
    }
}

const mapDisatchToState = (dispatch) => {
    return{
        onAddUser: (payload) => dispatch(actions.addUser(payload))
    }
}

export default connect (mapStateToProps, mapDisatchToState)(AddUser);