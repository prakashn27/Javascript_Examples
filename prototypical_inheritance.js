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

// for demo purpose only
mona.__proto__ = person

console.log(mona.getFullName());