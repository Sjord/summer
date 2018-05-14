import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {
  @Input() enteredNumber = "";
  @ViewChild('numberInput') numberInputElement: ElementRef;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  }

  onClick() {
    this.calculatorService.addNumber(+this.enteredNumber);
    this.enteredNumber = "";
    this.numberInputElement.nativeElement.focus();
  }

}
