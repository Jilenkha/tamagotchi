let happiness = 50;
let hunger = 50;
let energy = 50;

function feed() {
    hunger = Math.min(hunger + 10, 100);
    happiness = Math.min(happiness + 5, 100);
    energy = Math.max(energy - 5, 0);
    updateStatus();
    applyState('hungry');  // État affamé après avoir nourri
}

function play() {
    happiness = Math.min(happiness + 10, 100);
    hunger = Math.max(hunger - 5, 0);
    energy = Math.max(energy - 10, 0);
    updateStatus();
    applyState('happy');  // État heureux après avoir joué
}

function sleep() {
    energy = Math.min(energy + 20, 100);
    happiness = Math.max(happiness - 5, 0);
    hunger = Math.max(hunger - 10, 0);
    updateStatus();
    applyState('sleepy');  // État fatigué après avoir dormi
}

function updateStatus() {
    document.getElementById('happiness').innerText = happiness;
    document.getElementById('hunger').innerText = hunger;
    document.getElementById('energy').innerText = energy;
}

function applyState(state) {
    const tamagotchi = document.getElementById('tamagotchi');
    tamagotchi.className = state;  // Applique la classe d'état
}
