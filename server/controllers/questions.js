var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
	all:function(req,res){
		Question.find({}).sort('-updatedAt').exec(function(err,questions){
			if(err){
				console.log(err);
			}
			else{
				console.log(questions);
				res.json(questions);
			}
		})
	},

	show: function(req,res){
		Question.findOne({_id:req.params.id},function(err,quest){
			if(err){
				console.log(err);
			}
			res.json(quest);
		})

	},

	answers:function(req,res){
		Question.findOne({_id:req.params.id}).populate('_answers').exec(function(err,quest){
			if(err){
				console.log(err);
			}
			else{
				console.log(quest);
				quest._answers.sort(function(a,b){return b.likes-a.likes});
				res.json(quest);
			}
		})

	},

	search: function(req,res){
		Question.find({title: new RegExp(req.params.title,'i')}).sort('-updatedAt').exec(function(err,questions){
			if(err){
				console.log(err);
			}
			else{
				res.json(questions);
			}
		})
	},

	create: function(req,res){
		var quest = new Question(req.body);
		quest.save(function(err){
			if(err){
				console.log(err);
			}
			else{
				res.json("success");
			}
		})
	}
}