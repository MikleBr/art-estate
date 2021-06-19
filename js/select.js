let select = $('.select');

let selectBody = $('.select__body');

select.on('click', function(){
    selectBody.toggleClass('select_is-active');
})