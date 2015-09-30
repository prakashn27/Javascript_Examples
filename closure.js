"use strict"; 

// function buildfunction() {
//     var arr = [];
//     for(var i = 0; i < 3; i++){
        
//         arr.push(
//         	function(j){
//         		return function() {
//         			console.log(j);
//         		}
//         	}(i)
//         );   
      
     
//     }
//     return arr
// }

// var fs = buildfunction();
// fs[0]();
// fs[1]();
// fs[2]();

function greet(language) {
	return function(firstname, lastname) {
		if(language === 'en') {
			console.log('hello ' + firstname + ' ' + lastname);
		}
		if(language === 'es') {
			console.log('hola ' + firstname + ' ' + lastname);
		}
	}
}

var greetenglish = greet('en');
var greetspanish = greet('es');
greetenglish('prakash', 'natarajan');
greetspanish('prakash', 'natarajan');


function say667() {
  // Local variable that ends up within closure
  var num = 666;
  var sayAlert = function() { console.log(num); }
  num += 10;
  return sayAlert;
}

var say = say667()
say()

// enabling private variable in javascript

var Person = function() {
	var name = "Default";
	return function() {
		var getName = function() {
			return this.name;
		}
		var setName = function(newName) {
			this.name = newName
		}
	}
}

var prakash = new Person()
console.log(prakash().getName());
