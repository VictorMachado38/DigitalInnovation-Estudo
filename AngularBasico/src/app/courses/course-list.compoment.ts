import {Component, OnInit} from "@angular/core";
import {Course} from "./course";
import {CourseService} from "./course.service";

@Component({
  //selector: 'app-course-list',
  templateUrl: './course-list.html'

})
export class CourseListCompoment implements OnInit{

  filterCourses: Course[] = [];

  _couses: Course[] = [];

  _filterby!: string;


  constructor(private courseService: CourseService) {

  }

  ngOnInit(): void {
   // this._couses= this.courseService.retriveAll();
    //this.filterCourses = this._couses;
    this.retriveAll();
  }

  retriveAll(): void{

     this.courseService.retriveAll().subscribe({
       next: courses => {
         this._couses = courses;
         this.filterCourses = this._couses;
       },
       error: err => console.log('Error',err)
     });

  }

  set filter(value: string){
    this._filterby = value;

    this.filterCourses = this._couses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1)
  }

  get filter(){
      return this._filterby;
  }



}

