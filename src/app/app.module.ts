import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PrimeFormsComponent } from '../shared/prime-forms/prime-forms.component';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MopeButtonComponent } from '../shared/mope-button/mope-button.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { MopeLoginComponent } from './pages/mope-login/mope-login.component';
import { MopePanelComponent } from 'src/shared/mope-panel/mope-panel.component';

@NgModule({
  declarations: [AppComponent, PrimeFormsComponent, MopeButtonComponent, MopePanelComponent, MopeLoginComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //PrimeFormsComponent
    DropdownModule,
    SelectButtonModule,
    ButtonModule,
    PanelModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
