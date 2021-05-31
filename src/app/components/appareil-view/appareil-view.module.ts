import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { AppareilModule } from '../appareil/appareil.module';
import { AppareilComponent } from '../../components/appareil/appareil.component';
import { AppareilViewComponent } from '../../components/appareil-view/appareil-view.component';

@NgModule({
  declarations: [
    AppareilViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AppareilModule
  ],
  exports: [
    AppareilViewComponent,
  ],
  providers: [],
  bootstrap: [AppareilViewComponent]
})
export class AppareilViewModule { }
