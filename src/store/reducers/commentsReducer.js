import * as actionTypes from '../actions/actionTypes';

// Intial State
const initialState = {
    comments: [],
    flag: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_COMMENTS: 
            return{
                ...state,
                comments: state.comments.concat({id: action.id, value: action.comment})}
        case actionTypes.ADD:
            return{
                ...state,
                flag: action.flag
            }
        default: console.log(null);
    }
    return state;
}

export default reducer;