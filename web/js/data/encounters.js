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
    for (var i = 0; i < STATS.length; i++) {
        STATS[i] += stat_diff[i];
    }
}

function trigger_choice() {
    TIME += 1;
    if (TIME == 3)
        TIME = 4;
    if (TIME < 2) {
        show_room();
    } else {
        end();
    }
}

function choice(element, x, y, action) {
    return grid(element, x, y).click(function() {
        action();
        trigger_choice();
    });
}
