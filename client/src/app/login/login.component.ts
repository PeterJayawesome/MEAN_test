import { Component, OnInit } from '@angular/core';
import { NoteService } from './../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	name:String='';

  constructor(private _noteService:NoteService, private _router:Router) { }

  ngOnInit() {
    this._noteService.logout();
  }

  OnSubmit(){
  	this._noteService.login(this.name,(res)=>{
  		this._router.navigate(['/dashboard']);
  	})
  }

}
