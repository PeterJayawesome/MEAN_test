var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
	like: function(req,res){
		console.log(req.params.id)
		Answer.findOne({_id:req.params.id},function(err,answer){
			if(err){
				console.log("Find err: ",err);
			}
			console.log(answer);
			answer.likes +=1;
			answer.save(function(err){
				if(err){
					console.log("save err: ",err);
				}
				console.log("q_id: ",answer._question)
				res.redirect('/quests/'+answer._question+'/answers');
			})
		})

	},
	create:function(req,res){
		Question.findOne({_id:req.params.id},function(err,quest){
			if(err){
				console.log(err);
			}
			if(quest){
				console.log(quest);
				var answer = new Answer(req.body);
				answer._question = quest._id;
				answer.likes = 0;
				answer.save(function(err){
					if(err){
						console.log(err);
					}
					quest._answers.push(answer);
					quest.save(function(err){
						if(err){
							console.log(err);
						}
						console.log('answer success');
						res.json('answer success');
					})
				})
			}
		})
		
	}
}