const timerDisplay = document.getElementById('timer-display'); 
const startButton = document.getElementById('start-button'); 
const stopButton = document.getElementById('stop-button'); 
const resetButton = document.getElementById('reset-button'); 
const timeEntries = document.getElementById('time-entries'); 

let startTime = 0; 
let elapsedTime = 0; 
let timerInterval; 

function formatTime(time) { 
  const seconds = Math.floor((time / 1000) % 60); 
  const minutes = Math.floor((time / (1000 * 60)) % 60); 
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24); 

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds; 
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; 
  const formattedHours = hours < 10 ? `0${hours}` : hours; 

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`; 
} 

function startTimer() { 
  startTime = Date.now() - elapsedTime; 
  timerInterval = setInterval(updateTime, 10); 
  startButton.disabled = true; 
  stopButton.disabled = false; 
  resetButton.disabled = false; 
} 

function stopTimer() { 
  clearInterval(timerInterval); 
  elapsedTime = Date.now() - startTime; 
  startButton.disabled = false; 
  stopButton.disabled = true; 
  addTimeEntry(); 
} 

function resetTimer() { 
  clearInterval(timerInterval); 
  elapsedTime = 0; 
  timerDisplay.textContent = '00:00:00'; 
  startButton.disabled = false; 
  stopButton.disabled = true; 
  resetButton.disabled = true; 
} 

function updateTime() { 
  elapsedTime = Date.now() - startTime; 
  timerDisplay.textContent = formatTime(elapsedTime); 
} 

function addTimeEntry() { 
  const entry = document.createElement('li'); 
  entry.textContent = `Time Entry: ${formatTime(elapsedTime)}`; 
  timeEntries.appendChild(entry); 
} 

startButton.addEventListener('click', startTimer); 
stopButton.addEventListener('click', stopTimer); 
resetButton.addEventListener('click', resetTimer);
