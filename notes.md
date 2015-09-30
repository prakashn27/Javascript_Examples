# Javascript

## Closure:
> a closure is the local variables for a function - kept alive after the function has returned, 
> a closure is a stack-frame which is not deallocated when the function returns. (as if a 'stack-frame' were malloc'ed instead of being on the stack!


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

## Transpilers:
- convert the syntax of one programming language to another.

Following languages are traspiled in js
* typescript by microsoft
* traceur in github

## ES6 features links
* [es6 with demo of each feature](http://es6-features.org/)

## New ES6 fetures
* default argument values
* classes
* arrow functions like lambda
* block scoped variables


# Performance Issues best practices:

Following points are taken from the [googletechtalks video](https://www.youtube.com/watch?v=mHtdZgou0qU) by Nicholas C. Zakas
(Nicholas C. Zakas is the author of Professional JavaScript for Web Developers, 2nd Edition (Wrox, 2009), co-author of Professional Ajax, 2nd Edition (Wrox, 2007), and a contributor to Even Faster Web Sites (O'Reilly, 2009). Nicholas is principal front end engineer for the Yahoo! homepage and is also a contributor to the Yahoo! User Interface (YUI) library.)



## Scope management

With/catch and inside the closure creates a new execution context slowing down the execution.

### Recommendations:
* Store out of scope variables in local variables. (global into local)
* Avoid with statement
* be careful with try catch
* sue closure sparingly
* dont forget var when declaring variables as it takes longer to create without var keywor

## Data access

4 places to get data:
* literal
* variable
* array item
* object property

access data from literal and local variable is always fastest. 
access data from  array item and object property is slowest.
Object.name is faster than Object.name.name

### Difference between notation:
object["name"] and object.name:
only differs in safari.

### Recommendations:
Store in local variable
* any object property accessed more than once 
* any array item accessed more than once
* minimize the deep array lookup 

## Loops:
### To avoid
for in - inefficent
for each
array.foreach()
all function based iterations angular.foreach, jquery.foreach

### Which one to use
It does not matter which ever you use below. All are same:
for 
do 
do while

### Recommendations:
reduce the number of evaluations
```
var j = len;
while(j--) { //only one evaluation(j-- == True) rather than two (j < len == true)
  
}
```
## DOM
slowest part of all of it
HTMLCollection:
all the document attributes are HTMLCollection
problem is that it is live and it always checks for elements even after getting the reference.
```Javascript
divs = document.getElementByTagName("div")
for(var i = 0; i < divs.length; i++) {
  var div = document.createElement("div");
  document.body.append(div);
}
```
Problem with here is since it is live connection divs.length is doubles for every look and we get an infinite loop.

div.length takes 53x times more that normal array length because of this property
for optimization this can be rewritten as
```
for(var i = 0, len=divs.lenght; i < len; i++) {
  
}
```





