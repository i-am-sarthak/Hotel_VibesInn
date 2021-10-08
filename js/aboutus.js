window.onscroll = function () { scrollFunction() };
// Scrollable Nav Bar Shrink

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "2px 10px";
        document.getElementById("logo-img").style.fontSize = "25px";
        document.getElementById("navbar").style.background = "#efefef"
        document.getElementById("tabs").style.top = "80px"
    } else {
        document.getElementById("navbar").style.padding = "10px 10px";
        document.getElementById("logo-img").style.fontSize = "45px";
        document.getElementById("navbar").style.background = "#efefef00"
        document.getElementById("tabs").style.top = "100px"
    }
}