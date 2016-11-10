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

            //TODO: sort database (Doc - 7.2)

            $(`.wrapper main`).html(
                `<div class="home-logged-in-welcome">` +
                `    Welcome, ` + sessionStorage[`username`] + `!` +
                `</div>` +
                `<div class="home-logged-in-title">` +
                `  Top 3 PunchStarters` +
                `</div>` +
                `<div class="top-3-starters-wrapper">` +
                `   <div class="punch-starter-holder"></div>` +
                `   <div class="punch-starter-holder"></div>` +
                `   <div class="punch-starter-holder"></div>` +
                `</div>`
            );

            //TODO: fill holders with top 3 punchStarters (sorted db above)

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