///check common.js for common functions


commonJs.displayTitle("import.js", "+", commonJs.textDisplayOptions.red, true);
commonJs.displayTitle("uses common.js", " ", commonJs.textDisplayOptions.blue);
commonJs.displayTitle("imported items are coming from util.js", " ", commonJs.textDisplayOptions.magenta);
commonJs.displayEmptyLine();

/************************** IMPORT & EXPORT START */
//when only default is there
commonJs.displayTitle("importing default only", undefined, commonJs.textDisplayOptions.green, true);
import getDefault from "./util.js";
commonJs.displayInfo("default: ", getDefault);
commonJs.displayEmptyLine();

//importing specific key
commonJs.displayTitle("importing specific key", undefined, commonJs.textDisplayOptions.green, true);
import { apiKey } from "./util.js";
commonJs.displayInfo("apiKey: ", apiKey);
commonJs.displayEmptyLine();

//we can do multiple exports and use as 
//import { apiKey, abc } from "./util.js";

//all via javascript object
commonJs.displayTitle("importing all via javascript object", undefined, commonJs.textDisplayOptions.green, true);
import * as utils from './util.js';
commonJs.displayInfo("utils.default: ", utils.default);
commonJs.displayInfo("utils.abc: ", utils.abc);
commonJs.displayInfo("utils.apiKey: ", utils.apiKey);
commonJs.displayEmptyLine();
/************************** IMPORT & EXPORT END */



