import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NoteService {

  constructor(private _http:Http) { }

  getnotes(callback){
  	this._http.get('/allnotes').subscribe(
  		(res)=>{
  			console.log(res.json());
  			callback(res.json());
  		},
  		(err)=>{
  			console.log(err);
  		}
  	)
  }

  createnote(note,callback){
  	this._http.post('/notes',note).subscribe(
  		(res)=>{
  			console.log(res.json());
  			callback(res.json())
  		},
  		(err)=>{
  			console.log(err);
  		}
  	)
  }

}
