// Inizia il ciclo da 1 fino a 100
for (let i = 1; i <= 100; i++) {

    // Controlla se il numero è sia multiplo di 3 che di 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } 
    // Controlla se il numero è multiplo di 3
    else if (i % 3 === 0) {
        console.log('Fizz');
    } 
    // Controlla se il numero è multiplo di 5
    else if (i % 5 === 0) {
        console.log('Buzz');
    } 
    // Se il numero non è né multiplo di 3 né di 5, stampa il numero
    else {
        console.log(i);
    }
    
}
