// this code should be executed when the client receives a message from the server.
var overlay = document.querySelector(".flash");
overlay.style.visibility = "visible";

window.setTimeout(function () {
    overlay.style.visibility = "hidden";
}, 2000);