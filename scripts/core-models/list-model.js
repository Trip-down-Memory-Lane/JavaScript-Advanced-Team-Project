class ListModel {
    constructor(){
    }

    render(database) {
        database.sort((a,b) => a.id - b.id);

        let html = '<div class="punch-starter-list-holder">' +
            '   <table class="punch-starter-table">'+
            `<tr><th>ID</th><th>Name</th><th>Manufacturer</th><th>Type</th><th>Progress</th></tr>`;
        for(let element of database){
            let typeOfElement = element.constructor.name.replace("PunchStarter", "");
            let progress = (Math.round(element.accumulatedMoney*10000/element.targetPrice)/100).toFixed(2)+'%';
            html += `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.manufacturer}</td><td>${typeOfElement}</td><td>${progress}</td></tr>`;
        }

        html+= '    </table>' +
            '</div>';
        $('.wrapper main').html(html);
    }
}

module.exports = ListModel;