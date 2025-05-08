commonJs.displayTitle("arrays-spreadoperator.js", "+", commonJs.textDisplayOptions.red, true);
commonJs.displayTitle("uses common.js", " ", commonJs.textDisplayOptions.blue);
commonJs.displayTitle("index starts at 0", " ", commonJs.textDisplayOptions.blue);
commonJs.displayEmptyLine();

const hobbies = ["Sports", "Cooking", "Reading"];
const newHobbies = ["Riding"]

commonJs.displayTitle('Hobbies & newHobbies Array', undefined, commonJs.textDisplayOptions.green, true);
commonJs.displayInfo("hobbies: ", hobbies);
commonJs.displayInfo("newHobbies: ", newHobbies);
commonJs.displayEmptyLine();

commonJs.displayTitle('without using spread operator', undefined, commonJs.textDisplayOptions.green, true);
const regMerge = [hobbies, newHobbies];
commonJs.displayInfo("regMerge: ", regMerge);
commonJs.displayEmptyLine();

commonJs.displayTitle('using spread operator ...', undefined, commonJs.textDisplayOptions.green, true);
const spreadOpMerge = [...hobbies, ...newHobbies];
commonJs.displayInfo("spreadOpMerge: ", spreadOpMerge);
commonJs.displayEmptyLine();


const user = {name: "Joe", age: 40};
commonJs.displayTitle('user object', undefined, commonJs.textDisplayOptions.green, true);
commonJs.displayInfo("user: ", user);
commonJs.displayEmptyLine();

const extendedUser = {isAdmin: true, ...user};
commonJs.displayTitle('extended user that has user', undefined, commonJs.textDisplayOptions.green, true);
commonJs.displayInfo("extendedUser: ", extendedUser);
commonJs.displayEmptyLine();