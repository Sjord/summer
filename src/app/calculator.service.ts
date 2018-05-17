import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  numbers = [];

  constructor() { }

  getNumbers() : number[] {
    return this.numbers;
  }

  addNumber(number: number) {
    this.numbers.push(number);
  }

  getSum() : number {
    return this.numbers.reduce((acc, val) => acc + val, 0);
  }

  clearNumbers() {
    this.numbers.length = 0;
  }
}
