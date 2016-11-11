class PunchStarterModel {

    render(punchStarter) {
        console.log(`rendering`);
        let html =
            '<div class="punch-starter-wrapper">' +
                `<div class="punch-starter-caption">` +
                    `<label>${punchStarter.name}</label>` +
                    `<label>${punchStarter.constructor.name.replace('PunchStarter', '')}</label>
                </div>` +
                `<div class="punch-starter-resume">` +
                    `<label>Manufacturer:</label>` +
                    `<p>${punchStarter.manufacturer}</p>` +
                    `<label>Description:</label>` +
                    `<p>${punchStarter.description}</p>
                </div>` +
                `<div class="punch-starter-lists"></div>` +
                `<div class="punch-starter-progress"></div>` +
            `</div>`;

        $(`.wrapper main`).empty().append(html);
        this.renderLists(punchStarter);
        this.renderProgress(punchStarter);
    }

    attachEvents(punchStarter) {
        let that = this;
        $(`.punch-starter-progress button`).on(`click`, function() {
             let donation = $(`.punch-starter-progress input`).val();
            punchStarter._accumulatedMoney += Number(donation);
            // $(`.wrapper main`).trigger(`changePage`, null, punchStarter);
            that.reloadModel(punchStarter);
        });
    }

    reloadModel(punchStarter) {
        this.render(punchStarter);
        this.attachEvents(punchStarter);
    }

    renderLists(punchStarter) {
        let html =
            `<div>` +
                `<label>Genres</label>` +
                `<ul>`;

        for (let genre of punchStarter.genres) {
            html += `<li>${genre}</li>`;
        }

        html += '</ul></div>';

        switch (punchStarter.constructor.name) {
            case`MoviePunchStarter`:
                html +=
                    `<div>` +
                        `<label>Actors</label>` +
                        `<ul>`;
                punchStarter._actors.forEach(x => html += `<li>${x}</li>`);
                html +=
                        `</ul>` +
                    `</div>`;
                html +=
                    `<div>` +
                        `<label>Director</label>` +
                        `<p>${punchStarter._director}</p>` +
                    `</div>`;
                break;
            case`GamePunchStarter`:
                html +=
                    `<div>` +
                        `<label>Technologies Used</label>` +
                        `<ul>`;
                punchStarter._technologiesUsed.forEach(x => html += `<li>${x}</li>`);
                html +=
                        `</ul>` +
                    `</div>`;
                break;
            case`InnovativePunchStarter`:
                break;
            case`FoodPunchStarter`:
                html +=
                    `<div>` +
                        `<label>Ingredients</label>` +
                        `<ul>`;
                punchStarter._ingredients.forEach(x => html += `<li>${x}</li>`);
                html +=
                        `</ul>` +
                    `</div>`;
                html +=
                    `<div>` +
                        `<label>Recipe</label>` +
                        `<p>${punchStarter._recipe}</p>` +
                    `</div>`;
                break;
            case`CraftsPunchStarter`:
                html +=
                    `<div>` +
                        `<label>Resources</label>` +
                        `<ul>`;
                punchStarter._resources.forEach(x => html += `<li>${x}</li>`);
                html +=
                        `</ul>` +
                    `</div>`;
                break;
        }

        $(`.punch-starter-lists`).append(html);
    }

    renderProgress(punchStarter) {
        let html = '';
        let progress = Math.round(punchStarter.accumulatedMoney*100/punchStarter.targetPrice);
        if (Number.isNaN(progress) || !progress) {
            progress = 0;
        }
        html += `<p>Progress</p>
                 <div class="donate-holder">
                    <div class="progress-bar-outer">
                        <div class="progress-bar-inner">${progress}%</div>
                    </div>
                    <input type="number"/>
                    <button>Donate</button>
                </div>`;

        $('.punch-starter-progress').html(html);
        $('.progress-bar-inner').css('width', (progress < 10 ? (progress * 0.7) + "vw" : "70vw"));
    }
}

module.exports = PunchStarterModel;