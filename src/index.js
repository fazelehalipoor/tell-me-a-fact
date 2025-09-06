function generateFact(event) {
  event.preventDefault();

  new Typewriter("#generated-fact", {
    strings: "Hello world",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let factFormElement = document.querySelector("#fact-generator-form");
factFormElement.addEventListener("submit", generateFact);
