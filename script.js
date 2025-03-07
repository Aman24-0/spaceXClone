let switchBut = document.querySelector(".menuButt")

switchBut.addEventListener('click', function() {
    // document.querySelector(".nav").style.display = "flex";
    document.querySelector(".nav").classList.toggle("active");
    document.querySelector("ul").classList.toggle("active");

})