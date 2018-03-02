import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardDetailComponent } from './card-detail/card-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
