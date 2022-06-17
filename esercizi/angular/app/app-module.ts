import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { ItemComponent } from './item/item.component';
import { ActivateComponent } from './activate/activate.component';
import { SeparatorComponent } from './separator/separator.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    ItemComponent,
    ActivateComponent,
    SeparatorComponent,
    NavbarItemComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
