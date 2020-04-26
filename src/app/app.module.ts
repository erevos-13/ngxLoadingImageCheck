import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxImageLoadingModule } from 'ngx-image-loading';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxImageLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
