function call() {

    var a = document.getElementById("call_back")

    a.style.right = "-400px"

    var b = document.getElementById("call_back_hidden")

    b.style.right = "40px"

    var c = document.getElementById("contact_fix")

    c.style.right = "-400px"

}

function rClose() {

    var a = document.getElementById("call_back")

    a.style.right = "40px"

    var b = document.getElementById("call_back_hidden")

    b.style.right = "-400px"

    var c = document.getElementById("contact_fix")

    c.style.right = "-160px"

}

function rclick() {

    var input = document.getElementById("input_number")

    input.style.borderBottomColor = "red"

}

function ipt_click() {

    var input = document.getElementById("input_number")

    input.style.borderBottomColor = "black"

}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}