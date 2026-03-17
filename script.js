const content = document.getElementById("topContent");

function openApp(app) {

  content.classList.remove("active");

  setTimeout(() => {

    if (app === "photo") {
      content.innerHTML = `
        <h2>Photography</h2>
        <p>Add your photo gallery here</p>
      `;
    }

    if (app === "video") {
      content.innerHTML = `
        <h2>Videography</h2>
        <p>Add your videos here</p>
      `;
    }

    if (app === "about") {
      content.innerHTML = `
        <h2>About Me</h2>
        <p>Write your bio here</p>
      `;
    }

    if (app === "contact") {
      content.innerHTML = `
        <h2>Contact</h2>
        <p>Email / socials here</p>
      `;
    }

    content.classList.add("active");

  }, 150);
}

/* Optional: sound effect */
document.querySelectorAll(".app").forEach(btn => {
  btn.addEventListener("click", () => {
    const click = new Audio("click.mp3"); // add your own sound
    click.play();
  });
});
