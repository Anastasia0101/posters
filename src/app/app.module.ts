import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { PostersListComponent } from './components/posters-list/posters-list.component';
import { PosterComponent } from './components/poster/poster.component';

@NgModule({
  declarations: [
    AppComponent,
    PostersListComponent,
    PosterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
