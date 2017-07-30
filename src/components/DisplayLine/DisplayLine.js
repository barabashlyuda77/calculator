import React, {Component} from 'react';
import './DisplayLine.scss';

class DisplayLine extends Component {
    render() {
        var allClasses = `display-line display-line-dark-gray display-line-places-4 display-line-right`;
        
        return (
           <div className={allClasses}>
               {this.props.text}
           </div>
        );
    }
}

export default DisplayLine;