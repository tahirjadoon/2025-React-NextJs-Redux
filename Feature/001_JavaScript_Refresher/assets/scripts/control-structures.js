commonJs.displayTitle("control-structures.js", "+", commonJs.textDisplayOptions.red, true);
commonJs.displayTitle("uses common.js", " ", commonJs.textDisplayOptions.blue);
commonJs.displayEmptyLine();

commonJs.displayInfo("Add password as hello, Hello, any thing or empty");

const password = prompt('Your password: ');

commonJs.displayTitle('if/else condition', undefined, commonJs.textDisplayOptions.green, true);
if(password === 'hello'){
    commonJs.displayInfo("hello  works");
}
else if(password === 'Hello'){
    commonJs.displayInfo("Hello  works");
}
else{
    if(!password) 
        commonJs.displayInfo("No password provided");
    else
    commonJs.displayInfo("access not granted for " + password);
}
commonJs.displayEmptyLine();

const hobbies = ["Sports", "Cooking"];

commonJs.displayTitle('for-of loop', undefined, commonJs.textDisplayOptions.green, true);
for(const hobby of hobbies){
    commonJs.displayInfo("hobby: ", hobby);
}
commonJs.displayEmptyLine();

commonJs.displayTitle('for-of loop with index', undefined, commonJs.textDisplayOptions.green, true);
for(const [index, hobby] of hobbies.entries()){
    commonJs.displayInfo(`hobby: ${index}:`, hobby);
}
commonJs.displayEmptyLine();

commonJs.displayTitle('foreach loop', undefined, commonJs.textDisplayOptions.green, true);
hobbies.forEach((hobby) => {
    commonJs.displayInfo("hobby: ", hobby);
});
commonJs.displayEmptyLine();

commonJs.displayTitle('foreach loop with index', undefined, commonJs.textDisplayOptions.green, true);
hobbies.forEach((hobby, index) => {
    commonJs.displayInfo(`hobby: ${index}: `, hobby);
});
commonJs.displayEmptyLine();