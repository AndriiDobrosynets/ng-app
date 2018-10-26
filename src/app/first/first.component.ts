import { Component, OnInit } from "@angular/core";
import { CoursesServiece } from "../courses.service";

@Component({
  selector: "app-first",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.css"]
})
export class FirstComponent implements OnInit {
  title = "first";
  courses;
  constructor(service: CoursesServiece) {
    this.courses = service.getCourses();
  }
  getTitle() {
    return this.title.toUpperCase();
  }

  ngOnInit() {}
}
