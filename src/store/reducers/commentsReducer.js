import * as actionTypes from '../actions';

// Intial State
const initialState = {
    comments: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD: 
            return{
                ...state,
                comments: state.comments.concat({id: new Date(),value: action.comment})}
        default: console.log("no changes");
    }
    return state;
}

export default reducer;