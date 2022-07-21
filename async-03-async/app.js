// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc - not js functions but browser
// callbacks, promises, async/await

// 10000 = MINIMUM time
boilWater(10000);
console.log(`chop carrot`);

// for (let i = 0; i < 100000; i++) {
// 	console.log('still busy');
// }

function boilWater(time) {
	console.log('boiling...');
	setTimeout(() => {
		console.log('done.');
	}, time);
}
