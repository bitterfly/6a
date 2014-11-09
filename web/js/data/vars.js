/**
 * Created by Rali on 8.11.2014 г..
 */

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
    'img/room/0040.jpg'
];

BRAIN_IMAGES = [
    'img/brain/bg.png',
    'img/brain/1.png',
    'img/brain/2.png',
    'img/brain/3.png',
    'img/brain/4.png',
    'img/brain/5.png',
    'img/brain/6.png'
]

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
        'какъв букет ли да му поднесеш... \n'),
        choices: [
            choice_text('Хм... защо не букет от слънчогледи?'),
            choice_text('Мама ще знае'),
            choice_text('Букетите са само за учителките'),
            choice_text('Нека да е роза')
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
    },
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
        yes: choice_image("img/encounters/04/yes.png"),
        no: choice_image("img/encounters/04/no.png"),
        render: function(div) {
            meta = this.meta;
            div.append(this.bg);
            div.append(grid(this.text, 6, 2));
            
            div.append(grid(this.yes, 4, 4).click(function() {
                if (meta.answer != null) {
                    alert(meta.answer + ' yes');
                } else {
                    meta.answer = 'yes';
                }
            }));
            div.append(grid(this.no, 8, 4).click(function() {
                if (meta.answer != null) {
                    alert(meta.answer + ' no');
                } else {
                    meta.answer = 'no';
                }
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

STATS = {
    e: 0,
    m: 0,
    r: 0,
    p: 0,
    c: 0,
    k: 0
};

$BODY = $('body');
