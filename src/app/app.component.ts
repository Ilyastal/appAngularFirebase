import { Component } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfire';
  courses: Observable<any[]>;
  constructor(db: AngularFireDatabase){

    this.courses = db.list('courses').valueChanges();
    console.log(this.courses);
    
  }
}
