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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Button } from '@material-ui/core';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import HomeIcon from '@material-ui/icons/Home';

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

export default function BusOperatorScreen() {
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
      <CollectionsBookmarkIcon fontSize="large" />
      </div>

      <br/>
      <Typography variant='h5' style={{display:"flex",justifyContent:"center"}}>
        <b>Bookings</b>
      </Typography>
      <Typography variant='h7'style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        View all bookings made by users
      </Typography>
      <br/>
      <div style={{textAlign:"center"}}>
      <Link to='/view'><Button variant="contained" color="primary" >View</Button></Link>
        </div>
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
      <Typography variant='h5'style={{display:"flex",justifyContent:"center",}}>
        <b>Bus</b>  
      </Typography>
      <Typography variant='h7'style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        Add a new Bus
      </Typography>
      <br/><br/>
      <div style={{textAlign:"center"}}>
      <Link to='/busoperator/addbus'><Button variant="contained" color="primary" >Add</Button></Link>
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
        <b>Revenue</b>
      </Typography>
      <Typography variant='h7' style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        View revenue generated
      </Typography>
      <br/><br/>
      <div style={{textAlign:"center"}}>
      <Link to='/revenue'><Button variant="contained" color="primary" >View</Button></Link>
      </div>

      </Paper>

      <Paper elevation={3} 
      style={{
        height:"200px",
        width:"200px",
        backgroundImage:" linear-gradient(#ECF4FF, white)"
        }}>

      <div style={{display:"flex",justifyContent:"center",backgroundColor:"lightBlue",}}>
      <HomeIcon fontSize="large" />
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