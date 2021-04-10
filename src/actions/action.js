//login parts
//user login
export const getUser = (payload) => {
    return {type: "GET_USER", payload}
}

export const errorUser = (payload) => {
    return {type: "ERROR_USER", payload}
}

export const checkUsername = (username, password) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8080/api/v1/users/signin/' + username +':'+ password, requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 302){
                    console.log("found");
                    dispatch(getUser(username));
                    
                }
                else{
                    dispatch(errorUser("Incorrect credentials"));
                }
            })   
    }
}

//admin login
export const getAdmin = (payload) => {
    return {type: "GET_ADMIN", payload}
}

export const errorAdmin = (payload) => {
    return {type: "ERROR_ADMIN", payload}
}

export const checkAdminUsername = (adminUsername, password) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8080/api/v1/admin/signin/' + adminUsername +':'+ password, requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 302){
                    console.log("found");
                    dispatch(getAdmin(adminUsername,password));
                    
                }
                else{
                    dispatch(errorUser("Incorrect credentials"));
                }
            })   
    }
}

//busOperator login
export const getbusops = (payload) => {
    return {type: "GET_BUSOP", payload}
}

export const errorbusops = (payload) => {
    return {type: "ERROR_BUSOP", payload}
}

export const checkbusops = (busOperatorUsername, password) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8080/api/v1/busopertor/signin/' + busOperatorUsername +':'+ password, requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 302){
                    console.log("found");
                    dispatch(getbusops(busOperatorUsername,password));
                }
                else{
                    dispatch(errorbusops("Incorrect credentials"));
                }
            })   
    }
}


//bookings

export const saveBooking = (payload) => {
    return {type: "ADD_BOOKING", payload: {message: "Successfully added Booking!"}}
}

export const addBooking = (payload) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8080/api/v1/bookings/', requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveBooking())
                }
            })   
    }
}

export const findBookings = (payload) => {
    return {type: "FIND_BOOKINGS", payload: payload}
}

export const fetchBookings = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8080/api/v1/bookings/', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findBookings(data));
            }) 
    }
}

const removeBooking = (payload) => {
    return {type: "DELETE_BOOKING", payload}
}

export const deleteBooking = (bookingId) =>{
    
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        let message = ''
        console.log('Deleting booking ...' , bookingId)
        fetch('http://localhost:8080/api/v1/bookings/' + bookingId, requestOptions)
            .then(res => {
                console.log(res);
                if(res.status === 200){
                    message = 'Booking successfully deleted'
                }
                else{
                    message = 'Failed to delete booking'
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(removeBooking({bookings: data, message}))
                dispatch(fetchBookings())
            }) 
    }
}

const updateBooking = () => {
    return {type: "UPDATE_BOOKING", payload:{message: "Successfully updated"}}
}

export const updateBookings = (id, date) =>{
    
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({bookingId: id, date: date})
    };
    return dispatch => {
        console.log(id,date);
        fetch('http://localhost:8080/api/v1/bookings/update/' + id + ':' + date, requestOptions)
            .then(response =>{
                console.log(response.status);
                if(response.status === 200){
                    //this.setState({date: this.date.current.value})
                    //this.setState({message: 'Booking updated sucessfully!'})
                    dispatch(updateBooking()) 
            }
            })
    }
    
}

export const viewBookingByUsers = (payload) => {
    return {type: "FIND_BOOKING_USER", payload: payload}
}

export const viewBookingByUser = (username) => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        
    };
    return dispatch => {
        console.log(username)
        fetch('http://localhost:8080/api/v1/bookings/get/byusername/'+ username, requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findBookings(data));
            })
    }
}

//user




export const saveUser = (payload) => {
    return {type: "ADD_USER", payload: {message: "Successfully added User!"}}
}

export const addUser = (payload) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8080/api/v1/users/', requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveUser())
                }
            })   
    }
}

export const findUser = (payload) => {
    return {type: "FIND_USER", payload: payload}
}

