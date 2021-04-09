import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createBrowserHistory } from 'history';
import { useSelector } from 'react-redux';

import AddBooking from '../components/AddBooking';
import AddFeedback from '../components/AddFeedback'
import ViewBookingByUser from '../components/ViewBookingByUser'
import UpdateUser from '../components/UpdateUser'


var hist = createBrowserHistory();

export default function UserScreen(){

    

    const username = useSelector(state=>state.users);

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div>
            <Router history={hist} >
                
                <Switch>
                    <div>
                        <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                        }}>
                            <Paper square>
                            <Tabs
                                value={value}
                                indicatorColor="primary"
                                textColor="primary"
                                onChange={handleChange}>
                                <Tab label="Add new Booking" to="/add" component={Link} />
                                <Tab label="Add a Feedback" to="/feedback/add" component={Link} />
                                <Tab label="My Bookings" to={"/booking/viewbyusername/"+username} component={Link} />
                                <Tab label="Update Password" to={"/user/update/"+username} component={Link} />
                            </Tabs>
                            </Paper>
                        </div>
                    </div>
                    <Route exact path="/add">
                        <AddBooking/>
                    </Route>

                    <Route exact path="/feedback/add">
                        <AddFeedback/>
                    </Route>

                    <Route exact path="/booking/viewbyusername/:username" component={ViewBookingByUser}/>

                    <Route exact path="/user/update/:username" component={UpdateUser}/>

                </Switch>
            </Router>
        </div>
    )
}