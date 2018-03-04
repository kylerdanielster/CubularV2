import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardService } from './card.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// Will not need these later
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { CardSearchComponent } from './card-search/card-search.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CardSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    CardService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
