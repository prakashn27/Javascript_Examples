"use strict";

var arr1 = [1, 2, 3, 4, 5]

function mapForArr(arr, fn) {
	var newArr = [];
	for(var i = 0; i < arr.length; i++) {
		newArr[i] = fn(arr[i])
	}
	return newArr
}

console.log(mapForArr(arr1, function(item) {
	return item * item;
}));

function checkForGreater(limit, element) {
	return element > limit;
}

var arr3 = mapForArr(arr1, checkForGreater.bind(this, 3));

console.log(arr3);

var arr4 = arr1.map(function(item) {
	return item * item * item;
});

console.log(arr4);

function checkForGreaterThan3(element) {
	return checkForGreater(3, element);
}

console.log('checking with a new method');
var arr5 = mapForArr(arr1, checkForGreaterThan3);
console.log(arr5);

var checkForGreaterSimplified = function(delimiter) {
	return function(limit, element) {
		return element > limit;
	}.bind(this, delimiter);
}
console.log(mapForArr(arr1, checkForGreaterSimplified(4)));


