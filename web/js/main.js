function glob() {
    return window.globals_6a; 
}

function set_frame(f_old, f_new) {
    CUR.room_frames[f_old - 1].removeClass('front');
    CUR.room_frames[f_new - 1].addClass('front');
};

function animate_frames(from, to, callback) { // starts from from + 1
    var new_from;
    if (from != to) {
        if (from < to) {
            new_from = from + 1;
        } else {
            new_from = from - 1;
        }
        set_frame(from, new_from);
        setTimeout(function() { animate_frames(new_from, to, callback) }, 65);
    } else {
        setTimeout(callback, 65);
    }
}

function show_room() {
    $("#brain").hide();
    $("#encounter").hide();
    $("#room").show();
    CUR.mouse_event = function(x, oldx) {
        set_frame(oldx, x);
    };
}

function start_encounter() {
    var $encounter = $("#encounter");

    $encounter.html('');
    encounter = ENCOUNTERS[TIME];
    encounter.render($encounter);

    CUR.mouse_event = function(x, oldx) {};
    animate_frames(CUR.mousex, 20, function() {
        set_frame(20, 41);
        setTimeout(function() {
            animate_frames(41, 80, function() {
                $("#room").hide();
                $encounter.show();
            });
        }, 65);
    });
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
    show_room();
    
    CUR.room_frames = add_images(ROOM_IMAGES, $("#room_background"));
    var brain_stack = $("#brain_stack");
    var coordinates = [
        [0, 0],
        [2, 2],
        [4, 2],
        [6, 2],
        [6, 4],
        [4, 4],
        [2, 4],
    ];
    for (var i = 0; i < BRAIN_IMAGES.length; i++) {
        var img = BRAIN_IMAGES[i];
        var cls = "stacked";
        if (i > 0) {    // dirty hack
            cls += " hover_show"
        }
        brain_stack.append(grid($('<img class="' + cls + '">').attr('src', BRAIN_IMAGES[i])
            , coordinates[i][0], coordinates[i][1]));
    }
});
