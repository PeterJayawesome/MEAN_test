import { Component, OnInit } from '@angular/core';
import { NoteService } from './../note.service';
import { Note } from './../note'
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
	
	note:Note = new Note();
	notes:[any];

  constructor(private _noteService:NoteService) { }

  ngOnInit() {
  	this._noteService.getnotes((res)=>{this.notes = res});
  }

  OnSubmit(){
  	this._noteService.createnote(this.note, (res)=>{this.notes = res;this.note = new Note()});
  }

}
