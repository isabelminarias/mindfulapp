import { Injectable } from '@angular/core';
import { Thoughts } from './thoughts.model';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import { NgModel, NgForm } from '@angular/forms';


@Injectable()
export class ThoughtsService {
	thoughtList: AngularFireList<any>;
	selectedThought : Thoughts = new Thoughts()
  constructor(private firebase : AngularFireDatabase) { }

  getData(){
  	this.thoughtList = this.firebase.list('/Thoughts');
  	return this.thoughtList;
  }

  insertThought(thoughts: Thoughts){
  	this.thoughtList.push({
  		userid : thoughts.userid,
  		sentence : thoughts.sentence,
  		entrydate : thoughts.entrydate
  		
  	})

  	 
  }

  updateThought(tho : Thoughts){
     this.thoughtList.update(tho.$key,{
       name : tho.userid,
       sentence : tho.sentence,
       entrydate : tho.entrydate,
       img : tho.img
     })
  }

  deleteThought (key : string){
    this.thoughtList.remove(key);
  }
}
