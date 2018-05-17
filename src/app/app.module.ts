import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NumberListComponent } from './number-list/number-list.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { DisplaySumComponent } from './display-sum/display-sum.component';
import { AlignedNumberComponent } from './aligned-number/aligned-number.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberListComponent,
    NumberInputComponent,
    DisplaySumComponent,
    AlignedNumberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
