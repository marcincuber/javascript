//impure functions
function square(x) {
    updateXInDatabase(x);
    return x * x;
}

function squareAll(items) {
    for (let i = 0; i < items.length; i++) {
        items[i] = square(items[i]);
    }
}

//pure functions
function square2(x) {
    return x * x;
}

function squareAll(items) {
    return items.map(square2);
}

//declared I/O- square
const square = (x,y) => {
	return x * y;
}

//Hidden I/O (side effects)
const addUser = (user) => {
	Database.addUser(user);
	userCount + 1;
	NotifyComponent.createToast(`User ${user.name} added!`);
};