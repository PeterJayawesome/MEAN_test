var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
	title:String,
	content:String,
	author:String,
	date:Date,
},{timestamps: true})

mongoose.model('Note',NoteSchema);