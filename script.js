const chatLog = document.getElementById("chatLog");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

const questions = [
  "Do you often feel a sense of hopelessness or worthlessness?",
  "Do you experience frequent changes in your appetite or weight?",
  "Do you struggle with constant fatigue or lack of energy?",
  "Do you have difficulty concentrating or making decisions?",
  "Do you frequently experience feelings of sadness or tearfulness?",
  "Do you find it challenging to enjoy activities or hobbies that used to bring you pleasure?",
  "Do you often feel anxious, restless, or on edge?",
  "Do you have trouble falling asleep, staying asleep, or experiencing restful sleep?",
  "Do you have recurrent thoughts of death or suicidal ideation?",
  "Do you feel a sense of isolation or disconnection from others?"
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

  if (answer.toLowerCase() === "yes") {
    noCount++;
  }

  if (currentQuestion < questions.length) {
    askQuestion();
  } else {
    if (noCount > 5) {
      alert("It is recommended that you consult a therapist.");
    } else {
      generateChatBubble("Thank you for sharing. It appears that you are mentally fine! Remember to cherish each moment, find joy in the little things, and nurture your mental well-being. You deserve to lead a fulfilling and happy life. Stay positive and embrace the beauty that surrounds you. Wishing you continued happiness and contentment on your journey!", false);
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
