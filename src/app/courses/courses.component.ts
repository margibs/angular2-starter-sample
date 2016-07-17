import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { AutoGrow } from '../auto-grow.directive';

@Component({
  moduleId: module.id,
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.css'],
  providers: [CourseService],
  directives: [AutoGrow]
})
export class CoursesComponent implements OnInit {
  title = "The title of courses page";
  courses: string[] = [];

  constructor(private courseService : CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

}
