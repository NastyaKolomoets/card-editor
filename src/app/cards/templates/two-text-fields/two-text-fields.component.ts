import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two-text-fields',
  templateUrl: './two-text-fields.component.html',
  styleUrls: ['./two-text-fields.component.css']
})

export class TwoTextFieldsComponent {
  @Input() imgUrl: string;
  @Input() imgPosition: string;
  @Input() firstText: string;
  @Input() secondText: string;
}
