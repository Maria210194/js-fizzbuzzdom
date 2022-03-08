let m;
const container = document.querySelector("#container");


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
