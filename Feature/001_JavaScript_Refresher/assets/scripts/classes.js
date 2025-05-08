commonJs.displayTitle("classes.js", "+", commonJs.textDisplayOptions.red, true);
commonJs.displayTitle("uses common.js", " ", commonJs.textDisplayOptions.blue);
commonJs.displayEmptyLine();

class user{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        commonJs.displayInfo("Greet From Class: ", `Hello ${this.name} - ${this.age}`);
    }
}

commonJs.displayTitle('Classes', "+", commonJs.textDisplayOptions.green, true);
const user1 = new user("Joe", 40);
commonJs.displayInfo("Full Class: ", user1);
user1.greet();
commonJs.displayInfo("Name: ", user1.name);
commonJs.displayInfo("Age: ", user1.age);
