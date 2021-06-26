const nonsenseLocation = document.getElementById("non-sense-loc-input");
const veggiesInput = document.getElementById("veggies-input");
const woodsInput = document.getElementById("woods-input");
const firstNameInput = document.getElementById("first-name-input");
const middleNameInput = document.getElementById("middle-name-input");
const lastNameInput = document.getElementById("last-name-input");
const furnitureInput = document.getElementById("furniture-input");
const fireInput = document.getElementById("fire");
const jugInput = document.getElementById("jug-input");
const button = document.getElementById("button");

// spans
const firstLocation = document.getElementById("non-sense-loc");
const pumpkin = document.getElementById("vegetables");
const woods = document.getElementById("sticks");
const firstName = document.getElementById("first-name");
const middleName = document.getElementById("middle-name");
const lastName = document.getElementById("last-name");
const chairs = document.getElementById("furniture");
const candle = document.getElementById("fire");
const drinkingVessel = document.getElementById("drinking-vessel");

// ADD EVENT LISTENERS
button.addEventListener('click', ()=> {
    firstLocation.textContent = nonsenseLocation.value;
    pumpkin.textContent = veggiesInput.value;
    woods.textContent = woodsInput.value;

    
    
});



