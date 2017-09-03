import React, {Component} from 'react';

export default class StatsOutput extends Component {
    
    calculateBab = (props) => {
        console.log("multiplier is " + this.props.CreatureStats.babMult);
        console.log("hit dice are " + this.props.CreatureStats.hitDice);
        console.log("strength mod is " + this.props.CoreStats.strengthMod);
        // console.log("logging core stats");
        // console.log(this.props.CoreStats);
        var base = Math.trunc(this.props.CreatureStats.babMult * this.props.CreatureStats.hitDice)
        return base + this.props.CoreStats.strengthMod;
    };

    calculateFortitude = (props) => {
        var base = Math.trunc(this.props.CreatureStats.fortMult 
                * this.props.CreatureStats.hitDice)
        return base + this.props.CoreStats.conMod;
    }
    
    calculateReflex = (props) => {
        var base = Math.trunc(this.props.CreatureStats.reflexMult 
            * this.props.CreatureStats.hitDice)
        return base + this.props.CoreStats.dexMod;
    }

    calculateWill = (props) => {
        var base = Math.trunc(this.props.CreatureStats.willMult 
            * this.props.CreatureStats.hitDice)
        return base + this.props.CoreStats.wisMod;
    }

    calculateSkills = (props) => {
        return Math.trunc(
            this.props.CreatureStats.hitDice * (
                this.props.CreatureStats.baseSkills 
                + this.props.CoreStats.intMod
            )
        );
    }

    render() {
        return (
            <div>
                <label>
                {/* Base Attack Bonus: {this.props.bab} */}
                Base Attack Bonus: {this.calculateBab(this.props)}
                <br />
                Fortitude Save: {this.calculateFortitude(this.props)}
                <br />
                Reflex Save: {this.calculateReflex(this.props)}
                <br />
                Will Save: {this.calculateWill(this.props)}
                <br />
                Skill Points: {this.calculateSkills(this.props)}
                </label>
            </div>
        );
    }
}