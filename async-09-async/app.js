// callbacks, promises, async/await
// must have async
// await waits till promise is settled - either resolved or rejected
// error handling - try/catch

// async function someFunction (){
//   await
// }
// const otherFunction = async() =>{
//   await
// }

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
// const heading2 = document.querySelector('.four');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

// btn.addEventListener('click', async () => {
// 	try {
// 		const first = await addColor(1000, heading1, 'red');
// 		await addColor(1000, heading2, 'green');
// 		await addColor(1000, heading3, 'blue');
// 		// below will return undefined because addColor doesn't return anything
// 		console.log(first);
// 	} catch (error) {
// 		console.log(error);
// 	}
// 	console.log('hello');
// });

btn.addEventListener('click', async () => {
	// displayColor().then();
	// displayColor().then((data) => console.log(data));
	const result = await displayColor();
	console.log(result);
});

// async always returns a promise by default
async function displayColor() {
	try {
		const first = await addColor(1000, heading1, 'red');
		await addColor(1000, heading2, 'green');
		await addColor(1000, heading3, 'blue');
		// below will return undefined because addColor doesn't return anything
		console.log(first);
	} catch (error) {
		console.log(error);
	}
	return 'hello';
}

function addColor(time, element, color) {
	return new Promise((resolve, reject) => {
		if (element) {
			setTimeout(() => {
				element.style.color = color;
				resolve();
				console.log('test');
			}, time);
		} else {
			reject(new Error(`There is no such element ${element}`));
		}
		console.log('hi');
	});
}
