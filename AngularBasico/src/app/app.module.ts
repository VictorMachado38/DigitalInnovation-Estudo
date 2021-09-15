import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CourseListCompoment} from "./courses/course-list.compoment";
import {StarComponet} from "./star/star.componet";
import {CourseService} from "./courses/course.service";

@NgModule({
  declarations: [
    AppComponent,
    CourseListCompoment,
    StarComponet

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
