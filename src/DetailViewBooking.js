import React, { Component } from 'react'

import { withStyles,makeStyles } from '@material-ui/core/styles';
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
      fontSize: 16,
    },
    body: {
      fontSize: 15,
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




export default class DetailViewBooking extends Component {

    constructor(){
        super();
        this.state = {bookings: [], date: {}, journeyStartTime:{}, journeyEndTime:{}}
    }

    componentDidMount() {
        console.log('Initialization...')
        console.log('id', this.props.match.params.id);
        fetch('http://localhost:8080/api/v1/bookings/' + this.props.match.params.id)
            .then(response => response.json())
            .then(
                data => {
                    console.log(data)
                    this.setState({bookings:data, date:data, journeyStartTime:data, journeyEndTime:data});
                }
            );
    }

    render() {

        const classes = useStyles

      
        return (
            <div>


            <TableContainer  component={Paper}>
            <Table  className={classes.table} aria-label="sticky table">
                <TableHead>
                    <StyledTableRow >
                        <StyledTableCell align="center">Booking</StyledTableCell>
                        <StyledTableCell align="center">Details</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                <StyledTableRow>                        
                        <StyledTableCell align="center">Username</StyledTableCell>
                        <StyledTableCell align="center">{this.state.bookings.username}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
                <TableBody>
                <StyledTableRow>                        
                        <StyledTableCell align="center">BusNumber</StyledTableCell>
                        <StyledTableCell align="center">{this.state.bookings.busNumber}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
                <TableBody>
                <StyledTableRow>                        
                        <StyledTableCell align="center">Source</StyledTableCell>
                        <StyledTableCell align="center">{this.state.bookings.source}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
                <TableBody>
                <StyledTableRow>                        
                        <StyledTableCell align="center">Destination</StyledTableCell>
                        <StyledTableCell align="center">{this.state.bookings.destination}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
                <TableBody>
                <StyledTableRow>                        
                        <StyledTableCell align="center">Number of Seats</StyledTableCell>
                        <StyledTableCell align="center">{this.state.bookings.numberOfSeats}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
                <TableBody>
                <StyledTableRow>                        
                        <StyledTableCell align="center">Amount Paid</StyledTableCell>
                        <StyledTableCell align="center">{this.state.bookings.amountPaid}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
                <TableBody>
                <StyledTableRow>                        
                        <StyledTableCell align="center">Date</StyledTableCell>
                        <StyledTableCell align="center">{this.state.bookings.date}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
                <TableBody>
                <StyledTableRow>                        
                        <StyledTableCell align="center">Start Time</StyledTableCell>
                        <StyledTableCell align="center">{this.state.bookings.journeyStartTime}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
                <TableBody>
                <StyledTableRow>                        
                        <StyledTableCell align="center">End Time</StyledTableCell>
                        <StyledTableCell align="center">{this.state.bookings.journeyEndTime}</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>   
            </div> 
        )
    }

}
