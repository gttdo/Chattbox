import React, {Component} from 'react';

// Components
import Display from './chatBox_Components/Display'
import Controls from './chatBox_Components/Controls'

class ChatBox extends Component {
    render(){
        return(
            <div className="chatbox">
                <Display/>
                <Controls/>
            </div>
        )
    }
}

export default ChatBox;