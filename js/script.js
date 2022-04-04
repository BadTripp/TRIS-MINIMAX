let displayH = $(window).height();
let displayW = $(window).width();

let numeroMassimo = 32;
let i = 0;

$(document).ready(function () {
  id = setInterval(xAnim, 500);

  function xAnim() {
    let randH = Math.random() * displayH + 1;
    let randW = Math.random() * displayW + 1;

    if (i >= numeroMassimo) clearInterval(id);
    else i++;

    $("#imgX")
      .clone()
      .css({
        position: "absolute",
        left: randW - 50,
        top: randH - 50,
        visibility: "visible",
        zindex: -1,
      })
      .appendTo("body");
  }
});
