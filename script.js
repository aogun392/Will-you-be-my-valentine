document.getElementById("yesBtn").addEventListener("click", function() {
    // Existing code for playing sound and alert
    var correct = document.getElementById("correctSound");
    correct.play();
    alert("Yippee!");

    // Code to remove shake class from header
    var header = document.querySelector("h1");
    header.classList.remove("shake");
    
     // Hide the 'No' response text
    document.getElementById("noResponse").style.display = "none";

    // Show the 'Yes' response text
    document.getElementById("yesResponse").style.display = "block";
    
    // Display the question section
    document.getElementById("questionSection").style.display = "block";
    
});
document.getElementById("noBtn").addEventListener("click", function() {
  // Play the buzzer sound
    var buzzer = document.getElementById("buzzerSound");
    buzzer.play();
    
     // Add enlarged and shake class to the header
    var header = document.querySelector("h1");
    header.classList.add("enlarged", "shake");
    alert("Try the FUCK again.");
    
    // Hide the 'Yes' response text
    document.getElementById("yesResponse").style.display = "none";

    // Show the 'No' response text
    document.getElementById("noResponse").style.display = "block";

});

document.getElementById("submitAnswer").addEventListener("click", function() {
    var userInput = document.getElementById("songNameInput").value;

    // Array of accepted answers
    var acceptedAnswers = ["sos", "s.o.s", "SOS", "S.O.S", "S.o.s"];

    // Check if the user input is one of the accepted answers
    if (acceptedAnswers.includes(userInput)) {
        alert("Good Job Stink 🤭");
        // You can add more code here to handle correct answer
        
    // Display the gift card code textbox
        document.getElementById("giftCardSection").style.display = "block";
        document.getElementById("giftCardCode").value = "NAAWKLBLNNM75374";

    } else {
        alert("TRY AGAIN.");
        // You can add more code here to handle incorrect answer
    }
});