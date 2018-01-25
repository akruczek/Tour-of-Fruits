import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FruitService } from "./fruit.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    FruitDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [FruitService, MessageService],  //MessageService
  bootstrap: [AppComponent]
})
export class AppModule { }
