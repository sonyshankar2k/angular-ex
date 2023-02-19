import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemolibraryModule, DemolibraryService } from 'demolibrary';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemolibraryModule
  ],
  providers: [DemolibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
