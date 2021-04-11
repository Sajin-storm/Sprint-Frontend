import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions/action'




import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

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
  });


class ViewBus extends Component{

    constructor() {
        super();
        this.state = {bus:[]}
    }

    componentDidMount(){
        console.log('Initialization...')
        this.props.onFetchBus()
    }

    deleteBus(busNumber){
        this.props.onDeleteBus(busNumber)
    }

    render(){
        const classes = useStyles
        var busList = this.props.bus.map((bus,i)=>{
            
            return (

            <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row" align="center">
                {i+1}
                </StyledTableCell>
                <StyledTableCell align="center">{bus.id}</StyledTableCell>
                <StyledTableCell align="center">{bus.busNumber}</StyledTableCell>
                <StyledTableCell align="center">{bus.totalSeats}</StyledTableCell>
                <StyledTableCell align="center">{bus.fare}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon />} onClick={this.deleteBus.bind(this, bus.busNumber)}>Delete</Button>
                </StyledTableCell>
            </StyledTableRow>
            )
          })
    


        return (
            <div>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell align="center">Sl.no</StyledTableCell>
                  <StyledTableCell align="center">ID</StyledTableCell>
                  <StyledTableCell align="center">Bus Number</StyledTableCell>
                  <StyledTableCell align="center">Total Seats</StyledTableCell>
                  <StyledTableCell align="center">Fare</StyledTableCell>
                  <StyledTableCell align="center">Delete</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {busList}
                
              </TableBody>
            </Table>
          </TableContainer>
          </div>

        )
    }
}

const mapStateToProps = (state) => {

    return {
        bus: state.bus
        // ,message: state.message
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onFetchBus: () => dispatch(actions.fetchBus()), 
        onDeleteBus: (busNumber) => dispatch(actions.deleteBus(busNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToState)(ViewBus);
