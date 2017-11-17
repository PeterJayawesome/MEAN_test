var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AnswerSchema = mongoose.Schema({
	name:String,
	answer:String,
	support:String,
	likes: Number,
	_question:{type:Schema.Types.ObjectId, ref:"Question"}
},{timestamps: true});

mongoose.model("Answer",AnswerSchema);