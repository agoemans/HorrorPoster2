import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MovieDetailComponent } from './movie-detail.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
