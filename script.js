let happiness = 50;
let hunger = 50;
let energy = 50;

function feed() {
    hunger = Math.min(hunger + 10, 100);
    happiness = Math.min(happiness + 5, 100);
    energy = Math.max(energy - 5, 0);
    updateStatus();
    applyAnimation('feed');  // Appliquer l'animation de nourrir
}

function play() {
    happiness = Math.min(happiness + 10, 100);
    hunger = Math.max(hunger - 5, 0);
    energy = Math.max(energy - 10, 0);
    updateStatus();
    applyAnimation('play');  // Appliquer l'animation de jouer
}

function sleep() {
    energy = Math.min(energy + 20, 100);
    happiness = Math.max(happiness - 5, 0);
    hunger = Math.max(hunger - 10, 0);
    updateStatus();
    applyAnimation('sleep');  // Appliquer l'animation de dormir
}

function updateStatus() {
    document.getElementById('happiness').innerText = happiness;
    document.getElementById('hunger').innerText = hunger;
    document.getElementById('energy').innerText = energy;
}

function applyAnimation(action) {
    const tamagotchi = document.getElementById('tamagotchi');
    tamagotchi.className = ''; // Réinitialiser les classes
    void tamagotchi.offsetWidth; // Trigger reflow
    tamagotchi.classList.add(action);  // Ajouter la classe d'animation
}
