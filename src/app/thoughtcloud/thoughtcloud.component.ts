import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { NgModel, NgForm } from '@angular/forms';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-thoughtcloud',
  templateUrl: './thoughtcloud.component.html',
  styleUrls: ['./thoughtcloud.component.scss'],
  animations: [
    trigger('goals', [

        transition('* => *', [

          query(':enter', style({opacity:0}), {optional:true}),

          query(':enter', stagger('300ms',[

            animate('.6s ease-in', keyframes([

              style({opacity:0, transform: 'translateY(75%)', offset:0}),
              style({opacity:0.5, transform: 'translateY(35px)', offset:.3}),
              style({opacity:1, transform: 'translateY(0)', offset:1}),

              ]))]), {optional:true}),

          query(':leave', stagger('300ms',[

            animate('.6s ease-in', keyframes([

              style({opacity:1, transform: 'translateY(0)', offset:0}),
              style({opacity:0.5, transform: 'translateY(35px)', offset:.3}),
              style({opacity:0, transform: 'translateY(-75%)', offset:1}),

              ]))]), {optional:true})




          ])



      ])

  ]
})
export class ThoughtcloudComponent implements OnInit {
  myList: FirebaseListObservable<any[]>;
  constructor(private af: AngularFireDatabase ) { }
	itemCount: number = 24;
	  btnText: string= 'Add grateful thought';
	  goalText: string= "My first thought...";
	  goals = [];
    listGoals = [];
    finalList = [];

	  ngOnInit() {
    this.getData();

}

  addItem(){
  	this.af.database.ref('/thoughts').push(this.goalText);
  	this.goalText = '';
  	this.itemCount = this.goals.length;

  }
  getData(){
    this.af.database.ref('/thoughts').limitToLast(3).on('child_added',(snapshot)=>{
      this.goals.push(snapshot.val())
    })
    this.af.database.ref('/thoughts').orderByKey().on('child_added',(snapshot)=>{
      this.listGoals.push(snapshot.val())
    })
    let random = this.listGoals.length - (this.listGoals.length -1);
    this.af.database.ref('/thoughts').startAt(2).limitToFirst(1).orderByValue().on('child_added',(snapshot)=>{
      this.finalList.push(snapshot.val())
    })
  }

  updateItem(i){


    this.goals.splice(i, 1);
  }

}
