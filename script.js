let happiness = 50;
let hunger = 50;
let energy = 50;

function feed() {
    hunger = Math.min(hunger + 10, 100);
    happiness = Math.min(happiness + 5, 100);
    energy = Math.max(energy - 5, 0);
    updateStatus();
    animate('feed');
}

function play() {
    happiness = Math.min(happiness + 10, 100);
    hunger = Math.max(hunger - 5, 0);
    energy = Math.max(energy - 10, 0);
    updateStatus();
    animate('play');
}

function sleep() {
    energy = Math.min(energy + 20, 100);
    happiness = Math.max(happiness - 5, 0);
    hunger = Math.max(hunger - 10, 0);
    updateStatus();
    animate('sleep');
}

// Supprimer ou commenter cette fonction
// function changeSkin(skin) {
//     document.getElementById('tamagotchi').src = skin;
// }

function updateStatus() {
    document.getElementById('happiness').innerText = happiness;
    document.getElementById('hunger').innerText = hunger;
    document.getElementById('energy').innerText = energy;
}

function animate(action) {
    const tamagotchi = document.getElementById('tamagotchi');
    tamagotchi.classList.add(action);
    setTimeout(() => {
        tamagotchi.classList.remove(action);
    }, 500); // La durée de l'animation
}
