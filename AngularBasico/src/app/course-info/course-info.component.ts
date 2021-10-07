import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Course} from "../courses/course";
import {CourseService} from "../courses/course.service";

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css'],
})
export class CourseInfoComponent implements OnInit {

  course: Course | undefined;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {

  }

  //courseId!: number | null;
  //courseName!: string | null;


  //private var: teste;
  aux!: string | null;

  ngOnInit(): void {
      this.aux = this.activatedRoute.snapshot.paramMap.get('id');
    // var x = this.aux ;
     // @ts-ignore
//    var y: number = +x;

    this.course = this.courseService.retriveById(2);

      //this.courseName = this.activatedRoute.snapshot.paramMap.get('name');
  }


}
