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

## .Prototype

![Explaining prototype](https://cloud.githubusercontent.com/assets/3127498/10178592/b71a38a2-66ce-11e5-8235-6491dfd7e0a7.png)


