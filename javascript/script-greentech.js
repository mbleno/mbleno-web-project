document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  document.getElementById("inputReply").innerText =
    "Your response has been sent";
});