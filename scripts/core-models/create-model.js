let MoviePunchStarter = require('../punch-starters/movie-punch-starter.js');
let GamePunchStarter = require('../punch-starters/game-punch-starter.js');
let InnovativePunchStarter = require('../punch-starters/innovative-punch-starter.js');
let FoodPunchStarter = require('../punch-starters/food-punch-starter.js');
let CraftsPunchStarter = require('../punch-starters/crafts-punch-starter.js');

let id = 6;

class CreateModel {
    constructor() {
        this.category = 'Movie';
    }

    set category(val){
        this._category=val;
        $('.punch-starter-category select').val(val);
    }

    get category() {
        return this._category;
    }

    render(categories){
        let mainContainer = document.createDocumentFragment();
        $(`<div class="create-title">Create a PunchStarter</div>`).appendTo(mainContainer);
        let selectListContainer = $(`<div class="punch-starter-category">`);
        let selectList = $('<select>');
        for(let index in categories){
             selectList.append($(`<option value= ${index}>${index}</option>`));
        }
        selectList.appendTo(selectListContainer);
        selectListContainer.appendTo(mainContainer);
         $(`<div class="create-form-holder">
                    <form>
                        <div class="main-parameters">
                            <label>Name:</label>
                            <div class="input-holder">
                                <input type="text" class="input-name" placeholder="Name..." maxlength="20"/>
                            </div>
                            <label>Manufacturer:</label>
                            <div class="input-holder">
                                <input type="text" class="input-manufacturer" placeholder="Manufacturer..." maxlength="20"/>
                            </div>
                            <label>Description:</label>
                            <div class="input-holder">
                                <textarea class="input-description" placeholder="Description..." rows="2"/>
                            </div>                       
                        </div>
                        <div class="secondary-parameters">
                            <label>Genres:</label>
                            <div class="list-holder">
                                <select class="input-genres"></select>
                            </div>
                            <div class="input-holder">
                                <input class="input-genre" type="text" placeholder="Add genre...">
                            </div>
                            <div class="button-holder">
                                <button class="add-genre-button" type="button" >Add</button>
                                <button class="remove-genre-button" type="button" >Remove</button>
                            </div>
                            <label>Target Price:</label>
                             <div class="input-holder">
                                <input class="input-target-price" type="number" placeholder="Target Price...">
                            </div>                          
                        </div>
                        <div class="individual-parameters"></div>

                        
                    </form>
                    <div class="submit-button-holder">
                            <button type="button" type="button">Submit PunchStarter</button>
                        </div>
                </div>`).appendTo(mainContainer);
        $('.wrapper main').empty().append(mainContainer);
        this.renderCreateMovieModel();
        this.attachEventsCreateMovieModel();
    }

    attachEvents(){
        $('.punch-starter-category select').on('change',(ev)=>{
            let selectedCategory = $(ev.target).val();
            this.category = selectedCategory;
            switch (this.category) {
                case`Movie`:
                    this.renderCreateMovieModel();
                    this.attachEventsCreateMovieModel();
                    break;
                case`Game`:
                    this.renderCreateGameModel();
                    this.attachEventsCreateGameModel();
                    break;
                case`Innovative`:
                    this.renderCreateInnovativeModel();
                    this.attachEventsCreateInnovativeModel();
                    break;
                case`Food`:
                    this.renderCreateFoodModel();
                    this.attachEventsCreateFoodModel();
                    break;
                case`Crafts`:
                    this.renderCreateCraftModel();
                    this.attachEventsCreateCraftModel();
                    break;
            }
        });

        $(`.add-genre-button`).on(`click`, function() {
            let newGenre = $(`.input-genre`);
            if (newGenre.val() !== '') {
                $('.input-genres').append($(`<option>`).val(newGenre.val()).text(newGenre.val()));
                newGenre.val('');
            }
        });

        $(`.remove-genre-button`).on(`click`, function() {
            let genresList =  $(`.input-genres`);
            genresList.find(':selected').remove();
            if (genresList.children().length === 0) {
                genresList.val('');
            }
        });

        $('.submit-button-holder button').on('click', function (ev) {
            let selectedCategory = $('.punch-starter-category select').val();
            let name = $('.input-name').val();
            let manufacturer = $('.input-manufacturer').val();
            let description = $('.input-description').val();
            let genres = $('.input-genres').children().toArray().map(x => $(x).text());
            let targetPrice = Number($('.input-target-price').val());
            let mainEvenetWrapper = $('.wrapper main');

            switch (selectedCategory) {
                case 'Movie':
                    let director = $('.input-director').val();
                    let actors = $('.input-actors').children().toArray().map(x => $(x).text());
                    let newMovie =
                        new MoviePunchStarter(id++, name, manufacturer, description, genres, targetPrice, director, actors);
                    mainEvenetWrapper.trigger('createPunchStarter', newMovie);
                    break;
                case 'Game':
                    let technologies = $('.input-technologies').children().toArray().map(x => $(x).text());
                    console.log(technologies);
                    let newGame =
                        new GamePunchStarter(id++, name, manufacturer, description, genres, targetPrice, technologies);
                    mainEvenetWrapper.trigger('createPunchStarter', newGame);
                    break;
                case 'Innovative':
                    let newInnovation = new InnovativePunchStarter(id++, name, manufacturer, description, genres, targetPrice);
                    mainEvenetWrapper.trigger('createPunchStarter', newInnovation);
                    break;
                case 'Food':
                    let recipe = $('.input-recipe').val();
                    let ingredients = $('.input-ingredients').children().toArray().map(x => $(x).text());
                    let newFood =
                        new FoodPunchStarter(id++, name, manufacturer, description, genres, targetPrice, ingredients, recipe);
                    mainEvenetWrapper.trigger('createPunchStarter', newFood);
                    break;
                case 'Crafts':
                    let resources = $('.input-resources').children().toArray().map(x => $(x).text());
                    let newCrafts =
                        new CraftsPunchStarter(id++, name, manufacturer, description, genres, targetPrice, resources);
                    mainEvenetWrapper.trigger('createPunchStarter', newCrafts);
                    break;
            }
        });
    }

