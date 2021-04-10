import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'

import {
    Link
} from "react-router-dom";

  import { withStyles,makeStyles } from '@material-ui/core/styles';
  import DeleteIcon from '@material-ui/icons/Delete';
  import Button from '@material-ui/core/Button';
  import Table from '@material-ui/core/Table';
  import TableBody from '@material-ui/core/TableBody';
  import TableCell from '@material-ui/core/TableCell';
  import TableContainer from '@material-ui/core/TableContainer';
  import TableHead from '@material-ui/core/TableHead';
  import TableRow from '@material-ui/core/TableRow';
  import Paper from '@material-ui/core/Paper';



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




class ViewBooking extends Component {

    constructor(){
        super();
        this.state = {bookings: [], message: ''}
    }

    componentDidMount() {
        console.log('Initialization...')
        this.props.onFetchBookings()
    }

    deleteBooking(bookingId){
        this.props.onDeleteBooking(bookingId)

    }
    
        
    
    render() {

        const classes = useStyles;
        //const classes1 = useStyles1;
        
        var bookingList = this.props.bookings.map((booking, i)=>{

          
         
            return (


                <StyledTableRow key={i}>
                    <StyledTableCell align="center">{booking.id}</StyledTableCell>
                    <StyledTableCell align="center">{booking.bookingId}</StyledTableCell>
                    <StyledTableCell align="center">{booking.username}</StyledTableCell>
                    <StyledTableCell align="center">{booking.busNumber}</StyledTableCell>
                    <StyledTableCell align="center">{booking.source}</StyledTableCell>
                    <StyledTableCell align="center">{booking.destination}</StyledTableCell>
                    <StyledTableCell align="center">{booking.date}</StyledTableCell>
                    <StyledTableCell align="center"><Link to={"/detailview/" + booking.bookingId}>
                      <Button variant="contained"color="primary">View</Button></Link>
                    </StyledTableCell>
                    {/* <StyledTableCell align="center"><Button variant="contained" color="secondary" 
                        startIcon={<DeleteIcon />} onClick={this.deleteBooking.bind(this, booking.bookingId)}>Delete</Button>
                    </StyledTableCell>
                    <StyledTableCell align="center"><Link to={"/update/" + booking.bookingId}><Button variant="contained" color="primary">
                            Update</Button></Link></StyledTableCell> */}
                </StyledTableRow>
                    
            )
                  
        })


        return (
          <div >
            <br/>
      
      
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="sticky table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="center">BookingID</StyledTableCell>
                        <StyledTableCell align="center">Username</StyledTableCell>
                        <StyledTableCell align="center">BusNumber</StyledTableCell>
                        <StyledTableCell align="center">Source</StyledTableCell>
                        <StyledTableCell align="center">Destination</StyledTableCell>
                        <StyledTableCell align="center">Date YYYY/MM/DD</StyledTableCell>
                        <StyledTableCell align="center">View Details</StyledTableCell>
                        
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
        onFetchBookings: () => dispatch(actions.fetchBookings()), 
        onDeleteBooking: (bookingId) => dispatch(actions.deleteBooking(bookingId)) 
    }
}

export default connect(mapStateToProps, mapDispatchToState)(ViewBooking);
