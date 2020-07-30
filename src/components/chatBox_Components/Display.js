import React, {Component} from 'react';

// Connect Component to Redux Store
import {connect} from 'react-redux';

class Display extends Component {
    render(){
        return(
            <div className="chatbox--display">
                <ul className="chatbox--display_list">
                    {this.props.cmt.map(comment => (
                        <li className="chatbox--display_list--item" key={comment.id}>{comment.value}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        cmt: state.comments
    };
};

export default connect(mapStateToProps)(Display);

