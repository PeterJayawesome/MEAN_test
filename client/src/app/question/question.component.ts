import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
	
	question:any;

  constructor(private _noteService:NoteService,private _router:Router,private _route: ActivatedRoute) { }

  ngOnInit() {
  	this._route.paramMap.subscribe(params=>{
  		console.log(params);
  		console.log(params.get('id'));
  		this._noteService.getQuestion(params.get('id'),(res)=>{
  			this.question = res;
  		})
  	}
  }

  like(id){
  	this._noteService.like(id,(res)=>{
  		this.question = res;
  	})
  }

}
