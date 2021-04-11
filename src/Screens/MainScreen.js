import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import PersonIcon from '@material-ui/icons/Person';

import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function Screen1() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{display:"flex",justifyContent:"center",}}>
      <Paper elevation={3} 
      style={{
        height:"200px",
        width:"200px",
        backgroundImage:" linear-gradient(#ECF4FF, white)"
        }}>

      <div style={{display:"flex",justifyContent:"center",backgroundColor:"lightBlue",}}>
      <AccountCircleIcon fontSize="large" />
      </div>

      <br/>
      <Typography variant='h5' style={{display:"flex",justifyContent:"center"}}>
        <b>USER</b>
      </Typography>
      <br/><br/><br/>
      <Link to='/user/login'><Button variant="contained" color="primary" fullWidth>Login</Button></Link>

      </Paper>
      <Paper elevation={3} 
      style={{
        height:"200px",
        width:"200px",
        backgroundImage:" linear-gradient(#ECF4FF, white)"
        }}>

      <div style={{display:"flex",justifyContent:"center",backgroundColor:"lightBlue",}}>
      <PersonIcon fontSize="large" />
      </div>

        <br/>
      <Typography variant='h5'style={{display:"flex",justifyContent:"center",}}>
        <b>ADMIN</b>  
      </Typography>
      <br/><br/><br/>
      <Link to='/admin/login'><Button variant="contained" color="primary" fullWidth>Login</Button></Link>
      
      </Paper>
      <Paper elevation={3} 
      style={{
        height:"200px",
        width:"200px",
        backgroundImage:" linear-gradient(#ECF4FF, white)"
        }}>

      <div style={{display:"flex",justifyContent:"center",backgroundColor:"lightBlue",}}>
      <DirectionsBusIcon fontSize="large" />
      </div>
      
      <br/>
      <Typography variant='h5' style={{display:"flex",justifyContent:"center"}}>
        <b>BUS OPERATOR</b>
      </Typography>
      <br/><br/><br/>
      <Link to='/busoperator/login'><Button variant="contained" color="primary" fullWidth>Login</Button></Link>

      </Paper>
    </div>
  );
}