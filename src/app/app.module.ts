import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TreniComponent } from './treni/treni.component';
import { LucicasaComponent } from './lucicasa/lucicasa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PartenzatreniPipe } from './pipes/partenzatreni.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TreniComponent,
    LucicasaComponent,
    PartenzatreniPipe
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
