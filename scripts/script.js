let currentImageIndex = 0;
let images = [];

document.addEventListener("DOMContentLoaded", function () {
  // Inicijalizirajte niz s URL-ovima slika
  images = Array.from(document.querySelectorAll(".image-container img")).map(
    (img) => img.src
  );

  // Dodajte event listenere na sve image-container elemente
  const imageContainers = document.querySelectorAll(".image-container");
  imageContainers.forEach((container, index) => {
    container.addEventListener("click", function (event) {
      event.stopPropagation(); // Zaustavi event bubbling
      currentImageIndex = index;
      openModal();
    });
  });

  // Dodajte event listenere na tipke unutar moda
  document
    .getElementById("prevBtn")
    .addEventListener("click", function (event) {
      event.stopPropagation();
      changeImage(-1);
    });

  document
    .getElementById("nextBtn")
    .addEventListener("click", function (event) {
      event.stopPropagation();
      changeImage(1);
    });
});

function openModal() {
  // Postavljanje slike u modal
  document.getElementById("modal-img").src = images[currentImageIndex];

  // Prikazivanje modala
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  // Sakrivanje modala
  document.getElementById("modal").style.display = "none";
}

function changeImage(direction) {
  // Promjena indeksa slike prema smjeru (1 za sljedeću, -1 za prethodnu)
  currentImageIndex += direction;

  // Provjera granica indeksa
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  // Prikazivanje nove slike
  document.getElementById("modal-img").src = images[currentImageIndex];
}
