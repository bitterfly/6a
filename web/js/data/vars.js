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

TREE_IMAGES = [
    'img/habit/Background.png',
    'img/habit/1.png',
    'img/habit/2.png',
    'img/habit/3.png',
    'img/habit/4.png',
    'img/habit/5.png',
    'img/habit/6.png',
    'img/habit/7.png',
    'img/habit/8.png',
    'img/habit/9.png',
    'img/habit/15.png',
    'img/habit/16.png'
];

TREE = {
    1: {parent: null, active: false},
    2: {parent: 1, active: false},
    3: {parent: 1, active: false},
    4: {parent: 2, active: false},
    5: {parent: 2, active: false},
    6: {parent: 3, active: false},
    7: {parent: 6, active: false},
    8: {parent: null, active: false},
    9: {parent: 8, active: false},
    10: {parent: 9, active: false},
    11: {parent: 9, active: false}
}



var ENCOUNTERS = {
    1: {
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
                stats([ 2, 1, -2, -2, -1, 2 ]);
            }));
            div.append(choice(this.choices[1], 10, 4, function() {
                stats([ 1, -1, -1, -2, 1, 2 ]);
            }));
            div.append(choice(this.choices[2], 13, 4, function() {
                stats([ 1, 2, -1, -1, -2, 1 ]);
            }));
            div.append(choice(this.choices[3], 7, 6, function() {
                stats([ -2, 1, 2, -1, -1, 1 ]);
            }));
            div.append(choice(this.choices[4], 10, 6, function() {
                stats([ -1, 1, 1, -2, 1, 2 ]);
            }));
            div.append(choice(this.choices[5], 13, 6, function() {
                stats([ 1, -2, 1, -1, 2, -1 ]);
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
        'и по пътя към училище минаваш покрай няколко цветаря. \n' +
        'Класният ти, обаче, е мъж - ще купиш ли цвете? \n', 2),
        choices: [
            choice_text('Нещо различно тогава... слънчогледи', 21),
            choice_text('Мама вече се погрижи', 22),
            choice_text('Букетите са само за учителките', 23),
            choice_text('Обичайното - роза', 24)
        ],
        render: function(div) {
            div.append(this.bg);
            div.append(grid(this.text, 6, 2));

            div.append(choice(this.choices[0], 6, 4.2, function() {
                stats([ 1, 1, -2, -5, -1, 2 ]);
            }));
            div.append(choice(this.choices[1], 6, 5.7, function() {
                stats([ -1, -1, 1, 1, 2, 2 ]);
            }));
            div.append(choice(this.choices[2], 9, 4.2, function() {
                stats([ -1, -2, 1, 2, 1, -1]);
            }));
            div.append(choice(this.choices[3], 12, 4.2, function() {
                stats([ -2, 2, 2, 1, -2, 1 ]);
            }));
        }
    },
    3: {
        range: {
            start: 2,
            end: 10
        },
        meta: {answer: null},
        bg: encounter_image("img/encounters/03/bg.png"),
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
    },
    4: {
        range: {
            start: 2,
            end: 10
        },
        meta: {answer: null},

        bg: encounter_image("img/encounters/04/bg.png"),

        text: encounter_text('Приятел ти предлага бира в парка. Сядате, а той вади кутия цигари.' +
        'Въпреки че не пушиш, ти предлага. "Все пак не можеш да мразиш нещо, което не си опитал"', 4),
            /*
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
*/
        yes: choice_image("img/encounters/04/yes.png"),
        no: choice_image("img/encounters/04/no.png"),

        render: function(div) {

            meta = this.meta;

            div.append(this.bg);
            var text_div = this.text;
            
            div.append(grid(this.text, 6, 0.5));
            
            div.append(grid(this.yes, 10, 6).click(function() {
                if (meta.answer != null) {
                    // second answer is yes
                    if (meta.answer == 'yes') {
                        stats([ -1, -1, -2, -1, 2, 2 ]);
                    } else {
                        stats([ 1, 2, -2, 1, -2, 1 ]);
                    }
                    trigger_choice();
                } else {
                    text_div.prepend($('<div class="extra">').text('Помисли пак.'));
                    meta.answer = 'yes';
                }
            }));
            div.append(grid(this.no, 13, 6).click(function() {
                if (meta.answer != null) {
                    // second answer is no
                    if (meta.answer == 'yes') {
                        stats([ 2, 1, -2, -2, -1, -1 ]);
                    } else {
                        stats([ -1, -1, 2, 2, 1, -2 ]);
                    }
                    trigger_choice();
                } else {
                    text_div.prepend($('<div class="extra">').text('Помисли пак.'));
                    meta.answer = 'no';
                }
            }));
        }
    },
    5: {
        bg: encounter_image("img/encounters/05/bg.png"),
        text: encounter_text("Къде с учене, къде с преписване - \n" 
                           + "мина си матурите. А сега накъде?", 5),
        choices: [
            choice_image('img/encounters/05/1.png'),
            choice_image('img/encounters/05/2.png'),
            choice_image('img/encounters/05/3.png'),
        ],
        render: function(div) {
            div.append(this.bg);
            div.append(grid(this.text, 3, 0));

            div.append(choice(this.choices[0], 1, 2, function() {
                stats([ 0, 0, -2, 0, 0, 2 ]);
            }).attr({title: 'Отиваш в чужбина заради възможност, която нямаш тук. Но това струва майка си и баща си, а заслужаважа ли си...'}));
            div.append(choice(this.choices[1], 7, 4, function() {
                stats([ 1, 2, 0, -1, -2, 0 ]);
            }).attr({title: 'Все пак университетът е добър само ако си при добри преподаватели. Дали ще научиш от теб зависи, ще останеш в по-близкия университет'}));
            div.append(choice(this.choices[2], 13, 6, function() {
                stats([ -2, 0, 2, 2, 0, -2 ]);
            }).attr({title: 'Казват, че в големия образованието е по-добро, но ще понесеш ли чалгата в студентски град '}));
        }
    },
    6: {
        bg: encounter_image("img/encounters/06/bg.png"),
        text: encounter_text('Попадаш на архаичен лектор, който те кара да "пееш" материала, а дали го разбираш не е важно. Време ли е за промяна?', 6),
        choices: [
            choice_text('Какво значение има: преписан изпит - взет изпит, важна е дипломата', 61),
            choice_text('Разгорещено обясняваш на лектора какво и как да промени.', 62),
            choice_text('Подаваш оплакване до висша инстанция', 63),
            choice_text('Кой съм аз да определям дали лекторите са добри?', 64),
            choice_text('Ще си назубря за изпита, ако материалът ми трябва - има Google ', 65),
            choice_text('Събирам подписка с мнения за лектора и я пращам "нагоре по етажите"', 66)
        ],
        render: function(div) {
            div.append(this.bg);
            div.append(grid(this.text, 6, 2));

            div.append(choice(this.choices[0], 6.5, 5.2, function() {
                stats([ 3, 2, -2, -3, -2, 2 ]);
            }));
            div.append(choice(this.choices[1], 6.5, 6.7, function() {
                stats([ 2, 3, 2, -2, -3, -2 ]);
            }));
            div.append(choice(this.choices[2], 9.5, 5.2, function() {
                stats([ -2, 2, 3, 2, -2, -3 ]);
            }));
            div.append(choice(this.choices[3], 12.5, 5.2, function() {
                stats([ 1, -2, 2, 3, 2, -2 ]);
            }));
            div.append(choice(this.choices[4], 12.5, 5.2, function() {
                stats([ 1, -2, 2, 3, 2, -2 ]);
            }));
            div.append(choice(this.choices[5], 12.5, 5.2, function() {
                stats([ -2, 2, 2, 1, -2, 1 ]);
            }));
        }
    },
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
TP = 0;

STATS = [
    0,
    0,
    0,
    0,
    0,
    0
];

ASPECT = null;

$BODY = $('body');
