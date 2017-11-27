import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

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

  constructor() { }
	itemCount: number = 24; 
	  btnText: string= 'Add grateful thought';
	  goalText: string= "My first thought...";
	  goals = ['Be Positive', 'Cherish your loved ones', 'Chocolate'];
	  
	  ngOnInit() {

  	this.itemCount = this.goals.length;

}

  addItem(){
  	this.goals.push(this.goalText);
  	this.goalText = '';
  	this.itemCount = this.goals.length;
  }

  removeItem(i){
    this.goals.splice(i, 1);
  }

}
