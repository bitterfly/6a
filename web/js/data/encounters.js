function encounter_image(src) {
    return $('<img class="encounter_img stacked">').attr('src', src);
}

function choice_image(src) {
    return $('<img class="choice_img stacked">').attr('src', src);
}

function choice_text(text, id) {
    return $('<div class="choice_text stacked" id="' + id + '">').text(text);
}

function encounter_text(text, id) {
    return $('<div class="encounter_text stacked" id="' + id + '">').text(text);
}

function grid(element, x, y) {
    return element.css('left', x * 1216 / 16).css('top', y * 684 / 9);
}

function stats(stat_diff) {
    for (var key in stat_diff) {
        STATS[key] += stat_diff[key];
    }
}

function trigger_choice() {
    TIME += 1;
    show_room();
}

function choice(element, x, y, action) {
    return grid(element, x, y).click(function() {
        action();
        trigger_choice();
    });
}
