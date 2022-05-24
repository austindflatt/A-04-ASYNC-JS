// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
const fetchData = require('./fetchDataLibrary')


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 10. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchData()
	.then(
		response => {
			console.log(response);
		}
	)
	.catch(
		errpr => {
			console.log(error);
		}
	)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 11. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

