import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddBooking from "./components/Booking/AddBooking";
import UpdateBooking from "./components/Booking/UpdateBooking";
import ViewBooking from "./components/Booking/ViewBooking";
import DetailViewBooking from "./DetailViewBooking";
import ViewBookingByUser from "./components/Booking/ViewBookingByUser";

import AddUser from "./components/User/AddUser";
import ViewUser from "./components/User/ViewUser";
import UpdateUser from "./components/User/UpdateUser";
import LoginUser from "./components/User/LoginUser";

import GetAllBusOperator from "./components/Admin/GetAllBusOperator";
import ViewBus from "./components/Admin/ViewBus";
import AddBus from "./components/Admin/AddBus";
import LoginBusOp from "./components/BusOperator/LoginBusOp";
import Revenue from "./Screens/Revenue";

import DatedRouteRev from "./components/BusOperator/DatedRouteRev";
import MonthlyRev from "./components/BusOperator/MonthlyRev";
import RouteRev from "./components/BusOperator/RouteRev";
import YearlyRev from "./components/BusOperator/YearlyRev";

import AddFeedback from "./components/Feedback/AddFeedback";
import ViewFeedback from "./components/Feedback/ViewFeedback";

import LoginAdmin from "./components/Admin/LoginAdmin";
import Screen1 from "./Screens/MainScreen";

import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import React from "react";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";

import CssBaseline from "@material-ui/core/CssBaseline";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useSelector } from "react-redux";

import AdminScreen from "./Screens/AdminScreen";
import BusOperatorScreen from "./Screens/BusOperatorScreen";
import UserScreen from "./Screens/UserScreen"

//history import parts
import { createBrowserHistory } from "history";
import { Grid, Typography } from "@material-ui/core";

//history part
var hist = createBrowserHistory();

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: 0, //this makes the accordion run smoothly
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
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
    width: "auto",
  },
}));

//persistent drawer with app bar
const drawerWidth = 250;

const useStyles1 = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
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

  const username = useSelector((state) => state.users);

  return (
    <Router history={hist}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{ backgroundImage: " linear-gradient(black,blue)" }}
          className={clsx(classes1.appBar, {
            [classes1.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes1.menuButton, open && classes1.hide)}
            >
              <MenuIcon />
            </IconButton>
            <h2>
              <i>
                <b>Blue-Bus</b>
              </i>
            </h2>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes1.drawer}
          style={{ textShadow: "0.5px 0.5px #E3EEFF" }}
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
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />

          <br />
          <AccordionSummary>
            <Link to="/">
              <Typography variant="h6">HomePage</Typography>
            </Link>
            <Divider />
          </AccordionSummary>
          <AccordionSummary>
            <Link to="/user/login">
              <h5>User login</h5>
            </Link>
          </AccordionSummary>
          <AccordionSummary>
            <Link to="/admin/login">
              <Typography variant="h6">Admin login</Typography>
            </Link>
          </AccordionSummary>
          <AccordionSummary>
            <Link to="/busoperator/login">
              <Typography variant="h6">Bus Operator login</Typography>
            </Link>
            <Divider />
          </AccordionSummary>
        </Drawer>

        <main
          style={{ backgroundImage: " linear-gradient(lightBlue, white)" }}
          className={clsx(classes1.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes1.drawerHeader} />
        </main>

        <div>
          <Switch>
            <Route exact path="/user/login">
              <LoginUser />
            </Route>
            <Route exact path="/add">
              <AddBooking />
            </Route>
            <Route exact path="/view">
              <ViewBooking />
            </Route>
            <Route
              exact
              path="/booking/viewbyusername/:username"
              component={ViewBookingByUser}
            />
            <Route exact path="/update/:id" component={UpdateBooking} />
            <Route exact path="/detailview/:id" component={DetailViewBooking} />

            <Route exact path="/user/view">
              <ViewUser />
            </Route>
            <Route exact path="/user/add">
              <AddUser />
            </Route>
            <Route exact path="/user/update/:username" component={UpdateUser} />

            <Route exact path="/admin/getallbusoperator">
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
            <Route exact path="/userscreen/:username" component={UserScreen}/>
            <Route exact path="/busoperatorscreen">
              <BusOperatorScreen />
            </Route>
            <Route exact path="/admin/login">
              <LoginAdmin />
            </Route>
            <Route exact path="/busoperator/login">
              <LoginBusOp />
            </Route>
            <Route exact path="/revenue">
              <Revenue />
            </Route>
            <Route path="/routerev">
              <RouteRev />
            </Route>
            <Route path="/datedrouterev">
              <DatedRouteRev />
            </Route>
            <Route path="/monthlyrouterev">
              <MonthlyRev />
            </Route>
            <Route path="/yearlyrevenue">
              <YearlyRev />
            </Route>
            <Route exact path="/">
              <Screen1 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
