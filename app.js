// INPUTS
const nonsenseLocInput= document.getElementById("non-sense-loc-input");
const veggiesInput = document.getElementById("veggies-input");
const woodsInput = document.getElementById("woods-input");
const firstNameInput = document.getElementById("first-name-input");
const middleNameInput = document.getElementById("middle-name-input");
const lastNameInput = document.getElementById("last-name-input");
const furnitureInput = document.getElementById("furniture-input");
const fireInput = document.getElementById("candle-input");
const jugInput = document.getElementById("jug-input");
const disappearPoem = document.getElementById('disappear');

// BUTTONS
const button = document.getElementById("button");
const ufoBtn = document.getElementById("ufo");

// SPANS
const firstLocation = document.getElementById("non-sense-loc");
const vegetables = document.getElementsByClassName("vegetables");
const woods = document.getElementsByClassName("sticks");
const firstName = document.getElementsByClassName("first-name");
const middleName = document.getElementsByClassName("middle-name");
const lastName = document.getElementsByClassName("last-name");
const chairs = document.getElementById("furniture");
const candle = document.getElementById("fire");
const drinkingVessel = document.getElementById("drinking-vessel");

// ADD EVENT LISTENERS
            //submit button
button.addEventListener('click', () => {
    for (let x of vegetables){
        x.textContent = veggiesInput.value;
    }

    for (let z of woods){
        z.textContent = woodsInput.value;
    }

    for (let z of firstName){
        z.textContent = firstNameInput.value;
    }

    for (let z of middleName){
        z.textContent = middleNameInput.value;
    }

    for (let z of lastName){
        z.textContent = lastNameInput.value;
    }

    replaceWords(firstLocation, nonsenseLocInput);
    replaceWords(chairs, furnitureInput);
    replaceWords(candle, fireInput);
    replaceWords(drinkingVessel, jugInput);

    disappearPoem.classList.add('show-poem');
});

                // reset button

    ufoBtn.addEventListener('click', () => {
        disappearPoem.classList.remove('show-poem');
        blankInput(nonsenseLocInput);
        blankInput(veggiesInput);
        blankInput(woodsInput);
        blankInput(firstNameInput);
        blankInput(middleNameInput);
        blankInput(lastNameInput);
        blankInput(furnitureInput);
        blankInput(fireInput);
        blankInput(jugInput);
    });

//FUNCTION REPLACE WORDS
    function replaceWords(span, input){
    span.textContent = input.value;
    }


//FUNCTIONS TO CLEAN INPUTS

function blankInput(inputss){
return inputss.value = "";

}
