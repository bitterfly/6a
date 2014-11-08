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

function encounter_image(src) {
    return $('<img class="encounter_img stacked">').attr('src', src);
}

function choice_image(src) {
    return $('<img class="choice_img stacked">').attr('src', src);
}

function choice_text(text) {
    return $('<div class="choice_text stacked">').text(text);
}

function encounter_text(text) {
    return $('<div class="encounter_text stacked">').text(text);
}

function grid(element, x, y) {
    return element.css('left', x * 1216 / 16).css('top', y * 684 / 9);
}

function stats(stat_diff) {
    for (var key in stat_diff) {
        STATS[key] += stat_diff[key];
    }
}
