function glob() {
    return window.globals_6a; 
}

$(document).ready(function() {
    window.globals_6a = {};
    
    glob().room_frames = add_images(ROOM_IMAGES, $("#room_background"));
});
