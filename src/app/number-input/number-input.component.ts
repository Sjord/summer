import { Component, OnInit, Input } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {
  @Input() enteredNumber = "";

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  }

  onClick() {
    this.calculatorService.addNumber(+this.enteredNumber);
    this.enteredNumber = "";
  }

}
