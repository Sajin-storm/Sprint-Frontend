import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Typography, Button } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

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

export default function AdminScreen() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <b>New Bus</b>
      </Typography>
      <Typography variant='h7'style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        Add a new Bus
      </Typography>
      <br/><br/>
      <div style={{textAlign:"center"}}>
      <Link to={'/busoperator/addbus'}><Button variant="contained" color="primary" >View</Button></Link>
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
        <b>Users</b>  
      </Typography>
      <Typography variant='h7'style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        View all Users 
      </Typography>
      <br/><br/>
      <div style={{textAlign:"center"}}>
      <Link to="/user/view"><Button variant="contained" color="primary">Add</Button></Link>
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
        <b>BusOperator</b>
      </Typography>
      <Typography variant='h7' style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        View all Bus Operators
      </Typography>
      
      <div style={{textAlign:"center"}}>
    <br/><br/>
      <Link to="/admin/getallbusoperator"><Button variant="contained" color="primary" >Add</Button></Link>
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
        <b>Bus</b>
      </Typography>
      <Typography variant='h7' style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        View all bus 
      </Typography>
      <br/><br/>
      <div style={{textAlign:"center"}}>
      <Link to="/admin/viewbus"><Button variant="contained" color="primary" >Update</Button></Link>
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
        <b>Booking</b>
      </Typography>
      <Typography variant='h7' style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        View all Bookings made
      </Typography>
      <br/><br/>
      <div style={{textAlign:"center"}}>
      <Link to="/view"><Button variant="contained" color="primary" >Update</Button></Link>
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
        <b>Feedback</b>
      </Typography>
      <Typography variant='h7' style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        View all feedbacks given by users 
      </Typography>
      <br/>
      <div style={{textAlign:"center"}}>
      <Link to="/feedback/getall"><Button variant="contained" color="primary" >Update</Button></Link>
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


    // <div className={classes.root}>
    //   <Paper square style={{display:"flex",justifyContent:"center"}}>
    //     <Tabs
    //       value={value}
    //       onChange={handleChange}
    //       indicatorColor="primary"
    //       textColor="primary"
    //       variant="scrollable"
    //       scrollButtons="auto"
    //       aria-label="scrollable auto tabs example"
    //     >
    //       <Tab label="Add Bus" to="/busoperator/addbus" component={Link} />
    //       <Tab label="View User" to="/user/view" component={Link}/>
    //       <Tab label="View BusOperator" to="/admin/getallbusoperator" component={Link}/>
    //       <Tab label="View Bus" to="/admin/viewbus" component={Link}/>
    //       <Tab label="View Booking" to="/view" component={Link}/>
    //       <Tab label="View Feedback" to="/feedback/getall" component={Link}/>
    //       <Tab label="Home" to={"/"} component={Link}/>
    //     </Tabs>
    //   </Paper>
    // </div>
  );
}