function Person(firstname, lastname) {
	this.first = firstname || "Prakash";
	this.last = lastname || "Natarajan";
}

var john = new Person();
console.log(john);
console.log(john.__proto__);

var peter = new Person('peter', 'geller');
console.log(peter); 