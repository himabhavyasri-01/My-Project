import './index.css'
import { Component } from 'react';

class Input extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='result-container'>
                <p className="result-item" value={this.props.value}>{this.props.value}</p>
            </div>
        )
    }
}

export default Input