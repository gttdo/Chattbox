import React, {Component} from 'react';
// Connect Component to Redux Store
import { connect } from 'react-redux';
// ActionTypes
import * as actionTypes from '../../store/actions';

class Controls extends Component{
    state = {
        comment: ''
    }

    commentHandler = (event) => {
        this.setState({comment: event.target.value});
    }

    keyboardCommentHandler = (event) => {
        if(event.which === 13){
            this.sendCommentHandler();
        }
    }

    sendCommentHandler = ()=>{
        this.props.addComment(this.state.comment)
        this.setState({comment: ""});
    }
    render(){
        return(
            <div className="chatbox--controls">
                <input 
                    type="text" 
                    className="chatbox--controls_input" 
                    placeholder="please comment here" 
                    value={this.state.comment}
                    onChange={this.commentHandler}
                    onKeyPress={this.keyboardCommentHandler}/>
                <button 
                    type="submit" 
                    className="chatbox--controls_btn"
                    onClick={this.sendCommentHandler}>send</button>
            </div>
        )
    }
}

// Getting state from Redux Store
// const mapStateToProps = () => {

// }

// Dispatch actions to reducer
const mapDispatchToProps = dispatch => {
    return{
        addComment: (comment) => dispatch({type: actionTypes.ADD, comment: comment})
    }
}

export default connect(null, mapDispatchToProps)(Controls);

