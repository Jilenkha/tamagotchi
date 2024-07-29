let happiness = 50;
let hunger = 50;
let energy = 50;

function feed() {
    hunger = Math.min(hunger + 10, 100);
    happiness = Math.min(happiness + 5, 100);
    energy = Math.max(energy - 5, 0);
    updateStatus();
    applyAnimation('happy');
}

function play() {
    happiness = Math.min(happiness + 10, 100);
    hunger = Math.max(hunger - 5, 0);
    energy = Math.max(energy - 10, 0);
    updateStatus();
    applyAnimation('hungry');
}

function sleep() {
    energy = Math.min(energy + 20, 100);
    happiness = Math.max(happiness - 5, 0);
    hunger = Math.max(hunger - 10, 0);
    updateStatus();
    applyAnimation('sleepy');
}

function updateStatus() {
    document.getElementById('happiness').innerText = happiness;
    document.getElementById('hunger').innerText = hunger;
    document.getElementById('energy').innerText = energy;
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
    });
}
