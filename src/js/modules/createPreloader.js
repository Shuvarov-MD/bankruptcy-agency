function createPreloader() {
  const preload = document.createElement('div');

  preload.innerHTML = `
    <div class='sk-bounce-1 sk-child'></div>
    <div class='sk-bounce-2 sk-child'></div>
    <div class='sk-bounce-3 sk-child'></div>
  `;

  return preload;
}
