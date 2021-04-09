import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import AddBooking from './components/AddBooking';
import UpdateBooking from './components/UpdateBooking';
import ViewBooking from './components/ViewBooking';
import DetailViewBooking from './DetailViewBooking';
import ViewBookingByUser from './components/ViewBookingByUser'

import AddUser from './components/AddUser'
import ViewUser from './components/ViewUser'
import UpdateUser from './components/UpdateUser'
import LoginUser from './components/LoginUser'

import GetAllBusOperator from './components/GetAllBusOperator'
import ViewBus from'./components/ViewBus'
import AddBus from './components/AddBus'


import AddFeedback from './components/AddFeedback'
import ViewFeedback from './components/ViewFeedback'

import { makeStyles,useTheme,withStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';



import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import React from 'react';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';

import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useSelector } from 'react-redux';

import AdminScreen from './Screens/AdminScreen'
//history import parts
import { createBrowserHistory } from 'history';

//history part
var hist = createBrowserHistory();

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 0,    //this makes the accordion run smoothly
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);




const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },


  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },


}));

//persistent drawer with app bar
const drawerWidth = 300;

const useStyles1 = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));



function App(props) {

  const classes = useStyles();
  const classes1 = useStyles1();

  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const username = useSelector(state=>state.users);

  return (


    <Router history={hist} >

      <div className={classes.root} >
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{backgroundImage:" linear-gradient(blue, black)"}}
        className={clsx(classes1.appBar, {
          [classes1.appBarShift]: open,
        })}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes1.menuButton, open && classes1.hide)}
          >
            <MenuIcon />
          </IconButton>
          <h2><i><b>Blue-Bus</b></i></h2>
         
        </Toolbar>

      </AppBar>
      
      <Drawer
        className={classes1.drawer}
        style={{textShadow:"0.5px 0.5px #E3EEFF"}}  
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes1.drawerPaper,
        }}
      >
                
        <div className={classes1.drawerHeader} >
         Back
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <br/>
      
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{background:"linear-gradient(#E3EEFF, white)"}}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <h5>User</h5>
        </AccordionSummary>
        <AccordionDetails style={{background:"white"}}>
          
           <ul>
           <li>
          <Link className="nav-link " to="/user/add" onClick={handleDrawerClose} ><h6>Add User</h6></Link>
          </li><li>
          <Link className="nav-link " to="/add" onClick={handleDrawerClose}><h6>Add Booking</h6></Link>
          </li><li>
          <Link className="nav-link " to="/feedback/add" onClick={handleDrawerClose}><h6>Add Feedback</h6></Link>
          </li><li>
          <Link className="nav-link " to="/" onClick={handleDrawerClose}><h6>Login</h6></Link>
          </li>
          <li>
          <Link className="nav-link " to="/adminscreen" onClick={handleDrawerClose}><h6>admin Screen</h6></Link>
          </li>
          
          </ul>
         
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{background:"linear-gradient(#E3EEFF, white)"}}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <h5>Admin</h5>
        </AccordionSummary>
        <AccordionDetails style={{background:"white"}}>
          <ul>
          <li>
          <Link className="nav-link " to="/busoperator/addbus" onClick={handleDrawerClose}><h6>Add Bus</h6></Link>
          </li><li>
          <Link className= "nav-link " to="/view" onClick={handleDrawerClose}><h6>View Booking</h6></Link>
          </li><li>
          <Link className="nav-link " to="/user/view" onClick={handleDrawerClose} ><h6>View User</h6></Link>
          </li><li>
          <Link className="nav-link " to="/admin/getAllBusOperator" onClick={handleDrawerClose}><h6>View Bus Operator</h6></Link>
          </li><li>
          <Link className="nav-link " to="/feedback/getall" onClick={handleDrawerClose}><h6>View Feedback</h6></Link>
          </li><li>
          <Link className="nav-link " to="/admin/viewbus" onClick={handleDrawerClose}><h6>View Bus</h6></Link>
          </li>
          </ul>

        </AccordionDetails>
      </Accordion>
      </Drawer>
      
      <main
      style={{backgroundImage:" linear-gradient(lightBlue, white)"}}
        className={clsx(classes1.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes1.drawerHeader} />
        </main>


      <div>

        <Switch>
        <Route exact path="/">
            <LoginUser />
          </Route>
        
          <Route exact path="/add">
            <AddBooking />
          </Route>
          <Route exact path="/view">
            <ViewBooking />
          </Route>
          <Route exact path="/booking/viewbyusername/:username" component={ViewBookingByUser}/>
          <Route exact path="/update/:id" component={UpdateBooking}/>
          <Route exact path="/detailview/:id" component={DetailViewBooking} />

          <Route exact path="/user/view">
            <ViewUser />
          </Route>
          <Route exact path="/user/add">
            <AddUser />
          </Route>
          <Route exact path="/user/update/:username" component={UpdateUser}/>

          <Route exact path="/admin/getAllBusOperator">
            <GetAllBusOperator />
          </Route>
          <Route exact path="/admin/viewbus">
            <ViewBus />
          </Route>
          <Route exact path="/busoperator/addbus">
            <AddBus />
          </Route>

          <Route exact path="/feedback/add">
            <AddFeedback />
          </Route>
          <Route exact path="/feedback/getall">
            <ViewFeedback />
          </Route>
          <Route exact path="/adminscreen">
            <AdminScreen />
          </Route>
          
        </Switch>
      </div>
      </div>
    </Router>
  );
}


export default App;

/* <div>
    <Router history={hist} >

      <div>
        <Switch>

        <Route exact path="/">
          <LoginUser />
        </Route>

        <Route exact path="/user/add">
          <AddUser />
        </Route>

        <div>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>   
            <Paper square>
            <Tabs
                indicatorColor="primary"
                textColor="primary">
                  <Tab label ="View Booking made by you" to={"/booking/viewbyusername/"+username} component={Link}><Link to={"/booking/viewbyusername/:username"}></Link></Tab>
                  <Tab label ="Add new Booking" to="/add" component={Link}/>
                  <Tab label ="Add Feedback" to="/feedback/add" component={Link}/>
                </Tabs>
            </Paper>
          </div>
          <Route exact path={"/booking/viewbyusername/:username"} component={ViewBookingByUser}/>
          <Route exact path="/add">
            <AddBooking />
          </Route>
          <Route exact path="/feedback/add">
            <AddFeedback />
          </Route>
          </div>
        </Switch>
      </div>


    </Router>
    <Router>
          
    </Router>
    </div> */