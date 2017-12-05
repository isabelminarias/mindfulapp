import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
		user = null;
  		topics: FirebaseListObservable<any[]>;
		constructor(private auth: AuthService, public db: AngularFireDatabase) { }
    		loginWithGoogle() {
  		}

  ngOnInit() {
  }

}
