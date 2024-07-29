let happiness = 50;
let hunger = 50;
let energy = 50;
const happinessDecay = 0.1;
const hungerDecay = 0.2;
const energyDecay = 0.3;

function loadGame() {
    happiness = parseFloat(localStorage.getItem('happiness')) || 50;
    hunger = parseFloat(localStorage.getItem('hunger')) || 50;
    energy = parseFloat(localStorage.getItem('energy')) || 50;
    updateStatus();
    startTimer();
}

function saveGame() {
    localStorage.setItem('happiness', happiness);
    localStorage.setItem('hunger', hunger);
    localStorage.setItem('energy', energy);
}

function feed() {
    hunger = Math.min(hunger + 10, 100);
    happiness = Math.min(happiness + 5, 100);
    energy = Math.max(energy - 5, 0);
    updateStatus();
    applyAnimation('happy');
    saveGame();
}

function play() {
    happiness = Math.min(happiness + 10, 100);
    hunger = Math.max(hunger - 5, 0);
    energy = Math.max(energy - 10, 0);
    updateStatus();
    applyAnimation('hungry');
    saveGame();
}

function sleep() {
    energy = Math.min(energy + 20, 100);
    happiness = Math.max(happiness - 5, 0);
    hunger = Math.max(hunger - 10, 0);
    updateStatus();
    applyAnimation('sleepy');
    saveGame();
}

function updateStatus() {
    document.getElementById('happiness').innerText = happiness.toFixed(1);
    document.getElementById('hunger').innerText = hunger.toFixed(1);
    document.getElementById('energy').innerText = energy.toFixed(1);
}

function applyAnimation(action) {
    const overlay = document.querySelector('.status-overlay');
    
    overlay.style.display = 'block';

    switch(action) {
        case 'happy':
            overlay.style.animation = 'happyAnimation 1s ease-in-out';
            break;
        case 'hungry':
            overlay.style.animation = 'hungryAnimation 1s ease-in-out';
            break;
        case 'sleepy':
            overlay.style.animation = 'sleepyAnimation 1s ease-in-out';
            break;
    }

    overlay.addEventListener('animationend', () => {
        overlay.style.display = 'none';
        overlay.style.animation = '';
    }, { once: true });
}

function startTimer() {
    setInterval(() => {
        happiness = Math.max(happiness - happinessDecay, 0);
        hunger = Math.max(hunger - hungerDecay, 0);
        energy = Math.max(energy - energyDecay, 0);
        updateStatus();
        saveGame();
    }, 1000);
}

loadGame();
