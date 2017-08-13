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
        this.updatePreviousButton(buttonNumber);
        switch (buttonNumber) {
            case 'AC':
                this.updateDisplayLineText(0);
                this.updatePreviousDisplayLineText(undefined);
                this.updateSignWasPressed(undefined);
                break;
            case '+':
                this.updateSignWasPressed('+');
                if (this.isPreviousButtonSign() === true) {
                    return;
                }
                if (this.state.previousDisplayLineText === undefined) {
                    this.updatePreviousDisplayLineText(this.state.displayLineText);
                } else {
                    var result = this.getSignWasPressed();
                    this.updateDisplayLineText(result);
                    this.updatePreviousDisplayLineText(result);
                }
                break;
            case '-':
                this.updateSignWasPressed('-');
                if (this.isPreviousButtonSign() === true) {
                    return;
                }
                if (this.state.previousDisplayLineText === undefined) {
                    this.updatePreviousDisplayLineText(this.state.displayLineText);
                } else {
                    var result = this.getSignWasPressed();
                    this.updateDisplayLineText(result);
                    this.updatePreviousDisplayLineText(result);
                }
                break;
            case 'x':
                this.updateSignWasPressed('x');
                if (this.isPreviousButtonSign() === true) {
                    return;
                }
                if (this.state.previousDisplayLineText === undefined) {
                    this.updatePreviousDisplayLineText(this.state.displayLineText);
                } else {
                    var result = this.getSignWasPressed();
                    this.updateDisplayLineText(result);
                    this.updatePreviousDisplayLineText(result);
                }
                break;
            case '/':
                this.updateSignWasPressed('/');
                if (this.isPreviousButtonSign() === true) {
                    return;
                }
                if (this.state.previousDisplayLineText === undefined) {
                    this.updatePreviousDisplayLineText(this.state.displayLineText);
                } else {
                    var result = this.getSignWasPressed();
                    this.updateDisplayLineText(result);
                    this.updatePreviousDisplayLineText(result);
                }
                break;

            case '=':
                if (this.state.previousButton === '=') {
                    return;
                }
                this.updatePreviousDisplayLineText(undefined);
                if (this.state.signWasPressed === '+') {
                    this.updateDisplayLineText(this.state.previousDisplayLineText
                        + this.state.displayLineText);
                } else if (this.state.signWasPressed === '-') {
                    this.updateDisplayLineText(this.state.previousDisplayLineText
                        - this.state.displayLineText);
                } else if (this.state.signWasPressed === 'x') {
                    this.updateDisplayLineText(this.state.previousDisplayLineText
                        * this.state.displayLineText); 
                } else if (this.state.signWasPressed === '/') {
                    this.updateDisplayLineText(this.state.previousDisplayLineText
                        / this.state.displayLineText);
                }
                break;
            default:
                if (this.state.displayLineText === 0) {
                    this.updateDisplayLineText(Number(buttonNumber));
                }
                if (Number.isFinite(Number(this.state.previousButton))) {
                    this.updateDisplayLineText(Number(String(this.state.displayLineText)
                        + buttonNumber));
                } else {
                    this.updateDisplayLineText(Number(buttonNumber));
                }
        }
    }

    updateDisplayLineText = (newDisplayLineText) => {
        var newState = {
            displayLineText: newDisplayLineText
        }
        this.setState(newState);
    }

    updatePreviousDisplayLineText = (newPreviousDisplayLineText) => {
        var newState = {
            previousDisplayLineText: newPreviousDisplayLineText
        }
        this.setState(newState);
    }

    updateSignWasPressed = (newSignWasPressed) => {
        var newState = {
            signWasPressed: newSignWasPressed
        }
        this.setState(newState);
    }

    updatePreviousButton = (newPreviousButton) => {
        var newState = {
            previousButton: newPreviousButton
        }
        this.setState(newState);
    }

    isPreviousButtonSign = () => {
        if ((this.state.previousButton === '+')
            || (this.state.previousButton === '-')
            || (this.state.previousButton === 'x')
            || (this.state.previousButton === '/')) {
            return true;
        } else {
            return false;
        }
    }

    getSignWasPressed = () => {
        var result = undefined;
        if (this.state.signWasPressed === '+') {
            result = this.state.previousDisplayLineText + this.state.displayLineText;
        } else if (this.state.signWasPressed === '-') {
            result = this.state.previousDisplayLineText - this.state.displayLineText;
        } else if (this.state.signWasPressed === 'x') {
            result = this.state.previousDisplayLineText * this.state.displayLineText;
        } else if (this.state.signWasPressed === '/') {
            result = this.state.previousDisplayLineText / this.state.displayLineText;
        }
        return result;
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