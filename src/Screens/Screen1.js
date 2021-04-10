import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Button } from '@material-ui/core';

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
    <div className={classes.root} style={{display:"flex",justifyContent:"center"}}>
      <Paper elevation={3} style={{height:"200px",width:"200px"}}>
        
        <Typography style={{display:"flex",justifyContent:"center"}}>Admin Login</Typography>
        <Button>Login</Button>
      </Paper>
      <Paper elevation={3} style={{height:"200px",width:"200px"}} />
      <Paper elevation={3} style={{height:"200px",width:"200px"}}/>
    </div>
  );
}