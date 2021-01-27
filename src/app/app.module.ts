import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagrindinisComponent } from './pagrindinis/pagrindinis.component';
import { MokejimasComponent } from './mokejimas/mokejimas.component';
import { SarasasComponent } from './sarasas/sarasas.component';
import { EtiketeComponent } from './sarasas/etikete/etikete.component';

@NgModule({
  declarations: [
    AppComponent,
    PagrindinisComponent,
    MokejimasComponent,
    SarasasComponent,
    EtiketeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
