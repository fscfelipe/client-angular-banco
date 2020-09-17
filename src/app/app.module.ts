import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ListaContasComponent } from './lista-contas/lista-contas.component';

import { ContaService } from './conta.service';


@NgModule({
  declarations: [
    AppComponent,
    ListaContasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ContaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
