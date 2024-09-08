var dragItem, container = null;
var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;
var isDragging = false;
var isCutting = false;
var isShuffiling = false;
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getVeryRandomInt(min, max, entropyString) {
    var randomGen = new
            Math.seedrandom('La Dea sia benedetta',
                    {
                        entropy: (new Date()).getTime()
                                + ""
                                + Math.random() +
                                +entropyString
                    });
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var zIndex = 0;
var tarotDeck = {
    // currentDeck: 'rwpop1910',
    currentDeck: 'dva01',
    decks: {
        crowley:{
            zoomableCards: true,
            alwaysUpright: true,
            numberOfCards: 78,
            onlyNumbers: false,
            backOfTheCardImgRelativeUrl: '/tarotapp/Back_of_the_card-512.png',
            root: '/tarotapp/decks/crowley',
            prefixDigit: '',
            separator: '-',
            ext: 'webp',
            majorArcanaSeed: 'a',
            seeds: {
                'a': {max: 23, start: 1},
                'd': {max: 14, start:1},
                'c': {max: 14, start:1},
                'w': {max: 14, start:1},
                's': {max: 14, start:1},

            }
        },
        stedivination: {
            zoomableCards: false,
            alwaysUpright: true,
            numberOfCards: 05,
            onlyNumbers: false,
            backOfTheCardImgRelativeUrl: '/tarotapp/decks/stedivination/back.png',
            root: '/tarotapp/decks/stedivination/',
            prefixDigit: '0',
            separator: '',
            ext: 'png',
            majorArcanaSeed: 'a',
            seeds: {
                'a': {max: 05, start: 01}
            }
        },
        goddessguidance: {
            zoomableCards: true,
            alwaysUpright: true,
            numberOfCards: 44,
            onlyNumbers: false,
            backOfTheCardImgRelativeUrl: '/tarotapp/decks/goddessguidance/back.jpg',
            root: '/tarotapp/decks/goddessguidance/',
            prefixDigit: '0',
            separator: '',
            ext: 'jpg',
            majorArcanaSeed: 'a',
            seeds: {
                'a': {max: 33, start: 01}
            }
        },
        lotto: {
            zoomableCards: false,
            alwaysUpright: true,
            numberOfCards: 90,
            onlyNumbers: true,
            backOfTheCardImgRelativeUrl: '/tarotapp/decks/rwpop1910/0-back.jpg',
            root: '/tarotapp/decks/dorenvirtueangels/',
            prefixDigit: '',
            separator: '',
            ext: 'jpg',
            majorArcanaSeed: 'lotto',
            seeds: {
                'lotto': {max: 90, start: 01}
            }
        },
        iching: {
            zoomableCards: false,
            alwaysUpright: true,
            numberOfCards: 64,
            onlyNumbers: true,
            backOfTheCardImgRelativeUrl: '/tarotapp/decks/rwpop1910/0-back.jpg',
            root: '/tarotapp/decks/dorenvirtueangels/',
            prefixDigit: '',
            separator: '',
            ext: 'jpg',
            majorArcanaSeed: 'iching',
            seeds: {
                'iching': {max: 64, start: 01}
            }
        },

        dvamc: {
            zoomableCards: true,
            alwaysUpright: true,
            numberOfCards: 44,
            onlyNumbers: false,
            backOfTheCardImgRelativeUrl: '/tarotapp/decks/dorenvirtueangels/AAMichaelCARDS45.jpg',
            root: '/tarotapp/decks/dorenvirtueangels/',
            prefixDigit: '',
            separator: '',
            ext: 'jpg',
            majorArcanaSeed: 'AAMichaelCARDS',
            seeds: {
                'AAMichaelCARDS': {max: 44, start: 01}
            }
        },
        dva01: {
            zoomableCards: false,
            alwaysUpright: true,
            numberOfCards: 44,
            onlyNumbers: false,
            backOfTheCardImgRelativeUrl: '/tarotapp/decks/dorenvirtueangels/carte_risposte_angeli_retro.jpg',
            root: '/tarotapp/decks/dorenvirtueangels/',
            prefixDigit: '',
            separator: '',
            ext: 'jpg',
            majorArcanaSeed: 'carte_risposte_angeli_',
            seeds: {
                'carte_risposte_angeli_': {max: 44, start: 01}
            }
        },
        rwpop1910: {
            zoomableCards: false,
            alwaysUpright: false,
            numberOfCards: 78,
            onlyNumbers: false,
            backOfTheCardImgRelativeUrl: '/tarotapp/decks/rwpop1910/0-back.jpg',
            root: '/tarotapp/decks/rwpop1910/',
            prefixDigit: '0',
            separator: '-',
            ext: 'jpg',
            majorArcanaSeed: 'a',
            seeds: {
                'a': {max: 21, start: 00},
                'w': {max: 14, start: 01},
                'c': {max: 14, start: 01},
                's': {max: 14, start: 01},
                'p': {max: 14, start: 01},

            }
        },
        rwbw: {
            zoomableCards: false,
            alwaysUpright: false,
            numberOfCards: 78,
            onlyNumbers: false,
            backOfTheCardImgRelativeUrl: '/tarotapp/Back_of_the_card-512.png',
            root: '/wp-content/plugins/tarot/images/',
            prefixDigit: '0',
            separator: '-',
            ext: 'svg',
            majorArcanaSeed: 'a',
            seeds: {
                'a': {max: 21, start: 00},
                'w': {max: 14, start: 01},
                'c': {max: 14, start: 01},
                's': {max: 14, start: 01},
                'p': {max: 14, start: 01},

            }
        },
        marseilles: {
            zoomableCards: false,
            alwaysUpright: false,
            numberOfCards: 78,
            onlyNumbers: false,
            backOfTheCardImgRelativeUrl: '/tarotapp/decks/marseilles/back.jpg',
            root: '/tarotapp/decks/marseilles/',
            prefixDigit: '0',
            separator: '',
            ext: 'jpg',
            majorArcanaSeed: 'major',
            seeds: {
                'major': {max: 21, start: 00},
                'clubs': {max: 14, start: 01},
                'cups': {max: 14, start: 01},
                'swords': {max: 14, start: 01},
                'coins': {max: 14, start: 01},

            }
        },
        ananke:{
            zoomableCards: true,
            alwaysUpright: true,
            numberOfCards: 23,
            onlyNumbers: false,
            backOfTheCardImgRelativeUrl: '/tarotapp/decks/ananke/back.png',
            root: '/tarotapp/decks/ananke/',
            prefixDigit: '',
            separator: '',
            ext: 'png',
            majorArcanaSeed: '',
            seeds: {
                '': {max: 23, start: 1}
            }
        }

    },

    deck: [],
    initCards: function () {
        for (let key in tarotDeck.decks[tarotDeck.currentDeck].seeds) {
            let seedInfo = tarotDeck.decks[tarotDeck.currentDeck].seeds[key];
            for (let i = seedInfo.start; i <= seedInfo.max; i++) {
                //console.log(i);
                tarotDeck.deck.push({seed: key, value: i});
            }
            // console.log(key,seedInfo);
        }
        tarotDeck.drawDeck();


    },
    drawDeck: function () {
        var reverseZIndex = tarotDeck.decks[tarotDeck.currentDeck].numberOfCards;
        for (let i in tarotDeck.deck) {
            var card = tarotDeck.deck[i];
            if (card.value < 10) {
                card.value = tarotDeck.decks[tarotDeck.currentDeck].prefixDigit + card.value;
            }
            var html = "";
            if (tarotDeck.decks[tarotDeck.currentDeck].onlyNumbers) {
                html = "<span data-seed='" + card.seed + "' id='tarot-card-" + i + "'" +
                        "style='z-index:" + (reverseZIndex--) + "; top:12x; left:12px;'" +
                        //   "background-image: url(\"" + tarotDeck.root + "/" + card.seed + "-" + card.value + "." + tarotDeck.ext + "\")'" +
                        "class='tarot-card tarot-card-" + i + "'>" +
                        "<span class='tarot-card-dragmask'></span>" +
                        "<span class='tarot-card-img front'>" + "<span class='centeredCardNumber'>" + card.value + "</span>" + "</span>" +
                        "<span class='tarot-card-img-back back'><img src='" + tarotDeck.decks[tarotDeck.currentDeck].backOfTheCardImgRelativeUrl + "'/></span>" +
                        "</span>";
            } else {
                html = "<span data-seed='" + card.seed + "' id='tarot-card-" + i + "'" +
                        "style='z-index:" + (reverseZIndex--) + "; top:12px; left:12px;'" +
                        //   "background-image: url(\"" + tarotDeck.root + "/" + card.seed + "-" + card.value + "." + tarotDeck.ext + "\")'" +
                        "class='tarot-card tarot-card-" + i + "'>" +
                        "<span class='tarot-card-dragmask'></span>" +
                        "<span class='tarot-card-img front'><img src='" + tarotDeck.decks[tarotDeck.currentDeck].root + "/" + card.seed + tarotDeck.decks[tarotDeck.currentDeck].separator + card.value + "." + tarotDeck.decks[tarotDeck.currentDeck].ext + "'/></span>" +
                        "<span class='tarot-card-img-back back'><img src='" + tarotDeck.decks[tarotDeck.currentDeck].backOfTheCardImgRelativeUrl + "'/></span>" +
                        "</span>";
            }

            $(".tarotTable").append(html);
            //set_drag_drop($("." + "tarot-card-" + i + "")[0]);
        }
        tarotDeck.initDraggables();
        tarotDeck.orderByAndResetZindexes();
    },
    orderByAndResetZindexes: function () {
        var arr = [];
        $(".tarot-card").each(function (i, e) {
            var zIndex = parseInt($(e).css("zIndex"));
            if (typeof arr[zIndex] === 'undefined') {
                arr[zIndex] = [];
            }
            arr[zIndex].push($(e));

        });

        // console.log(arr);
        var iZIndex = 1;
        for (let key in arr) {
            var earr = arr[key];
            for (let key2 in earr) {
                var e = earr[key2];
                e.parent().prepend(e);

                e.css({zIndex: (iZIndex++)});

            }
        }
    },
    cut: function () {
        isCutting = true; // to prevent flipping
        tarotDeck.redeck();
        var i = 0;
        $(".tarotTable .tarot-card").each(function (i, e) {
            //  console.log(e);
            // caching the object for performance reasons

            var $elem = $(e);
            // animateRotate3dXaxis($elem,91);
            $elem.animate({left: (12 + (i++)) + "px"}, getVeryRandomInt(1, 777));





        });
        //tarotDeck.orderByAndResetZindexes();
    },
    cut2: function (e) {
        if (isCutting == true) {
            if ($(e.target).parent().hasClass("tarot-card")) {
                $cutItem = $(e.target).parent();

            } else {
                $cutItem = $(e.target);

            }
            if ($cutItem.hasClass("tarot-card")) {
                $cutItem.animate({left: (12 + 300) + "px"}, getVeryRandomInt(1, 777));
                var startMoving = false;
                var i2 = 0;
                $(".tarotTable .tarot-card").each(function (i, e) {
                    $afterCut = $(e);
                    if (startMoving) {
                        $afterCut.animate({left: (12 + 300 + i2++) + "px"}, getVeryRandomInt(1, 777));
                    }
                    if ($afterCut.attr("id") == $cutItem.attr("id")) {
                        startMoving = true;
                    }
                });
                isCutting = $cutItem; // to prevent flipping
            }
        }
        //tarotDeck.orderByAndResetZindexes();
    },
    cut3: function (e) {
        if (isCutting !== false && isCutting !== true) {
            if ($(e.target).parent().hasClass("tarot-card")) {
                $cutItem = $(e.target).parent();

            } else {
                $cutItem = $(e.target);

            }
            if (!$cutItem.hasClass("tarot-card")) {
                // $cutItem.animate({left: (12 + 300) + "px"}, getVeryRandomInt(1, 777));
                var startMoving = false;
                var i2 = 0;
                $(".tarotTable .tarot-card").each(function (i, e) {
                    $afterCut = $(e);

                    if ($afterCut.attr("id") == isCutting.attr("id")) {
                        $afterCut.animate({zIndex: 0}, 0);

                    }
                    if (startMoving) {
                        $afterCut.animate({left: (12 + 0 + i2++) + "px"}, getVeryRandomInt(1, 777));
                        var zIndex = parseInt($afterCut.css("zIndex"));
                        //console.log(zIndex);
                        $afterCut.css({zIndex: (zIndex + 100)});

                    }
                    if ($afterCut.attr("id") == isCutting.attr("id")) {
                        startMoving = true;
                    }
                });
                isCutting = false; // to prevent flipping
                tarotDeck.orderByAndResetZindexes();
                //setTimeout(tarotDeck.redeck,2000);
//
            }

            //tarotDeck.orderByAndResetZindexes();
        }
    },
    redeck: function () {
        $(".tarot-card").each(function (i, e) {
            //  console.log(e);
            // caching the object for performance reasons

            var $elem = $(e);
            if ($elem.parent().hasClass("readingTable")) {
                $(".tarotTable").append($elem);
            }
            $elem.animate({left: 12 + "px"}, getVeryRandomInt(1, 777));
            $elem.animate({top: 12 + "px"}, getVeryRandomInt(1, 666));
            // $(e).animate({zIndex: getVeryRandomInt(1, 78, $(e).css("zIndex"))}, getVeryRandomInt(1, 5));     
            //  $elem.animate({top: getVeryRandomInt(1, $(".tarotTable").height() - 223) + "px"}, getVeryRandomInt(1, 666));
            // $elem.animate({zIndex: getVeryRandomInt(1, 78, $elem.css("zIndex"))}, 0);
            var deg = getRotationDegrees($elem);
            animateRotateRandomTiming($elem, (deg > 90 && deg <= 270 && !tarotDeck.decks[tarotDeck.currentDeck].alwaysUpright) ? 180 : 0);




        });
        //  tarotDeck.orderByAndResetZindexes();
    },
    startShuffling: function () {
        if (isShuffiling == false) {
            isShuffiling = true;
            tarotDeck._shuffleCards();
            $(".menu-item-1629 a").html("Stop");
        } else {
            tarotDeck.stopShuffling();
        }
    },
    stopShuffling: function () {
        isShuffiling = false;
        $(".menu-item-1629 a").html("Mischia/Shuffle");
        setTimeout(tarotDeck.orderByAndResetZindexes, 1000);
    },
    shuffleCards: function () {
        if (isShuffiling == true) {
            tarotDeck._shuffleCards();
        }
    },
    _shuffleCards: function () {
        var howMany = 1;//getVeryRandomInt(1, 12);
        //  alert(howMany);
        while (howMany > 0) {
            howMany--;
            $(".tarotTable .tarot-card").each(function (i, e) {
                // console.log(e);
                // caching the object for performance reasons
                var $elem = $(e);

                $elem.animate({left: getVeryRandomInt(1, $(".tarotTable").width() - 127) + "px"}, getVeryRandomInt(1, 777));
                $elem.animate({top: getVeryRandomInt(1, $(".tarotTable").height() - 223) + "px"}, getVeryRandomInt(1, 666));
                // $(e).animate({zIndex: getVeryRandomInt(1, 78, $(e).css("zIndex"))}, getVeryRandomInt(1, 5));     
                //  $elem.animate({top: getVeryRandomInt(1, $(".tarotTable").height() - 223) + "px"}, getVeryRandomInt(1, 666));
                $elem.animate({zIndex: getVeryRandomInt(1, tarotDeck.decks[tarotDeck.currentDeck].numberOfCards, $elem.css("zIndex"))}, 0);

                animateRotateRandomTiming($elem, getVeryRandomInt(0, 360, $elem.css("zIndex")));




            });
            setTimeout(tarotDeck.shuffleCards, 1000);
        }
    },
    pickOneCard: function () {

    },
    discardMinor: function () {
        $(".tarotTable .tarot-card[data-seed!=" + tarotDeck.decks[tarotDeck.currentDeck].majorArcanaSeed + "]").remove();

    },
    discardMajor: function () {

        $(".tarotTable .tarot-card[data-seed=" + tarotDeck.decks[tarotDeck.currentDeck].majorArcanaSeed + "]").remove();

    },
    filpAllCards: function () {
        $(".tarotTable").click();
        $(".tarotTable .tarot-card").click();
    },
    initDraggables: function () {


        if (tarotDeck.decks[tarotDeck.currentDeck].zoomableCards) {
            $(".tarot-card").addClass("zoomable");
        }

        $(".tarot-card").flip({
            axis: 'y',
            trigger: 'click'
        });



        dragItem = document.querySelector(".tarot-card");
        container = document.querySelector(".tarotTable");

        container.addEventListener("touchstart", tarotDeck.cut2, false);
        container.addEventListener("mousedown", tarotDeck.cut2, false);

        container.addEventListener("touchstart", tarotDeck.cut3, false);
        container.addEventListener("mousedown", tarotDeck.cut3, false);

        container.addEventListener("touchstart", dragStart, false);
        container.addEventListener("touchend", dragEnd, false);
        document.addEventListener("touchend", dragEnd, false);
        container.addEventListener("touchmove", drag, false);

        container.addEventListener("mousedown", dragStart, false);
        container.addEventListener("mouseup", dragEnd, false);
        document.addEventListener("mouseup", dragEnd, false);

        container.addEventListener("mousemove", drag, false);

        container = document.querySelector(".readingTable");

        container.addEventListener("touchstart", dragStart, false);
        container.addEventListener("touchend", dragEnd, false);

        container.addEventListener("touchmove", drag, false);

        container.addEventListener("mousedown", dragStart, false);
        container.addEventListener("mouseup", dragEnd, false);

        container.addEventListener("mousemove", drag, false);






    }
};







function animateRotateRandomTiming2($elem, deg) {
    // we use a pseudo object for the animation
    // (starts from `0` to `angle`), you can name it as you want
    $({deg: 0}).animate({deg: deg}, {
        duration: getVeryRandomInt(1, 777),
        step: function (now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            var oldtrasnform = $elem.css("transform");
            console.log(oldtrasnform);
            var replacedTransform = oldtrasnform.replace(/rotate([0-9]+deg)/, 'rotate(' + now + 'deg)');
            if (!replacedTransform.match(/rotate([0-9]+deg)/)) {
                if (oldtrasnform == "none")
                    oldtrasnform = "";
                replacedTransform = 'rotate(' + now + 'deg)' + oldtrasnform;
            }
            console.log(replacedTransform);

            $elem.css({
                transform: replacedTransform
            });
        }
    });
}

function animateRotate3dXaxis2($elem, deg) {
    // we use a pseudo object for the animation
    // (starts from `0` to `angle`), you can name it as you want
    $({deg: 0}).animate({deg: deg}, {
        duration: 270,
        step: function (now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            var oldtrasnform = $elem.css("transform");
            console.log(oldtrasnform);
            var replacedTransform = oldtrasnform.replace(/rotateX([0-9]+deg)/, 'rotateX(' + now + 'deg)');
            if (!replacedTransform.match(/rotateX([0-9]+deg)/)) {
                if (oldtrasnform == "none")
                    oldtrasnform = "";
                replacedTransform = 'rotateX(' + now + 'deg)' + oldtrasnform;
            }
            console.log(replacedTransform);

            $elem.css({
                transform: replacedTransform
            });
        }
    });
}


function animateRotateRandomTiming($elem, deg) {
    // we use a pseudo object for the animation
    // (starts from `0` to `angle`), you can name it as you want
    $({deg: 0}).animate({deg: deg}, {
        duration: getVeryRandomInt(1, 777),
        step: function (now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            var oldXDegrees = getXRotationDegrees($elem);

            $elem.css({
                transform: 'rotateX(' + oldXDegrees + 'deg) ' +
                        'rotate(' + now + 'deg) '
            });
        }
    });
}

function animateRotate3dXaxis($elem, deg) {
    // we use a pseudo object for the animation
    // (starts from `0` to `angle`), you can name it as you want
    $({deg: 0}).animate({deg: deg}, {
        duration: 1270,
        step: function (now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            var oldDegrees = getXRotationDegrees($elem);

            $elem.css({
                transform: 'rotate(' + oldDegrees + 'deg) ' +
                        'rotateX(' + now + 'deg) '
            });
        }
    });
}

var dragStartAt = 0;
function dragStart(e) {

    dragStartAt = (new Date()).getTime();
    setTimeout(function () {
        isDragging = true;
    }, 100);

    if ($(e.target).hasClass("tarot-card")) {
        dragItem = e.target;
        $(dragItem).addClass("dragging");
        active = true;
    }



    if ($(e.target).parent().hasClass("tarot-card")) {
        dragItem = $(e.target).parent()[0];
        $(dragItem).addClass("dragging");
        active = true;
    }

    try {
        xOffset = parseInt(dragItem.style.left);
        yOffset = parseInt(dragItem.style.top);
    } catch (err) {
        xOffset = 0;
        yOffset = 0;
    }
    //console.log(xOffset, yOffset);

    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

}

function dragEnd(e) {
    initialX = 0;
    initialY = 0;
    console.log("not a drag?", (new Date()).getTime() - dragStartAt);

    if ((new Date()).getTime() - dragStartAt > 200) {


        active = false;
        $(dragItem).removeClass("dragging");

        if ($(dragItem).parent().hasClass("tarotTable") && parseInt(dragItem.style.top) > $(".tarotTable").height()) {
            $(dragItem).css("top", "12px");
            if (getRotationDegrees($(dragItem)) > 90 && getRotationDegrees($(dragItem)) <= 270 && !tarotDeck.decks[tarotDeck.currentDeck].alwaysUpright) {
                if (getRotationDegrees($(dragItem)) != 180)
                    animateRotateRandomTiming($(dragItem), 180);
            } else {
                if (getRotationDegrees($(dragItem)) != 0)
                    animateRotateRandomTiming($(dragItem), 0);

            }
            $(".readingTable").prepend($(dragItem));
            $(dragItem).css("top", "12px");
        }

        //   if ($(dragItem).parent().hasClass("readingTable") && parseInt(dragItem.style.top) > $(dragItem).parent().height() + 77) {
        //     $(".readingTable").prepend($(dragItem).parent().remove());
        // }
        setTimeout(function () {
            isDragging = false;
        }, 100);



        tarotDeck.orderByAndResetZindexes();
        dragItem = false;
    } else {
        isDragging = false;

        active = false;
        $(dragItem).removeClass("dragging");
        dragItem = false;
        console.log("not a drag!");
    }
}
var dragEvent = null;
function drag(e) {
    dragEvent = e;
    if (active) {
        e.preventDefault();
    }
    _.debounce(_drag, 270)();
}

function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
            obj.css("-moz-transform") ||
            obj.css("-ms-transform") ||
            obj.css("-o-transform") ||
            obj.css("transform");
    if (matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    } else {
        var angle = 0;
    }
    return (angle < 0) ? angle + 360 : angle;
}

function getXRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
            obj.css("-moz-transform") ||
            obj.css("-ms-transform") ||
            obj.css("-o-transform") ||
            obj.css("transform");
    if (matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[5];
        var b = values[4];
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    } else {
        var angle = 0;
    }
    return (angle < 0) ? angle + 360 : angle;
}

function _drag() {
    var e = dragEvent;
    if (active) {

        //  e.preventDefault();

        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        var maxZIndex = parseInt(dragItem.style.zIndex);
        var hasToIncrement = false;

        $(".tarot-card").each(function (i, e) {
            var z = $(e).css("zIndex");
            //  console.log(z);
            if (z == null) {
                z = 0;
            } else {
                z = parseInt(z);
            }
            if (z >= maxZIndex) {
                //console.log("zindex increment");
                if (z == maxZIndex) {
                    if ($(e).attr("id") != dragItem.id)
                        hasToIncrement = true;

                } else {
                    hasToIncrement = true;
                }
                maxZIndex = z;
            }
        });

        if (hasToIncrement) {
            zIndex = parseInt(maxZIndex) + 1;
        }

        dragItem.style.zIndex = zIndex;

        setTranslate(currentX, currentY, dragItem);
    }
}


function setTranslate(xPos, yPos, el) {
    // el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    el.style.left = xPos + "px";
    el.style.top = yPos + "px";
}


setInterval(function () {
    var maxH = 200;
    $(".readingTable .tarot-card").each(function (i, e) {
        $e = $(e);
        var h = parseInt(e.style.top) + $e.height();
        if (h > maxH) {
            maxH = h;
            $e.parent().css("height", maxH);
        }
    });
}, 250);