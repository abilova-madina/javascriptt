"use strict";
$(document).ready(function () {

    $("button").click(() => {
        let inputValue = $("input").val();
        let numericValue = Number(inputValue);

        if (inputValue == "") {
            console.log('Zəhmət olmasa boş qoymayın!');
        } else {
            if (!numericValue) {
                $(".list").append($("<h2>").text(inputValue));
            }   else{
                if (numericValue) {
                    appendNumericTodos(numericValue);
                }
            }
        }

        $("input").val("");
        
        function appendNumericTodos (value) {
            for (let i = 0; i< vvalue; i++) {
                let numericTodos = $("<h2>").text(value);
                $(".list").append(numericTodos) ;
            }
        }
    });



});