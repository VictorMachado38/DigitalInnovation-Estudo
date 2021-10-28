import {NgModule} from "@angular/core";
import {CourseInfoComponent} from "../course-info/course-info.component";
import {CourseListCompoment} from "./course-list.compoment";
import {Router, RouterModule} from "@angular/router";
import {Error404ComponentComponent} from "../error404-component/error404-component.component";
import {FormsModule} from "@angular/forms";
import {ReplacePipe} from "../shared/pipe/replace.pipe";
import {CommonModule} from "@angular/common";
import {StarComponet} from "../shared/component/star/star.componet";
import {StarModule} from "../shared/component/star/star.module";
import {AppPipeModule} from "../shared/pipe/app-pipe.module";

@NgModule({
  declarations:[
    CourseListCompoment,
    CourseInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
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
export class CourseModule{ }
