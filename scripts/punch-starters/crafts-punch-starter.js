function validateProperties (id, name, manufacturer, description, genres, targetPrice, resources) {
    if (typeof(id) !== 'number') {
        throw new TypeError('Invalid id: '+ id);
    }

    if (name !== 'string') {
        throw new TypeError('Invalid name: '+ name);
    }

    if (manufacturer !== 'string') {
        throw new TypeError('Invalid manufacturer: '+ manufacturer);
    }

    if (description !== 'string') {
        throw new TypeError('Invalid description: '+ description);
    }

    if (!Array.isArray(genres)) {
        throw new TypeError('Invalid genres: '+ genres);
    }

    for (let genre of genres) {
        if (typeof(genre) !== 'string') {
            throw new TypeError('Invalid genre: '+ genre);
        }
    }

    if (typeof(targetPrice) !== 'number') {
        throw new TypeError('Invalid targetPrice: '+ targetPrice);
    }

    if (!Array.isArray(resources)) {
        throw new TypeError(`Invalid resources. ${resources} is not an array.`);
    }

    for (let item of resources) {
        if (typeof(item) !== `string`) {
            throw new TypeError(`Invalid resource. ${item} is not string.`);
        }
    }
}

class CraftsPunchStarter {
    constructor(id, name, manufacturer, description, genres, targetPrice, resources) {
        validateProperties(id, name, manufacturer, description, genres, targetPrice, resources);
        super(id, name, manufacturer, description, genres, targetPrice);
        this._resources = resources;
    }

    get resources() {
        return this._resources;
    }
}

module.exports = CraftsPunchStarter;