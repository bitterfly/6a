/**
 * Created by Rali on 8.11.2014 г..
 */

function ADD_HIDDEN (data, divId) {
    var htmlstring = '';

    htmlstring += '<img src="' + data.src + '">\n';

    $(divId).append(htmlstring);
}