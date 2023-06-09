const chatLog = document.getElementById("chatLog");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

const questions = [
  "How are you feeling today?",
  "Have you been sleeping well?",
  "Do you find enjoyment in activities you used to enjoy?",
  "Have you been experiencing persistent feelings of sadness or hopelessness?",
  "Do you often feel anxious or worried?",
  "Have you noticed any changes in your appetite or weight?",
  "Have you been having difficulty concentrating or making decisions?",
  "Do you frequently experience mood swings or irritability?",
  "Have you had thoughts of self-harm or suicide?",
  "Are you facing any major life stressors currently?"
];

let currentQuestion = 0;
let noCount = 0;

function generateChatBubble(text, isUser) {
  const chatBubble = document.createElement("div");
  chatBubble.classList.add("chat-bubble");
  chatBubble.classList.add(isUser ? "user" : "bot");
  chatBubble.innerText = text;
  chatLog.appendChild(chatBubble);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function askQuestion() {
  generateChatBubble(questions[currentQuestion], false);
  currentQuestion++;
}

function processUserInput() {
  const answer = userInput.value;
  generateChatBubble(answer, true);

  if (answer.toLowerCase() === "no") {
    noCount++;
  }

  if (currentQuestion < questions.length) {
    askQuestion();
  } else {
    if (noCount > 5) {
      alert("It is recommended that you consult a therapist.");
    } else {
      generateChatBubble("Thank you for sharing. Take care!", false);
    }
    userInput.disabled = true;
    sendButton.disabled = true;
  }

  userInput.value = "";
}

askQuestion();
sendButton.addEventListener("click", processUserInput);
userInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    processUserInput();
  }
});
