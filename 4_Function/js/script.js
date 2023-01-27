// 1 - Create my first function
function myFisrtFunction() {
    console.log("Testing!");
}
myFisrtFunction();

// Create function inside variable
const myFunctionVariable = function () {
    console.log("Function inside varibale");
}
myFunctionVariable()

// Create function with parameters
function myFunctionWithParam(txt) {
    console.log(`Screen ${txt}`);
}
myFunctionWithParam("Print anything");

// 2 - Return
const a = 10
const b = 20
const c = 30
const d = 40

function sunValue(n1, n2) {
    return n1 + n2;
}

const result = sunValue(a, b)
console.log(result)

// 3 - Scope Function

let x = 10

function testingScope() {
    let x = 20;
    console.log(`x inside function is: ${x}`)
}
testingScope();
console.log(`X outside function is: ${x}`)


// 5- Arrow function
//A arrow function is function anonimous. Only using with variable

const testingArrow = () => {
    console.log("this is arrow function")
}

testingArrow();

const oddOrPair = (n) => {
    if (n % 2 === 0) {
        console.log("Pair")
        return;
    }
    console.log("Odd");
}

oddOrPair(5);

// 6 - Arrow Function more summarized - square root
const squareRoot = (x) => {
    return x * x;
}
console.log(squareRoot(4));

// Resume
const squareRootTwo = (x) => x * x;
console.log(squareRootTwo(5));

// 7 - Value Default
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}`
}


console.log(customGreeting("Washington"))
console.log(customGreeting("Washington", "Bom dia"))

// 8 -  Closure
function someTest() {
    let txt = "Anything"

    function dispplay() {
        console.log(txt)
    }

    dispplay();
}

someTest();

// 10 - + ABout closure
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

// 11 - recursion
const untilTen = (n, m) => {
    if (n < 10) {
        console.log("This function stopped executed");
    } else {
        const x = n - m;

        console.log(x);

        untilTen(x, m);
    }
};

untilTen(100, 7);

function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

const num = 6;

const resultRecursion = factorial(num);

console.log(`The factorial of the number ${num} é ${resultRecursion}`);