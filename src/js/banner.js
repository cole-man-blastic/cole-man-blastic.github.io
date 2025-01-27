function showBanner(message) {
  const text = document.createElement("div")
  text.append(message);

  const x = document.createElement("button");
  x.append("\u2715");

  const banner = document.createElement("div");
  banner.appendChild(text);
  banner.appendChild(x);

  document.querySelector("header").appendChild(banner);

  x.onclick = () => {
    document.querySelector("header").removeChild(banner);
  }
}

addEventListener("load", () => {
  showBanner("This site is still under construction!");
});
