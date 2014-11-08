/**
 * Created by Rali on 8.11.2014 г..
 */

function ADD_HIDDEN (data, divId) {
    var htmlstring = '';

    htmlstring += '<img src="' + data + '" >\n';

    $(divId).append(htmlstring);
}

function add_images(image_urls, div) {
    var images = [];
    var image = null;
    var len = image_urls.length;
    for (var i = 0; i < len; i++) {
        image = $('<img class="frame stacked">');
        image.attr('src', image_urls[i]);
        image.appendTo(div);
        images.push(image);
    }
    return images;
}
