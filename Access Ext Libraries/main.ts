//Importing functiosn from two different scripts here
import { returnGreeting } from "./greetings_module.js"; //imports a single function in the module
import * as allGreetingFunctions from './greetings_module.js' //imports all exported  components in the module.
import { returnGreeting as returnGreetingLength } from "./greetings-utilities_module";


returnGreeting("Osalachi");   // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Morning'); // Displays 'The message from Greetings_module is Bonjour!'
returnGreetingLength('Ciao!');  // Displays 'The mes/