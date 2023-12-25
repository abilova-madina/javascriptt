"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();
        if (!$.trim($('input').val()) == '') {
            let a = b => {
                for (let i = 0; i < b; i++) { $('.textlist').append(`<h2>${b}</h2>`); }
            }
            let v = f => Number(f) ? a(f) : $('.textlist').append(`<h2>${f}</h2>`);
            v($('input').val());
        }
        $('input').val('');
    })



});