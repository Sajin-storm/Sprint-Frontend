import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions/action'

import {
    Link
} from "react-router-dom";

  import { withStyles,makeStyles} from '@material-ui/core/styles';
  import DeleteIcon from '@material-ui/icons/Delete';
  import Button from '@material-ui/core/Button';
  import Table from '@material-ui/core/Table';
  import TableBody from '@material-ui/core/TableBody';
  import TableCell from '@material-ui/core/TableCell';
  import TableContainer from '@material-ui/core/TableContainer';
  import TableHead from '@material-ui/core/TableHead';
  import TableRow from '@material-ui/core/TableRow';
  import Paper from '@material-ui/core/Paper';
  import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


const useStyles = makeStyles({
   table: {
     minWidth: 650,
   },
 },
 (theme) => ({
   button: {
     margin: theme.spacing(1),
   },
 }));



 


class ViewBookingByUser extends Component {

    constructor(){
        super();
        this.username = React.createRef();
        this.state = {bookings: []}
    }

    componentDidMount() {
      console.log('Initialization...')
      this.props.onViewBookingByUser(this.props.match.params.username)
  }

    viewBookingByUser(event){
        console.log('username...',this.props.match.params.username)
        //event.preventDefault();
        this.props.onViewBookingByUser(this.props.match.params.username)
        
    }

    deleteBooking(bookingId){
        this.props.onDeleteBooking(bookingId)

    }
    
        
    
    render() {


        
        const classes = useStyles;
        //const classes1 = useStyles1;
        
        
        // const greet = this.viewBookingByUser.bind(this)
        // setTimeout(greet, 2000);
        

        var bookingList = this.props.bookings.map((booking, i)=>{

            
         
            return (
                
                 

                <StyledTableRow key={i}>
                    
                    <StyledTableCell align="center">{booking.id}</StyledTableCell>
                    <StyledTableCell align="center"><Link to={"/detailview/" + booking.bookingId}>{booking.bookingId}</Link></StyledTableCell>
                    <StyledTableCell align="center">{booking.username}</StyledTableCell>
                    <StyledTableCell align="center">{booking.busNumber}</StyledTableCell>
                    <StyledTableCell align="center">{booking.source}</StyledTableCell>
                    <StyledTableCell align="center">{booking.destination}</StyledTableCell>
                    <StyledTableCell align="center">{booking.date}</StyledTableCell>
                    <StyledTableCell align="center"><Button variant="contained" color="secondary" className={classes.button}
                        startIcon={<DeleteIcon />} onClick={this.deleteBooking.bind(this, booking.bookingId)}>Delete</Button>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Link to={"/update/" + booking.bookingId}>
                        <Button 
                        variant="contained" 
                        color="primary">
                          Update
                        </Button>
                      </Link>
                  </StyledTableCell>
                </StyledTableRow>
                
            )
                  
        })


        return (
          <div >
            <br/>
            
            <Paper square style={{display:"flex",justifyContent:"center"}}>
              <Tabs
                value={0}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                >
                <Tab label="My Bookings" onClick={this.viewBookingByUser.bind(this)} />
               
                <Tab label="Add Booking" to="/add"  component={Link}/>
                <Tab label="Add feedback" to="/feedback/add" component={Link} />
                <Tab label="Update Password" to={"/user/update/"+this.props.match.params.username} component={Link}/>
                <Tab label="Home" to={"/"} component={Link}/>
              </Tabs>
            </Paper>

            {/* <Button  
              variant="contained" 
              color="primary" 
              onClick={this.viewBookingByUser.bind(this)}
              >View your bookings
            </Button>

            <Link to='/add'>
            <Button  
              variant="contained" 
              color="primary" 
              >Add Booking
            </Button>
            </Link>

            <Link to="/feedback/add">
            <Button  
              variant="contained" 
              color="primary" 
              >Add Feedback
            </Button>
            </Link>

            <Link to={"/user/update/"+this.props.match.params.username}>
            <Button  
              variant="contained" 
              color="primary" 
              >Update your password
            </Button>
            </Link> */}

            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="sticky table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="center">Booking ID</StyledTableCell>
                        <StyledTableCell align="center">Username</StyledTableCell>
                        <StyledTableCell align="center">BusNumber</StyledTableCell>
                        <StyledTableCell align="center">Source</StyledTableCell>
                        <StyledTableCell align="center">Destination</StyledTableCell>
                        <StyledTableCell align="center">Date YYYY/MM/DD</StyledTableCell>
                        <StyledTableCell align="center">Delete</StyledTableCell>
                        <StyledTableCell align="center">Update</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {bookingList}
                </TableBody>
            </Table>
        </TableContainer>
        </div>

            
           
            
       )
    }
}

const mapStateToProps = (state) => {

    return {
        bookings: state.bookings
        //,message: state.message
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onViewBookingByUser: (username) => dispatch(actions.viewBookingByUser(username)), 
        onDeleteBooking: (bookingId) => dispatch(actions.deleteBooking(bookingId)) 
    }
}

export default connect(mapStateToProps, mapDispatchToState)(ViewBookingByUser);
