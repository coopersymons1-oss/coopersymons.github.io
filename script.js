function openApp(app) {
  const content = document.getElementById("content");

  if (app === "photo") {
    content.innerHTML = "Photography Portfolio";
  }

  if (app === "video") {
    content.innerHTML = "Videography Portfolio";
  }

  if (app === "about") {
    content.innerHTML = "About Me";
  }

  if (app === "contact") {
    content.innerHTML = "Contact Info";
  }
}
