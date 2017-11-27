import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  itemCount: number = 24; 
  btnText: string= 'Add Info';
  goalText: string= "My first thought...";
  goals: string [];
  ngOnInit() {

  	this.itemCount = this.goals.length;

  }

  addItem(){
  	this.goals.push(this.goalText);
  	this.goalText = '';
  	this.itemCount = this.goals.length;
  }

}
