document.addEventListener("DOMContentLoaded", () => {
  const fullPath = window.location.pathname;
  const directoryPath = fullPath.substring(0, fullPath.lastIndexOf('/') + 1);
  import(`${directoryPath}js/main.mjs`);
  const canvasWrapper = document.querySelector(".project-canvas-wrapper");
  const fullscreenButton = document.querySelector("button.fullscreen-button");
  fullscreenButton.onclick = () => canvasWrapper.requestFullscreen();
});