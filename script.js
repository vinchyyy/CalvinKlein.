document.addEventListener("DOMContentLoaded", function() {

    const bannerImages = [
  
      "banner-principal-jeans.png",
  
      "banner-principal-ilv.png",
  
      "banner-principal-jacob.png"
  
    ];
  
    let currentIndex = 0;
  
  
  
    const bannerContainer = document.getElementById("banner-container");
  
    const bannerImagesElement = document.getElementById("banner-images");
  
  
  
    function changeImage() {
  
      currentIndex = (currentIndex + 1) % bannerImages.length;
  
      bannerImagesElement.style.transform = `translateX(-${currentIndex * 100}%)`;
  
    }
  
  
  
    setInterval(changeImage, 3000);
  
  });

  const carousel = document.querySelector('.carousel');
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

carousel.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = e.clientX - carousel.offsetLeft;
  prevTranslate = currentTranslate;

  carousel.style.transition = 'none';
  document.body.style.userSelect = 'none';
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const currentPosition = e.clientX - carousel.offsetLeft;
  currentTranslate = prevTranslate + currentPosition - startPosition;

  carousel.style.transform = `translateX(${currentTranslate}px)`;
});

carousel.addEventListener('mouseup', () => {
  isDragging = false;

  const threshold = carousel.offsetWidth / 4;

  if (Math.abs(currentTranslate - prevTranslate) > threshold) {
    if (currentTranslate > prevTranslate) {
      carousel.style.transition = 'transform 0.5s ease-in-out';
      currentTranslate = prevTranslate + carousel.offsetWidth;
    } else {
      carousel.style.transition = 'transform 0.5s ease-in-out';
      currentTranslate = prevTranslate - carousel.offsetWidth;
    }
  } else {
    carousel.style.transition = 'transform 0.3s ease-in-out';
    currentTranslate = prevTranslate;
  }

  carousel.style.transform = `translateX(${currentTranslate}px)`;
  document.body.style.userSelect = 'auto';
});

carousel.addEventListener('mouseleave', () => {
  if (isDragging) {
    isDragging = false;
    carousel.style.transition = 'transform 0.3s ease-in-out';
    currentTranslate = prevTranslate;
    carousel.style.transform = `translateX(${currentTranslate}px)`;
    document.body.style.userSelect = 'auto';
  }
});

const bolsasCarousel = document.querySelector('#bolsas-container .carousel');
let isDraggingBolsas = false;
let startPositionBolsas = 0;
let currentTranslateBolsas = 0;
let prevTranslateBolsas = 0;

bolsasCarousel.addEventListener('mousedown', (e) => {
  isDraggingBolsas = true;
  startPositionBolsas = e.clientX - bolsasCarousel.offsetLeft;
  prevTranslateBolsas = currentTranslateBolsas;

  bolsasCarousel.style.transition = 'none';
  document.body.style.userSelect = 'none';
});

bolsasCarousel.addEventListener('mousemove', (e) => {
  if (!isDraggingBolsas) return;

  const currentPositionBolsas = e.clientX - bolsasCarousel.offsetLeft;
  currentTranslateBolsas = prevTranslateBolsas + currentPositionBolsas - startPositionBolsas;

  bolsasCarousel.style.transform = `translateX(${currentTranslateBolsas}px)`;
});

bolsasCarousel.addEventListener('mouseup', () => {
  isDraggingBolsas = false;

  const thresholdBolsas = bolsasCarousel.offsetWidth / 4;

  if (Math.abs(currentTranslateBolsas - prevTranslateBolsas) > thresholdBolsas) {
    if (currentTranslateBolsas > prevTranslateBolsas) {
      bolsasCarousel.style.transition = 'transform 0.5s ease-in-out';
      currentTranslateBolsas = prevTranslateBolsas + bolsasCarousel.offsetWidth;
    } else {
      bolsasCarousel.style.transition = 'transform 0.5s ease-in-out';
      currentTranslateBolsas = prevTranslateBolsas - bolsasCarousel.offsetWidth;
    }
  } else {
    bolsasCarousel.style.transition = 'transform 0.3s ease-in-out';
    currentTranslateBolsas = prevTranslateBolsas;
  }

  bolsasCarousel.style.transform = `translateX(${currentTranslateBolsas}px)`;
  document.body.style.userSelect = 'auto';
});

bolsasCarousel.addEventListener('mouseleave', () => {
  if (isDraggingBolsas) {
    isDraggingBolsas = false;
    bolsasCarousel.style.transition = 'transform 0.3s ease-in-out';
    currentTranslateBolsas = prevTranslateBolsas;
    bolsasCarousel.style.transform = `translateX(${currentTranslateBolsas}px)`;
    document.body.style.userSelect = 'auto';
  }
});



