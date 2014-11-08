function glob() {
    return window.globals_6a; 
}

function mouse(x, oldx) {
    CUR.room_frames[oldx - 1].removeClass('front');

    CUR.room_frames[x - 1].addClass('front');
}

function start_encounter() {
    var $encounter = $("#encounter");

    encounter = ENCOUNTERS[TIME];
    encounter.render($encounter);
    $("#room").hide();
    $encounter.show();

    TIME += 1;
}

$(document).ready(function() {
    window.globals_6a = {};
    CUR.mousex = 20;

    $("body").mousemove(function(ev) {
        var x = Math.ceil(ev.pageX * 40 / $(window).width());
        if (x < 1) {
            x = 1;
        } else if (x > 40) {
            x = 40;
        }
        if (CUR.mousex != x) {
            mouse(x, CUR.mousex);
            CUR.mousex = x;
        }
    });

    $("#room").click(start_encounter);
    
    CUR.room_frames = add_images(ROOM_IMAGES, $("#room_background"));
});
