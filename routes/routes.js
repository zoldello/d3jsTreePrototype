
var async = require('asyncawait/async');
var await = require('asyncawait/await');

var appRouter = function(app) {
	app.get("/", function(req, res) {
    		res.send("Hello World");
	});

	app.get("/gramene-taxonomy", async (function(req, res) {
	//	let a = apple();

///////////////////////////////////////////////////////////////
	// require the module
var treeLoader = require("gramene-trees-client").promise;

// get the taxonomy (via a promise)
var taxonomy = await (treeLoader.get());

// load the d3 example http://bl.ocks.org/d3noob/8375092
console.log(taxonomy.data);

/*
for(var p in taxonomy) {
		if (taxonomy.hasOwnProperty(p)) {
			console.log(p);
		}
}
*/


res.send(taxonomy.model);
////////////////////////////////////////////////////////////////////////



	///////////////////////////////////////////////////////
/*
		let  treeLoader = require("gramene-trees-client").promise;
		let done = false;


await (treeLoader.get().then(function(result) {
	let i = 0;
	console.log('results obtained');

//console.log(treeLoader.get())
//console.log(b.inspect().state);
console.log(arguments[1]);

			res.send(result);
}).catch(function(e) {
	res.status(500);
})

);
*/
///////////////////////////////////////////////////////


/*
while (b.inspect().state.toString() === 'pending') {
console.log(b.inspect().state);
	console.log('still doint its thing');
};
*/

//res.send('taxis')
	}));
}



module.exports = appRouter;
