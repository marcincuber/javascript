(function() {
    'use strict';
})();

//const names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

function scan_array(names) {
	const new_array = [];

	for(counter = 0; counter < names.length; counter++) {
		new_array.push(names[counter]);
		// console.log(names[counter]);
	}
	return new_array;
}

function scan_array_func(names) {
	const new_array = [];
	
	names.forEach(function(name) {
		new_array.push(name);
		// console.log(name);
	});
    
    return new_array;
}
