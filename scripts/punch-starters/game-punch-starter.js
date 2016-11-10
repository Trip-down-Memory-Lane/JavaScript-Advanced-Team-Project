let BasePunchStarter = require('./base-punch-starter.js');


class GamePunchStarter extends BasePunchStarter{
    constructor(id, name, manufacturer, description, genres, targetPrice, technologiesUsed){
        super(id, name, manufacturer, description, genres, targetPrice);
        this._technologiesUsed = technologiesUsed;
    }

    get technologiesUsed(){
        return this._technologiesUsed;
    }
}

module.exports = GamePunchStarter;