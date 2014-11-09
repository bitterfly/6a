ROOM_IMAGES = [
    'img/room/0001.jpg',
    'img/room/0002.jpg',
    'img/room/0003.jpg',
    'img/room/0004.jpg',
    'img/room/0005.jpg',
    'img/room/0006.jpg',
    'img/room/0007.jpg',
    'img/room/0008.jpg',
    'img/room/0009.jpg',
    'img/room/0010.jpg',
    'img/room/0011.jpg',
    'img/room/0012.jpg',
    'img/room/0013.jpg',
    'img/room/0014.jpg',
    'img/room/0015.jpg',
    'img/room/0016.jpg',
    'img/room/0017.jpg',
    'img/room/0018.jpg',
    'img/room/0019.jpg',
    'img/room/0020.jpg',
    'img/room/0021.jpg',
    'img/room/0022.jpg',
    'img/room/0023.jpg',
    'img/room/0024.jpg',
    'img/room/0025.jpg',
    'img/room/0026.jpg',
    'img/room/0027.jpg',
    'img/room/0028.jpg',
    'img/room/0029.jpg',
    'img/room/0030.jpg',
    'img/room/0031.jpg',
    'img/room/0032.jpg',
    'img/room/0033.jpg',
    'img/room/0034.jpg',
    'img/room/0035.jpg',
    'img/room/0036.jpg',
    'img/room/0037.jpg',
    'img/room/0038.jpg',
    'img/room/0039.jpg',
    'img/room/0040.jpg',
    'img/room/0041.jpg',
    'img/room/0042.jpg',
    'img/room/0043.jpg',
    'img/room/0044.jpg',
    'img/room/0045.jpg',
    'img/room/0046.jpg',
    'img/room/0047.jpg',
    'img/room/0048.jpg',
    'img/room/0049.jpg',
    'img/room/0050.jpg',
    'img/room/0051.jpg',
    'img/room/0052.jpg',
    'img/room/0053.jpg',
    'img/room/0054.jpg',
    'img/room/0055.jpg',
    'img/room/0056.jpg',
    'img/room/0057.jpg',
    'img/room/0058.jpg',
    'img/room/0059.jpg',
    'img/room/0060.jpg',
    'img/room/0061.jpg',
    'img/room/0062.jpg',
    'img/room/0063.jpg',
    'img/room/0064.jpg',
    'img/room/0065.jpg',
    'img/room/0066.jpg',
    'img/room/0067.jpg',
    'img/room/0068.jpg',
    'img/room/0069.jpg',
    'img/room/0070.jpg',
    'img/room/0071.jpg',
    'img/room/0072.jpg',
    'img/room/0073.jpg',
    'img/room/0074.jpg',
    'img/room/0075.jpg',
    'img/room/0076.jpg',
    'img/room/0077.jpg',
    'img/room/0078.jpg',
    'img/room/0079.jpg',
    'img/room/0080.jpg'
];

BRAIN_IMAGES = [
    'img/brain/bg.png',
    'img/brain/1.png',
    'img/brain/2.png',
    'img/brain/3.png',
    'img/brain/4.png',
    'img/brain/5.png',
    'img/brain/6.png'
];

