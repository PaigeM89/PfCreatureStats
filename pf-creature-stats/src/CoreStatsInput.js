import React, {Component} from 'react';
import CoreStats from './CoreStats.js';

export default class CoreStatsInput extends Component {
    state = {
        coreStats: new CoreStats(10, 10, 10, 10, 10, 10)
    };
    
    onStrengthChange = (event) => {
        var cs = this.state.coreStats;
        var newStats = new CoreStats(event.target.value, 
            cs.dexScore, cs.conScore, cs.intScore, cs.wisScore, cs.chaScore);
        this.setState({coreStats : newStats});
        this.props.onStatsUpdate(newStats);
    };

    onDexterityChange = (event) => {
        var cs = this.state.coreStats;
        var newStats = new CoreStats( cs.strengthScore, event.target.value,
            cs.conScore, cs.intScore, cs.wisScore, cs.chaScore);
        this.setState({coreStats : newStats});
        this.props.onStatsUpdate(newStats);
    }

    onConstitutionChange = (event) => {
        var cs = this.state.coreStats;
        var newStats = new CoreStats( cs.strengthScore, cs.dexScore,
            event.target.value, cs.intScore, cs.wisScore, cs.chaScore);
        this.setState({coreStats : newStats});
        this.props.onStatsUpdate(newStats);
    }

    onIntelligenceChange = (event) => {
        var cs = this.state.coreStats;
        var newStats = new CoreStats( cs.strengthScore, cs.dexScore,
            cs.conScore, event.target.value, cs.wisScore, cs.chaScore);
        this.setState({coreStats : newStats});
        this.props.onStatsUpdate(newStats);
    }

    onWisdomChange = (event) => {
        var cs = this.state.coreStats;
        var newStats = new CoreStats( cs.strengthScore, cs.dexScore,
            cs.conScore, cs.intScore, event.target.value, cs.chaScore);
        this.setState({coreStats : newStats});
        this.props.onStatsUpdate(newStats);
    }

    onCharismaChange = (event) => {
        var cs = this.state.coreStats;
        var newStats = new CoreStats( cs.strengthScore, cs.dexScore,
            cs.conScore, cs.intScore, cs.wisScore, event.target.value);
        this.setState({coreStats : newStats});
        this.props.onStatsUpdate(newStats);
    }

    render() {
        return (
            <div>
                <label> Strength: </label>
                <input type="number" value={this.state.coreStats.strengthScore} onChange={this.onStrengthChange} />
                <label> Modifier: {this.state.coreStats.strengthMod} </label>
                <br />
                <label> Dexterity: </label>
                <input type="number" value={this.state.coreStats.dexScore} onChange={this.onDexterityChange} />
                <label> Modifier: {this.state.coreStats.dexMod} </label>
                <br />
                <label> Constitution: </label>
                <input type="number" value={this.state.coreStats.conScore} onChange={this.onConstitutionChange} />
                <label> Modifier: {this.state.coreStats.conMod} </label>
                <br />
                <label> Intelligence: </label>
                <input type="number" value={this.state.coreStats.intScore} onChange={this.onIntelligenceChange} />
                <label> Modifier: {this.state.coreStats.intMod} </label>
                <br />
                <label> Wisdom: </label>
                <input type="number" value={this.state.coreStats.wisScore} onChange={this.onWisdomChange} />
                <label> Modifier: {this.state.coreStats.wisMod} </label>
                <br />
                <label> Charisma: </label>
                <input type="number" value={this.state.coreStats.chaScore} onChange={this.onCharismaChange} />
                <label> Modifier: {this.state.coreStats.chaMod} </label>
            </div>
        );
    }
}