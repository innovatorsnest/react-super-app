import React from 'react';
import './inputField.css';


class InputField extends React.Component {

 
    enterPressed = (event) => {
        var code = event.keyCode || event.which;
        if(code === 13) { //13 is the enter keycode
            //Do stuff in here
            console.log('enter is clicked');
            console.log('event captured', event.target.value); 
        } 
    }
    render() {
        return (
            <div>
            <div className="input">
                <input type="text" className="text--field"  onKeyPress={this.enterPressed.bind(this)} placeholder="Please enter some notes"/>
            </div>
            
        </div>
        )
    }
}

export default InputField;