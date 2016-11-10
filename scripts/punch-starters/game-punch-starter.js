let BasePunchStarter = require('./base-punch-starter.js');

function validationGamePunchStarterProperty (technologiesUsed) {
    if (!Array.isArray(technologiesUsed)) {
        throw new TypeError(`Invalid technologiesUsed: ${technologiesUsed} must be an array of strings`);
    }

    for (let tech of technologiesUsed) {
        if (typeof(tech) !== 'string') {
            throw new TypeError(`Invalid technology: ${tech} must be of type string`);
        }
    }
}

class GamePunchStarter extends BasePunchStarter {
    constructor (id, name, manufacturer, description, genres, targetPrice, technologiesUsed) {
        super(id, name, manufacturer, description, genres, targetPrice);
        validationGamePunchStarterProperty(technologiesUsed);
        this._technologiesUsed = technologiesUsed;
    }

    get technologiesUsed () {
        return this._technologiesUsed;
    }
}

module.exports = GamePunchStarter;
