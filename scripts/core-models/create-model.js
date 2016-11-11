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
                                <input class="input-targe-price" type="number" placeholder="Target Price...">
                            </div>                          
                        </div>
                        <div class="individual-parameters"></div>

                        
                    </form>
                    <div class="submit-button-holder">
                            <button type="button" type="button">Submit PunchStarter</button>
                        </div>
                </div>`).appendTo(mainContainer);
        $('.wrapper main').empty().append(mainContainer);
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
            let newGenre = $(`.input-genre`).val();
            $('.input-genres').append($(`<option>`).val(newGenre).text(newGenre));
            $('.input-genre').val('');
        });

        $(`.remove-genre-button`).on(`click`, function() {
            let genresList =  $(`.input-genres`);
            genresList.find(':selected').remove();
            if (genresList.children().length === 0) {
                genresList.val('');
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
            actorsList.append($('<option>').text(newActorInput.val()));
            newActorInput.val('');
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
        $(`.individual-parameters`).on(`click`, `.add-technology-button`, function() {
            let newTechnology = $(`.new-technology`).val();
            $(`.input-technologies`)
                .append($(`<option>`).val(newTechnology).text(newTechnology));
        });

        $(`.individual-parameters`).on(`click`, `.remove-technology-button`, function() {
            $(`.input-technologies option:selected`).remove();
        });
    }

    renderCreateInnovativeModel(){
        $(`.individual-parameters`).empty()
    }
    attachEventsCreateInnovativeModel(){
    }

    renderCreateFoodModel(){
        let html =
            `<label></label>` +
            `<div class="list-holder">` +
                `<select class="input-ingredients"></select>` +
            `</div>` +
            `<div class="input-holder">` +
            `   <input class="new-ingredients" type="text" placeholder="Add ingredient..."/>` +
            `</div>` +
            `<div class="button-holder">` +
                `<button class="add-ingredients-button" type="button">Add</button>` +
                `<button class="remove-ingredients-button" type="button">Remove</button>` +
            `</div>` +
            `<div class="input-holder">` +
                `<textarea class="input-recipe" placeholder="Recipe..." rows="2" />` +
            `</div>`;

        $(`.individual-parameters`).empty().append(html);
    }
    attachEventsCreateFoodModel(){
        $(`.individual-parameters`).on(`click`, `.add-ingredients-button`, function() {
            let newIngredient = $(`.new-ingredients`).val();
            $(`.input-ingredients`)
                .append($(`<option>`).val(newIngredient).text(newIngredient));
        });

        $(`.individual-parameters`).on(`click`, `.remove-ingredients-button`, function() {
            $(`.input-ingredients option:selected`).remove();
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

    attachCreateCraftModel() {
        let listOfResources = $('.input-resources');
        $('.add-resource-button').on('click', function (ev) {
            let resourcesInput = $('new-resources');
            listOfResources.append($('<option>').text(resourcesInput.val()));
            resourcesInput.val('');
        });

        $('.remove-resource-button').on('click', function (ev) {
            listOfResources.find(':selected').remove();
            if (listOfResources.children.length === 0) {
                listOfResources.val('');
            }
        });
    }
}

module.exports = CreateModel;