    renderCreateMovieModel() {
        let html = `<label>Director:</label>
                    <div class="input-holder">
                        <input type="text" class="input-director" placeholder="Director...">
                        
                    </div>
                    <label>Actors:</label>
                    <div class="list-holder">
                        <select class="input-actors"></select>
                    </div>
                    <div class="input-holder">
                        <input class="new-actor" type="text" placeholder="Add actor...">
                    </div>
                    <div class="button-holder">
                        <button class="add-actor-button" type="button" >Add</button>
                        <button class="remove-actor-button" type="button">Remove</button>
                    </div>`;
        $('.individual-parameters').empty().html(html);
    }

    attachEventsCreateMovieModel() {
        // add actor event
        let actorsList = $('.input-actors');
        $('.add-actor-button').on('click' , function (ev) {
            let newActorInput = $('.new-actor');
            if (newActorInput.val() !== '') {
                actorsList.append($('<option>').text(newActorInput.val()).val((newActorInput.val())));
                newActorInput.val('');
            }
        });

        // remove actor event
        $('.remove-actor-button').on('click', function () {
            actorsList.find(":selected").remove();
            if (actorsList.children().length === 0) {
                actorsList.val('');
            }
        });
    }

    renderCreateGameModel(){
        let html =
            `<label>Technologies:</label>` +
            `<div class="list-holder">` +
                `<select class="input-technologies"></select>` +
            `</div>` +
            `<div class="input-holder">` +
                `<input class="new-technology" type="text" placeholder="Add technology..."/>` +
            `</div>` +
            `<div class="button-holder">` +
                `<button class="add-technology-button" type="button">Add</button>` +
                `<button class="remove-technology-button" type="button">Remove</button>` +
            `</div>`;

        $(`.individual-parameters`).empty().append(html);
    }
    attachEventsCreateGameModel(){
        let technologiesList = $('.input-technologies');

        $(`.add-technology-button`).on(`click`, function() {
            let newTechnology = $(`.new-technology`);
            if (newTechnology.val() !== '') {
                technologiesList.append($(`<option>`).val(newTechnology.val()).text(newTechnology.val()));
                newTechnology.val('');
            }
        });

        $(`.remove-technology-button`).on(`click`, function() {
            technologiesList.find(':selected').remove();
            if (technologiesList.children().length === 0) {
                technologiesList.val('');
            }
        });
    }

    renderCreateInnovativeModel(){
        $(`.individual-parameters`).empty()
    }
    attachEventsCreateInnovativeModel(){
    }

    renderCreateFoodModel(){
        let html =
            `<label>Ingredients:</label>` +
            `<div class="list-holder">` +
                `<select class="input-ingredients"></select>` +
            `</div>` +
            `<div class="input-holder">` +
            `   <input class="new-ingredient" type="text" placeholder="Add ingredient..."/>` +
            `</div>` +
            `<div class="button-holder">` +
                `<button class="add-ingredient-button" type="button">Add</button>` +
                `<button class="remove-ingredient-button" type="button">Remove</button>` +
            `</div>` +
            `<div class="input-holder">` +
                `<textarea class="input-recipe" placeholder="Recipe..." rows="2" />` +
            `</div>`;

        $(`.individual-parameters`).empty().append(html);
    }
    attachEventsCreateFoodModel(){
        let ingredientsList = $('.input-ingredients');

        $(`.add-ingredient-button`).on(`click`, function() {
            let newIngredient = $(`.new-ingredient`);
            if (newIngredient.val() !== '') {
                ingredientsList.append($(`<option>`).val(newIngredient.val()).text(newIngredient.val()));
                newIngredient.val('');
            }
        });

        $(`.remove-ingredient-button`).on(`click`, function() {
            ingredientsList.find(':selected').remove();
            if (ingredientsList.children().length === 0) {
                ingredientsList.val('');
            }
        });
    }

    renderCreateCraftModel(){
        let html = '';
        html += `<label>Resources needed:</label>
                    <div class="list-holder">
                        <select class="input-resources"></select>
                    </div>
                    <div class="input-holder">
                        <input class="new-resource" type="text" placeholder="Add resource...">
                    </div>
                    <div class="button-holder">
                        <button class="add-resource-button" type="button">Add</button>
                        <button class="remove-resource-button" type="button">Remove</button>
                    </div>`;
        $('.individual-parameters').empty().html(html);
    }

    attachEventsCreateCraftModel() {
        let resourcesList = $('.input-resources');
        $('.add-resource-button').on('click' , function (ev) {
            let newResource = $('.new-resource');
            if (newResource.val() !== '') {
                resourcesList.append($('<option>').text(newResource.val()).val(newResource.val()));
                newResource.val('');
            }
        });

        // remove actor event
        $('.remove-resource-button').on('click', function () {
            resourcesList.find(":selected").remove();
            if (resourcesList.children().length === 0) {
                resourcesList.val('');
            }
        });
    }
}

module.exports = CreateModel;