let testArray = [1,2,3,5,8,13,21,34];

//using reduce multiply the array

function multiplier(array) {
	return array.reduce((acc, cur) => acc * cur);
};

multiplier(testArray);
