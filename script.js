let happiness = 50;
let hunger = 50;
let energy = 50;

function feed() {
    hunger += 10;
    happiness += 5;
    energy -= 5;
    updateStatus();
}

function play() {
    happiness += 10;
    hunger -= 5;
    energy -= 10;
    updateStatus();
}

function sleep() {
    energy += 20;
    happiness -= 5;
    hunger -= 10;
    updateStatus();
}

function updateStatus() {
    console.log(`Happiness: ${happiness}, Hunger: ${hunger}, Energy: ${energy}`);
}

function changeSkin(skin) {
    document.getElementById('tamagotchi').src = skin;
}
