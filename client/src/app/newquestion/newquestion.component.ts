import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {

	question = {title:"",description:""}

  constructor(private _noteService:NoteService,private _router:Router) { }

  ngOnInit() {
  }

  OnSubmit(){
  	this._noteService.createquestion(this.question,(res)=>{
  		console.log("success");
  		this._router.navigate(['/dashboard']);
  	})
  }

  cancel(){
  	this._router.navigate(['/dashboard']);
  }

}
