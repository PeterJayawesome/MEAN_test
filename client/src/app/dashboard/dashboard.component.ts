import { Component, OnInit } from '@angular/core';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	name:String;
	questions:[any];
  word: String = '';

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  	this.name = this._noteService.name;
  	this._noteService.getquestions((res)=>{
  		this.questions = res;
  	})
  }

  Search(){
    if(this.word){
      this._noteService.search(this.word,res=>{
        this.questions = res;
      })
    }
    else{
      this._noteService.getquestions((res)=>{
        this.questions = res;
      })
    }
  }

}
