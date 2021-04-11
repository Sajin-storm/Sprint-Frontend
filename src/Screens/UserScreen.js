import {Link} from "react-router-dom"
import Paper from "@material-ui/core/Paper";
import { useSelector } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import BookIcon from '@material-ui/icons/Book';
import FeedbackIcon from '@material-ui/icons/Feedback';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import HomeIcon from '@material-ui/icons/Home';


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

export default function UserScreen() {
    //const username = useRef();
    const user = useSelector(state=>state.user);
    const classes = useStyles();
    

    return(

        <div className={classes.root} style={{display:"flex",justifyContent:"center",}}>
      <Paper elevation={3} 
      style={{
        height:"200px",
        width:"200px",
        backgroundImage:" linear-gradient(#ECF4FF, white)"
        }}>

      <div style={{display:"flex",justifyContent:"center",backgroundColor:"lightBlue",}}>
      <MenuBookIcon fontSize="large" />
      </div>

      <br/>
      <Typography variant='h5' style={{display:"flex",justifyContent:"center"}}>
        <b>My Bookings</b>
      </Typography>
      <Typography variant='h7'style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        Bookings made by me
      </Typography>
      <br/><br/>
      <div style={{textAlign:"center"}}>
      <Link to={'/booking/viewbyusername/'+user}><Button variant="contained" color="primary" >View</Button></Link>
      </div>

      </Paper>
      <Paper elevation={3} 
      style={{
        height:"200px",
        width:"200px",
        backgroundImage:" linear-gradient(#ECF4FF, white)"
        }}>

      <div style={{display:"flex",justifyContent:"center",backgroundColor:"lightBlue",}}>
      <BookIcon fontSize="large" />
      </div>

        <br/>
      <Typography variant='h5'style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        <b>New Booking</b>  
      </Typography>
      <Typography variant='h7'style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        Add a new Booking to travel
      </Typography>
      <br/><br/>
      <div style={{textAlign:"center"}}>
      <Link to="/add"><Button variant="contained" color="primary">Add</Button></Link>
      </div>

      </Paper>
      <Paper elevation={3} 
      style={{
        height:"200px",
        width:"200px",
        backgroundImage:" linear-gradient(#ECF4FF, white)"
        }}>

      <div style={{display:"flex",justifyContent:"center",backgroundColor:"lightBlue",}}>
      <FeedbackIcon fontSize="large" />
      </div>
      
      <br/>
      <Typography variant='h5' style={{display:"flex",justifyContent:"center"}}>
        <b>Feedback</b>
      </Typography>
      <Typography variant='h7' style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        Give a feedback on your previous bookings
      </Typography>
      
      <div style={{textAlign:"center"}}>
    <br/>
      <Link to={"/feedback/add/"+user}><Button variant="contained" color="primary" >Add</Button></Link>
        </div>

      </Paper>
      <Paper elevation={3}
      style={{
        height:"200px",
        width:"200px",
        backgroundImage:" linear-gradient(#ECF4FF, white)"
        }}>

      <div style={{display:"flex",justifyContent:"center",backgroundColor:"lightBlue",}}>
      <LockOpenIcon fontSize="large" />
      </div>
      
      <br/>
      <Typography variant='h5' style={{display:"flex",justifyContent:"center"}}>
        <b>Update Password</b>
      </Typography>
      <Typography variant='h7' style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
        Change your old password
      </Typography>
      <br/><br/>
      <div style={{textAlign:"center"}}>
      <Link to={"/user/update/" + user}><Button variant="contained" color="primary" >Update</Button></Link>
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

//   <Paper square style={{ display: "flex", justifyContent: "center" }}>
//     <Tabs
//       value={0}
//       indicatorColor="primary"
//       textColor="primary"
//       variant="scrollable"
//       scrollButtons="auto"
//       aria-label="scrollable auto tabs example"
//     >
//       <Tab label="My Bookings" to={"/booking/viewbyusername/"+username} />

//       <Tab label="Add Booking" to="/add" component={Link} />
//       <Tab label="Add feedback" to="/feedback/add" component={Link} />
//       <Tab
//         label="Update Password"
//         to={"/user/update/" + username}
//         component={Link}
//       />
//       <Tab label="Home" to={"/"} component={Link} />
//     </Tabs>
//   </Paper>
    )
}