export const fetchUsers = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8080/api/v1/users/', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findUser(data));
            }) 
    }
}


export const signinuser = (payload) => {
    return {type: "LOGIN_USER", payload}
}

export const loginUser = (payload) => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        console.log(payload)
        let message = ''
        fetch('http://localhost:8080/api/v1/users/findbyusername/'+payload.username, requestOptions)
        .then(res => {
            console.log(res);
            if(res.status === 200){
                message = 'Logging in'
            }
            else{
                message = 'invalid username or password'
            }
            
        })
            .then(data => {
                console.log(data);
                dispatch(signinuser(data, message));
            }) 
    }
}


export const removeUser = (payload) => {
    return {type: "DELETE_USER", payload}
}

export const deleteUser = (username) =>{
    
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        let message = ''
        console.log('Deleting user ...' , username)
        fetch('http://localhost:8080/api/v1/users/delete/' + username, requestOptions)
            .then(res => {
                console.log(res);
                if(res.status === 200){
                    message = 'User successfully deleted'
                }
                else{
                    message = 'Failed to delete User'
                }
                
            })
            .then(data => {
                console.log(data);
                dispatch(removeUser({Users: data, message}))
                dispatch(fetchUsers())
                
            }) 
    }
}


const updateUser = () => {
    return {type: "UPDATE_USER", payload:{message: "Successfully updated"}}
}

export const updateUsers = (username, password) =>{
    
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username: username, password: password})
    };
    return dispatch => {
        console.log(username,password);
        fetch('http://localhost:8080/api/v1/users/update/' + username + ':' + password, requestOptions)
            .then(response =>{
                console.log(response.status);
                if(response.status === 201){
                    //this.setState({date: this.date.current.value})
                    //this.setState({message: 'Booking updated sucessfully!'})
                    dispatch(updateUser()) 
            }
            })
    }
    
}


//admin

export const findBusOperator = (payload) => {
    return {type: "FIND_BUSOPERATOR", payload: payload}
}

export const fetchBusOperators = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8080/api/v1/admin/getall', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findBusOperator(data));
            }) 
    }
}

export const findBus = (payload) => {
    return {type: "FIND_BUS", payload: payload}
}

export const fetchBus = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8080/api/v1/admin/getallbus/', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findBus(data));
            }) 
    }
}

export const removeBus = (payload) => {
    return {type: "DELETE_BUS", payload}
}

export const deleteBus = (busNumber) =>{
    
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        let message = ''
        console.log('Deleting Bus ...' , busNumber)
        fetch('http://localhost:8080/api/v1/admin/deletebus/' + busNumber, requestOptions)
            .then(res => {
                console.log(res);
                if(res.status === 200){
                    message = 'bus successfully deleted'
                }
                else{
                    message = 'Failed to delete bus'
                }
                
            })
            .then(data => {
                console.log(data);
                dispatch(removeBus({bus: data, message}))
                dispatch(fetchBus())
                
            }) 
    }
}

export const saveBus = (payload) => {
    return {type: "ADD_BUS", payload: {message: "Successfully added Bus!"}}
}

export const addBus = (payload) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8080/api/v1/busoperator/', requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveBus())
                }
            })   
    }
}

//feedback

export const saveFeedback = (payload) => {
    return {type: "ADD_FEEDBACK", payload: {message: "Successfully added Feedback!"}}
}

export const addFeedback = (payload) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8080/api/v1/feedbacks/', requestOptions)
            .then(res => {
                console.log(res)
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveFeedback())
                }
            })   
    }
}


export const findFeedback = (payload) => {
    return {type: "FIND_FEEDBACK", payload: payload}
}

export const fetchFeedbacks = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8080/api/v1/feedbacks/getall/', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findFeedback(data));
            }) 
    }
}

export const getBusop = (payload) => {
    return {type: "GET_BUSOP", payload}
}

export const errorBusop = (payload) => {
    return {type: "ERROR_BUSOP", payload}
}
