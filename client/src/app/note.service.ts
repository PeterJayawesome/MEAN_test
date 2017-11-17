import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NoteService {
  
  name:String=""

  constructor(private _http:Http) { }

  login(name,callback){
    this.name = name;
    console.log("login success: ",this.name);
    callback(this.name);
  }

  logout(){
    this.name = '';
  }

  getquestions(callback){
    this._http.get('/quests').subscribe(
      (res)=>{
        console.log(res.json());
        callback(res.json());
      },
      (err)=>{
        console.log("ERR: ",err);
      }
    )
  }

  getquest(id,callback){
    this._http.get('quests/'+id).subscribe(
      (res)=>{
        console.log(res.json());
        callback(res.json())
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  createquestion(question,callback){
    this._http.post('/quests',question).subscribe(
      (res)=>{
        console.log(res.json());
        callback(res.json());
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  createAnswer(id,answer,callback){
    answer.name = this.name;
    this._http.post('/quests/'+id+'/answers',answer).subscribe(
      (res)=>{
        console.log(res.json());
        callback(res.json())
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  getQuestion(id,callback){
    this._http.get('/quests/'+id+'/answers').subscribe((res)=>{
      console.log(res.json());
      callback(res.json());
    },
    (err)=>{
      console.log(err);
    }
    )
  }

  like(id,callback){
    this._http.post('/answers/'+id+'/like',{like:1}).subscribe(
    (res)=>{
      console.log(res.json());
      callback(res.json());
    },
    (err)=>{
      console.log(err);
    }
    )
  }


  search(word,callback){
    this._http.get('/quests/search/'+word).subscribe(
      (res)=>{
        console.log(res.json());
        callback(res.json());
      },
      (err)=>{
        console.log(err);
      }
    )
  }

}
