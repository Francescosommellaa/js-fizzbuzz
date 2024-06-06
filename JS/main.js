// Crea il container nel DOM
let container = document.createElement('div');
container.id = 'fizzBuzzContainer';
document.body.appendChild(container);


// Inizia il ciclo da 1 fino a 100
for (let i = 1; i <= 100; i++) {

    // Crea un nuovo elemento div
    let div = document.createElement('div');

    div.className = 'box'; 

    // Controlla se il numero è sia multiplo di 3 che di 5
    if (i % 3 === 0 && i % 5 === 0) {

        div.id = 'box-fizz-buzz';
        div.textContent = 'FizzBuzz';
       
        console.log('FizzBuzz');
    } 

    // Controlla se il numero è multiplo di 3
    else if (i % 3 === 0) {

        div.id = 'box-fizz';
        div.textContent = 'Fizz';

        console.log('Fizz');
    } 

    // Controlla se il numero è multiplo di 5
    else if (i % 5 === 0) {

        div.id = 'box-buzz';
        div.textContent = 'Buzz';

        console.log('Buzz');
    }

    // Se il numero non è né multiplo di 3 né di 5, stampa il numero
    else {

        div.textContent = i;

        console.log(i);
    }

    container.appendChild(div);

}
