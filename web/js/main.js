function glob() {
    return window.globals_6a; 
}

function start_encounter() {
    var $encounter = $("#encounter");

    encounter = ENCOUNTERS[TIME];
    encounter.render($encounter);
    $("#room").hide();
    $encounter.show();

    TIME += 1;
}

function show_room() {
    $("#brain").hide();
    $("#encounter").hide();
    $("#room").show();
    CUR.mouse_event = function(x, oldx) {
        CUR.room_frames[oldx - 1].removeClass('front');
        CUR.room_frames[x - 1].addClass('front');
    }
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
            CUR.mouse_event(x, CUR.mousex);
            CUR.mousex = x;
        }
    });

    $("#room").click(start_encounter);
    // show_room();
    
    CUR.room_frames = add_images(ROOM_IMAGES, $("#room_background"));
    var brain_stack = $("#brain_stack");
    var coordinates = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
    ];
    for (var i = 0; i < BRAIN_IMAGES.length; i++) {
        var img = BRAIN_IMAGES[i];
        brain_stack.append(grid($('<img class="stacked">').attr('src', BRAIN_IMAGES[i])
            , coordinates[i][0], coordinates[i][1]));
    }
});
