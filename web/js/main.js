function glob() {
    return window.globals_6a; 
}

function progress(icon, val, colour) {
    if (colour == null) {
        colour = 'green'
    }
   /* 
                        <div class="iconbar">
                            <img class="icon" src="img/icons/1.png"/>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                                </div>
                            </div>
                        </div>
    */
    var d = $('<div class="iconbar">');
    d.append($('<img class="icon">').attr('src', icon));
    d.append($('<div class="progress">').append($('<div class="progress-bar" role="progressbar" aria-valuemin="0">')
                .attr('aria-valuemax', 100).attr('aria-valuenow', val).css('width', val + '%').css('background-image', 'none').css('background-color', colour)));
    return d;
}

function stats() {
    var quot = 100 / (STATS.e + STATS.m + STATS.r + STATS.p + STATS.c + STATS.k);
    var offset = 50;

    $('#stats').html('');

    $('#stats').append(progress('img/icons/1.png', offset + STATS.e * quot, 'red'));

    $('#left').html('');
    $('#left').append(progress('img/icons/1.png', offset + STATS.e * quot, '#c11323'));
    $('#left').append(progress('img/icons/2.png', offset + STATS.m * quot, '#e77d1f'));
    $('#left').append(progress('img/icons/3.png', offset + STATS.r * quot, '#d9db40'));

    $('#right').html('');
    $('#right').append(progress('img/icons/4.png', offset + STATS.p * quot, '#539845'));
    $('#right').append(progress('img/icons/5.png', offset + STATS.c * quot, '#457098'));
    $('#right').append(progress('img/icons/6.png', offset + STATS.k * quot, '#5d2c76'));
}

function set_frame(f_old, f_new) {
    CUR.room_frames[f_old - 1].removeClass('front');
    CUR.room_frames[f_new - 1].addClass('front');
}

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
    stats();
    $("#brain").hide();
    $("#encounter").fadeOut(200);
    setTimeout(function() {
        $("#room").fadeIn(300);
        set_frame(80, 20);
        CUR.mousex = 20;
        CUR.mouse_event = function(x, oldx) {
            set_frame(oldx, x);
        };
    }, 200);
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
                $encounter.fadeIn(500);
            });
        }, 65);
    });
}

$(document).ready(function() {
    window.globals_6a = {};
    CUR.mousex = 20;
    CUR.mouse_event = function() { };


    
    CUR.room_frames = add_images(ROOM_IMAGES, $("#room_background"));
    var brain_stack = $("#brain_stack");
    var coordinates = [
        [0, 0],
        [2, 2],
        [4, 2],
        [6, 2],
        [6, 4],
        [4, 4],
        [2, 4]
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
});

