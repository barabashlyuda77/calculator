import React, {Component} from 'react';
import './Button.scss';

class Button extends Component {
    clickHandler = () => {
        this.props.buttonIsClicked(this.props.text);
    }

    render() {
        var myClass = '';
        if (this.props.color === 'gray') {
            myClass = 'button-gray';
        } else if (this.props.color === 'orange') {
            myClass = 'button-orange';
        } else if (this.props.color === 'dark-gray') {
            myClass = 'button-dark-gray';
        }

        var buttonPlaces = '';
        if (this.props.places === '1') {
            buttonPlaces = 'button-places-1';
        } else if (this.props.places === '2') {
            buttonPlaces = 'button-places-2';
        } else if (this.props.places === '4') {
            buttonPlaces = 'button-places-4';
        } else {
            buttonPlaces = 'button-places-1';
        }

        var textAlign = '';
        if (this.props.align === 'right') {
            textAlign = 'button-right';
        } else {
            textAlign = 'button-center';
        }

        var allClasses = `button ${myClass} ${buttonPlaces} ${textAlign}`;
        
        return (
           <div className={allClasses} onClick={this.clickHandler}>
               {this.props.text}
           </div>
        );
    }
}

export default Button;