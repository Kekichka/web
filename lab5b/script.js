function showCalculator(calculatorId) {
    var calculators = document.querySelectorAll('.calculator');
    calculators.forEach(calculator => {
        calculator.style.display = 'none';
    });

    var selectedCalculator = document.getElementById(calculatorId);
    if (selectedCalculator) {
        selectedCalculator.style.display = 'block';
    }
}

function showCalculator(calculatorId) {
    var calculators = document.querySelectorAll('.calculator');
    calculators.forEach(calculator => {
        calculator.style.display = 'none';
    });

    var selectedCalculator = document.getElementById(calculatorId);
    if (selectedCalculator) {
        selectedCalculator.style.display = 'block';
    }
}

function calculateTriangleArea(calculatorId) {
    var side1 = parseFloat(document.getElementById('side1_' + calculatorId).value);
    var side2 = parseFloat(document.getElementById('side2_' + calculatorId).value);
    var side3 = parseFloat(document.getElementById('side3_' + calculatorId).value);

    var s = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    var resultElement = document.getElementById('result_' + calculatorId);
    if (!isNaN(area) && area > 0) {
        resultElement.textContent = 'Triangle Area: ' + area.toFixed(2);
    } else {
        resultElement.textContent = 'Invalid input. Please enter valid side lengths.';
    }
}

function calculateTriangleAreaBySidesAndAngle(calculatorId) {
    var side1 = parseFloat(document.getElementById('side1_' + calculatorId).value);
    var side2 = parseFloat(document.getElementById('side2_' + calculatorId).value);
    var angle = parseFloat(document.getElementById('angle_' + calculatorId).value);

    var angleInRadians = (angle * Math.PI) / 180;

    var area = (side1 * side2 * Math.sin(angleInRadians)) / 2;

    var resultElement = document.getElementById('result_' + calculatorId);
    if (!isNaN(area) && area > 0) {
        resultElement.textContent = 'Triangle Area: ' + area.toFixed(2);
    } else {
        resultElement.textContent = 'Invalid input. Please enter valid side lengths and angle.';
    }
}

function calculateTriangleAreaBySideAndHeight(calculatorId) {
    var side = parseFloat(document.getElementById('side_' + calculatorId).value);
    var height = parseFloat(document.getElementById('height_' + calculatorId).value);

    var area = (side * height) / 2;

    var resultElement = document.getElementById('result_' + calculatorId);
    if (!isNaN(area) && area > 0) {
        resultElement.textContent = 'Triangle Area: ' + area.toFixed(2);
    } else {
        resultElement.textContent = 'Invalid input. Please enter valid side length and height.';
    }
}
function calculateTriangleAreaBySidesAndCircumradius(calculatorId) {
    var side1 = parseFloat(document.getElementById('side1_' + calculatorId).value);
    var side2 = parseFloat(document.getElementById('side2_' + calculatorId).value);
    var side3 = parseFloat(document.getElementById('side3_' + calculatorId).value);
    var radius = parseFloat(document.getElementById('radius_' + calculatorId).value);

    var s = (side1 + side2 + side3) / 2;
    var area = (side1 * side2 * side3) / (4 * radius);

    var resultElement = document.getElementById('result_' + calculatorId);
    if (!isNaN(area) && area > 0) {
        resultElement.textContent = 'Triangle Area: ' + area.toFixed(2);
    } else {
        resultElement.textContent = 'Invalid input. Please enter valid side lengths and radius.';
    }
}

function checkPalindrome() {
    var number = document.getElementById('number_palindrome').value;
    var reversedNumber = number.split('').reverse().join('');

    var resultElement = document.getElementById('result_palindrome');
    if (number === reversedNumber) {
        resultElement.textContent = number + ' is a palindrome.';
    } else {
        resultElement.textContent = number + ' is not a palindrome.';
    }
}

function checkAnagram() {
    var word1 = document.getElementById('word1_anagram').value.toLowerCase();
    var word2 = document.getElementById('word2_anagram').value.toLowerCase();

    var sortedWord1 = word1.split('').sort().join('');
    var sortedWord2 = word2.split('').sort().join('');

    var resultElement = document.getElementById('result_anagram');
    if (sortedWord1 === sortedWord2) {
        resultElement.textContent = 'Anagram: ' + word1 + ' and ' + word2;
    } else {
        resultElement.textContent = 'Not an Anagram: ' + word1 + ' and ' + word2;
    }
}

function findFibonacciNumber() {
    var index = parseInt(document.getElementById('number_fibonacci1').value);

    if (isNaN(index) || index < 1) {
        document.getElementById('result_fibonacci1').textContent = 'Invalid input. Please enter a positive integer.';
        return;
    }

    var fibonacciNumbers = [0, 1];
    for (var i = 2; i <= index; i++) {
        fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
    }

    document.getElementById('result_fibonacci1').textContent = 'Fibonacci Number at Index ' + index + ': ' + fibonacciNumbers[index];
}

function isPerfectSquare(num) {
    var sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}

function isFibonacci(number) {
    return isPerfectSquare(5 * number * number + 4) || isPerfectSquare(5 * number * number - 4);
}

function checkFibonacci() {
    var inputNumber = parseInt(document.getElementById('number_fibonacci2').value);

    if (isNaN(inputNumber) || inputNumber < 0) {
        document.getElementById('result_fibonacci2').textContent = 'Invalid input. Please enter a non-negative integer.';
        return;
    }

    if (isFibonacci(inputNumber)) {
        document.getElementById('result_fibonacci2').textContent = inputNumber + ' belongs to the Fibonacci sequence.';
    } else {
        document.getElementById('result_fibonacci2').textContent = inputNumber + ' does not belong to the Fibonacci sequence.';
    }
}