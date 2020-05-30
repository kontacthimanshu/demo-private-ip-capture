import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CapturePrivateIpModule} from 'capture-private-ip';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CapturePrivateIpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
