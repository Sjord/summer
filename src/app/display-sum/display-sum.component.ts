import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-display-sum',
  templateUrl: './display-sum.component.html',
  styleUrls: ['./display-sum.component.css']
})
export class DisplaySumComponent implements OnInit {

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  }

}
