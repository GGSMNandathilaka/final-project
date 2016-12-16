import { Component } from '@angular/core';
import {AngularFire} from "angularfire2/index";
import {firebaseConfig} from "../environments/firebase.config";
import {FirebaseListObservable} from 'angularfire2/index';
import{FirebaseObjectObservable} from 'angularfire2/index';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*title = 'app works!';

  courses$ :FirebaseListObservable <any> ;
  lesson$ :FirebaseObjectObservable <any> ;
  firstCourse :any;

  constructor(private af:AngularFire){
      
  this.courses$  = af.database.list('courses');

  this.courses$.subscribe(console.log);

  this.lesson$   = af.database.object('lessons/-KZ59uZTJw2rC88sySc7');

  this.lesson$.subscribe(console.log);

  this.courses$.map(courses => courses[0])
               .subscribe(
                 course => this.firstCourse = course
               );
    
  };

  listPush(){

    this.courses$.push({description:'Test new course'})
      .then(
        () => console.log('List push item'),
        console.error
      );

  };

  listRemove(){
    this.courses$.remove(this.firstCourse);
  };

  listUpdate(){
    this.courses$.update(this.firstCourse,{description:'updated description'})
  };

  objUpdate(){
    this.lesson$.update({description:'new description'});
  };

  objSet(){
    this.lesson$.set({description:'new description'});
  };

  objRemove(){
    this.lesson$.remove();
  };*/
}
