// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {});

const promise = new Promise((resolve, reject) => {
	let value = true;
	// let value = false;
	if (value) {
		// resolve('hey value is true');
		resolve([1, 2, 4]);
	} else {
		reject(`there was a error, value is false`);
	}
});

console.log(promise);

promise
	// argument value is the value passed into resolve
	.then((taco) => {
		console.log(taco);
	})
	// argument value is the value passed into reject
	.catch((err) => {
		console.log(err);
	});
