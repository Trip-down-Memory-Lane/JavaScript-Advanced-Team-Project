class CreateModel {
    constructor() {
        this.category='Movie';
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
        let selectList = $('<select>').on('change',(ev)=>{
            let currentCategory = $(ev.target).val();
            this.category=currentCategory;
            switch(currentCategory){
                case 'Movie':
                    this.renderCreateMovieModel();
                    this.attachEventsCreateMovieModel();
                    break;
                case 'Game':
                    this.renderCreateGameModel();
                    this.attachEventsCreateGameModel();
                    break;
                case 'Innovate':
                    this.renderCreateInnovativeModel();
                    this.attachEventsCreateInnovativeModel();
                    break;
                case 'Food':
                    this.renderCreateFoodModel();
                    this.attachEventsFoodModel();
                    break;
                case 'Crafts':
                    this.renderCreateCraftModel();
                    this.attachCreateCraftModel();
                    break;
            }
        });
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
        //TODO
    }

    renderCreateMovieModel(){
        //TODO
    }
    attachEventsCreateMovieModel(){
        //TODO
    }

    renderCreateGameModel(){
        //TODO
    }
    attachEventsCreateGameModel(){
        //TODO
    }

    renderCreateInnovativeModel(){
        //TODO
    }
    attachEventsCreateInnovativeModel(){
        //TODO
    }

    renderCreateFoodModel(){
        //TODO
    }
    attachEventsFoodModel(){
        //TODO
    }

    renderCreateCraftModel(){
        //TODO
    }
    attachCreateCraftModel(){
        //TODO
    }

}

module.exports = CreateModel;