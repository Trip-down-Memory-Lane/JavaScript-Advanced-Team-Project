let BasePunchStarter  = require('./base-punch-starter');

class MoviePunchStarter extends BasePunchStarter{
    constructor(id, name, manufacturer, description, genres, targetPrice, director, actors){
        super(id, name, manufacturer, description, genres, targetPrice);
        this._director = director;
        this._actors = actors;
    }

    get director(){
        return this._director;
    }

    get actors(){
        return this._actors;
    }

} 

module.exports = MoviePunchStarter;