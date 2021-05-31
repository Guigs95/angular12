import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';
import { AppareilViewModule } from '../appareil-view/appareil-view.module';
import { AppareilComponent } from '../../components/appareil/appareil.component';
import { AppareilViewComponent } from '../../components/appareil-view/appareil-view.component';

@NgModule({
  declarations: [
    AppareilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AppareilViewModule
  ],
  exports: [
    AppareilComponent,
  ],
  providers: [],
  bootstrap: [AppareilComponent]
})
export class AppareilModule { }
