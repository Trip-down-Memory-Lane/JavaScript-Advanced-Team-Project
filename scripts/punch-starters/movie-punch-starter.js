let BasePunchStarter  = require('./base-punch-starter.js');

function validationMoviePunchStarterProperty (director, actors) {
    if (typeof(director) !== 'string') {
        throw new TypeError(`Invalid director: ${director} must be of type string`);
    }

    if (!Array.isArray(actors)) {
        throw new TypeError(`Invalid actors: ${actors} must be an array of strings`);
    }

    for (let actor of actors) {
        if (typeof(actor) !== 'string') {
            throw new TypeError(`Invalid actor: ${actor} must be of type string`);
        }
    }
}

class MoviePunchStarter extends BasePunchStarter {
    constructor (id, name, manufacturer, description, genres, targetPrice, director, actors) {
        super(id, name, manufacturer, description, genres, targetPrice);
        validationMoviePunchStarterProperty(director, actors);
        this._director = director;
        this._actors = actors;
    }

    get director () {
        return this._director;
    }

    get actors () {
        return this._actors;
    }
}

module.exports = MoviePunchStarter;
