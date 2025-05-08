commonJs.displayTitle("functions-as-values.js", "+", commonJs.textDisplayOptions.red, true);
commonJs.displayTitle("uses common.js", " ", commonJs.textDisplayOptions.blue);
commonJs.displayEmptyLine();

commonJs.displayTitle('assigning a function to a variable', undefined, commonJs.textDisplayOptions.green, true);
const greet = function(name){
    return `Hello ${name}`;
}
commonJs.displayInfo('greet("Joe"): ', greet("Joe"));
commonJs.displayEmptyLine();

commonJs.displayTitle('passing a function as an argument', undefined, commonJs.textDisplayOptions.green, true);
function executeFunction(fn, value){
    const result = fn(value);
    commonJs.displayInfo('fn(value): ', result);
}
executeFunction(greet, "Joe");
commonJs.displayEmptyLine();

commonJs.displayTitle('timeout after 2 seconds', undefined, commonJs.textDisplayOptions.green, true);
const handleTimeOut = () => { 
    commonJs.displayInfo('handleTimeOut called');
    commonJs.displayEmptyLine();
};
setTimeout(handleTimeOut, 2000);

commonJs.displayTitle('timeout after 4 seconds - passing parms', undefined, commonJs.textDisplayOptions.green, true);
const handleTimeOut2 = (msg, num) => { 
    commonJs.displayInfo(`handleTimeOut2 called with msg=${msg} and num=${num}`);
    commonJs.displayEmptyLine();
};
setTimeout(() => handleTimeOut2("HI", 20), 4000);

