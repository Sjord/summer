import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aligned-number',
  templateUrl: './aligned-number.component.html',
  styleUrls: ['./aligned-number.component.css']
})
export class AlignedNumberComponent implements OnInit {

  @Input() number: number;

  constructor() { }

  ngOnInit() {
  }

  getIntegerPart() {
    return this.number.toString().split(".")[0];
  }

  getFractionalPart() {
    return this.number.toString().split(".")[1];
  }
}
