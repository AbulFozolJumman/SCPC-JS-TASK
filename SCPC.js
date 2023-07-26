// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
function reverseString(inputString) {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString.charAt(i);
    }
    return reversedString;
}

const exampleInput = "hello world";
const output = reverseString(exampleInput);
console.log(output);

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
const sumOfPositiveNumbers = (numbers) => {
    return numbers.reduce((sum, num) => sum + (num > 0 ? num : 0), 0);
};

const exampleInput2 = [2, -5, 10, -3, 7];
const output2 = sumOfPositiveNumbers(exampleInput2);
console.log(output2);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
const findMostFrequentElement = (arr) => {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentElement;

    for (const num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            mostFrequentElement = num;
        }
    }

    return mostFrequentElement;
};

const exampleInput3 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const output3 = findMostFrequentElement(exampleInput3);
console.log(output3);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
const findTwoNumbersWithSum = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    // If no such pair is found, return an empty array
    return [];
};

const exampleInput4 = [1, 3, 6, 8, 11, 15];
const target = 9;
const output4 = findTwoNumbersWithSum(exampleInput4, target);
console.log(output4);

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const generateRandomPassword = (length) => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?";

    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
};

const password = generateRandomPassword(12);
console.log(password);

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
const romanToInt = (romanNumeral) => {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentChar = romanNumeral[i];
        const nextChar = romanNumeral[i + 1];

        if (romanValues[currentChar] < romanValues[nextChar]) {
            result -= romanValues[currentChar];
        } else {
            result += romanValues[currentChar];
        }
    }

    return result;
};

console.log(romanToInt("IX"));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const findSecondSmallest = (arr) => {
    if (arr.length < 2) {
        return 'Array must contain at least two elements';
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    if (secondSmallest === Infinity) {
        return 'There is no second smallest element';
    }

    return secondSmallest;
};

console.log(findSecondSmallest([3, 1, 4, 2, 5]));
