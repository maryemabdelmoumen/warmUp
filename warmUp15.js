// - create a data model to represent your classmates
// - think of different attributes of your classmates? what do all of them have ?
// - create a factory function.
// - create an array to hold the classmates that you created.
// - write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// - write a function called addFriend that takes a mate as an argument and add it to you classMates array.
// - calculate the number of male friends that your class have by writing a function called nbOfMale.
// - Write a function searchMates that, given a query and an array of Mates,
//   searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.


// Data Model for Classmates
function Classmate(firstName, lastName, age, gender) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
    }
}
var classMates = []

// Factory Function to Create Classmates
function createClassmate(firstName, lastName, age, gender) {
    var mate = Classmate(firstName, lastName, age, gender)
    addFriend(mate)
    return mate
}

// Function to Display information of classmates
function displayFriend(mate) {
    return mate.firstName + ' ' + mate.lastName + ', Age: ' + mate.age + ', Gender: ' + mate.gender
}

// Function to Add Classmate to the Array
function addFriend(mate) {
    classMates.push(mate)
}

// Function to Calculate Number of Male in classmates
function nbOfMale() {
    var count = 0;
    for (let i = 0; i < classMates.length; i++) {
        count += +(mate.gender === 'male') * 1
    }
    return count
}

// Function to Search Classmates
function searchMates(query, mates) {
    var results = []
    for (var i = 0; i < mates.length; i++) {
        if (mates[i].firstName.toLowerCase().includes(query.toLowerCase()) || mates[i].lastName.toLowerCase().includes(query.toLowerCase())) {
            results.push(mates[i])
        }
    }
    return results
}