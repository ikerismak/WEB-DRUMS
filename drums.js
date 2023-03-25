window.addEventListener("keydown", myFunction);

function myFunction(e) {
  console.log(e.keyCode);

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) {
    return;
  }

  audio.play();
  audio.currentTime = 0;
  key.classList.add("playing");

  function removeTransition(e) {
    console.log("ejecuta remover");
    console.log(e.propertyName);

    if (e.propertyName !== "transform") return;

    this.classList.remove("playing");
  }

  const keys = document.querySelectorAll(".key");
  console.log(keys);

  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
}
