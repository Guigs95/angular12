import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';
import { BlogComponent } from './components/blog/blog.component';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import { PostListComponent } from './components/blog/component/post-list/post-list.component';
import { PostListItemComponent } from './components/blog/component/post-list-item/post-list-item.component';
import { AppareilComponent } from './components/appareil/appareil.component';
import { AppareilViewComponent } from './components/appareil-view/appareil-view.component';
// import { AppareilModule } from './components/appareil/appareil.module';
// import { AppareilViewModule } from './components/appareil-view/appareil-view.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
    PostListComponent,
    PostListItemComponent,
    AppareilComponent,
    AppareilViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatSliderModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    // AppareilViewModule,
    // AppareilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }