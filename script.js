// 30 preloaded What If questions
let questions = [
  "What if the universe is the eye of Bill Cipher?",
  "What if the pyramids were built by aliens?",
  "What if dreams are windows to alternate realities?",
  "What if time doesn’t exist — only memory?",
  "What if every star in the sky is a living being watching us?",
  "What if we’re all NPCs in a simulation?",
  "What if music is how the universe communicates?",
  "What if every déjà vu is a glitch in reality?",
  "What if shadows are alive in another dimension?",
  "What if every thought you have creates another universe?",
  "What if every black hole is a doorway to another world?",
  "What if gravity is just a suggestion?",
  "What if mirrors are portals?",
  "What if our memories are borrowed?",
  "What if the moon is a sentient being?",
  "What if time travelers are among us?",
  "What if colors have consciousness?",
  "What if sound shapes reality?",
  "What if we can live forever in dreams?",
  "What if each atom holds a universe?",
  "What if lightning is the universe communicating?",
  "What if numbers are alive?",
  "What if shadows are parallel selves?",
  "What if we exist only in imagination?",
  "What if life is a video game?",
  "What if stars are watching us?",
  "What if rain contains forgotten memories?",
  "What if thoughts are physical objects?",
  "What if the ocean remembers everything?",
  "What if reality is a shared dream?"
];

// 30+ Galaxy-inspired gradient colors
const colors = [
  ["#0f0c29","#302b63","#24243e"],
  ["#20002c","#cbb4d4","#6a3093"],
  ["#0f2027","#2c5364","#203a43"],
  ["#42275a","#734b6d","#6a0572"],
  ["#8360c3","#2ebf91","#7b2ff7"],
  ["#141E30","#243B55","#3a6186"],
  ["#000046","#1CB5E0","#0f0c29"],
  ["#6a3093","#a044ff","#8360c3"],
  ["#0f2027","#203a43","#2c5364"],
  ["#1f1c2c","#928dab","#00d4ff"]
];

let currentIndex = -1; // track current question
let clickCount = 0;

// Show next question
function nextQuestion(){
  clickCount++;
  if(currentIndex < questions.length - 1){
    currentIndex++;
    displayQuestion(currentIndex);
  }
  
  if(clickCount >= 30){
    document.getElementById("user-add").style.display = "block";
  }
}

// Show previous question
function previousQuestion(){
  if(currentIndex > 0){
    currentIndex--;
    displayQuestion(currentIndex);
  }
}

// Display question with background
function displayQuestion(index){
  const questionEl = document.getElementById("question");
  const randomC = Math.floor(Math.random() * colors.length);
  const gradient = colors[randomC];

  questionEl.style.opacity = 0;

  setTimeout(() => {
    questionEl.textContent = questions[index];
    document.body.style.background = `linear-gradient(120deg, ${gradient.join(',')})`;
    questionEl.style.opacity = 1;
    playSound();
  }, 400);
}

// Add user question
function addQuestion(){
  const input = document.getElementById("newQuestion");
  const text = input.value.trim();
  if(text){
    questions.push(text);
    input.value = "";
    alert("Your What If has been added!");
  }
}

// Play mysterious sound
function playSound(){
  const sound = new Audio("mystery.mp3");
  sound.volume = 0.3;
  sound.play();
}
