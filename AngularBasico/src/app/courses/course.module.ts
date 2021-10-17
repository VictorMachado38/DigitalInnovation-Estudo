import {NgModule} from "@angular/core";
import {CourseInfoComponent} from "../course-info/course-info.component";
import {CourseListCompoment} from "./course-list.compoment";
import {Router, RouterModule} from "@angular/router";
import {Error404ComponentComponent} from "../error404-component/error404-component.component";
import {FormsModule} from "@angular/forms";
import {ReplacePipe} from "../pipe/replace.pipe";
import {CommonModule} from "@angular/common";
import {StarComponet} from "../star/star.componet";

@NgModule({
  declarations:[
    CourseListCompoment,
    CourseInfoComponent,
    ReplacePipe,
    StarComponet
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListCompoment
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      }
    ])
  ]
})
export class CourseModule{

}
