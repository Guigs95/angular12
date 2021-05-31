import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './posts.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostListItemComponent } from './component/post-list-item/post-list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CanvasDomModule } from 'angular-canvas';
import { GraphLineElement } from './model/class/graph-line-element';
import { CanvasComponent } from './component/canvas/canvas.component';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    PostsComponent,
    PostListComponent,
    PostListItemComponent,
    CanvasComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSliderModule,
    CanvasDomModule.forRoot(
      [
        GraphLineElement
      ])
    ],
  providers: [],
})
export class PostsModule { }
