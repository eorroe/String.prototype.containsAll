String.prototype.containsAll = function(strings, index) {
	if(!Array.isArray(strings)) throw Error('1 argument is not an array');
	return strings.every(string => return this.includes(string, index), this);
}

// This should most likely be longer, but I need help improving it. Not sure how to
