# Javascript Good Parts

### Bad Parts
Global Variables
+ for both add and concatenate
automatic semicolon insertion
typeof array is object
with and eval - make it slower, eval is missed 
phony array - array are hashables-performance problem
== and != - use === operator
false, null, NAN
for..in is troublesome

### Bad Heritage
* Blockless statements
* Floating point arithmetice
* ++ and --
* switch statement
JSLINT CODE QUALITY FOR JAVASCIPT


## GOOD PARTS
* Lambda
* Dynamic Objects 
	* object inherited from objects
* Loose typing
* Object Literals were inspiration for JSON formating
* Inheritance
	* prototypical inheritance
* new Operator - required for calling a constructor
* Closure
```javascript
var number = function() {
  var name=['zero', 'one', 'two'];
  return function(n) {
    return name[n];
  }
}();
```

* Powerful constructors
* Subjective styling
```javascript
return //puts semicolon here so it does not work
{
	test:true;
}
//this is the correct way
return {
	test:true;
}

```