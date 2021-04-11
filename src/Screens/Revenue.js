// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import * as actions from '../actions/action'
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import {
//     Link
//   } from "react-router-dom";
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
// import SaveIcon from '@material-ui/icons/Save';
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';


// const useStyles = ((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '25ch',
//       },
//     },
//     button: {
//         margin: theme.spacing(1),
//     },
//   }));

// class Revenue extends Component {

//     constructor(){
//         super();
//     }

//     render() {

//         const classes = useStyles;

//         return (
//             <Grid>
//                 <br />
//                     <div style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center"
//                     }}>
//                     <Typography variant="h4">Which Revenue would you like to view?</Typography></div>
//                     <br/><br/><br/>
//                 <div style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center"
//                 }}>
//                 <Grid container spacing={3} style={{marginLeft:'1%'}}>
//                     <Grid item xs={6} sm={3}>
//                     <Link to={"/routerev"}><Button variant="contained" color="primary" size="large"
//                         className={classes.button}>Route Revenue</Button></Link>
//                     </Grid>
//                     <Grid item xs={6} sm={3}>
//                     <Link to={"/datedrouterev"}><Button variant="contained" color="primary" size="large" 
//                         className={classes.button}>Dated Route Revenue</Button></Link>
//                     </Grid>
//                     <Grid item xs={6} sm={3}>
//                     <Link to={"/monthlyrouterev"}><Button variant="contained" color="primary" size="large" 
//                         className={classes.button}>Monthly Revenue</Button></Link>
//                     </Grid>
//                     <Grid item xs={6} sm={3}>
//                     <Link to={"/yearlyrevenue"}><Button variant="contained" color="primary" size="large" 
//                         className={classes.button}>Yearly Revenue</Button></Link>
//                     </Grid>
//                 </Grid>
//                 <br/><br/><br/>
//                 </div>
                
                
                
                
//                 </Grid>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         message: state.message,
//         // bookings: state.bookings
//     }
// }

// const mapDispatchToState = (dispatch) => {
//     return {
       
//     }
// }


// export default connect(mapStateToProps, mapDispatchToState)(Revenue);


// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function BusOperatorScreen() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <Paper square style={{display:"flex",justifyContent:"center"}}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           textColor="primary"
//           variant="scrollable"
//           scrollButtons="auto"
//           aria-label="scrollable auto tabs example"
//         >
//           <Tab label="View Booking" to="/view" component={Link}/>
//           <Tab label="Add Bus" to="/busoperator/addbus" component={Link}/>
//           <Tab label="Revenue" to="/revenue" component={Link}/>
//         </Tabs>
//       </Paper>
//     </div>
//   );
// }


//                 <Grid container spacing={3} style={{marginLeft:'1%'}}>
//                     <Grid item xs={6} sm={3}>
//                     <Link to={"/routerev"}><Button variant="contained" color="primary" size="large"
//                         className={classes.button}>Route Revenue</Button></Link>
//                     </Grid>
//                     <Grid item xs={6} sm={3}>
//                     <Link to={"/datedrouterev"}><Button variant="contained" color="primary" size="large" 
//                         className={classes.button}>Dated Route Revenue</Button></Link>
//                     </Grid>
//                     <Grid item xs={6} sm={3}>
//                     <Link to={"/monthlyrouterev"}><Button variant="contained" color="primary" size="large" 
//                         className={classes.button}>Monthly Revenue</Button></Link>
//                     </Grid>
//                     <Grid item xs={6} sm={3}>
//                     <Link to={"/yearlyrevenue"}><Button variant="contained" color="primary" size="large" 
//                         className={classes.button}>Yearly Revenue</Button></Link>
//                     </Grid>


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Button } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

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

export default function Revenue() {
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
      <MonetizationOnIcon fontSize="large" />
      </div>

      <br/>
      <Typography variant='h5' style={{display:"flex",justifyContent:"center"}}>
        <b>Route Revenue</b>
      </Typography>
      <Typography variant='h7'style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        Revenue based on which route you travel
      </Typography>
      <br/>
      <div style={{textAlign:"center"}}>
      <Link to='/routerev'><Button variant="contained" color="primary" >View</Button></Link>
      </div>

      </Paper>
      <Paper elevation={3} 
      style={{
        height:"200px",
        width:"200px",
        backgroundImage:" linear-gradient(#ECF4FF, white)"
        }}>

      <div style={{display:"flex",justifyContent:"center",backgroundColor:"lightBlue",}}>
      <MonetizationOnIcon fontSize="large" />
      </div>

        <br/>
      <Typography variant='h5'style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        <b>Dated Revenue</b>  
      </Typography>
      <Typography variant='h7'style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        Revenue based on route on a particular day
      </Typography>
      <br/>
      <div style={{textAlign:"center"}}>
      <Link to='/datedrouterev'><Button variant="contained" color="primary">View</Button></Link>
      </div>

      </Paper>
      <Paper elevation={3} 
      style={{
        height:"200px",
        width:"200px",
        backgroundImage:" linear-gradient(#ECF4FF, white)"
        }}>

      <div style={{display:"flex",justifyContent:"center",backgroundColor:"lightBlue",}}>
      <MonetizationOnIcon fontSize="large" />
      </div>
      
      <br/>
      <Typography variant='h5' style={{display:"flex",justifyContent:"center"}}>
        <b>Monthly Revenue</b>
      </Typography>
      <Typography variant='h7' style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        Revenue based on route for that particular month
      </Typography>
      <br/>
      <div style={{textAlign:"center"}}>
      <Link to='/monthlyrouterev'><Button variant="contained" color="primary" >View</Button></Link>
        </div>

      </Paper>
      <Paper elevation={3} 
      style={{
        height:"200px",
        width:"200px",
        backgroundImage:" linear-gradient(#ECF4FF, white)"
        }}>

      <div style={{display:"flex",justifyContent:"center",backgroundColor:"lightBlue",}}>
      <MonetizationOnIcon fontSize="large" />
      </div>
      
      <br/>
      <Typography variant='h5' style={{display:"flex",justifyContent:"center"}}>
        <b>Yearly Revenue</b>
      </Typography>
      <Typography variant='h7' style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        Revenue based on route for that particular year
      </Typography>
      <br/>
      <div style={{textAlign:"center"}}>
      <Link to='/yearlyrevenue'><Button variant="contained" color="primary" >View</Button></Link>
      </div>
      </Paper>

      <Paper elevation={3} 
      style={{
        height:"200px",
        width:"200px",
        backgroundImage:" linear-gradient(#ECF4FF, white)"
        }}>

      <div style={{display:"flex",justifyContent:"center",backgroundColor:"lightBlue",}}>
      <MonetizationOnIcon fontSize="large" />
      </div>
      
      <br/>
      <Typography variant='h5' style={{display:"flex",justifyContent:"center"}}>
        <b>Home</b>
      </Typography>
      <Typography variant='h7' style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        Go to homepage
      </Typography>
      <br/><br/>
      <div style={{textAlign:"center"}}>
      <Link to={"/"}><Button variant="contained" color="primary" >Go</Button></Link>
      </div>
      </Paper>
      
    </div>
  );
}