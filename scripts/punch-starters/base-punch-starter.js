class BasePunchStarter {
    constructor (id, name, manufacturer, description, genres, targetPrice) {
        this._id = id;
        this._name = name;
        this._manufacturer = manufacturer;
        this._description = description;
        this._genres = genres;
        this._targetPrice = targetPrice;
        this.accumulatedMoney = 0;
    }

    get id () {
        return this._id;
    }

    get name () {
        return this._name;
    }

    get manufacturer () {
        return this._manufacturer;
    }

    get description () {
        return this._description;
    }

    get genres () {
        return this._genres;
    }

    get targetPrice () {
        return this._targetPrice;
    }

    set accumulatedMoney (value) {
        if (tpyeof(value) !== 'number') {
            throw new TypeError('Invalid accumulatedMoney: ' + value);
        }
        
        this._accumulatedMoney = value;
    }

    get accumulatedMoney () {
        return this._accumulatedMoney;
    }
}

module.exports = BasePunchStarter;
