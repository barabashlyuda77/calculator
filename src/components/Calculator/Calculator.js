import React, { Component } from 'react';
import './Calculator.scss';

import Button from '../../components/Button/Button.js';
import DisplayLine from '../../components/DisplayLine/DisplayLine.js';

class Calculator extends Component {
    state = {
        displayLineText: '0',
    };

    // buttonNumber - это клавиша, которую ты нажала
    buttonIsClicked = (buttonNumber) => {
        console.log(`Button ${buttonNumber} was clicked`);

        var newState = {};

        if (this.state.displayLineText[0] === '0') {
            function isNumeric(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }

            if (isNumeric(buttonNumber)) {
                newState.displayLineText = buttonNumber;
            }
        } else if (buttonNumber === 'AC') {
            newState.displayLineText = '0';
        }
        else {
            newState.displayLineText = this.state.displayLineText + buttonNumber;
        }

        this.setState(newState);
    }

    render() {
        return (
            <div>
                <div className="line">
                    <DisplayLine text={this.state.displayLineText} />
                </div>
                <div className="line">
                    <Button text="AC" color="gray" buttonIsClicked={this.buttonIsClicked} />
                    <Button text="+/-" color="gray" buttonIsClicked={this.buttonIsClicked} />
                    <Button text="%" color="gray" buttonIsClicked={this.buttonIsClicked} />
                    <Button text="/" color="orange" buttonIsClicked={this.buttonIsClicked} />
                </div>
                <div className="line">
                    <Button text="7" color="gray" buttonIsClicked={this.buttonIsClicked} />
                    <Button text="8" color="gray" buttonIsClicked={this.buttonIsClicked} />
                    <Button text="9" color="gray" buttonIsClicked={this.buttonIsClicked} />
                    <Button text="x" color="orange" buttonIsClicked={this.buttonIsClicked} />
                </div>
                <div className="line">
                    <Button text="4" color="gray" buttonIsClicked={this.buttonIsClicked} />
                    <Button text="5" color="gray" buttonIsClicked={this.buttonIsClicked} />
                    <Button text="6" color="gray" buttonIsClicked={this.buttonIsClicked} />
                    <Button text="-" color="orange" buttonIsClicked={this.buttonIsClicked} />
                </div>
                <div className="line">
                    <Button text="1" color="gray" buttonIsClicked={this.buttonIsClicked} />
                    <Button text="2" color="gray" buttonIsClicked={this.buttonIsClicked} />
                    <Button text="3" color="gray" buttonIsClicked={this.buttonIsClicked} />
                    <Button text="+" color="orange" buttonIsClicked={this.buttonIsClicked} />
                </div>
                <div className="line">
                    <Button text="0" places="2" color="gray" buttonIsClicked={this.buttonIsClicked} />
                    <Button text="." places="1" color="gray" buttonIsClicked={this.buttonIsClicked} />
                    <Button text="=" places="1" color="gray" buttonIsClicked={this.buttonIsClicked} />
                </div>
            </div>
        )
    }
}

export default Calculator;