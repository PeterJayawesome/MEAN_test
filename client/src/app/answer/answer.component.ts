import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

	answer = {answer:'',support:'',name:''};
	question:any;

  constructor(private _noteService:NoteService,private _router:Router,private _route: ActivatedRoute) { }

  ngOnInit() {
  	this._route.paramMap.subscribe(params=>{
  		console.log(params);
  		console.log(params.get('id'));
  		this._noteService.getquest(params.get('id'),(res)=>{
  			this.question = res;
  		})
  	})
  }

  cancel(){
  	this._router.navigate(['/dashboard']);
  }

  OnSubmit(){
  	this._noteService.createAnswer(this.question._id,this.answer,(res)=>{
  		console.log(res);
  		this._router.navigate(['/dashboard']);
  	})
  }

}
