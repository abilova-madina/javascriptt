"use strict";
$(document).ready(function () {

    $("button").click(() => {
        let inputValue = $("input").val();
        let numericValue = Number(inputValue);

        let a = (a) => {
            for (let i = 0; i < numericValue; i++) {
                let numericTodos = $("<h2>").text(numericValue);
                $(".list").append(numericTodos);
            }
        }
        $("input").val("");
    });



});