import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../app-routing.module';
import { AppareilViewModule } from '../appareil-view/appareil-view.module';
import { AppareilComponent } from './appareil.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppareilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AppareilViewModule,
    MatSliderModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    AppareilComponent,
  ],
  providers: [],
  bootstrap: [AppareilComponent]
})
export class AppareilModule { }
