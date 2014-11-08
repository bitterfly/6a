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

var ENCOUNTERS = {
    1: {
        range: {
            start: 2,
            end: 10
        },
        images: {
            imgroot: '',
            bg: load_image("../img/encounters/01/bg.png"),
            choices: [
                load_image('../img/encounters/01/1.png'),
                load_image('../img/encounters/01/2.png'),
                load_image('../img/encounters/01/3.png'),
                load_image('../img/encounters/01/4.png'),
                load_image('../img/encounters/01/5.png'),
                load_image('../img/encounters/01/6.png')
            ]
        },
        text: '',
        render: function(div) {
            div.append(this.images.bg);
            div.append(choice(this.images.choices[0], 7, 4, function() {
                stats({ e: 1, m: -1, r: -1, p: -2, c: 1, k: 2});
            }));
            div.append(choice(this.images.choices[1], 10, 4, function() {
                stats({ e: 1, m: -1, r: -1, p: -2, c: 1, k: 2});
            }));
            div.append(choice(this.images.choices[2], 13, 4, function() {
                stats({ e: 1, m: -1, r: -1, p: -2, c: 1, k: 2});
            }));
            div.append(choice(this.images.choices[3], 7, 6, function() {
                stats({ e: 1, m: -1, r: -1, p: -2, c: 1, k: 2});
            }));
            div.append(choice(this.images.choices[4], 10, 6, function() {
                stats({ e: 1, m: -1, r: -1, p: -2, c: 1, k: 2});
            }));
            div.append(choice(this.images.choices[5], 13, 6, function() {
                stats({ e: 1, m: -1, r: -1, p: -2, c: 1, k: 2});
            }));
        }
    },
    2: {
        range: {
            start: 2,
            end: 10
        },
        images: {
            imgroot: '',
            bg: load_image("../img/encounters/02/bg.png"),
            choices: [
                load_image('../img/encounters/02/c1.png'),
                load_image('../img/encounters/02/c2.png'),
                load_image('../img/encounters/02/c3.png'),
                load_image('../img/encounters/02/c4.png'),
                load_image('../img/encounters/02/c5.png'),
            ]
        },
        text: '',
        choices: [
            {

            },
            {

            }
        ],
        render: function(div) {
            div.append(this.images.bg);
            div.append(grid(this.images.choices[0], 7, 0).click(function() {
                STAT.e += 1;
                STAT.r  
            }));
            div.append(grid(this.images.choices[1], 7, 3));
            div.append(grid(this.images.choices[2], 7, 4));
            div.append(grid(this.images.choices[3], 7, 5));
            div.append(grid(this.images.choices[4], 7, 6));
        }
    },
    3: {
        range: {
            start: 10,
            end: 16
        },
        images: [
            backgroundSrc = '',
            movingSrc = []
        ],
        text: '',
        choices: [
            {

            },
            {

            }
        ]
    },
    4: {
        range: {
            start: 10,
            end: 16
        },
        images: [
            backgroundSrc = '',
            movingSrc = []
        ],
        text: '',
        choices: [
            {

            },
            {

            }
        ]
    },
    5: {
        range: {
            start: 16,
            end: 21
        },
        images: [
            backgroundSrc = '',
            movingSrc = []
        ],
        text: '',
        choices: [
            {

            },
            {

            }
        ]
    },
    6: {
        range: {
            start: 16,
            end: 21
        },
        images: [
            backgroundSrc = '',
            movingSrc = []
        ],
        text: '',
        choices: [
            {

            },
            {

            }
        ]
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

STATS = { e: 0
        , m: 0
        , r: 0
        , p: 0
        , c: 0
        , k: 0};

$BODY = $('body');
