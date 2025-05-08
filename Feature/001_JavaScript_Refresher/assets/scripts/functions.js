commonJs.displayTitle("functions.js", "+", commonJs.textDisplayOptions.red, true);
commonJs.displayTitle("uses common.js", " ", commonJs.textDisplayOptions.blue);
commonJs.displayEmptyLine();

commonJs.displayTitle("greet()", "+", commonJs.textDisplayOptions.green, true);
function greet(){
    console.log("Hello");
}
greet();
commonJs.displayEmptyLine();

commonJs.displayTitle('greet2(userName, message = "Hello")', "+", commonJs.textDisplayOptions.green, true);
function greet2(userName, message = "Hello"){
    commonJs.displayInfo(userName, message);
}
greet2("Robert: ");
greet2("Jason: ", "How are you?")
greet2("Tommy: ", "Where are you?")
commonJs.displayEmptyLine();

commonJs.displayTitle('return  createGreating(userName, message = "Hello")', "+", commonJs.textDisplayOptions.green, true);
function createGreating(userName, message = "Hello"){
    return `Hi, i am ${userName}. ${message}`;
}
commonJs.displayInfo(undefined, createGreating("Robert"));
commonJs.displayInfo(undefined, createGreating("Jason", "How are you?"));
commonJs.displayInfo(undefined, createGreating("Tommy ", "Where are you?"));
commonJs.displayEmptyLine();


commonJs.displayTitle('return  combine(a, b, c)', "+", commonJs.textDisplayOptions.green, true);
commonJs.displayTitle("returns a * b / c", " ", commonJs.textDisplayOptions.blue);
function combine(a, b, c){
    const result = a * b / c;
    return result;
}
const combine1 = combine(2, 3, 2);
const combine2 = combine(3, 4, 2);
const combine3 = combine(5, 4, 2);
commonJs.displayInfo("combine1 2,3,2: ", combine1);
commonJs.displayInfo("combine2 3,4,2: ", combine2);
commonJs.displayInfo("combine3 5,4,2: ", combine3);
commonJs.displayEmptyLine();

/***********  ARROW functions ************/
commonJs.displayTitle('arrow function with return', "+", commonJs.textDisplayOptions.green, true);
const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
}
commonJs.displayInfo("ArrowFunction fullName: ", fullName("John", "Doe"));
commonJs.displayEmptyLine();

commonJs.displayTitle('Anonymous arrow function', "+", commonJs.textDisplayOptions.green, true);
(() => {
    let message = "Hello, World!";
    console.log(message);
})();

((userName, userAge) => {
    console.log(`User: ${userName}, Age: ${userAge}`);
})("Alice", 30);
commonJs.displayEmptyLine();

