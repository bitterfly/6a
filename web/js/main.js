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

function show_stats() {
    var quot = 3;   // алгоритъмът на Радо съква и временно го заменям с тройка.
    var offset = 50;

    $('#stats').html('');

    $('#stats').append(progress('img/icons/1.png', offset + STATS[0] * quot, '#c11323'));

    $('#left').html('');
    $('#left').append(progress('img/icons/1.png', offset + STATS[0] * quot, '#c11323'));
    $('#left').append(progress('img/icons/2.png', offset + STATS[1] * quot, '#e77d1f'));
    $('#left').append(progress('img/icons/3.png', offset + STATS[2] * quot, '#d9db40'));

    $('#right').html('');
    $('#right').append(progress('img/icons/4.png', offset + STATS[3] * quot, '#539845'));
    $('#right').append(progress('img/icons/5.png', offset + STATS[4] * quot, '#457098'));
    $('#right').append(progress('img/icons/6.png', offset + STATS[5] * quot, '#5d2c76'));
}

function end_stats() {
    var quot = 3;   // алгоритъмът на Радо съква и временно го заменям с тройка.
    var offset = 50;

    var max_index = 0;
    for (var i = 1; i < 6; i++) {
        if (STATS[i] > STATS[max_index])
            max_index = i
    }

    $('#end_bars').append($('<img id="winner">').attr('src', 'img/icons/' + (max_index + 1) + '.png'));

    $('#end_bars').append(progress('img/icons/1.png', offset + STATS[0] * quot, '#c11323'));
    $('#end_bars').append(progress('img/icons/2.png', offset + STATS[1] * quot, '#e77d1f'));
    $('#end_bars').append(progress('img/icons/3.png', offset + STATS[2] * quot, '#d9db40'));
    $('#end_bars').append(progress('img/icons/4.png', offset + STATS[3] * quot, '#539845'));
    $('#end_bars').append(progress('img/icons/5.png', offset + STATS[4] * quot, '#457098'));
    $('#end_bars').append(progress('img/icons/6.png', offset + STATS[5] * quot, '#5d2c76'));
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
    show_stats();
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

function end() {
    $("#encounter").fadeOut(200);
    setTimeout(function() {
        $("#end").fadeIn(300);
        end_stats();
    }, 200);
}

function start_encounter() {
    var $encounter = $("#encounter");

    $encounter.html('');
    encounter = ENCOUNTERS[TIME];

    CUR.mouse_event = function(x, oldx) {};
    encounter.render($encounter);
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
    brain_stack.append(grid($('<img class="stacked">')
                            .attr('src', BRAIN_IMAGES[0])
        , coordinates[0][0], coordinates[0][1]));
    for (var i = 1; i < BRAIN_IMAGES.length; i++) {
        var img = BRAIN_IMAGES[i];
        var cls = "stacked hover_show";
        var click_action = function() {
            ASPECT = i;
            show_room();
        }
        brain_stack.append(grid($('<img class="' + cls + '">')
                                .attr('src', BRAIN_IMAGES[i])
                                .click(click_action)
            , coordinates[i][0], coordinates[i][1]));
    }

    var tree_stack = $("#tree");
    var coordinates = [
        [0, 0],
        [3, 7],
        [1, 5],
        [5, 5],
        [0, 2],
        [2, 2],
        [4, 2],
        [4, 0],
        [11, 7],
        [11, 4],
        [9, 2],
        [13, 2],
    ];
    tree_stack.append(grid($('<img class="stacked">')
                            .attr('src', TREE_IMAGES[0])
                            .attr('data', 0)
                            .click(function() {
                                $("#tree").hide();
                            })
        , coordinates[0][0], coordinates[0][1]));
    for (var i = 1; i < TREE_IMAGES.length; i++) {
        var img = TREE_IMAGES[i];
        var cls = "stacked inactive";
        var click_action = function(ev) {
            if (TP > 0) {
                var current = TREE[$(this).attr('data')];
                var par = TREE[current.parent];
                if (par == null || par.active) {
                    TP -= 1;
                    $(this).removeClass('inactive');
                    current.active = true;
                }
            }
        }
        tree_stack.append(grid($('<img class="' + cls + '">')
                                .attr('src', TREE_IMAGES[i])
                                .attr('data', i)
                                .click(click_action)
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
    $(".frame").click(start_encounter);

    $("#tree_icon").click(function() {
        $("#tree").show();
    });
    $(document).tooltip();
});

