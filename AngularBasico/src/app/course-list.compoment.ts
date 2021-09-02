import {Component, OnInit} from "@angular/core";
import {Course} from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.html'

})
export class CourseListCompoment implements OnInit{

  couses: Course[] = [];

  ngOnInit(): void {
    this.couses = [
      {
          id: 1,
          name: 'Angular',
          imageUrl: '',
          price: 99.99,
          code: 'XPS-8784',
          duration: 120,
          rating: 5.7,
          releaseDate: 'Dezembro, 2,1999'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '',
        price: 44.44,
        code: 'DSW-7875',
        duration: 170,
        rating: 4,
        releaseDate: 'Abrir, 10, 2010'
      }

    ]
  }

}
