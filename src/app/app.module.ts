import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdButtonModule, MdCardModule, MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FullpageDirective } from './shared/directives/fullpage.directive';
import { PageComponent } from './page/page.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentService } from './shared/services/content.service';

@NgModule({
  declarations: [
    AppComponent,
    FullpageDirective,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
