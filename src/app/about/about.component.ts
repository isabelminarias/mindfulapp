import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
  
})
export class AboutComponent implements OnInit {
	
	desc = [];
  constructor() {

  	this.desc = ['This app was designed to let you practice mindfulness in a very convenient way. ',
  	'Let your grateful thoughs of the day float in a cloud for a later, gloomy day. ',
  	'Add pictures that will bring a smile to your face when you need it!'
  ];
  }

  ngOnInit() {}

}
