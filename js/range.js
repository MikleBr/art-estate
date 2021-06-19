// ! пожалуйста простите меня за этот скрипт


function digitDivider(str) {
    return String(str).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
}

function changeInput(input, value, x) {
    input.val(digitDivider(value));
    input.css({
        'width': ((input.val().length) * x) + 'px',
    })
}

let priceRange = $('#price-slider');

let priseInput1 = $('#price-input-1');

let priseInput2 = $('#price-input-2');

priseInput1.css({
    'width': ((priseInput1.val().length) * 8) + 'px',
})

priseInput2.css({
    'width': ((priseInput2.val().length) * 8) + 'px',
})


priceRange.ionRangeSlider({
    block: false,
    type: "double",
    hide_min_max: true,
    hide_from_to: true,
    force_edges: true,
    step: 1,
    skin: 'big',
    'min': priseInput1.attr('min-val'),
    'max': priseInput2.attr('max-val'),
});

priceRange.on("change", function () {
    let rangeVal = $(this);

    let from = rangeVal.data("from"); // Начальное значение слайдера
    //console.log(from);
    let to = rangeVal.data("to"); // Конечное значение слайдера
    //console.log(to);

    changeInput(priseInput1, from, 8);
    changeInput(priseInput2, to, 8);
});


//squere panel

let squereRange = $('#squere-slider');

let squereInput1 = $('#squere-input-1');
let squereInput2 = $('#squere-input-2');

squereInput1.css({
    'width': ((squereInput1.val().length) * 10) + 'px',
})

squereInput2.css({
    'width': ((squereInput2.val().length) * 10) + 'px',
})

squereRange.ionRangeSlider({
    block: false,
    type: "double",
    hide_min_max: true,
    hide_from_to: true,
    force_edges: true,
    step: 1,
    skin: 'big',
    'min': squereInput1.attr('min-val'),
    'max': squereInput2.attr('max-val'),
});

squereRange.on("change", function () {
    let rangeVal = $(this);

    let from = rangeVal.data("from"); // Начальное значение слайдера
    //console.log(from);
    let to = rangeVal.data("to"); // Конечное значение слайдера
    //console.log(to);

    changeInput(squereInput1, from, 10);
    changeInput(squereInput2, to, 10);
});

// rooms panel

let roomsRange = $('#rooms-slider');

let roomsInput1 = $('#rooms-input-1');
let roomsInput2 = $('#rooms-input-2');

roomsInput1.css({
    'width': ((roomsInput1.val().length) * 10) + 'px',
})

roomsInput2.css({
    'width': ((roomsInput2.val().length) * 10) + 'px',
})

roomsRange.ionRangeSlider({
    block: false,
    type: "double",
    hide_min_max: true,
    hide_from_to: true,
    force_edges: true,
    step: 1,
    skin: 'big',
    'min': roomsInput1.attr('min-val'),
    'max': roomsInput2.attr('max-val'),
});

roomsRange.on("change", function () {
    let rangeVal = $(this);

    let from = rangeVal.data("from"); // Начальное значение слайдера
    //console.log(from);
    let to = rangeVal.data("to"); // Конечное значение слайдера
    //console.log(to);

    changeInput(roomsInput1, from, 10);
    changeInput(roomsInput2, to, 10);
});