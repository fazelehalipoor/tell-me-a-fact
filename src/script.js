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

  let factElement = document.querySelector("#topic-input");
  let apiKey = "21b4c3ea35c50f8b3156odtae63b894e";
  let prompt = "generate a fun fact";
  let context = `imagine You are a precise and knowledgeable individual and you want to tell the least heard and unexpected facts when i write:${factElement.value}.answer it in less then 7 line's and two languages,English first,then in persian.Keep the two languages CLEARLY separated in different LINE'S.Do not add anything else.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayFact);
}

let factFormElement = document.querySelector("#fact-generator-form");
factFormElement.addEventListener("submit", generateFact);
