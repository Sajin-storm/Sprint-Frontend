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

import AddUser from './components/AddUser'
import ViewUser from './components/ViewUser'
import UpdateUser from './components/UpdateUser'

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
      margin: 0,
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


  return (
    <Router>

      <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        
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
          <h4>Online Bus Booking</h4>
        
        </Toolbar>
    


      </AppBar>
      
      <Drawer
        className={classes1.drawer}  
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes1.drawerPaper,
        }}
      >
                
        <div className={classes1.drawerHeader}>
         Back
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <br/>
      
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <h5>User</h5>
        </AccordionSummary>
        <AccordionDetails>
          
           <ul>
           <li>
          <Link className="nav-link " to="/user/add" onClick={handleDrawerClose} ><h6>Add User</h6></Link>
          </li><li>
          <Link className="nav-link " to="/add" onClick={handleDrawerClose}><h6>Add Booking</h6></Link>
          </li><li>
          <Link className="nav-link " to="/feedback/add" onClick={handleDrawerClose}><h6>Add Feedback</h6></Link>
          </li>
          </ul>
         
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <h5>Admin</h5>
        </AccordionSummary>
        <AccordionDetails>
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
      
      
      <Link className = "nav-link " to="/view" onClick={handleDrawerClose}><h6>View Booking</h6></Link>
      <Divider/>
      <Link className="nav-link " to="/add" onClick={handleDrawerClose}><h6>Add Booking</h6></Link>
      <Divider/>
      <Link className="nav-link " to="/user/view" onClick={handleDrawerClose}><h6>View User</h6></Link>
      <Divider/>
      <Link className="nav-link " to="/user/add" onClick={handleDrawerClose}><h6>Add User</h6></Link>
      <Divider/>
      <Link className="nav-link " to="/admin/getAllBusOperator" onClick={handleDrawerClose}><h6>View Bus Operator</h6></Link>
      <Divider/>
      <Link className="nav-link " to="/feedback/add" onClick={handleDrawerClose}><h6>Add Feedback</h6></Link>
      <Divider/>
      <Link className="nav-link " to="/feedback/getall" onClick={handleDrawerClose}><h6>View Feedback</h6></Link>
      <Divider/>

      </Drawer>
      
      <main
        className={clsx(classes1.content, {
          [classes.contentShift]: open,
        })}
      >
        
        <div className={classes1.drawerHeader} />
        
        </main>

      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/add">
            <AddBooking />
          </Route>
          <Route path="/view">
            <ViewBooking />
          </Route>
          <Route path="/update/:id" component={UpdateBooking}/>
          <Route path="/detailview/:id" component={DetailViewBooking} />

          <Route path="/user/add">
            <AddUser />
          </Route>
          <Route path="/user/view">
            <ViewUser />
          </Route>
          <Route path="/user/update/:username" component={UpdateUser}/>

          <Route path="/admin/getAllBusOperator">
            <GetAllBusOperator />
          </Route>
          <Route path="/admin/viewbus">
            <ViewBus />
          </Route>
          <Route path="/busoperator/addbus">
            <AddBus />
          </Route>

          <Route path="/feedback/add">
            <AddFeedback />
          </Route>
          <Route path="/feedback/getall">
            <ViewFeedback />
          </Route>

        </Switch>

      </div>
      
      </div>

    
    </Router>
  );
}


export default App;
