var mongoose = require('mongoose');

var Note = mongoose.model('Note');

module.exports = {
	index: function(req,res){
		Note.find({},function(err,notes){
			if(err){
				console.log(err);
			}
			else{
				console.log(notes);
				res.json(notes);
			}
		})
	},

	create: function(req,res){
		var note = new Note(req.body);
		note.save(function(err){
			if(err){
				console.log(err);
			}
			else{
				console.log(note);
				res.redirect('/allnotes')
			}
		})
	}
}