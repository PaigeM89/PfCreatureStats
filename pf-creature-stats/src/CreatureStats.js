export default class CreatureStats {
    static CoefficientEnum = {
        FULL : 1.0,
        THREE_FOURTS: 0.75,
        TWO_THIRDS: 0.66,
        ONE_HALF: 0.5,
        ONE_THIRD: 0.33
    };

    creatureId = 0;
    hitDieSize = 8;
    hitDice = 1;
    baseSkills = 4;

    babMult = 0.0;
    fortMult = 0.0;
    reflexMult = 0.0;
    willMult = 0.0;
    
    static getHitDieSize = (creature_id) => {
        var hitdie = 6;
        switch (creature_id) {
            case 4:
              hitdie = 6;
              break;
            case 0:
            case 1:
            case 5:
            case 8:
            case 10:
            case 11:
            case 12:
              hitdie = 8;
              break;
            case 2:
            case 6:
            case 7:
            case 9:
              hitdie = 10;
              break;
            case 3:
              hitdie = 12;
              break;
            default:
              hitdie = 8;
        }
        return hitdie;
    };

    setStats(bab_mult, fort_mult, ref_mult, will_mult, skills) {
        this.babMult = bab_mult;
        this.fortMult = fort_mult;
        this.reflexMult = ref_mult;
        this.willMult = will_mult;
        this.baseSkills = skills;
    };

    setCoreStats = () => {
        console.log("setting core creature stat values");
        switch (this.creatureId) {
            case 0: //abberation
                this.setStats(0.75, 0.33, 0.33, 0.66, 4);
                break;
            case 1: //animal
                this.setStats(0.75, 0.66, 0.66, 0.33, 2);
                break;
            case 2: //construct
                this.setStats(1.00, 0.33, 0.3, 0.33, 2);
                break;
            case 3: //dragon
                this.setStats(1.00, 0.66, 0.66, 0.66, 6);
                break;
            case 4: //fey
                this.setStats(0.5, 0.33, 0.66, 0.66, 6);
                break;
            case 5: // humanoid
                this.setStats(0.75, 0.66, 0.33, 0.33, 2);
                break;
            case 6: //magical beast
                this.setStats(1.00, 0.66, 0.66, 0.33, 2);
                break;
            case 7: //monstrous humanoid
                this.setStats(1.00, 0.33, 0.66, 0.66, 4);
                break;
            case 8: //ooze
                this.setStats(0.75, 0.33, 0.33, 0.33, 2);
                break;
            case 9: //outsider
                this.setStats(1.00, 0.33, 0.66, 0.66, 6);
                break;
            case 10: //plant
                this.setStats(0.75, 0.66, 0.33, 0.33, 2);
                break;
            case 11: //undead
                this.setStats(0.75, 0.33, 0.33, 0.66, 4);
                break;
            case 12: //vermin
                this.setStats(0.75, 0.66, 0.33, 0.33, 2);
                break;
            default:
                this.setStats(0, 0, 0, 0, 0);
        }
    };    

    constructor(creature_id, hitdice) {
        this.creatureId = creature_id;
        this.hitDieSize = CreatureStats.getHitDieSize(creature_id);
        this.hitDice = hitdice;
        this.setCoreStats();
    }
}