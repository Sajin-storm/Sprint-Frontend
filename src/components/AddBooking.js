import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import DirectionsBusTwoToneIcon from '@material-ui/icons/DirectionsBusTwoTone';
import {Typography} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(5),
        width: '25ch',
      },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));


class AddBooking extends Component {

  constructor(){
  super();
  this.bookingId = React.createRef();
	this.username = React.createRef();
	this.busNumber = React.createRef();
	this.source = React.createRef();
	this.destination = React.createRef();
	this.numberOfSeats = React.createRef();
	this.amountPaid = React.createRef();
	this.date = React.createRef();
	this.journeyStartTime = React.createRef();
	this.journeyEndTime = React.createRef();

    this.state = {message: '',}
    }

    addBooking(event){
        console.log('bookingID...',this.bookingId.current.value)
        console.log('Username...',this.username.current.value)
        console.log('Bus Number...',this.busNumber.current.value)
        console.log('Source...',this.source.current.value)
        console.log('Destination...',this.destination.current.value)
        console.log('Number of Seats...',this.numberOfSeats.current.value)
        console.log('Amount paid...',this.amountPaid.current.value)
        console.log('Date...',this.date.current.value)
        console.log('Start Time...',this.journeyStartTime.current.value)
        console.log('End Time...',this.journeyEndTime.current.value)
        
        this.setState = {message: ''}

        this.props.onAddBooking({
            bookingId: this.bookingId.current.value, 
            username: this.username.current.value, 
            busNumber: this.busNumber.current.value,
            source: this.source.current.value, 
            destination: this.destination.current.value, 
            numberOfSeats: this.numberOfSeats.current.value,
            amountPaid: this.amountPaid.current.value, 
            date: this.date.current.value, 
            journeyStartTime: this.journeyStartTime.current.value,
            journeyEndTime: this.journeyEndTime.current.value
        });

    }


