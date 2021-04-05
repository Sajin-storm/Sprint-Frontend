import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'


import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

class UpdateBooking extends Component {

    constructor(){
        super();
        this.bookingId = React.createRef();
        this.date = React.createRef();

        this.state = {message: ''}
    }

    updateBooking(event){
        console.log('bookingID...',this.props.match.params.id)
        console.log('Date to be updated...',this.date.current.value)
        event.preventDefault();

        this.props.onUpdateBooking(this.props.match.params.id, this.date.current.value)

    }


    render() {

        const classes = useStyles;

        return (
            <div>
                
                

                <br/>
                 <form className={classes.root} noValidate autoComplete="off" >
                 &emsp;
                 <TextField  defaultValue={this.props.match.params.id} id="standard-read-only-input" label="Booking ID" variant="filled" InputProps={{readOnly: true,}}></TextField>
                 </form>
                 <br/>
                 <form className={classes.root} noValidate autoComplete="off">
                 &emsp;
                 <TextField  inputRef={this.date} id="outlined-required"  type="date" helperText="Enter new Date to be updated above" variant="filled"></TextField>
                 </form>
                 <br/>
                 &emsp;
                 <Button variant="contained" color="primary" className={classes.button} onClick={this.updateBooking.bind(this)}>Update Date</Button> 
                 <br/>


                 {/* <form className={classes.root} noValidate autoComplete="off" >
                 &emsp;
                 <TextField fullWidth  disabled id="outlined-required" label={this.props.message} variant="filled"></TextField>
                 </form> */}

                {/* <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Booking ID</span>
                </div>
                <input type="text" value={this.props.match.params.id}  className="form-control" placeholder="Enter booking ID" aria-label="Booking ID" aria-describedby="basic-addon1"/>
                </div>
                
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Date</span>
                </div>
                <input type="date" ref={this.date} className="form-control" placeholder="Enter date to be updated" aria-label="Date " aria-describedby="basic-addon1"/>
                </div>
                
                <button type="button" className="btn btn-primary" onClick={this.updateBooking.bind(this)}>Update Booking</button>

                <div className="alert alert-success" role="alert">
                    {this.props.message}
                </div> */}
                
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        message: state.message,
        // bookings: state.bookings
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onUpdateBooking: (id, date) => dispatch(actions.updateBookings(id, date))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(UpdateBooking);