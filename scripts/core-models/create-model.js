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
                                <button class="add-genre-button">Add</button>
                                <button class="remove-genre-button">Remove</button>
                            </div>
                            <label>Target Price:</label>
                             <div class="input-holder">
                                <input class="input-targe-price" type="number" placeholder="Target Price...">
                            </div>                          
                        </div>
                        <div class="individual-parameters"></div>

                        
                    </form>
                    <div class="submit-button-holder">
                            <button type="button">Submit PunchStarter</button>
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
            $(`.input-genres`)
                .append($(`<option>`).val(newGenre).text(newGenre));
        });

        $(`.remove-genre-button`).on(`click`, function() {
            $(`.input-genres option:selected`).remove();
        });
    }

    renderCreateMovieModel(){
        //TODO
    }
    attachEventsCreateMovieModel(){
        //TODO
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
                `<button class="add-technology-button">Add</button>` +
                `<button class="remove-technology-button">Remove</button>` +
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
        //TODO
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
                `<button class="add-ingredients-button">Add</button>` +
                `<button class="remove-ingredients-button">Remove</button>` +
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
        //TODO
    }
    attachEventsCreateCraftModel(){
        //TODO
    }

}

module.exports = CreateModel;