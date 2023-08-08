let slideIndex = 0;
showSlides();

// Carrusel
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000); //Cambia cada X segundos
}

// Botones
function openForm() {
  document.getElementById("ingreso").style.display = "block";
}

function closeForm() {
  document.getElementById("ingreso").style.display = "none";
}

function openForm1() {
  document.getElementById("registro").style.display = "block";
}

function closeForm1() {
  document.getElementById("registro").style.display = "none";
}