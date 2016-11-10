let BasePunchStarter = require('./base-punch-starter.js');

function validationGamePunchStarterProperty(technologyUsed){

    if (!Array.isArray(technologyUsed)) {
        throw new TypeError('Invalid type: '+ technologyUsed);
    }

    for (let tech of technologyUsed) {
        if (typeof tech !== 'string') {
            throw new TypeError('Invalid type of element : '+ tech + ' from technologyUsed array');
        }
    }

}

class GamePunchStarter extends BasePunchStarter{
    constructor(id, name, manufacturer, description, genres, targetPrice, technologiesUsed){
        super(id, name, manufacturer, description, genres, targetPrice);
        validationGamePunchStarterProperty(technologiesUsed);
        this._technologiesUsed = technologiesUsed;
    }

    get technologiesUsed(){
        return this._technologiesUsed;
    }
}

module.exports = GamePunchStarter;