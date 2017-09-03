export default class CoreStats {
    strengthScore = 10;
    dexScore = 10;
    conScore = 10;
    intScore = 10;
    wisScore = 10;
    chaScore = 10;

    strengthMod = 0;
    dexMod = 0;
    conMod = 0;
    intMod = 0;
    wisMod = 0;
    chaMod = 0;

    calculateMod(score) {
        return Math.trunc((score - 10) / 2);
    }

    calculateMods() {
        this.strengthMod = this.calculateMod(this.strengthScore);
        this.dexMod = this.calculateMod(this.dexScore);
        this.conMod = this.calculateMod(this.conScore);
        this.intMod = this.calculateMod(this.intScore);
        this.wisMod = this.calculateMod(this.wisScore);
        this.chaMod = this.calculateMod(this.chaScore);
    };

    constructor(str, dex, con, int, wis, cha) {
        this.strengthScore = str;
        this.dexScore = dex;
        this.conScore = con;
        this.intScore = int;
        this.wisScore = wis;
        this.chaScore = cha;
        this.calculateMods();
    }
}