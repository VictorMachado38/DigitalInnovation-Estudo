import {Course} from "./course";
import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class  CourseService {

  private coursesURL: String = 'http://localhost:3100/api/courses';

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar)
  {}

  retriveAll(): Observable<Course[]>{
    //return COURSES; esse aqui pega direto na classe
    // @ts-ignore
    return this.httpClient.get<Course[]>(this.coursesURL);
  }

  retriveAllConstade(): Course[]{
    return COURSES;// esse aqui pega direto na classe
    }

    retriveById(id: number): Observable<Course>{
      //return <Course>COURSES.find((courseInterator: Course) => courseInterator.id === id);
      return   this.httpClient.get<Course>(`${this.coursesURL}/${id}`);
  }


 /*
  retriveById(id: number | null): Course | undefined{
    return COURSES.find((courseInterator: Course) => courseInterator.id === id);
  }

    save(course: Course): void{
      if(course.id){
          const index = COURSES.findIndex((courseInterator: Course) => courseInterator.id === course.id);
          COURSES[index] = course;
      }
    }
*/
  save(course: Course): Observable<Course>{
    if(course.id){
    return this.httpClient.put<Course>(`${this.coursesURL}/${course.id}`, course);
    }
    else {
      return this.httpClient.post<Course>(`${this.coursesURL}`, course);
    }
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.coursesURL}/${id}`);
  }


  showMessage(msg: string, isError: boolean = false): void{
    this.snackbar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }


  Esperar(timer: number):void{

    async function init() {
      console.log(1);
      await sleep(10000000);
      console.log(2);
    }

    function sleep(ms: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
  }
}

var COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular: CLI',
    releaseDate: 'November 2, 2019',
    description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
    duration: 120,
    code: 'XLF-1212',
    rating: 3,
    price: 12.99,
    imageUrl: '/assets/images/cli.png',
  },
  {
    id: 2,
    name: 'Angular: Forms',
    releaseDate: 'November 4, 2019',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
    duration: 80,
    code: 'DWQ-3412',
    rating: 3.5,
    price: 24.99,
    imageUrl: '/assets/images/forms.png',
  },
  {
    id: 3,
    name: 'Angular: HTTP',
    releaseDate: 'November 8, 2019',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
    duration: 80,
    code: 'QPL-0913',
    rating: 4.0,
    price: 36.99,
    imageUrl: '/assets/images/http.png',
  },
  {
    id: 4,
    name: 'Angular: Router',
    releaseDate: 'November 16, 2019',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
    duration: 80,
    code: 'OHP-1095',
    rating: 4.5,
    price: 46.99,
    imageUrl: '/assets/images/router.png',
  },
  {
    id: 5,
    name: 'Angular: Animations',
    releaseDate: 'November 25, 2019',
    description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
    duration: 80,
    code: 'PWY-9381',
    rating: 5,
    price: 56.99,
    imageUrl: '/assets/images/animations.png',
  }
];
