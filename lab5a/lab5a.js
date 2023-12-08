let currentIndex = 0;
const sliderItemNodes = document.querySelectorAll('.slider-item');
const intervalDuration = 2000;
let intervalId;

const updateSlider = () => {
  const selectedNode = document.querySelector('.selected');
  selectedNode.classList.remove('selected');
  sliderItemNodes[currentIndex].classList.add('selected');
};

const clickLeft = () => {
  currentIndex = (currentIndex - 1 + sliderItemNodes.length) % sliderItemNodes.length;
  updateSlider();
};

const clickRight = () => {
  currentIndex = (currentIndex + 1) % sliderItemNodes.length;
  updateSlider();
};

const startAutomaticSlideshow = () => {
  intervalId = setInterval(clickRight, intervalDuration);
};

const stopAutomaticSlideshow = () => {
  clearInterval(intervalId);
};

startAutomaticSlideshow();

document.getElementById('left').addEventListener('click', () => {
  stopAutomaticSlideshow();
  clickLeft();
});

document.getElementById('right').addEventListener('click', () => {
  stopAutomaticSlideshow();
  clickRight();
});

  

