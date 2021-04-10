import React,{useRef, useState} from 'react';
// import { connect } from 'react-redux';
import * as actions from '../actions/action'
import { useDispatch, useSelector } from 'react-redux';
import {  useHistory } from 'react-router-dom';


import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core';
import {Link} from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));


    

export default function Login() {
      const dispatch = useDispatch();
      const progress = useSelector(state=>state.progress);
      //const login = useSelector(state=>state.login);
      const user = useSelector(state=>state.user);
      const username = useRef();
      const password = useRef();
      const errorMessage = useSelector(state=>state.errorMessage);
      const [error, setError] = useState('');
      const history = useHistory();
      const [open, setOpen] = React.useState(false);

      const handleClick = () => {
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
      };
    
      function handleSubmit(e) {
        e.preventDefault();
        try {
          dispatch({type: "PROGRESS", payload: true})
          // dispatch({type: "LOGIN", payload: true})
          dispatch(actions.checkUsername(username.current.value,password.current.value));
          // history.push("/home");
        } catch (errorm){
          setError(errorm);
        }
      }

      console.log(progress);
      console.log(user);
      console.log(errorMessage)
      if(user !== undefined){
        history.push("/booking/viewbyusername/"+user);
      }

      const classes = useStyles;
        
      return (
          <div>
                 
          <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <div style={{display:"flex",justifyContent:"center"}}>
        <Avatar className={classes.avatar} style={{backgroundImage:" linear-gradient(blue, red)"}}>
          <LockTwoToneIcon />
        </Avatar> 
        </div>
        <Typography component="h1" variant="h5" style={{textAlign:"center",textShadow:"2px 2px #E3EEFF"}}>
            Welcome User (Sign in)
        </Typography>
        
        <br/>
        {errorMessage && 
           <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
             <Alert severity="error">{errorMessage}</Alert>
            </Snackbar>}
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Enter Username"
                inputRef={username}
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
                inputRef={password}
                style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}
              />
            </Grid>
          </Grid>
          <br/>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick = {handleSubmit}
          >   
            Sign In
          </Button>
          <br/><br/>
          <Grid container justify="flex-end">
            <Grid item>
              <Link  to={"/user/add"} >
                <h6>Don't have an account? Sign up</h6>
              </Link>
            </Grid>
          </Grid>

          <TextField  fullWidth disabled id="outlined-required" label={errorMessage} variant="standard"></TextField> 
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>  
      </div>
             
             
             
           

            
        )
    }
