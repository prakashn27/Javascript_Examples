
var person = {
	firstname : "Prakash",
	lastname : "Natarajan",
	getFullName : function() {
		return this.firstname + ' ' + this.lastname;
	}

}

var mona = {
	firstname : "Mohana"
}

// for demo purpose only dont do this
mona.__proto__ = person

for (var prop in mona) {
	//console.log(prop + ' : ' + mona[prop]);
	//we got all the things even from person object


	//reflection made us to get the properties
	if(mona.hasOwnProperty(prop)) {
		console.log(prop + ' : ' + mona[prop]);
	}

}


var shiva = {
	address : '11 main st',
	getFormalName : function() {
		return this.lastname + ", " + this.firstname + ',' + this.address
	}
}

var _ = require('./underscore.js');

// reflection  - properties are changed 
_.extend(mona, shiva)
console.log(mona)
