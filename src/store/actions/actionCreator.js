import * as actionTypes from './actionTypes';
// AXIOS
import axios from '../../axiosGlobal';

// Flag Sync code
export const raiseFlag = (flag) => {
    return {
        type: actionTypes.ADD,
        flag: flag
    }
}

// Add comment to Firebase Async
export const add = (comment, flag) => {
    return dispatch => {
        axios.post('/comments.json', {comment: comment})
        .then(response => {
            console.log(response);
            // dispatch(saveComment(comment));
            window.location.reload();
        })
        .catch(error => console.log(error))
        dispatch(raiseFlag(flag))
    }
}


