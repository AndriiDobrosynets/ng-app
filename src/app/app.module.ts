import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FirstComponent } from "./first/first.component";
import { CoursesServiece } from "./courses.service";
import { ImgComponent } from "./img/img.component";
import { CourseComponent } from './course/course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, ImgComponent, CourseComponent, NavbarComponent, SidebarComponent, FooterComponent],
  imports: [BrowserModule, FormsModule],
  providers: [CoursesServiece],
  bootstrap: [AppComponent]
})
export class AppModule {}
