function glob() {
    return window.globals_6a; 
}

function mouse(x, oldx) {
    glob().room_frames[oldx - 1].hide();
    glob().room_frames[x - 1].show();
}

$(document).ready(function() {
    window.globals_6a = {};
    glob().mousex = 20;

    $("body").mousemove(function(ev) {
        var x = Math.ceil(ev.pageX * 40 / $(window).width());
        if (x < 1) {
            x = 1;
        } else if (x > 40) {
            x = 40;
        }
        if (glob().mousex != x) {
            mouse(x, glob().mousex);
            glob().mousex = x;
        }
    });
    
    glob().room_frames = add_images(ROOM_IMAGES, $("#room_background"));
});
