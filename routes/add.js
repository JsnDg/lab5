var data = require("../data.json");

exports.addFriend = function(req, res) {
	var inputName = req.query.name;
	var inputDesc = req.query.description;
	res.render('index', {
		'name': inputName,
		'description': inputDesc,
	});
	newfriend = {
		'name': inputName,
		'description': inputDesc,
		'imageURL': 'http://lorempixel.com/400/400/people',
	};
	console.log(newfriend);
}