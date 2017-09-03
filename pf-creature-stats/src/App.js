import React, { Component } from 'react';
import CreaturetypeDropdown from './CreatureTypeDropdown.js';
import HitDiceInput from './HitDiceInput.js';
import StatsOutput from './StatsOutput.js';
import CoreStats from './CoreStats.js';
import CoreStatsInput from './CoreStatsInput.js';
import CreatureStats from './CreatureStats.js';
import './App.css';

class App extends Component {  
  state = { hitDice : 1, creatureId : 0, 
    creatureStats : new CreatureStats(0, 1),
    coreStats : new CoreStats(10, 10, 10, 10, 10, 10)
  }

  dropdownChange = (creature_id) => {
    //var hitDieSize = CreatureStats.getHitDieSize(creature_id);
    this.setState({creatureId: creature_id});
    this.setBaseValues(creature_id, this.state.hitDice);
  };

  hitDiceChange = (hitdice) => {
    console.log("hit dice: " + hitdice);
    this.setState({ hitDice: hitdice});
    this.setBaseValues(this.state.creatureId, hitdice);
  };

  coreStatsChange = (cs) => {
    console.log("updating core stats on app");
    this.setState({coreStats : cs});
  }

  setBaseValues = (creature_id, hitdice) => {
    console.log("setting new base values for creature id " + creature_id + " with HD of " + hitdice);
    var cs = new CreatureStats(creature_id, hitdice);
    this.setState({creatureStats : cs});
  };

  render() {
    return (
      <div className="App">
        <CreaturetypeDropdown onChangeFunction={this.dropdownChange} />
        <HitDiceInput hitdie={this.state.creatureStats.hitDieSize} onChangeFunction={this.hitDiceChange} />
        <CoreStatsInput onStatsUpdate={this.coreStatsChange} />
        <StatsOutput 
          CreatureStats={this.state.creatureStats}
          CoreStats={this.state.coreStats} /> 
      </div>
    );
  }
}

export default App;
