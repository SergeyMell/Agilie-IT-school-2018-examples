import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShotItemComponent } from './shot-item/shot-item.component';
import {ShotsService} from './services/shots.service';


@NgModule({
  declarations: [
    AppComponent,
    ShotItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShotsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
