Template.ApplicationLayout.onRendered(function () {
        $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrain_width: false, // Does not change width of dropdown to that of the activator
                hover: false, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: true, // Displays dropdown below the button
                alignment: 'left' // Displays dropdown with edge aligned to the left of button
            }
        );
        $(".button-collapse").sideNav({
            closeOnClick: true
        });
        $(document).ready(function () {
            $('.parallax').parallax();
        });
    }
);

Template.menuLogged.onRendered(function () {
        $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrain_width: false, // Does not change width of dropdown to that of the activator
                hover: false, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: true, // Displays dropdown below the button
                alignment: 'left' // Displays dropdown with edge aligned to the left of button
            }
        );
        $(".button-collapse").sideNav({
            closeOnClick: true
        });
        $(document).ready(function () {
            $('.parallax').parallax();
        });
    }
);

Template.menu.onRendered(function () {
        $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrain_width: false, // Does not change width of dropdown to that of the activator
                hover: false, // Activate on hover
                gutter: 0, // Spacing from edge
                belowOrigin: true, // Displays dropdown below the button
                alignment: 'left' // Displays dropdown with edge aligned to the left of button
            }
        );
        $(".button-collapse").sideNav({
            closeOnClick: true
        });
        $(document).ready(function () {
            $('.parallax').parallax();
        });
    }
);