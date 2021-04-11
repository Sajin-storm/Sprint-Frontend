import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions/action'


import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';


import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DirectionsBusTwoToneIcon from '@material-ui/icons/DirectionsBusTwoTone';
import Container from '@material-ui/core/Container';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {/* <Link color="inherit" href="https://material-ui.com/"> */}
          Your Website
        {/* </Link>*/}{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));
    
class AddBus extends Component{

    constructor(){
        super();
        this.busNumber = React.createRef();
        this.totalSeats = React.createRef();
        this.fare = React.createRef();

        this.state = {message: '',open: false}
    }

    componentDidMount(){
      this.setState.message = ""
    }

    addBus(event){
        
        this.setState = {message: ''}
        this.props.onAddBus({
            busNumber:this.busNumber.current.value,
            totalSeats:this.totalSeats.current.value,
            fare:this.fare.current.value
        })
    }

    handleClick = () => {
      this.setState({open: true})
    };

    handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }

      this.setState({open: false})
    };


    render() {
        
        

        const classes = useStyles;
        


        return (

             <div>
                 
                 <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <div style={{display:"flex",justifyContent:"center"}}>
        <Avatar className={classes.avatar} style={{backgroundImage:" linear-gradient(blue, red)"}}>
          <DirectionsBusTwoToneIcon/>
        </Avatar>
        </div>
        <Typography component="h1" variant="h5" style={{textAlign:"center",textShadow:"2px 2px #E3EEFF"}}>
          Adding a new Bus
        </Typography>
        <br/>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                
                label="Enter BusNumber"
                style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}
                inputRef={this.busNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Enter total seats"
                inputRef={this.totalSeats}
                style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Enter fare"
                inputRef={this.fare}
                style={{backgroundImage:" linear-gradient(#ECF4FF, white)"}}
              />
            </Grid>
          </Grid>
          <br/>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //className={classes.submit}
            onClick={ this.addBus.bind(this) }
            //onClick = {handleClick}
          >
              
            Add Bus
          </Button>

          <br/><br/>
          <TextField  fullWidth disabled id="outlined-required" label={this.props.message} variant="standard"></TextField>        
          <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                <Alert onClose={this.handleClose} severity="success">
                    {this.props.message}
                </Alert>
                </Snackbar>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>  

    
    


                 {/* <br/>
                 <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                 <form className={classes.root} noValidate autoComplete="off" >
                 <Typography style={{display:'flex', justifyContent:'center'}}>&emsp;<h3>Add New User</h3></Typography>
                 &emsp;
                 <TextField  inputRef={this.username}  id="outlined-required" label="Enter Username" variant="filled"></TextField>
                 </form>
                 </div>
                 <br/>
                 <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                 <form className={classes.root} noValidate autoComplete="off">
                 &emsp;
                 <TextField  inputRef={this.password} id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="filled"></TextField>
                 </form>
                 </div>
                 <br/>
                 &emsp;
                 <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                 <Button variant="contained" color="primary" className={classes.button} onClick={this.addUser.bind(this)}>Add User</Button> 
                 <br/></div>
                 <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                 <form className={classes.root} noValidate autoComplete="off" >
                 &emsp;
                 <TextField fullWidth  disabled id="outlined-required" label={this.props.message} variant="standard"></TextField>
                 </form>
</div> */}
             </div>

             

            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        message: state.message
    }
}

const mapDisatchToState = (dispatch) => {
    return{
        onAddBus: (payload) => dispatch(actions.addBus(payload))
    }
}

export default connect (mapStateToProps, mapDisatchToState)(AddBus);