import { Observable } from 'rxjs/Rx';
import { Lesson } from './lesson';
import { AngularFireDatabase } from 'angularfire2/index';
import { Course } from './course';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  courses$:Observable<Course[]>;
  constructor(private db: AngularFireDatabase) {

   }

  findAllCourses (): Observable<Course[]>{
    return this.db.list('courses').map(Course.fromJsonArray);
  }

  findCourseByUrl(courseUrl:string):Observable<Course>{
    console.log(courseUrl);
   return this.db.list('courses',{
        query:{
          orderByChild:'url',
          equalTo:courseUrl
        }  
    }).map(results => results[0]);
  }

  findAllLessonsForCourse(courseUrl:string) : Observable<Lesson[]>{
    const course$ = this.findCourseByUrl(courseUrl);
    
    const lessonsPerCourse$ = course$
        .switchMap(course => this.db.list('lessonsPerCourse/' + course.$key));
       // .do(console.log);

  return lessonsPerCourse$.map(lspc => lspc.map(lpc => this.db.object('lessons/'+lpc.$key)))
        .flatMap(fbojs => Observable.combineLatest(fbojs));
  
  }
}
