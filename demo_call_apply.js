function manAction(name, action) {
	console.log(name + " is " + action);
}

console.log("function is called by default")
manAction("prakash","compling")

//individual arguments are passed
manAction.call(undefined, "prakash", "coding");

// arguments are passed as array literals
manAction.apply(undefined, ["prakash", "running"]);

//function currying

function multiply(a, b) {
	return a * b;
}

var multiplyByTwo = multiply.bind(this, 2)
var multiplyByThree = multiply.bind(this, 3)
console.log(multiplyByTwo(3))	//2*3
console.log(multiplyByThree(4)) // 3*4

