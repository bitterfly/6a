/**
 * Created by Rali on 8.11.2014 г..
 */

function POP_QUIZ () {

    $BODY.append('<div id="pop_quiz"></div>');

    var innerHtml = '';

    innerHtml += '<div id="question"></div>';

    innerHtml += '<div class="quiz-timer-progress-bar-div">' +
        '<hr class="quiz-timer-progress-bar" style="width: 0.0%;"></div>';

    $('#pop_quiz').append(innerHtml);

    function question(src) {

    }

    function timebar() {
        var percent = 100, bar = $('.quiz-timer-progress-bar'), timebar = $('#timebar');

        function progressBarCarousel() {
            bar.css({width:percent+'%'});
            percent = percent -0.5;
            if (percent == 0) {
                function stuffEnds () {};
            }

        }
    }
}
