var notes = require('../controllers/notes.js');
var path = require('path');

module.exports = function(app){
	app.get('/allnotes', notes.index)
	app.post('/notes', notes.create)


	app.all("*",function(req,res){
		res.sendFile('index.html', { root: './client/dist' });
	})
}