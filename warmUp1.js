// 1-Using + operator create a function that combine your first and last name and return it.
// your code is here
function firstLastName(firstName,lastName){
	return firstName + lastName
}

// 2-Create a function that return true if the number is a multiple of 3 and false if not.
// your code is here
function multiple3(num){
	if(num % 3 === 0){
		return true
	}
	return false
}

// 3-Create a function that takes any age as a parameter and return it in seconds.
// your code is here
function ageToSeconds(age){
	return  age * 365 * 24 * 60 * 60
}