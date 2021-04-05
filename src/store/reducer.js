// make changes in store's state

const initialState = {
    
    message: '',
    bookings: [],
    users:[],
    busOperators:[],
    feedbacks:[],
    bus:[]
}

const reducer = (state = initialState, { type, payload }) => {

    //console.log(type);
    switch (type) {
        
    case "ADD_BOOKING":
       // let newBookings = [...state.bookings, payload]
        return {message: payload.message, bookings: state.bookings}
    case "DELETE_BOOKING":
        var filteredList = state.bookings.filter((booking)=>
            booking.bookingId !== payload.bookingID)
        return {bookings: filteredList}
    case "FIND_BOOKINGS":
        console.log(payload)
        return {...state,bookings: payload}
    case "UPDATE_BOOKING":
        return {bookings: state.bookings} 
    
    
    

    case "ADD_USER":
        return {message: payload.message, users: state.users}
    case "DELETE_USER":
        var filteredList1 = state.users.filter((user)=>
            user.username !== payload.username)        
        return { users: filteredList1 }   
    case "FIND_USER":
        console.log(payload)
        return {...state,users: payload}
    case "UPDATE_USER":
        return {message:payload.message,users: state.users}
    
    
    case "FIND_BUSOPERATOR":
        console.log(payload)
        return {...state,busOperators: payload}

    case "FIND_BUS":
        console.log(payload)
        return {...state,bus: payload}
    case "DELETE_BUS":
        var filteredList2 = state.bus.filter((bus)=>
            bus.busNumber !== payload.busNumber)        
        return { bus: filteredList2 } 
    case "ADD_BUS":
        return {message: payload.message, bus: state.bus} 

    case "ADD_FEEDBACK":
        return {message: payload.message, feedbacks: state.feedbacks}

    case "FIND_FEEDBACK":
        console.log(payload)
        return {...state,feedbacks: payload}
    
    default:
        return state
    
    }
}

export default reducer;