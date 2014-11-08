/**
 * Created by Rali on 8.11.2014 г..
 */

QUIZES = {
    0: {
        question: {
            type: '',
            text: '',
            image: ''
        },
        choices: [],
        effect: function () {}
    },
    1: {
        question: {
            type: '',
            text: '',
            image: ''
        },
        choices: [],
        effect: function () {}
    },
    3: {
        question: {
            type: '',
            text: '',
            image: ''
        },
        choices: [],
        effect: function () {}
    },
    4: {
        question: {
            type: '',
            text: '',
            image: ''
        },
        choices: [],
        effect: function () {}
    },
    5: {
        question: {
            type: '',
            text: '',
            image: ''
        },
        choices: [],
        effect: function () {}
    },
    6: {
        question: {
            type: '',
            text: '',
            image: ''
        },
        choices: [],
        effect: function () {}
    },
    7: {
        question: {
            type: '',
            text: '',
            image: ''
        },
        choices: [],
        effect: function () {}
    }
} ;

function POP_QUIZ (index) {

    $BODY.append('<div id="pop_quiz"></div>');

    /**
     * this adds the quiz stuff to the html
     * @type {string}
     */

    var innerHtml;
    innerHtml= '';

    var temp_type;

    temp_type = QUIZES[index][question][type];
    if (temp_type == 'text') {
        innerHtml += '<div id="question">' + QUIZES[index][question][text] + '</div>';
    } else {
        innerHtml += '<div id="question"><img src="' + QUIZES[index][question][image] + '"></div>';
    }

    var choices;
    choices = '';

    $.each(QUIZES[index][choices], function () {
        choices += '<li>' + this + '</li> \n';
    });

    innerHtml += '<div id="choices_container"><ul>' + choices + '</ul></div>';

    innerHtml += '<hr class="quiz-timer-progress-bar" style="width: 0.0%;">';

    $('#pop_quiz').append(innerHtml);

    /**
     * this shows the question
     * @param src
     */

    var choice = undefined;

    /**
     * this makes stuff with the timebar
     */

    function timebar() {
        var percent = 100, bar = $('.quiz-timer-progress-bar'), timebar = $('#timebar');

        function progressBarCarousel() {
            bar.css({width:percent+'%'});
            percent = percent -0.5;
            if (percent == 0 || choice != undefined) {
                if (percent == 0 && choice === undefined) {
                    /*conole.log('times up!');*/
                } else {
                    /*console.log('stuff happens');*/
                }
            }
        }
    }

    QUIZES[index][choices].click(onChoice);

    function onChoice() {

    }
}
