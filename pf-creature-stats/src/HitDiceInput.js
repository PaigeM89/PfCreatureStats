import React, {Component} from 'react';

export default class HitDiceInput extends Component {
    onChange = (event) => {
        this.props.onChangeFunction(event.target.value);
    };

    render() {
        return(
            <div>
                <label> Hit Die: d{this.props.hitdie} </label>
                <br />
                Number of hit dice: <input type="number" onChange={this.onChange} />
            </div>
        );
    }
}