var ENCOUNTERS = {
    1: {
        range: {
            start: 2,
            end: 10
        },
        imgroot: '',
        bg: encounter_image("img/encounters/01/bg.png"),
        shadow: encounter_image("img/encounters/01/shadow.png"),
        goblin: encounter_image("img/encounters/01/goblin.png"),
        choices: [
            choice_image('img/encounters/01/1.png'),
            choice_image('img/encounters/01/2.png'),
            choice_image('img/encounters/01/3.png'),
            choice_image('img/encounters/01/4.png'),
            choice_image('img/encounters/01/5.png'),
            choice_image('img/encounters/01/6.png')
        ],
        render: function(div) {
            div.append(this.bg);
            div.append(grid(this.shadow, 0, 1));
            div.append(grid(this.goblin, 0, 1));

            div.append(choice(this.choices[0], 7, 4, function() {
                stats({ e: 2, m: 1, r: -2, p: -2, c: -1, k: 2});
            }));
            div.append(choice(this.choices[1], 10, 4, function() {
                stats({ e: 1, m: -1, r: -1, p: -2, c: 1, k: 2});
            }));
            div.append(choice(this.choices[2], 13, 4, function() {
                stats({ e: 1, m: 2, r: -1, p: -1, c: -2, k: 1});
            }));
            div.append(choice(this.choices[3], 7, 6, function() {
                stats({ e: -2, m: 1, r: 2, p: -1, c: -1, k: 1});
            }));
            div.append(choice(this.choices[4], 10, 6, function() {
                stats({ e: -1, m: 1, r: 1, p: -2, c: 1, k: 2});
            }));
            div.append(choice(this.choices[5], 13, 6, function() {
                stats({ e: 1, m: -2, r: 1, p: -1, c: 2, k: -1});
            }));
            
            (function(shadow) {
                CUR.mouse_event = function(x, oldx) {
                    shadow.css('transform', 'translateX(' + x / 2 + 'px)');
                }
            })(this.shadow);
        }
    },
    2: {
        range: {
            start: 2,
            end: 10
        },
        imgroot: '',
        bg: encounter_image("img/encounters/02/bg.png"),
        text: encounter_text('  Настъпва първият ти учебен ден ' +
        'и по етикет на класния се носи букет. \n' +
        'Странно, но класният ти ръководител, всъщност, е мъж - ' +
        'какъв букет ли да му поднесеш... \n', 2),
        choices: [
            choice_text('Хм... защо не букет от слънчогледи?', 21),
            choice_text('Мама ще знае', 22),
            choice_text('Букетите са само за учителките', 23),
            choice_text('Нека да е роза', 24)
        ],
        render: function(div) {
            div.append(this.bg);
            div.append(grid(this.text, 6, 2));

            div.append(choice(this.choices[0], 6, 4.2, function() {
                stats({ e: 1, m: 1, r: -2, p: -5, c: -1, k: 2});
            }));
            div.append(choice(this.choices[1], 6, 5.7, function() {
                stats({ e: -1, m: -1, r: 1, p: 1, c: 2, k: -2});
            }));
            div.append(choice(this.choices[2], 9, 4.2, function() {
                stats({ e: -1, m: -2, r: 1, p: 2, c: 1, k: -1});
            }));
            div.append(choice(this.choices[3], 12, 4.2, function() {
                stats({ e: -2, m: 2, r: 2, p: 1, c: -2, k: 1});
            }));
        }
    }, /*
    3: {
        range: {
            start: 2,
            end: 10
        },
        meta: {answer: null},
        bg: encounter_image("img/encounters/04/bg.png"),
        text: encounter_text('  Настъпва първият ти учебен ден ' +
        'и по етикет на класния се носи букет. \n' +
        'Странно, но класният ти ръководител, всъщност, е мъж - ' +
        'какъв букет ли да му поднесеш... \n'),
        tryagain: encounter_text('Помисли пак.'),
        yes: choice_image("img/encounters/04/yes.png"),
        no: choice_image("img/encounters/04/no.png"),
        render: function(div) {
            meta = this.meta;
            div.append(this.bg);
            div.append(grid(this.text, 6, 2));
            
            var tryagain = this.tryagain;
            div.append(grid(this.yes, 4, 4).click(function() {
                if (meta.answer != null) {
                    alert(meta.answer + ' yes');
                } else {
                    meta.answer = 'yes';
                    div.append(grid(tryagain, 8, 4));
                }
            }));
            div.append(grid(this.no, 4, 6).click(function() {
                if (meta.answer != null) {
                    alert(meta.answer + ' no');
                } else {
                    meta.answer = 'no';
                    div.append(grid(tryagain, 8, 4));
                }
            }));
        }
    }, */
    3: {
        range: {
            start: 2,
            end: 10
        },
        meta: {answer: null},

        bg: encounter_image("img/encounters/04/bg.png"),

        text: encounter_text('Най- добрият ти приятел ти предлага бира в парка.'
                           + 'Сядате, а той вади кутия цигари. Въпреки, че знае, че си непушач, ти предлага.'
                           + '"Все пак не можеш да мразиш нещо, което не си опитал"'),

        tryagain: function() {
            choice_text('Помисли пак!', 3);

            var $choices = $(".choice_text");

            $choices.addClass("temp");
            $choices.removeClass("choice_text");

            var $temp = $(".temp");

            setTimeout(function() {
                $temp.addClass("choice_text");
                $temp.removeClass("temp");
            }, 3000);

        },

        yes: choice_image("img/encounters/04/yes.png"),
        no: choice_image("img/encounters/04/no.png"),

        render: function(div) {

            meta = this.meta;

            div.append(this.bg);
            div.append(grid(this.text, 6, 2));
            
            var tryagain = this.tryagain;
            div.append(grid(this.yes, 4, 4).click(function() {
                if (meta.answer != null) {
                    // second answer is yes
                    if (meta.answer == 'yes') {
                        stats({ e: -1, m: -1, r: -2, p: -1, c: 2, k: 2});
                    } else {
                        stats({ e: 1, m: 2, r: -2, p: 1, c: -2, k: 1});
                    }
                    trigger_choice();
                } else {
                    meta.answer = 'yes';
                    div.append(grid(tryagain, 8, 4));
                }
            }));
            div.append(grid(this.no, 4, 6).click(function() {
                if (meta.answer != null) {
                    // second answer is no
                    if (meta.answer == 'yes') {
                        stats({ e: 2, m: 1, r: -2, p: -2, c: -1, k: -1});
                    } else {
                        stats({ e: -1, m: -1, r: 2, p: 2, c: 1, k: -2});
                    }
                } else {
                    meta.answer = 'no';
                    div.append(grid(tryagain, 8, 4));
                }
            }));
        }
    }
} ;

MEMORIES = {
    0: {
        range: 2,
        effect: function () {}
    },
    1: {
        range: 2,
        effect: function () {}
    },
    3: {
        range: 2,
        effect: function () {}
    },
    4: {
        range: 2,
        effect: function () {}
    },
    5: {
        range: 2,
        effect: function () {}
    },
    6: {
        range: 2,
        effect: function () {}
    }
} ;

CUR = {};
ELEM = {};
TIME = 1;

STATS = {
    e: 0,
    m: 0,
    r: 0,
    p: 0,
    c: 0,
    k: 0
};

$BODY = $('body');
