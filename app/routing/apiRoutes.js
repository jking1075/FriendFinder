var friendsData = require("../data/friends.js");

var path = require('path');

module.exports = function(app) {
	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	app.post('/api/friend', function(req, res){
		res.json(friendsData);

		var bestFit = 0;
		var bestDif = 1000;

		for (var i = friendsData.length -1; i>=0, i--){

			console.log("compare with " + friendsData[i].name);
			
			var totalDif = 0;

			for(var j = 0; k < 2; j++){

				totalDif = totalDif + Math.abs(friendsData[i].scores[j] - req.body.scores[j]);
			}

		if (totaldif < bestDif){
			bestDif = totalDif;
			bestFit = i;
		}		

		console.log("total difference for " + friendsData[i].name + " is " + totalDif)
		
		}

		console.log("best friend is " + friendsData[bestFit].name + " with the best score of " + bestDif);

		//push in user input
		friendsData.push(req.body);

		//respond back with the best fit.
		res.json({name: friendsData[bestFit.name]});
	});
}

