import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-img",
  templateUrl: "./img.component.html",
  styleUrls: ["./img.component.css"]
})
export class ImgComponent implements OnInit {
  email = "dobrosynets400@gmail.com";
  onKeyUp() {
    console.log(this.email);
  }
  ngOnInit() {}
}
