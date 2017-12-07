import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { NgModel, NgForm } from '@angular/forms';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable  } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { 
	var storageRef = firebase.storage().ref('/pups');
  }

  ngOnInit() {
  }

  uploadFile(){
  	var file = document.getElementById('fileUp');
  	var metadata = {
  		contentType: 'image/jpeg'
  	};
  	firebase.storage().ref('/pups').put(file, metadata);
  }
}
