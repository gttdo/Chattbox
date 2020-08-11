import React, {Component} from 'react';

// Connect Component to Redux Store
import {connect} from 'react-redux';

// AXIOS
import axios from '../../axiosGlobal';

// Action Creator
import {getComments} from '../../store/actions/actionCreator';

class Display extends Component {
    retrieveComment = (commentObj, commentIDsArr) =>{
        for(let commentID of commentIDsArr){
            axios.get(`/comments/${commentObj}.json`)
            .then(response => {
                this.props.getComments(response.data.comment, commentID)
            })
            .catch(error => console.log(error))
        }
    }

    componentDidMount(){
        // let requestComments = setInterval(() => {
        //     axios.get('/comments.json')
        //     .then(response => {
        //         for(let comment in response.data){
        //                 let commentIDsArray = [...Object.getOwnPropertyNames(response.data)]
        //                 this.retrieveComment(comment, commentIDsArray);
        //         }
        //     })
        //     .catch(error => console.log(error))
        // }, 2000);
    }
    
    render(){
        let commentID = '';
        let comment = this.props.cmt.map(comment => {
            if (commentID !== comment.id){
                console.log(comment.id)
                return <li className="chatbox--display_list--item" key={comment.id}>{comment.value}</li>
            }
        })
        return(
            <div className="chatbox--display">
                <ul className="chatbox--display_list">
                    {comment}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        cmt: state.comments,
        flag: state.flag
    };
};

const mapDispacthToProps = dispatch => {
    return{
        getComments: (comment, commentID) => dispatch(getComments(comment, commentID))
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(Display);

