function getRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
  }
  function generateRandomFlowerColors() {
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => {
      const leafs = flower.querySelectorAll('.flower__leaf');
      leafs.forEach(leaf => {
        leaf.classList.add('random-color');
      });
      const lights = flower.querySelectorAll('.flower__light');
      lights.forEach(light => {
        light.classList.add('random-color');
      });
    });
  }
  window.addEventListener('load', () => {
    generateRandomFlowerColors();
  });
  document.documentElement.style.setProperty('--random-color', getRandomColor());
 