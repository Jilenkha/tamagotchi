let happiness = 50;
let hunger = 50;
let energy = 50;

function feed() {
    hunger = Math.min(hunger + 10, 100); // Limite à 100
    happiness = Math.min(happiness + 5, 100);
    energy = Math.max(energy - 5, 0); // Ne peut pas être inférieur à 0
    updateStatus();
}

function play() {
    happiness = Math.min(happiness + 10, 100);
    hunger = Math.max(hunger - 5, 0);
    energy = Math.max(energy - 10, 0);
    updateStatus();
}

function sleep() {
    energy = Math.min(energy + 20, 100);
    happiness = Math.max(happiness - 5, 0);
    hunger = Math.max(hunger - 10, 0);
    updateStatus();
}

function changeSkin(skin) {
    document.getElementById('tamagotchi').src = skin;
}

function updateStatus() {
    document.getElementById('happiness').innerText = happiness;
    document.getElementById('hunger').innerText = hunger;
    document.getElementById('energy').innerText = energy;
}
