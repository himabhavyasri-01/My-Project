import { Component } from 'react';
import './index.css'

class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const className = (this.props.value === "=") ? "enter" : "button";
        return (
            <button className={className} value={this.props.value} onClick={this.props.handleClick}>{this.props.value}</button>
        )
    }
}

export default Button