let BasePunchStarter = require('./base-punch-starter.js');

function validateProperties (resources) {
    if (!Array.isArray(resources)) {
        throw new TypeError(`Invalid resources: ${resources} must be an array of strings`);
    }

    for (let item of resources) {
        if (typeof(item) !== `string`) {
            throw new TypeError(`Invalid resource: ${item} must be of type string`);
        }
    }
}

class CraftsPunchStarter extends BasePunchStarter {
    constructor (id, name, manufacturer, description, genres, targetPrice, resources) {
        super(id, name, manufacturer, description, genres, targetPrice);
        validateProperties(resources);
        this._resources = resources;
    }

    get resources() {
        return this._resources;
    }
}

module.exports = CraftsPunchStarter;
