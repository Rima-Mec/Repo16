// Only change code below this line
firstName=(firstName) => {
    return firstName.toUpperCase();
}
lastName=(lastName) => {
    return lastName.toLowerCase();
}
// Only change code above this line
console.log(firstName("JOHN"));
console.log(lastName("doe"));

exports.firstName = firstName;
exports.lastName = lastName;