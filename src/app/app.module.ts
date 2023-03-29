import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthPipe } from './shared/pipes/auth.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthPipe
    ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     RouterModule,
     FormsModule,
     ReactiveFormsModule
    ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
