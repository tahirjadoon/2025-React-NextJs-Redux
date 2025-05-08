commonJs.displayTitle("funstions-inside-functions.js", "+", commonJs.textDisplayOptions.red, true);
commonJs.displayTitle("uses common.js", " ", commonJs.textDisplayOptions.blue);
commonJs.displayEmptyLine();

commonJs.displayTitle('functions inside functions', undefined, commonJs.textDisplayOptions.green, true);
function init(){
    function greet(){
        commonJs.displayInfo('greet inside init');
    }
    greet();
}

init();
commonJs.displayEmptyLine();