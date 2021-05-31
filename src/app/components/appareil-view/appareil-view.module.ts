import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../app-routing.module';
import { AppareilModule } from '../appareil/appareil.module';
import { AppareilViewComponent } from './appareil-view.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppareilViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AppareilModule,
    MatSliderModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    AppareilViewComponent,
  ],
  providers: [],
  bootstrap: [AppareilViewComponent]
})
export class AppareilViewModule { }
