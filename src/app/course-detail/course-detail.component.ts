import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Lesson } from './../shared/model/lesson';
import { Observable } from 'rxjs/Rx';
import { CoursesService } from './../shared/model/courses.service';

@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

lessons$ :Observable<Lesson[]>;
  constructor(
    private route:ActivatedRoute,
    private coursesService : CoursesService) { 


  }

  ngOnInit() {
    const courseUrl =this.route.snapshot.params['id'];
    this.coursesService.findAllLessonsForCourse(courseUrl);
  }

}
