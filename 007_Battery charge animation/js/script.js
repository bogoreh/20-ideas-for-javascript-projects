function chargebattery() {
    var a;
    a = document.getElementById("animation");
    a.innerHTML = "&#xf244;";

    setTimeout(function () {
        a.innerHTML = "&#xf243;";
    }, 800);

    setTimeout(function () {
        a.innerHTML = "&#xf242;";
    }, 1600);

    setTimeout(function () {
        a.innerHTML = "&#xf241;";
    }, 2400);

    setTimeout(function () {
        a.innerHTML = "&#xf240;";
    }, 3200);

}
chargebattery();
setInterval(chargetbattery, 5000);