    render() {

      const classes = useStyles;
        
        return (

        <div >
        <div style={{display:"flex",justifyContent:"center"}}>
        <Avatar className={classes.avatar} style={{backgroundImage:" linear-gradient(blue, black)"}}>
        <DirectionsBusTwoToneIcon/>
        </Avatar>
        </div>  
        <div style={{display:'flex', justifyContent:'center',textShadow:"2px 2px #E3EEFF"}}><h3>Add New Booking</h3></div>
        <br/>

        <Container component="main" maxWidth="xs">
      
      <Grid container spacing={2}>
            
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}>
          <TextField  
          fullWidth
          required={true}
          inputRef={this.bookingId} 
          id="outlined-required" 
          label="Enter Booking ID" 
          variant="outlined" 
          ></TextField>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper} style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}>
              <TextField 
              fullWidth
              inputRef={this.username} 
              id="outlined-required" 
              label="Enter Username" 
              variant="outlined" 
              ></TextField>
          </Paper>
        </Grid>

        <Grid item xs={12}  >
          <Paper className={classes.paper} style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}>
          <TextField  
          fullWidth
          required={true}
          inputRef={this.busNumber} 
          id="outlined-required" 
          label="Enter Bus Number" 
          variant="outlined" 
          ></TextField>
          </Paper>
        </Grid>

        <Grid item xs={12} >
          <Paper className={classes.paper} style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}>
          <TextField  
          fullWidth
          required={true}
          inputRef={this.source} 
          id="outlined-required" 
          label="Enter Source" 
          variant="outlined" 
          ></TextField>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper} style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}>
          <TextField  
          fullWidth
          required={true}
          inputRef={this.destination} 
          id="outlined-required" 
          label="Enter Destination" 
          variant="outlined" 
          ></TextField>
          </Paper>
        </Grid>

        <Grid item xs={12} >
          <Paper className={classes.paper} style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}>
          <TextField  
          fullWidth
          required={true}
          inputRef={this.numberOfSeats} 
          id="outlined-required" 
          label="Enter number of seats" 
          variant="outlined" 
          ></TextField>
          </Paper>
        </Grid>

        <Grid item xs={12} >
          <Paper className={classes.paper} style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}>
          <TextField 
          fullWidth
          required={true}
          inputRef={this.amountPaid} 
          id="outlined-required" 
          label="Enter Amount" 
          variant="outlined" 
          ></TextField>
          </Paper>
        </Grid>

        <Grid item xs={12} >
          <Paper className={classes.paper} style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}>
          <TextField  
          fullWidth
          required={true}
          inputRef={this.date} 
          id="outlined-required" 
          label="Enter date" 
          type='date' 
          variant="outlined" 
          InputLabelProps={{shrink: true}}
          ></TextField>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper} style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}>
          <TextField  
          fullWidth
          required={true}
          inputRef={this.journeyStartTime} 
          id="outlined-required" 
          type='time' 
          label="Enter start time" 
          variant="outlined" 
          InputLabelProps={{shrink: true}}
          ></TextField>
          </Paper>
        </Grid>

        <Grid item xs={12} >
          <Paper className={classes.paper} style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}>
          <TextField  
          fullWidth
          required={true}
          inputRef={this.journeyEndTime} 
          id="outlined-required" 
          type='time' 
          label="Enter end time" 
          variant="outlined" 
          InputLabelProps={{shrink: true}}
          ></TextField>
          </Paper>
        </Grid>

        <Grid item xs={12}>
        
        
        <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //className={classes.submit}
            onClick={this.addBooking.bind(this)}
          >
              
            Add Booking
          </Button>
      </Grid>

      </Grid>
      
      
      </Container>

    </div>



            // <div style={{
            //     display:'flex',
            //     justifyContent:'center',
            // }}>
                
               
               
            //      <form className={classes.root} noValidate autoComplete="off" >
                 
            //     <div style={{display:'flex', justifyContent:'center'}}>&emsp;<h3>Add New Booking</h3></div>
            //     &emsp;
                 
            //      <TextField  inputRef={this.bookingId} id="outlined-required" label="Enter Booking ID" variant="filled" ></TextField>
            //      &emsp;

            //      <TextField  inputRef={this.username} id="outlined-required" label="Enter Username" variant="filled" ></TextField>
            //      <br/><br/>&emsp;

            //      <TextField  inputRef={this.busNumber} id="outlined-required" label="Enter Bus Number" variant="filled" ></TextField>
            //      <br/><br/>&emsp;

            //      <TextField  inputRef={this.source} id="outlined-required" label="Enter Source" variant="filled" ></TextField>
            //      &emsp;

            //      <TextField  inputRef={this.destination} id="outlined-required" label="Enter Destination" variant="filled" ></TextField>
            //      <br/><br/>&emsp;

            //      <TextField  inputRef={this.numberOfSeats} id="outlined-required" label="Enter number of seats" variant="filled" ></TextField>
            //      &emsp;

            //      <TextField inputRef={this.amountPaid} id="outlined-required" label="Enter Amount" variant="filled" ></TextField>
            //      <br/><br/>&emsp;

            //      <TextField  inputRef={this.date} id="outlined-required" label="Enter date" type='date' variant="filled" InputLabelProps={{shrink: true}}></TextField>
            //      <br/><br/>&emsp;

            //      <TextField  inputRef={this.journeyStartTime} id="outlined-required" type='time' label="Enter start time" variant="filled" InputLabelProps={{shrink: true}}></TextField>
            //      &emsp;

            //      <TextField  inputRef={this.journeyEndTime} id="outlined-required" type='time' label="Enter end time" variant="filled" InputLabelProps={{shrink: true}}></TextField>
            //      <br/><br/>&emsp;

            //      <Button variant="contained" color="primary" className={classes.button} onClick={this.addBooking.bind(this)}>Add Booking</Button> 
            //      <br/><br/>&emsp;

            //      <TextField fullWidth  disabled id="outlined-required" label={this.props.message} variant="standard" InputProps={{readOnly: true,}}></TextField>
            //      <br/><br/>&emsp;

            //      <TextField fullWidth  disabled id="outlined-required"  variant="standard" InputProps={{readOnly: true,}}></TextField>
                 
            //      </form>

            // </div>
            
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
        onAddBooking: (payload) => dispatch(actions.addBooking(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddBooking);