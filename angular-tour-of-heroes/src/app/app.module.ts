import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BetterStyleDirective } from './directive/better-style.directive';
import { ShowOrderComponent } from './show-order/show-order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { FormsModule } from '@angular/forms';
import { AddOrderServiceService } from './add-order-service/add-order-service.service';
import { OfferdServiceComponent } from './offerd-service/offerd-service.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const Approutes : Routes = [
   {path : '', component : HomeComponent},
   { path : 'service', component : OfferdServiceComponent},
   { path : 'contact', component : ContactInfoComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    BetterStyleDirective,
    ShowOrderComponent,
    AddOrderComponent,
    OfferdServiceComponent,
    ContactInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Approutes),
  ],
  providers: [AddOrderServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
