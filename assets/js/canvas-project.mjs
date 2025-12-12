document.addEventListener("DOMContentLoaded", () => {
  let path = window.location.pathname;
  const lastDotIndex = path.lastIndexOf('.');
  const lastSlashIndex = path.lastIndexOf('/');

  if (lastDotIndex !== -1 && lastDotIndex > lastSlashIndex) {
    path = path.substring(0, lastDotIndex);
  }
  import(`${path}/js/main.mjs`);

  const canvasWrapper = document.querySelector(".project-canvas-wrapper");
  const fullscreenButton = document.querySelector("button.fullscreen-button");
  fullscreenButton.onclick = () => canvasWrapper.requestFullscreen();
});