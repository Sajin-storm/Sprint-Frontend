import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'

import {
    Link
} from "react-router-dom";


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

class ViewUser extends Component{

    constructor() {
        super();
        this.state = {users:[]}
    }

    componentDidMount(){
        console.log('Initialization...')
        this.props.onFetchUsers()
    }

    deleteUser(username){
        this.props.onDeleteUser(username)
    }

    render(){

        const classes = useStyles

        var userList = this.props.users.map((user,i)=>{
            
            return (


            <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row" align="center">
                {i+1}
                </StyledTableCell>
                <StyledTableCell align="center">{user.id}</StyledTableCell>
                <StyledTableCell align="center">{user.username}</StyledTableCell>
                <StyledTableCell align="center">{user.password}</StyledTableCell>
                {/* <StyledTableCell align="center">
                  <Button variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon />} onClick={this.deleteUser.bind(this, user.username)}>Delete</Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                    <Link to={"/user/update/" + user.username}>
                        <Button variant="contained" color="primary" className={classes.button} >
                            Update
                        </Button>
                    </Link>
                </StyledTableCell>
                <StyledTableCell align = "center"><Link to={"/booking/viewbyusername/" + user.username}><Button variant="contained" color="primary" >
                            View Booking</Button></Link></StyledTableCell> */}
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
                  <StyledTableCell align="center">Username</StyledTableCell>
                  <StyledTableCell align="center">Password</StyledTableCell>
                  {/* <StyledTableCell align="center">Delete</StyledTableCell>
                  <StyledTableCell align="center">Update</StyledTableCell>
                  <StyledTableCell align="center">View Booking</StyledTableCell> */}
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {userList}
                
              </TableBody>
            </Table>
          </TableContainer>
          </div>

        )
    }
}

const mapStateToProps = (state) => {

    return {
        users: state.users
        // ,message: state.message
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onFetchUsers: () => dispatch(actions.fetchUsers()), 
        onDeleteUser: (username) => dispatch(actions.deleteUser(username)) 
    }
}

export default connect(mapStateToProps, mapDispatchToState)(ViewUser);
