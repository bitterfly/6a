/**
 * Created by Rali on 8.11.2014 г..
 */

function ADD_HIDDEN_IMAGE (data, divId) {
    var htmlstring = '';

    htmlstring += '<img src="' + data.src + '">\n';

    $(divId).append(htmlstring);
}