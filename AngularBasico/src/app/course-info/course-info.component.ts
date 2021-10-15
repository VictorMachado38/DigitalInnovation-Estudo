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

  course!: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {

  }

  //courseId!: number | null;
  //courseName!: string | null;


  //private var: teste;
  aux!: String | null;

  ngOnInit(): void {
      this.aux = this.activatedRoute.snapshot.paramMap.get('id');
    var p = parseInt(<string>this.aux);
      var g = parseFloat(<string>this.aux);
    var x = this.aux ;
    //this.course = this.courseService.retriveById(parseFloat(<string>this.activatedRoute.snapshot.paramMap.get('id')));
    this.courseService.retriveById(parseFloat(<string>this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)

    });

    //this.course = this.courseService.retriveById(this.activatedRoute.snapshot.paramMap.get('id'));

     // @ts-ignore
//    var y: number = +x;

  //  this.course = this.courseService.retriveById(2);

      //this.courseName = this.activatedRoute.snapshot.paramMap.get('name');
  }

  salvar(): void {
    this.courseService.save(this.course).subscribe({
      next: course => console.log('Salvo com sucesso, Saved with succcess',course),
      error: err => console.log('Error',err)
    });
    this.courseService.showMessage("Teoricamente está salvo",false)
    //this.courseService.showMessage('Cliente Salvo com sucesso!', false);
  }


}
