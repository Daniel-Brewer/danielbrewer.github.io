// Only show even numbers
let numbers = 0;
let currentNumber = 0;
for (let i = 0; i < 101; i++) {
         currentNumber = numbers + 1;

    // Take the current number, divide by 5, and check if the remainder is 0

    if (currentNumber % 5 === 0) {
        document.write("chicken"); // chicken will appear for multiples of 5
    }
    //divide currentNumber by 7 and see if remainder is zero

        else if (currentNumber % 7 === 0) {
            document.write("monkey"); // monkey will appear for multiples of 7 
        }
        else {
            document.write(currentNumber);
        }
        numbers = numbers + 1;
}