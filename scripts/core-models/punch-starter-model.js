class PunchStarterModel {

    render(punchStarter) {
        let html =
            '<div class="punch-starter-wrapper">' +
                `<div class="punch-starter-caption">` +
                    `<label>${punchStarter._name}</label>` +
                    `<label>${punchStarter.constructor.name}</label>` +
                `<div class="punch-starter-resume">` +
                    `<label>Manufacturer:</label>` +
                    `<p>${punchStarter._manufacturer}</p>` +
                    `<label>Description:</label>` +
                    `<p>${punchStarter._description}</p>` +
                `<div class="punch-starter-lists">` +
                `<div class="punch-starter-progress">` +
            `</div>`;

        $(`.wrapper main`).append(html);
        this.renderLists();
        this.renderProgress();
    }

    attachEvents(punchStarter) {

    }

    renderLists(punchStarter) {
        let html =
            ``
    }

    renderProgress(punchStarter) {

    }
}

module.exports = PunchStarterModel;