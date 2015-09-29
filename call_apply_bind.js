var person = {
	firstname: 'Prakash',
	lastname: 'Natarajan',
	getFullName: function() {
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}
}
var logName = function(lang, lang2) {
	console.log('Logged: ' + this.getFullName());
	console.log('language is ' + lang + ' ' + lang2);
}
testingperson = logName.bind(person, 'en', 'tamil');
testingperson()

logName.call(person, 'en', 'tamil');
logName.apply(person, ['en', 'tamil']);


//function currying

function multiply(a, b) {
	return a * b;
}

var multiplyByTwo = multiply.bind(this, 2)
var multiplyByThree = multiply.bind(this, 3)
console.log(multiplyByTwo(3))	//2*3
console.log(multiplyByThree(4)) // 3*4