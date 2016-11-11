class HomeModel {
    constructor() {
    }

    render(isLoggedIn, database) {
        if (isLoggedIn) {   //Alex
            $(`.wrapper header .header-button-holder`).html(
                `<div class="header-button home-redirect">` +
                    `<p>Home</p>` +
                `</div>` +
                `<div class="header-button list-redirect">` +
                    `<p>PunchStarter List</p>` +
                `</div>` +
                `<div class="header-button create-redirect">` +
                    `<p>Create</p>` +
                `</div>` +
                `<div class="header-button logout-redirect">` +
                    `<p>Logout</p>` +
                `</div>`
            );

            $(`.wrapper main`).html(
                `<div class="home-logged-in-welcome">` +
                `    Welcome, ` + sessionStorage[`username`] + `!` +
                `</div>` +
                `<div class="home-logged-in-title">` +
                `  Top 3 PunchStarters` +
                `</div>` +
                `<div class="top-3-starters-wrapper">` +
                `   <div class="punch-starter-holder" id="first"></div>` +
                `   <div class="punch-starter-holder" id="second"></div>` +
                `   <div class="punch-starter-holder" id="third"></div>` +
                `</div>`
            );

            HomeModel.sortDataBaseDescending(database);
            HomeModel.fillTop3PunchStarts(database);
        } else {
            $('.wrapper header .header-button-holder').html(
                '<div class="header-button home-redirect">' +
                '   <p>Home</p>' +
                '</div>' +
                '<div class="header-button login-redirect">' +
                '   <p>Login</p>' +
                '</div>'
            );

            $('.wrapper main').html(
                '<div class="stars"></div>' +
                '<div class="twinkling"></div>' +
                '<div class="clouds"></div>' +
                '<div class="home-logged-out-wrapper">' +
                '   <h1>PunchStarter - The unique public-benefit, crowdfunding platform for unique projects!</h1>' +
                '   <h2><a href="#/">Login now</a>, and create your own PunchStarter.</h2>' +
                '</div>'
            );
        }
    }

    static sortDataBaseDescending(database) {
        database.sort(function(a, b) { // Sort percentage of money/target ( descending)
            let percentA = a._accumulatedMoney / a._targetPrice;
            let percentB = b._accumulatedMoney / b._targetPrice;
            if (percentA < percentB) {
                return 1;
            } else if (percentA > percentB) {
                return -1;
            }
        });
    }

    static fillTop3PunchStarts(database) {
        let ids = [`#first`, `#second`, `#third`];
        for (let i = 0; i < 3; i++) {
            HomeModel.renderTop3PunchStarters(database[i], ids[i]);
        }
    }

    static renderTop3PunchStarters(entry, id) {
        let name = entry._name;
        let manufacturer = entry._manufacturer;
        let accumulatedMoney = entry._accumulatedMoney;
        let targetMoney = entry._targetPrice;

        $(id)
            .append($(`<label>`).text(name))
            .append($(`<label>`).text(manufacturer))
            .append($(`<label>`).text(`${accumulatedMoney} / ${targetMoney}`));
    }

    attachEvents(isLoggedIn) {
        if (isLoggedIn) { // Alex
            $(`.home-redirect`).on(`click`, function() {
                $(`.wrapper main`).trigger(`changePage`, [`home`]);
            });

            $(`.list-redirect`).on(`click`, function() {
                $(`.wrapper main`).trigger(`changePage`, [`list`]);
            });

            $(`.create-redirect`).on(`click`, function() {
                $(`.wrapper main`).trigger(`changePage`, [`create`]);
            });

            $(`.logout-redirect`).on(`click`, function() {
                sessionStorage.removeItem(`username`);
                $(`.wrapper main`).trigger(`changePage`, [`home`]);
            });

            //TODO: List redirect onclick
            //TODO: Create redirect onclick
			//TODO: Logout redirect onclick
        } else {
            $('.home-redirect').on('click', function () {
                $('.wrapper main').trigger('changePage', ['home']);
            });

            $('.login-redirect').on('click', function () {
                $('.wrapper main').trigger('changePage', ['login']);
            });

            $('.home-logged-out-wrapper h2 a').on('click', function() {
                $('.wrapper main').trigger('changePage', ['login']);
            });

            let hovered = false;

            $('.home-logged-out-wrapper h2 a').mouseenter(function () {
                hovered = true;
            }).mouseleave(function () {
                hovered = false;
                blink();
            });

            function blink() {
                if (!hovered) {
                    $('.home-logged-out-wrapper h2 a').fadeOut(1000).fadeIn(1000, function () {
                        if (!hovered) {
                            blink();
                        } else {
                            $('.home-logged-out-wrapper h2 a').fadeIn();
                        }
                    });
                } else {
                    $('.home-logged-out-wrapper h2 a').fadeIn();
                }
            }

            blink();
        }
    }
}

module.exports = HomeModel;