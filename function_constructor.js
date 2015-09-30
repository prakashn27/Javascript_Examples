function Person(firstname, lastname) {
	this.first = firstname || "Prakash";
	this.last = lastname || "Natarajan";
}

Person.prototype.getFullName = function() {
	return this.first + ' ' + this.last;
}

var john = new Person();
console.log(john.getFullName());
console.log(john.__proto__);

var peter = new Person('peter', 'geller');
console.log(peter); 