class CreateModel {
    render(categories){
        let html = '';
        html += `<div class="create-title">Create a PunchStarter</div>`;
        html += `<div class="punch-starter-category"><select>`;
        for(let index in categories){
            html += `<option value= ${index}>${index}</option>`;
        }
        html +=`</select></div>`;

        html += `<div class="create-form-holder">
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
                        <div class="submit-button-holder">
                            <button type="button">Submit PunchStarter</button>
                        </div>
                    </form>
                </div>`;
        $('.wrapper main').html(html);
        this.renderCreateMovieModel();
        this.attachEventsCreateMovieModel();
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