import React, {Component} from 'react';

export default class StatsOutput extends Component {
    
    calculateBab = (props) => {
        // console.log("multiplier is " + this.props.CreatureStats.babMult);
        // console.log("hit dice are " + this.props.CreatureStats.hitDice);
        // console.log("strength mod is " + this.props.CoreStats.strengthMod);
        // console.log("logging core stats");
        // console.log(this.props.CoreStats);
        var base = Math.trunc(this.props.CreatureStats.babMult * this.props.CreatureStats.hitDice)
        return base + this.props.CoreStats.strengthMod;
    };    

    calc = (b, h) => {
        if (b)
            return Math.floor(h/2) + 2;
        else
            return Math.floor(h/3);
    };

    calculateFortitude = (props) => {
        var base = this.calc(this.props.CreatureStats.fortStrong, this.props.CreatureStats.hitDice);
        return base + this.props.CoreStats.conMod;
    }
    
    calculateReflex = (props) => {
        var base = this.calc(this.props.CreatureStats.reflexStrong, this.props.CreatureStats.hitDice);
        return base + this.props.CoreStats.dexMod;
    }

    calculateWill = (props) => {
        var base = this.calc(this.props.CreatureStats.willStrong, this.props.CreatureStats.hitDice);
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

    calculateHitPointString = (props) => {
        var hpBonus = (this.props.CoreStats.conMod * this.props.CreatureStats.hitDice).toString();
        var hdString = "";
        var hd = this.props.CreatureStats.hitDieSize;
        hdString = (this.props.CreatureStats.hitDice) + "d" + (hd) + " + " + hpBonus;

        return hdString;
    };

    getHp = (hd, c) => {        
        let perLevel = hd/2 + 0.5;
        let t = perLevel * c;
        return Math.floor(t);
    }

    calculateHitPointAverage = (props) => {
        var hp = "";
        var hd = this.props.CreatureStats.hitDieSize;
        var hpBonus = (this.props.CoreStats.conMod * this.props.CreatureStats.hitDice).toString();
        var creatureType = this.props.CreatureStats.creatureId;
        if (creatureType === 5 || creatureType === 9 || creatureType === 3) {
            let base = Number(hd);
            let perLevel = this.getHp(hd, this.props.CreatureStats.hitDice - 1);
            let total = Number(base) + Number(perLevel) + Number(hpBonus);
            hp = total.toString();
        } else {
            let perLevel = this.getHp(hd, this.props.CreatureStats.hitDice);
            let total = Number(perLevel) + Number(hpBonus);
            hp = total.toString();
        }
        return hp;
    };

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
                <br />
                Hit Points: {this.calculateHitPointString(this.props)} ({this.calculateHitPointAverage(this.props)})
                </label>                
            </div>
        );
    }
}