import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-img-field",
  templateUrl: "./img-field.component.html"
})

export class ImgFieldComponent implements OnInit {
  public ngOnInit(): void {
    this.imgObj = { src: this.img };
  }

  @Input()
  img: string;

  public imgObj: any;

  @Output()
  imgChange = new EventEmitter<string>();
}
