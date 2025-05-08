commonJs.displayTitle("arrays.js", "+", commonJs.textDisplayOptions.red, true);
commonJs.displayTitle("uses common.js", " ", commonJs.textDisplayOptions.blue);
commonJs.displayTitle("index starts at 0", " ", commonJs.textDisplayOptions.blue);
commonJs.displayEmptyLine();

const hobbies = ["Sports", "Cooking", "Reading"];
const numbers = [10, 25, 30, 40, 50];

commonJs.displayTitle('Hobbies Array', undefined, commonJs.textDisplayOptions.green, true);
commonJs.displayInfo("hobbies: ", hobbies);
commonJs.displayInfo("hobbies[0]: ", hobbies[0]);
commonJs.displayInfo("numbers: ", numbers);
commonJs.displayInfo("numbers[0]: ", numbers[0]);
commonJs.displayEmptyLine();

commonJs.displayTitle('Array utility methods', undefined, commonJs.textDisplayOptions.green, true);
commonJs.displayTitle("concat, fill, filter, find, findIndex, push, map, flatMap, length", " ", commonJs.textDisplayOptions.blue);
commonJs.displayEmptyLine();

commonJs.displayTitle('push method', undefined, commonJs.textDisplayOptions.green, true);
hobbies.push("Working");
numbers.push(27);
commonJs.displayInfo('hobbies.push("Working"): ', hobbies);
commonJs.displayInfo('numbers.push(27): ', numbers);
commonJs.displayEmptyLine();

commonJs.displayTitle('findIndex method', undefined, commonJs.textDisplayOptions.green, true);
const indexGt30 = numbers.findIndex(num => num > 30);
const indexSport = hobbies.findIndex(item => item === "Cooking");
commonJs.displayInfo('hobbies.findIndex(item => item === "Cooking"): ', indexSport);
commonJs.displayInfo('numbers.find(num => num > 30): ', indexGt30);
commonJs.displayEmptyLine();

commonJs.displayTitle('find method', undefined, commonJs.textDisplayOptions.green, true);
const findGt30 = numbers.find(num => num > 30);
commonJs.displayInfo('numbers.find(num => num > 30): ', findGt30);
commonJs.displayEmptyLine();

commonJs.displayTitle('map method - transforms', undefined, commonJs.textDisplayOptions.green, true);
commonJs.displayTitle("adding ! to each hobby", " ", commonJs.textDisplayOptions.blue);
const newHobbies = hobbies.map(item => `${item}!`);
commonJs.displayInfo('newHobbies: ', newHobbies);
commonJs.displayInfo('hobbies: ', hobbies);

commonJs.displayTitle("converting to javascript object", " ", commonJs.textDisplayOptions.blue);
const newJsObject = hobbies.map(item =>({name: item}));
const newJsObjectWithIndex = hobbies.map((item, index) =>({name: item, index: index}));
commonJs.displayInfo('newJsObject: ', newJsObject);
commonJs.displayInfo('newJsObjectWithIndex: ', newJsObjectWithIndex);
commonJs.displayEmptyLine();

commonJs.displayTitle("de-structuring", " ", commonJs.textDisplayOptions.blue);
const [firstName, lastName] = ["John", "Doe"];
commonJs.displayInfo('const [firstName, lastName] = ["John", "Doe"]: ');
commonJs.displayInfo('firstName: ', firstName);
commonJs.displayInfo('lastName: ', lastName);
commonJs.displayEmptyLine();

commonJs.displayTitle("de-structuring object", " ", commonJs.textDisplayOptions.blue);
function storeOrder({id, currency, amount}) { // destructuring
    commonJs.displayInfo('id', id);
    commonJs.displayInfo('currency', currency);
    commonJs.displayInfo('amount', amount);
}
storeOrder({id: 5, currency: 'USD', amount: 15.99});