// Call the welcomeMessage function when the script loads
welcomeMessage()

function welcomeMessage() {
let userResponse = prompt("What is your name:");
if (userResponse == null || userResponse == "") {
    userResponse = "Guest";}
document.getElementById("welcome-message").innerText = "Welcome, " + userResponse + " to Zahra Website!";}