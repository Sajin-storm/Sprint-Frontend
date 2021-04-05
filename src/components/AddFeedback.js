import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/action'


import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(5),
        width: '25ch',
      },
    },
}));


class AddFeedback extends Component{
    
    constructor(){
        super()
        this.username = React.createRef()
        this.rating = React.createRef()
        this.comment = React.createRef()
        this.routeName = React.createRef()

        this.state = {message:' '}
    }

    addFeedback(event){
        this.setState = {message: ''}
        this.props.onAddFeedback({
            username: this.username.current.value,
            rating: this.rating.current.value,
            comment: this.comment.current.value,
            routeName: this.routeName.current.value
        })
    }

    render(){

        const classes = useStyles

        return(
            <div style={{
                display:'flex',
                justifyContent:'center',
            }}>

            <form className={classes.root} noValidate autoComplete="off" >
                
            <TextField  inputRef={this.username} id="outlined-required" label="Enter username" variant="filled" ></TextField>
            <br/><br/>
            <TextField  inputRef={this.rating} id="outlined-required" label="Enter rating" variant="filled" ></TextField>
            <br/><br/>
            <TextField  inputRef={this.comment} id="outlined-required" label="Enter comment" variant="filled" ></TextField>
            <br/><br/>
            <TextField  inputRef={this.routeName} id="outlined-required" label="Enter routeName" variant="filled" ></TextField>
            <br/><br/>
            <Button variant="contained" color="primary" className={classes.button} onClick={this.addFeedback.bind(this)}>Add Booking</Button> 
            </form>
                 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.message,
        
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onAddFeedback: (payload) => dispatch(actions.addFeedback(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddFeedback);