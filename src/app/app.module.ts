import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private modalService: BsModalService) {
    this.setModalsDefaultConfig();
  }

  setModalsDefaultConfig() {
    this.modalService.config.ignoreBackdropClick = true;
    this.modalService.config.keyboard = false;
    this.modalService.config.class = 'modal-md';
    this.modalService.config.animated = false;
  }
}
