import React, { Component } from 'react';
import './Calculator.scss';

import Button from '../../components/Button/Button.js';
import DisplayLine from '../../components/DisplayLine/DisplayLine.js';

class Calculator extends Component {
    state = {
        displayLineText: 0,
    };

    buttonIsClicked = (buttonNumber) => {
        console.log(`Button ${buttonNumber} was clicked`);

        var newState = {
            displayLineText: buttonNumber,
        };

        this.setState(newState);
    }
    
    render() {
        return (
            <div>
                <div className="line">
                    <DisplayLine text={this.state.displayLineText} />
                </div>
                <div className="line">
                    <Button text="AC" color="gray" buttonClickFunction={this.buttonIsClicked} />
                    <Button text="+/-" color="gray" buttonClickFunction={this.buttonIsClicked} />
                    <Button text="%" color="gray" buttonClickFunction={this.buttonIsClicked} />
                    <Button text="/" color="orange" buttonClickFunction={this.buttonIsClicked} />
                </div>
                <div className="line">
                    <Button text="7" color="gray" buttonClickFunction={this.buttonIsClicked} />
                    <Button text="8" color="gray" buttonClickFunction={this.buttonIsClicked} />
                    <Button text="9" color="gray" buttonClickFunction={this.buttonIsClicked} />
                    <Button text="x" color="orange" buttonClickFunction={this.buttonIsClicked} />
                </div>
                <div className="line">
                    <Button text="4" color="gray" buttonClickFunction={this.buttonIsClicked} />
                    <Button text="5" color="gray" buttonClickFunction={this.buttonIsClicked} />
                    <Button text="6" color="gray" buttonClickFunction={this.buttonIsClicked} />
                    <Button text="-" color="orange" buttonClickFunction={this.buttonIsClicked} />
                </div>
                <div className="line">
                    <Button text="1" color="gray" buttonClickFunction={this.buttonIsClicked} />
                    <Button text="2" color="gray" buttonClickFunction={this.buttonIsClicked} />
                    <Button text="3" color="gray" buttonClickFunction={this.buttonIsClicked} />
                    <Button text="+" color="orange" buttonClickFunction={this.buttonIsClicked} />
                </div>
                <div className="line">
                    <Button text="0" places="2" color="gray" buttonClickFunction={this.buttonIsClicked} />
                    <Button text="." places="1" color="gray" buttonClickFunction={this.buttonIsClicked} />
                    <Button text="=" places="1" color="gray" buttonClickFunction={this.buttonIsClicked} />
                </div>
            </div>
        )
    }
}

export default Calculator;