import React, {Component} from 'react';

// Connect Component to Redux Store
import {connect} from 'react-redux';

// AXIOS
import axios from '../../axiosGlobal';

class Display extends Component {
    state = {
        comments: [],
        flag: false
    }
    retrieveComment = (commentID) =>{
        axios.get(`/comments/${commentID}.json`)
        .then(response => {
            console.log(response.data.comment);
            this.updateComments(response.data.comment)
        })
        .catch(error => console.log(error))
    }

    updateComments = (comment) => {
        this.setState({
            comments: this.state.comments.concat(comment)
        })
    }
    componentDidMount(){
            axios.get('/comments.json')
            .then(response => {
                for(let comment in response.data){
                    this.retrieveComment(comment)
                }
            })
            .catch(error => console.log(error))
    }
    
    render(){
        return(
            <div className="chatbox--display">
                <ul className="chatbox--display_list">
                    {this.state.comments.map(comment => (
                        <li className="chatbox--display_list--item" key={comment}>{comment}</li>
                    ))}
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

// const mapDispacthToProps = dispatch => {

// }

export default connect(mapStateToProps)(Display);

