import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-number-list',
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent implements OnInit {

  numbers: number[]

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.numbers = this.calculatorService.getNumbers();
  }

  splitNumbers() {
    return this.numbers.map(number => {
      let str = number.toString();
      return str.split(".");
    });
  }

}
