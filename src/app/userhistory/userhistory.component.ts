import { Component, OnInit } from '@angular/core';
import { ThoughtsService } from './thoughts.service';
import { Thoughts } from './thoughts.model'
import { NgModel, NgForm } from '@angular/forms';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.component.html',
  styleUrls: ['./userhistory.component.scss'],
  providers: [ThoughtsService]
})
export class UserhistoryComponent implements OnInit {
	thoughtsList : AngularFireList<Thoughts>;
myList: FirebaseListObservable<any[]>;
  constructor(private af: AngularFireDatabase ) { 

  }

  dataPush(){
  	firebase.database().ref('/sentences').push()
  }
  ngOnInit() {
    this.myList = this.af.list('/todos');
  	//this.itemCount = this.goals.length;

      this.myList = this.af.list('/todos', {
    query: {
      limitToFirst: 3
    }
  });

}

  addTodo(value: string): void {
  this.myList.push({ content: value });
  }

}	

