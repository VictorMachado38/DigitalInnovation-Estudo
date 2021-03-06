import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CourseListCompoment} from "./courses/course-list.compoment";
import {StarComponet} from "./shared/component/star/star.componet";
import {CourseService} from "./courses/course.service";
import {ReplacePipe} from "./shared/pipe/replace.pipe";
import {NavBarComponent} from './core/component/nav.bar/nav-bar.component';
import {RouterModule} from "@angular/router";
import { Error404ComponentComponent } from './error404-component/error404-component.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { HttpClientModule } from "@angular/common/http";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CourseModule} from "./courses/course.module";
import {CoreModule} from "./core/component/core.module";


@NgModule({
    declarations: [
        AppComponent,
        //CourseListCompoment,
       // StarComponet,
       // ReplacePipe,
       // NavBarComponent,
        Error404ComponentComponent
        //CourseInfoComponent

    ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses',pathMatch: 'full'
      },
      {
        path: '**' , component: Error404ComponentComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
