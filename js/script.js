// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }
// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("myslides");
//     if (n > x.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = x.length }
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     // slideIndex++
//     // if(slideIndex > x.length){slideIndex=1}
//     x[slideIndex - 1].style.display = "block";
//     //setTimeout(showDivs,2000);
// }


// LightSlider

$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});

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