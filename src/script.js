function displayFact(response) {
  console.log(response.data.answer);

  new Typewriter("#generated-fact", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    loop: false,
  });
}
function generateFact(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#topic-input");
  let apiKey = "21b4c3ea35c50f8b3156odtae63b894e";
  let prompt = `User instructions: Generate an interesting fact about ${instructionsInput.value}`;
  let context =
    "You are a precise and knowledgeable persone who wants to tell the least heard and unexpected facts. Your mission is to generate a fact in basic HTML and separate each line with a <br />.write in two languages,English first,then in persian.Keep the two languages CLEARLY separated.Do NOT add anything else like html but the fact.Make sure to follow the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let factElement = document.querySelector("#generated-fact");
  factElement.classList.remove("hidden");
  factElement.innerHTML = `<div class="generating">⏳ Generating a Fact about ${instructionsInput.value}</div>`;
  axios.get(apiUrl).then(displayFact);
}

let factFormElement = document.querySelector("#fact-generator-form");
factFormElement.addEventListener("submit", generateFact);
