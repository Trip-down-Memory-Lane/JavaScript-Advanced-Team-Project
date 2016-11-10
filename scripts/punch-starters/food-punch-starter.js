let BasePunchStarter = require('./base-punch-starter.js');

function validateProperties (ingredients, recipe) {
    if (!Array.isArray(ingredients)) {
        throw new TypeError(`Invalid ingredients: ${ingredients} must be an array of strings`);
    }

    for (let ingredient of ingredients) {
        if (typeof(ingredient) !== 'string') {
            throw new TypeError(`Invalid ingredient: ${ingredient} must be of type string`);
        }
    }

    if (typeof(recipe) !== 'string') {
        throw new TypeError(`Invalid recipe: ${recipe} must be of type string`);
    }
}

class FoodPunchStarter extends BasePunchStarter {
	constructor (id, name, manufacturer, description, genres, targetPrice, ingredients, recipe) {
	    super(id, name, manufacturer, description, genres, targetPrice);
        validateProperties(ingredients, recipe);
        this._ingredients = ingredients;
        this._recipe = recipe;
    }

    get ingredients () {
        return this._ingredients;
    }

    get recipe () {
        return this._recipe;
    }
}

module.exports = FoodPunchStarter;
