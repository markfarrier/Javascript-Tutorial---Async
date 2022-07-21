// callbacks, promises, async/await
// what if no resolve, one is rejected
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
// below will trigger the reject that gets caught and displays an error
// const heading2 = document.querySelector('.four');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
	addColor(1000, heading1, 'red')
		// once above promise is resolved, run the next function
		.then(() => addColor(2000, heading2, 'green'))
		// likewise
		.then(() => addColor(1000, heading3, 'blue'))
		// if any of these fail, log an error
		.catch((err) => console.log(err));
});

function addColor(time, element, color) {
	return new Promise((resolve, reject) => {
		if (element) {
			setTimeout(() => {
				element.style.color = color;
				resolve();
			}, time);
		} else {
			reject(new Error(`There is no such element ${element}`));
		}
	});
}
