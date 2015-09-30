var c = {
	name: "Prakash", 
	log: function() {
		console.log(this); //displays name
		// self = this; // if we dont set this then the this in set name points to global this
		var setName = function(newName) {
			this.name = newName;
			// console.log(this)
		}.bind(this)
		setName("name changed to new testname");
		console.log(this);
	}
}

c.log()