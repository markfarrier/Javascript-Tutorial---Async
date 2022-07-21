// callbacks, promises, async/await
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container');
// const url = 'badurl';
const url = 'https://source.unsplash.com/random';
btn.addEventListener('click', () => {
	loadImage(url)
		.then((taco) => container.appendChild(taco))
		.catch((err) => console.log(err));
});

function loadImage(url) {
	// const promise = new Promise((resolve, reject)==>{
	return new Promise((resolve, reject) => {
		let img = new Image();
		img.addEventListener('load', () => {
			// console.log('hey everything worked');
			resolve(img);
		});
		img.addEventListener('error', () => {
			// console.log('there was an error');
			reject(new Error(`Failed to load image from the source : ${url}`));
		});
		img.src = url;
	});
	// return promise;
}
