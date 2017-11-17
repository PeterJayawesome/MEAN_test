var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = mongoose.Schema({
	description:String,
	_answers: [{type: Schema.Types.ObjectId, ref:"Answer"}],
	title: String
},{timestamps: true})

mongoose.model("Question",QuestionSchema);