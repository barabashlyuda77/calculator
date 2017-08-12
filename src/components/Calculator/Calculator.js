import React, { Component } from 'react';
import './Calculator.scss';

import Button from '../../components/Button/Button.js';
import DisplayLine from '../../components/DisplayLine/DisplayLine.js';

class Calculator extends Component {
    state = {
        displayLineText: 0,
        previousDisplayLineText: undefined,
        signWasPressed: undefined,
        previousButton: undefined
    };

    buttonIsClicked = (buttonNumber) => {
        if (this.state.displayLineText === 0) {
            if (Number.isFinite(Number(buttonNumber))) {
                this.updateState(
                    Number(buttonNumber),
                    this.state.previousDisplayLineText,
                    this.state.signWasPressed,
                    buttonNumber
                );
            }
        } else if (buttonNumber === 'AC') {
            this.updateState(
                0,
                undefined,
                undefined
            );
        } else if (buttonNumber === '+') {
            if (this.state.previousDisplayLineText === undefined) {
                this.updateState(
                    this.state.displayLineText,
                    this.state.displayLineText,
                    '+',
                    buttonNumber
                );
            } else {
                var result = undefined;
                if (this.state.signWasPressed === '+') {
                    result = this.state.previousDisplayLineText + this.state.displayLineText;
                } else if (this.state.signWasPressed === '-') {
                    result = this.state.previousDisplayLineText - this.state.displayLineText;
                }
                this.updateState(
                    result,
                    result,
                    '+'
                );
            }
        } else if (buttonNumber === '-') {
            if (this.state.previousDisplayLineText === undefined) {
                this.updateState(
                    this.state.displayLineText,
                    this.state.displayLineText,
                    '-'
                );
            } else {
                var result = undefined;
                if (this.state.signWasPressed === '+') {
                    result = this.state.previousDisplayLineText + this.state.displayLineText;
                } else if (this.state.signWasPressed === '-') {
                    result = this.state.previousDisplayLineText - this.state.displayLineText;
                }
                this.updateState(
                    result,
                    result,
                    '-'
                );
            }
        } else if (buttonNumber === '=') {
            if (this.state.signWasPressed === '+') {
                this.updateState(
                    this.state.displayLineText + this.state.previousDisplayLineText,
                    undefined,
                    this.state.signWasPressed
                );
            } else if (this.state.signWasPressed === '-') {
                this.updateState(
                    this.state.previousDisplayLineText - this.state.displayLineText,
                    undefined,
                    this.state.signWasPressed
                );
            }
        } else {
            if (!Number.isFinite(Number(this.state.previousButton))) {
                this.updateState(
                    Number(buttonNumber),
                    this.state.previousDisplayLineText,
                    this.state.signWasPressed
                );
            } else {
                this.updateState(
                    Number(String(this.state.displayLineText) + buttonNumber),
                    this.state.previousDisplayLineText,
                    this.state.signWasPressed
                );
            }
        }
    }

    updateState = (newDisplayLineText, newPreviousDisplayLineText,
                    newSignWasPressed, newPreviousButton) => {
        var newState = {
            displayLineText: newDisplayLineText,
            previousDisplayLineText: newPreviousDisplayLineText,
            signWasPressed: newSignWasPressed,
            previousButton: newPreviousButton
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
                    <Button text="AC" color="gray" places="3" buttonIsClicked={this.buttonIsClicked} />
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