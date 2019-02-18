//snap-reduce
let testArray = [1,2,3,5,8,13,21,34];

//using reduce to multiply an array, using a function declaration:
function multiplier(array) {
	return array.reduce((acc, cur) => acc * cur);
};

console.log(multiplier(testArray));


//another version using a function expression:
const multiplier2 = array => array.reduce((acc, cur) => acc * cur);

console.log(multiplier2(testArray));

