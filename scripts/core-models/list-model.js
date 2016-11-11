function getPunchStarter (id, database) {
    for (let punchStarter of database) {
        if (punchStarter.id === id) {
            return punchStarter;
        }
    }
}

class ListModel {
    constructor(){
    }

    render(database) {
        database.sort((a,b) => a.id - b.id);

        let html = '<div class="punch-starter-list-holder">' +
            '   <table class="punch-starter-table">'+
            `<tr><th>ID</th><th>Name</th><th>Manufacturer</th><th>Type</th><th>Progress</th></tr>`;

        for (let element of database) {
            let typeOfElement = element.constructor.name.replace("PunchStarter", "");

            let progress;
            if (!element.targetPrice) {
                progress = '0.00%';
            } else {
                progress = (Math.round(element.accumulatedMoney*10000/element.targetPrice)/100).toFixed(2)+'%';
            }

            html += `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.manufacturer}</td><td>${typeOfElement}</td><td>${progress}</td></tr>`;
        }

        html+= '</table>' +
            '</div>';
        $('.wrapper main').html(html);
    }

    attachEvents(database) {
        let tableRows = $('.punch-starter-table tr').each((index, element) => {
           $(element).on(`click`, function() {
               let punchStarterId = Number($(this).children()[0].textContent);
               let punchStarter = getPunchStarter(punchStarterId, database);
               console.log(punchStarter);
               $(`.wrapper main`).trigger(`changePage`, [`punch`, punchStarter]);
           });
        });
    }
}

module.exports = ListModel;