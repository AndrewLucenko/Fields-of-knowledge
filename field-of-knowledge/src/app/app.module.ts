import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GameTemplateComponent} from "./game-template/game-template.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameTemplateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
