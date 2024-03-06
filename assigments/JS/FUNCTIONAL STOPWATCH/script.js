let startTime;
let interval;
let running = false;
let lapTimes = [];
let pausedTime = 0;

function startStop() {
  let startStopButton = document.getElementById('startStopButton');
  let lapButton = document.getElementById('lapButton');

  if (!running) {
    startStopButton.textContent = 'Stop';
    startStopButton.style.backgroundColor = 'red';
    lapButton.disabled = false;
    lapButton.textContent = 'Lap';
    startTime = Date.now() - pausedTime;
    interval = setInterval(updateTime, 10);
    running = true;
  } else {
    startStopButton.textContent = 'Start';
    startStopButton.style.backgroundColor = 'green';
    lapButton.textContent = 'Reset';
    clearInterval(interval);
    running = false;
    pausedTime = Date.now() - startTime; 
  }
}

function lap() {
  if (running) {
    let lapTime = Date.now() - startTime;
    lapTimes.push(lapTime);
    displayLaps();
  } else {
    resetTimer();
  }
}

function resetTimer() {
  clearInterval(interval);
  let timeDisplay = document.getElementById('time');
  timeDisplay.textContent = '00:00,00';
  lapTimes = [];
  displayLaps();
  document.getElementById('startStopButton').textContent = 'Start';
  document.getElementById('startStopButton').style.backgroundColor = 'green';
  document.getElementById('lapButton').textContent = 'Lap';
  document.getElementById('lapButton').disabled = true;
  pausedTime = 0; 
}

function updateTime() {
  let timeDisplay = document.getElementById('time');
  let currentTime = Date.now();
  let elapsedTime = currentTime - startTime;
  timeDisplay.textContent = formatTime(elapsedTime);
}

function formatTime(milliseconds) {
  let totalSeconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let millisecondsFormatted = Math.floor((milliseconds % 1000) / 10);
  return `${padTime(minutes)}:${padTime(seconds)},${padTime(millisecondsFormatted)}`;
}

function padTime(value) {
  return value.toString().padStart(2, '0');
}

function displayLaps() {
  let lapBody = document.getElementById('lapBody');
  lapBody.innerHTML = '';
  let totalTime = 0;
  for (let i = 0; i < lapTimes.length; i++) {
    let lapRow = document.createElement('tr');
    let lapNumberCell = document.createElement('td');
    lapNumberCell.textContent = 'Lap ' + (i + 1); 
    lapRow.appendChild(lapNumberCell);
    let splitTimeCell = document.createElement('td');
    splitTimeCell.textContent = formatTime(lapTimes[i]);
    lapRow.appendChild(splitTimeCell);
    totalTime += lapTimes[i];
    let totalTimeCell = document.createElement('td');
    totalTimeCell.textContent = formatTime(totalTime);
    lapRow.appendChild(totalTimeCell);
    lapBody.appendChild(lapRow);
  }
}
