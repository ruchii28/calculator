let operator = '';

function setOperator(op) {
    operator = op;
    document.querySelectorAll('.operator-buttons button').forEach(btn => {
        btn.classList.remove('active'); 
    });
    document.querySelector(`.operator-buttons button[onclick="setOperator('${op}')"]`).classList.add('active');
}
//Task 1
function performCalculation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Invalid input!! Enter values';
    } else if (operator === '') {
        result = 'Please select an operator.';
    } else {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    result = 'Cannot divide by zero.';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Invalid operator. Please select a valid operator.';
        }
    }
    document.getElementById('calculator-result').textContent = 'Result: ' + result;
}

// Task 2
function calculateSumOfEvenNumbers() {
    const arrayInput = document.getElementById('array-input').value;
    const numbers = arrayInput.split(',').map(num => parseFloat(num.trim()));
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (!isNaN(numbers[i]) && numbers[i] % 2 === 0) {
            sum += numbers[i];
        }
    }

    document.getElementById('result').textContent = 'Sum of even numbers: ' + sum;
}

// Task 3
let Person = {
    firstName: '',
    lastName: '',
    age: 0,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    incrementAge() {    
        this.age += 1;
    }
};

function createAndShowPerson() {
    Person.firstName = document.getElementById('firstName').value;
    Person.lastName = document.getElementById('lastName').value;
    Person.age = parseInt(document.getElementById('age').value, 10);
    updatePersonDisplay();
}

function incrementAge() {
    Person.incrementAge();
    updatePersonDisplay();
}

function updatePersonDisplay() {
    const fullName = Person.getFullName();
    const age = Person.age;
    document.getElementById('person-result').textContent = `Full Name: ${fullName}, Age: ${age}`;
}
