let displayH = $(window).height();
let displayW = $(window).width();
let numeroMassimo = 32;
let i = 0;

$(document).ready(function () {
    id = setInterval(xAnim, 500);
    function xAnim() {
        if(i >= numeroMassimo){
            clearInterval(id);
        }
        else {
            i++
        }

        

        let randH = Math.random() * displayH + 1;
        let randW = Math.random() * displayW + 1;
        $("#imgX").clone().css({ position: "absolute", left: randW-50, top: randH-50, visibility: "visible" }).appendTo("body");
    }
});