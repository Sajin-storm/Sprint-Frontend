import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'



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

  

class GetAllBusOperator extends Component{

    constructor(){
        super();
        this.state = {busOperators:[]}
    }

    componentDidMount(){
        console.log('Initialization...')
        this.props.onFetchBusOperators()
    }

    deleteBusOperator(){
      
    }

    render(){

        const classes = useStyles

        var busOperatorList = this.props.busOperators.map((busOperator,i)=>{
            
            return(
                
            <StyledTableRow key={i}>
            <StyledTableCell component="th" scope="row" align="center">
            {i+1}
            </StyledTableCell>
            <StyledTableCell align="center">{busOperator.id}</StyledTableCell>
            <StyledTableCell align="center">{busOperator.busOperatorUsername}</StyledTableCell>
            <StyledTableCell align="center">{busOperator.password}</StyledTableCell>
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
                  <StyledTableCell align="center">Bus Operator</StyledTableCell>
                  <StyledTableCell align="center">Password</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {busOperatorList}
              </TableBody>
            </Table>
          </TableContainer>
          </div>

        )
    }
}

const mapStateToProps = (state) => {

    return {
        busOperators: state.busOperators
        // ,message: state.message
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onFetchBusOperators: () => dispatch(actions.fetchBusOperators()), 
        
    }
}

export default connect(mapStateToProps, mapDispatchToState)(GetAllBusOperator);


