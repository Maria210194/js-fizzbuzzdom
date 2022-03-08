let m;
const container = document.querySelector("#container");

/* VERSIONE ELEMENT

for (let m = 1; m <= 100; m++) {

    if (m % 3 === 0 && m % 5 === 0) {
        const element = `<div class="square FizzBuzz">FizzBuzz</div>`;
        container.innerHTML += element;
    }

    else if (m % 3 === 0) {
        const element = `<div class="square Fizz">Fizz</div>`;
        container.innerHTML += element;
    }

    else if (m % 5 === 0) {
        const element = `<div class="square Buzz">Buzz</div>`;
        container.innerHTML += element;
    }

    else {
        const element = `<div class="square">${m}</div>`;
        container.innerHTML += element;
    }
}

*/

// VERSIONE CON ELEMENT PERSONALIZZATO (costante element non ripetuta)

for (let m = 1; m <= 100; m++) {

    if (m % 3 === 0 && m % 5 === 0) {
        const fizzBuzz = `<div class="square FizzBuzz">FizzBuzz</div>`;
        container.innerHTML += fizzBuzz;
    }

    else if (m % 3 === 0) {
        const fizz = `<div class="square Fizz">Fizz</div>`;
        container.innerHTML += fizz;
    }

    else if (m % 5 === 0) {
        const buzz = `<div class="square Buzz">Buzz</div>`;
        container.innerHTML += buzz;
    }

    else {
        const number = `<div class="square">${m}</div>`;
        container.innerHTML += number;
    }
}

