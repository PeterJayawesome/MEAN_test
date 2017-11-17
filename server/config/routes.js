var questions = require('../controllers/questions.js');
var answers = require('../controllers/answers.js');
var path = require('path');

module.exports = function(app){
	app.get('/quests/search/:title',questions.search)
	app.post('/quests',questions.create)
	app.get('/quests',questions.all)
	app.post('/answers/:id/like',answers.like)
	app.post('/quests/:id/answers',answers.create)
	app.get('/quests/:id/answers',questions.answers)
	app.get('/quests/:id',questions.show)

	app.all("*",function(req,res){
		res.sendFile('index.html', { root: './client/dist' });
	})
}