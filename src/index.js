// Functions to Debug:
const reverseArray = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    
    while (left > right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr;
}

const fizzbuzz = (n) => {
    if (n % 3 == 0) return "Fizz";
    if (n % 5 == 0) return "Buzz";
    return n;
}

const cube = (n) => {
    return Math.pow(n, 2);
}

// Main:
const n = 4;
console.log(`Hello, ${n} to the third power is ${cube(n)}`);

const arr = [0, 1, 2, 3];
console.log(`Reversed Array: ${reverseArray(arr)}`);

const num = 15;
console.log(`Fizzbuzz Result: ${fizzbuzz(num)}`);