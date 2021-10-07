import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CourseListCompoment} from "./courses/course-list.compoment";
import {StarComponet} from "./star/star.componet";
import {CourseService} from "./courses/course.service";
import {ReplacePipe} from "./pipe/replace.pipe";
import {NavBarComponent} from './nav.bar/nav-bar.component';
import {RouterModule} from "@angular/router";
import { Error404ComponentComponent } from './error404-component/error404-component.component';
import { CourseInfoComponent } from './course-info/course-info.component';


@NgModule({
    declarations: [
        AppComponent,
        CourseListCompoment,
        StarComponet,
        ReplacePipe,
        NavBarComponent,
        Error404ComponentComponent,
        CourseInfoComponent

    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses',pathMatch: 'full'
      },
      {
        path: 'courses', component: CourseListCompoment
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '**' , component: Error404ComponentComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
