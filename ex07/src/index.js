const {firstName, lastName} = require ('./nameFunctions.js');
function dotNotation(firstName, lastName) {
    firstNameValue = firstName; 
    lastNameValue = lastName; 
}

console.log(dotNotation("john", "DOE")); // Change this line
module.exports = dotNotation(firstName, lastName);

