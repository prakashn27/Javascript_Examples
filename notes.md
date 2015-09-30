# Javascript

## Functional programming

[Underscrore.js](http://underscorejs.org/docs/underscore.html) helps in working  with arrays and objects in a neat way and a lot of functional programming helps. 

## Everything is an object or primitive

define the folowing
```
var a = {};
var b = function() {};
var c = []
```

see the list of functions available for 
```
a.__proto__
b.__proto__
c.__proto__
```

## Reflection and extend

**Reflection** - an object can look at itself, listing and changing its propertities and methods

see reflection demo

## Function Construtor

Normal function used to construct objects

```
function Person() {
	this.first = "Prakash";
	this.last = "Natarajan";
}

var john = new Person();
```

See function_constructor.js

> new keyword sets a new this instance and values are added to that instance
> if there is not return statement it returns the object that you have worked on

> If you miss the new keyword the object return is undefined.

> Function constructors are defined with CAPITAL STARTING LETTERS.

## .Prototype

![Explaining prototype](https://cloud.githubusercontent.com/assets/3127498/10178592/b71a38a2-66ce-11e5-8235-6491dfd7e0a7.png)

> .prototype is the prototype of any objects

** best practice **
methods within the prototype because even if i have 1000 objects i just have one method since it is bound to prototype
variables within the function constructor declaration

## Dangerous Aside
### Build in function constructors
```
var a = 3;
var b = new Number("3");
a == b //true
a === b //false because they are of diff type

//best way to get primitive type is WITHOUT new
b = Number("3");
a === b // true
```

### Arrays and for in

```
Array.prototype.newFeature = "cool";
var arr = ['a', 'b', 'c'];
for(var prop in arr) { console.log(prop + ':' + arr[prop]); };

```
Here prop represents the index and cool will also appear in for in

## Object.create and pure prototypical inheritance
```
var person = {
	firstname: 'default',
	lastname: 'default',
	greet: function() {
	return 'Hi'
	}
}
var john = Object.create(person)
john.firstname = 'John';
john.lastname = 'green';
```

Polyfill : code that adds a feature which the engine may lack.

## ES6 and classes
class is an object in js
```
//extends sets the prototype(__proto__)
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
  	//parent class is called
    super(geometry, materials);
    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  get boneCount() {
    return this.bones.length;
  }
  set matrixType(matrixType) {
    this.idMatrix = SkinnedMesh[matrixType]();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```

## Odds and ends
typeof
instanceof

## Strict Mode

* helps in declaring a variable before assigning
* runs some rule for javascript

"use strict";
either top of file or top of function  





