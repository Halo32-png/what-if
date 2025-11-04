// =====================
// What If Questions
// =====================
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

// =====================
// Color Gradients
// =====================
const colors = [
  ["#0f0c29","#302b63","#24243e"],["#20002c","#cbb4d4","#6a3093"],
  ["#0f2027","#2c5364","#203a43"],["#42275a","#734b6d","#6a0572"],
  ["#8360c3","#2ebf91","#7b2ff7"],["#141E30","#243B55","#3a6186"],
  ["#000046","#1CB5E0","#0f0c29"],["#6a3093","#a044ff","#8360c3"]
];

// =====================
// State Variables
// =====================
let currentIndex = -1;
let clickCount = 0;
let typingSpeed = 25;
let soundMuted = false;
let typingInterval;
let audio = new Audio("mystery.mp3");
audio.volume = 0.3;

// =====================
// Navigation Functions
// =====================
function nextQuestion(){
  clickCount++;
  if(currentIndex < questions.length - 1){
    currentIndex++;
    displayTypedQuestion(questions[currentIndex]);
  }
  if(clickCount >= 30){
    document.getElementById("user-add").style.display = "block";
  }
}

function previousQuestion(){
  if(currentIndex > 0){
    currentIndex--;
    displayTypedQuestion(questions[currentIndex]);
  }
}

// =====================
// Display Typed Question
// =====================
function displayTypedQuestion(text){
  const questionEl = document.getElementById("question");
  const randomC = Math.floor(Math.random() * colors.length);
  const gradient = colors[randomC];
  document.body.style.background = `linear-gradient(120deg, ${gradient.join(',')})`;

  // Stop any previous typing to avoid letter mix-ups
  if(typingInterval) clearInterval(typingInterval);

  questionEl.textContent = "";
  let i = 0;
  typingInterval = setInterval(() => {
    if(i < text.length){
      questionEl.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, typingSpeed);

  playSound();
}

// =====================
// Add User Questions
// =====================
function addQuestion(){
  const input = document.getElementById("newQuestion");
  const text = input.value.trim();
  if(text){
    questions.push(text);
    input.value = "";
    alert("Your What If has been added!");
  }
}

// =====================
// Sound Functions
// =====================
function playSound(){
  if(!soundMuted){
    audio.currentTime = 0;
    audio.play();
  }
}

function toggleMute(){
  soundMuted = !soundMuted;
  document.getElementById("muteBtn").textContent = soundMuted ? "🔇" : "🔊";
}

// =====================
// Star Particle Background
// =====================
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
let stars = [];

for(let i=0; i<150; i++){
  stars.push({
    x: Math.random()*w,
    y: Math.random()*h,
    r: Math.random()*1.5+0.5,
    d: Math.random()*0.5+0.5
  });
}

function animateStars(){
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = "#fff";
  ctx.shadowBlur = 5;
  ctx.shadowColor = "#fff";
  stars.forEach(s=>{
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2,false);
    ctx.fill();

    s.y += s.d;
    if(s.y > h){ s.y = 0; s.x = Math.random()*w; }
  });
  requestAnimationFrame(animateStars);
}

animateStars();
window.addEventListener('resize', () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});
