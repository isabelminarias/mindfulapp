import { Component, OnInit } from '@angular/core';
import { ThoughtsService } from './thoughts.service';
import { Thoughts } from './thoughts.model'
import { NgForm } from '@angular/forms';
import { AngularFireList } from 'angularfire2/database';




@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.component.html',
  styleUrls: ['./userhistory.component.scss'],
  providers: [ThoughtsService]
})
export class UserhistoryComponent implements OnInit {
	thoughtsList : AngularFireList<Thoughts>;

  constructor(private ThoughtsService : ThoughtsService) { }

  onSubmit(form: NgForm){
  	this.ThoughtsService.insertThought(form.value);
  	this.resetForm(form);
  }

  ngOnInit() {
  	this.ThoughtsService.getData()
  	this.resetForm();
  }

  resetForm(form? : NgForm){
  	if(form != null){
  	form.reset();
  	this.ThoughtsService.selectedThought = {
  		$key: '',
  		userid : 1,
  		sentence : 'default',
  		entrydate : 'Today',
  		img : 1
  	}
  	}
  }
}

//en constructor va private ThoughtsService : ThoughtsService pero si lo pongo, no me llama al componente?? 