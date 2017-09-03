import React, {Component} from 'react';

export default class CreatureTypeDropdown extends Component {
    state = { creature_types: [ 
        { name: 'Aberration', id: 0},
        { name: 'Animal', id: 1},
        { name: 'Construct', id: 2},
        { name: 'Dragon', id: 3},
        { name: 'Fey', id: 4},
        { name: 'Humanoid', id: 5},
        { name: 'Magical Beast', id: 6},
        { name: 'Monstrous Humanoid', id: 7},
        { name: 'Ooze', id: 8},
        { name: 'Outsider', id: 9},
        { name: 'Plant', id: 10},
        { name: 'Undead', id: 11},
        { name: 'Vermin', id: 12}
    ] };
  
    onChange = (event) => {
        var selected = this.state.creature_types.find((x) => x.name === event.target.value);
        this.props.onChangeFunction(selected.id);
    };
  
    render() {
        let creatures = this.state.creature_types;
        return (
            <label>
              Pick your favorite La Croix flavor: 
              <select onChange={this.onChange}>
                {creatures.map( (i) => {
                    return (<option value={i.name} key={i.id}>{i.name}</option>);
                }, this)};
              </select>
            </label>
      );
    }
  }