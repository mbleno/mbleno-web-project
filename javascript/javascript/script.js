document.addEventListener("DOMContentLoaded", function () 
{
  const button = document.getElementById("submit-btn");
  const reply = document.getElementById("reply-message");
  const stateSelect = document.getElementById("states");

  button.addEventListener("click", function () {
    const selectedState = stateSelect.value;

    if (selectedState) {
      const responses = [
        " is a really great state to visit with many wondeful places to see!",
        " has a great selection of towns and cities to visit!",
        " must be a wonderful state to visit, with unique scenary!",
        " has some really good food locations and sights to visit!",
        " does have amazing stores and hiking locations to explore!"
      ];

      const randomIndex = Math.floor(Math.random() * responses.length);
      const randomReply = responses[randomIndex];

      reply.textContent = selectedState + randomReply;
    } 

    else {
      reply.textContent = "A state was not selected. Please choose a state.";
    }

  });
});