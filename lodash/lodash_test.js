const _ = require('lodash');

// 1. Basic for loop.
for (var i = 0; i < 5; i++) {
    // ....
}

// 2. Using Array's join and split methods
Array.apply(null, Array(5)).forEach(function() {
    // ...
});

// Lodash
_.times(5, function() {
    // ...
});

// Fetch the name of the first pet from each owner
var ownerArr = [{
    "owner": "Colin",
    "pets": [{"name":"dog1"}, {"name": "dog2"}]
}, {
    "owner": "John",
    "pets": [{"name":"dog3"}, {"name": "dog4"}]
}];

// Array's map method.
ownerArr.map(function(owner){
   return owner.pets[0].name;
});

// Lodash
_.map(ownerArr, 'pets[0].name');