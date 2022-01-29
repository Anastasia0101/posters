import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { PostersListComponent } from './components/posters-list/posters-list.component';
import { PosterComponent } from './components/poster/poster.component';
import { PosterDialogComponent } from './components/poster-dialog/poster-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostersService } from './services/posters.service';

@NgModule({
  declarations: [
    AppComponent,
    PostersListComponent,
    PosterComponent,
    PosterDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    PostersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
