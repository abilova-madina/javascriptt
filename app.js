"use strict";
$(document).ready(function () {


$('.btn').click(function (e) { 
    e.preventDefault();
    
    let a = (a) => {
        for (let i = 1; i <=a; i++) {
            $(".col-md-12").append(`<h1> ${i}</h1`);
        }
    }
    a($('input').val())
});



});