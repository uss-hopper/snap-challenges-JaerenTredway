//snap-reverse

//using reduce reverse this string.

const testString = "I'll alert the crew. We finished our first sensor sweep of the neutral zone. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody."

function reverseString(string) {
    return string.split('').reduce((acc, cur) => cur + acc, '');
}

reverseString(testString);