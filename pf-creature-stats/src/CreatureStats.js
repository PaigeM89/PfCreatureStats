export default class CreatureStats {
    creatureId = 0;
    hitDieSize = 8;
    hitDice = 1;
    baseSkills = 4;

    babMult = 0.0;

    fortStrong = true;
    reflexStrong = false;
    willStrong = false;
    
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

    setStats(bab_mult, fortStrong, reflexStrong, willStrong, skills) {
        this.babMult = bab_mult;
        this.fortStrong = fortStrong;
        this.reflexStrong = reflexStrong;
        this.willStrong = willStrong;
        this.baseSkills = skills;
    };

    setCoreStats = () => {
        console.log("setting core creature stat values");
        switch (this.creatureId) {
            case 0: //abberation
                this.setStats(0.75, false, false, true, 4);
                break;
            case 1: //animal
                this.setStats(0.75, true, true, false, 2);
                break;
            case 2: //construct
                this.setStats(1.00, false, false, false, 2);
                break;
            case 3: //dragon
                this.setStats(1.00, true, true, true, 6);
                break;
            case 4: //fey
                this.setStats(0.5, false, true, true, 6);
                break;
            case 5: // humanoid
                this.setStats(0.75, true, false, false, 2);
                break;
            case 6: //magical beast
                this.setStats(1.00, true, true, false, 2);
                break;
            case 7: //monstrous humanoid
                this.setStats(1.00, false, true, true, 4);
                break;
            case 8: //ooze
                this.setStats(0.75, false, false, false, 2);
                break;
            case 9: //outsider
                this.setStats(1.00, false, true, true, 6);
                break;
            case 10: //plant
                this.setStats(0.75, true, false, false, 2);
                break;
            case 11: //undead
                this.setStats(0.75, false, false, true, 4);
                break;
            case 12: //vermin
                this.setStats(0.75, true, false, false, 2);
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